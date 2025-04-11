import styled from 'styled-components';
import {formatCurrency} from "../../utils/helpers"
import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';
import {HiDuplicate, HiPencil,HiTrash} from "react-icons/hi"
import { useCreateCabin } from './useCreateCabin';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete'
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
// v1
// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  /* transform: scale(1.66666) translateX(-2px); */
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const {isDeleting,deleteCabin}=useDeleteCabin()
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;
  const {isCreating,createCabin}=useCreateCabin()
  function handleDuplicate(){
    createCabin({
      name:`Copy of ${name}`,
      maxCapacity,regularPrice,discount,image,description
    })
  }
 return<>
  <Table.Row role='row'>
  <img src={image} alt='a luxurious cabin in the woods'/>
  <Cabin>{name}</Cabin>
  <div>fits upto {maxCapacity} guests</div>
  <Price>{formatCurrency(regularPrice)}</Price>
  {discount?<Discount>{formatCurrency(discount)}</Discount>:<span>&mdash;</span>}
  <div>
  <button disabled={isCreating} onClick={handleDuplicate}><HiDuplicate/></button>
  <Modal>
    <Modal.Open opens="edit">
  <button><HiPencil/></button>
    </Modal.Open>
    <Modal.Window name="edit">
    <CreateCabinForm cabinToEdit={cabin}/>
    </Modal.Window>

    <Modal.Open opens="delete">
      <button ><HiTrash/></button>
    </Modal.Open>
    <Modal.Window name="delete">
      <ConfirmDelete onConfirm={()=>deleteCabin(cabinId)} resourceName="cabins" disabled={isDeleting}/>
    </Modal.Window>
  </Modal>
  <Menus.Menu>
    <Menus.Toggle id={cabinId}/>
    <Menus.List id={cabinId}>
      <Menus.Button onClick={handleDuplicate} icon={<HiDuplicate/>}>Duplicate</Menus.Button>
      <Menus.Button icon={<HiPencil/>}>Edit</Menus.Button>
      <Menus.Button icon={<HiTrash/>}>Delete</Menus.Button>
    </Menus.List>
  </Menus.Menu>
  </div>
 </Table.Row>
  </>
}

export default CabinRow;
