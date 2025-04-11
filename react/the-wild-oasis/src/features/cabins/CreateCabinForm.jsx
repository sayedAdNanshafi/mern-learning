import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import {Textarea} from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";



function CreateCabinForm({cabinToEdit={},onCloseModal}) {
  const {createCabin,isCreating}=useCreateCabin()
  const {editCabin,isEditing}=useEditCabin()
  const isWorking=isCreating||isEditing

  const {id:editId,...editValue}=cabinToEdit
  const isEditSession=Boolean(editId)
  const {register,handleSubmit,reset,getValues,formState}=useForm({
    defaultValues:isEditSession?editValue:{}
  })
  const {errors}=formState
  
  
  function onSubmit(data){
    const image=typeof data.image==="string"?data.image:data.image[0]
    if(isEditSession) editCabin({newCabinData:{...data,image},id:editId},{
      onSuccess:(data)=>{
        reset()
        onCloseModal?.()
      }
      })
      else createCabin({...data,image},{
    onSuccess:(data)=>{
      reset()
      onCloseModal?.()
    }
    })
  }
  function onError(errors){
    // console.log(errors)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit,onError)} type={onCloseModal?"modal":"regular"}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input disabled={isWorking} type="text" id="name" {...register('name',{required:"This Field is required"})}/>
      </FormRow>

      <FormRow label="Maximum Capacity" error={errors?.maxCapacity?.message}>
       
        <Input disabled={isWorking} type="number" id="maxCapacity" {...register("maxCapacity",{required:"This Field is required",min:{value:1,message:"Capacity should be atleast 1"}})}/>
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        
        <Input disabled={isWorking} type="number" id="regularPrice" {...register("regularPrice",{required:"This Field is required",min:{value:1,message:"Capacity should be atleast 1"}})}/>
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        
        <Input disabled={isWorking} type="number" id="discount" defaultValue={0} {...register("discount",{required:"This Field is required",validate:value=>value<=getValues().regularPrice||'Discount should be less than regular price'})}/>
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        
        <Textarea disabled={isWorking} type="number" id="description" defaultValue="" {...register("description",{required:"This Field is required"})}/>
      </FormRow>

      <FormRow label="Image">
        
        <FileInput id="image" accept="image/*"  {...register("image",{required:isEditSession?false:"This field is required"})}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={()=>onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession?"Edit Cabin":"Add Cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
