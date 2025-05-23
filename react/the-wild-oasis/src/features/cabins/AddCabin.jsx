import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';
import { useState } from 'react';
function AddCabin(){
  return <Modal>
    <Modal.Open opens="cabin-form">
      <Button>Add New Cabin</Button>
    </Modal.Open>
    <Modal.Window name="cabin-form">
      <CreateCabinForm/>
      </Modal.Window>
  </Modal>
}

// function AddCabin() {
//   const [isOpenModal,setIsOpenModal]=useState(false)
//   return (
//     <div>
//       <Button onClick={()=>setIsOpenModal(!isOpenModal)}>Add new Cabin</Button>
//       {isOpenModal&&<Modal onClose={()=>setIsOpenModal(false)}><CreateCabinForm onCloseModal={()=>setIsOpenModal(false)}/></Modal>}
//     </div>
//   );
// }

export default AddCabin;
