//import {useState} from 'react';
//import { createPortal} from 'react-dom';
//import { NameModal, NameInput, Input, Button} from './Modal.styled';

//const modalRoot = document.getElementById("modal-root");
//export const ButtonModal = () => {
//	return (
//		<div>
//<Button>OpenModal</Button>
//		</div>
//	)
//}
//export const Modal = () => {
//	//const [isOpenModal, setIsOpenModal] = useState("false");
//	//const [isCloseModal, setIsCloseModal] = useState("true");

	
//		//const { children } = this.props;//this delete
//	return createPortal(
//			<div>
				
//				{/*<Button type='button' onClick={() => setIsOpenModal(true)}>OpenModal</Button>*/}
//				<NameModal>Add pet</NameModal>
//				{/*<span onClick={() => setIsCloseModal(false)}><svg>icon close</svg></span>*/}
//				{/*{children}*/}
//				<form>
//					<NameInput>Name pet
//						<Input type="text" placeholder="Type name pet"></Input>
//					</NameInput>
//					<NameInput>Date of birth
//						<Input type="text" placeholder="Type date of birth"></Input>
//					</NameInput>
//					<NameInput>Breed
//						<Input type="text" placeholder="Type breed"></Input>
//					</NameInput>
//					<button>Next</button>
//					<button>Cancel</button>
//				</form>

//			</div>
//		)
//}


//// 2 page open modall addPets
//const ModalAddPetsPageTwo = () => {
//	return (
//		<ModalAddPetsPageTwo>
//			<NameModal>Add pet</NameModal>
//			<svg>icon close</svg>
//			<TextModal>Add photo and some comments</TextModal>
//			<img src="#" alt="add photo pets"></img>
//					<NameInput>Comments
//					<InputComment placeholder="Type comments"></InputComment>
//				</NameInput>
//				<ButtonNext>Next</ButtonNext>
//				<ButtonCancel>Cancel</ButtonCancel>
//		</ModalAddPetsPageTwo>
//	)
//}

//const ModalAddsPe = () => {
//	const [isOpenModal, setIsOpenModal] = useState("false");
//	const [isCloseModal, setIsCloseModal] = useState("true");
	

//	return (
//		<Modal 
//		isOpen={isOpenModal}
//		//onAfterClose={}
//		onRequestClose={setIsCloseModal}
//		//style={}
//		contentLabel="AddPetsModal"
//		>
//		<ModalAddPets>
			
//			<ModalAddPetsPageTwo />
//			</ModalAddPets>
			
//		</Modal>
//	)
//}
