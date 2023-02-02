import { useState } from "react"
import { createPortal} from 'react-dom';
import { Formik } from 'formik';
import * as Yup from "yup";
import { useMediaQuery } from 'react-responsive';
import { ModalStep1 } from "./ModalStep1"
import { ModalStep2 } from "./ModalStep2"
import { ModalOverlay, ModalContent, TitleModal, IconClose, Icon } from "./ModalAddsPet.styled"
import {close} from "../../img/close.png"

const modalRoot = document.getElementById("modal-root");

const SignupPetSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(16, 'Too Long!')
		.matches(/^([^0-9]*)$/, "Name should not contain numbers")
		.required('Name is required field'),
	date: Yup.date()
		.required('Date is required field'),
	breed: Yup.string()
		.min(2, 'Too Short!')
		.max(16, 'Too Long!')
		.required('Breed is required field'),
	comments: Yup.string()
		.min(8, 'Too Short!')
		.max(120, 'Too Long!')
		.required('Comments is required field'),
});


export const ModalAddsPet = () => {
	const [isFirstStep, setIsFirstStep] = useState(true);
	const [formValues, setFormValues] = useState({
		name: " ",
		date: " ",
		breed: " ",
		avatar: " ",
		comments: " ",
	})
	
	//const [isOpenModal, setIsOpenModal] = useState("false");
	const [isCloseModal, setIsCloseModal] = useState("true");

	const closeModal = () => {
		setIsCloseModal(false);
		reset();
	}

	const reset = () => {
		setFormValues({
			name: " ",
			date: " ",
			breed: " ",
			avatar: " ",
			comments: " ",
		})
	}

	const ModalClose = () => {
		return (
			<IconClose onClick={closeModal} type="button">
				<Icon src={close} alt="close-icon" />
			</IconClose>
		);
	};

	const isTablet = useMediaQuery({ minWidth: 768 });

	return createPortal(
		<ModalOverlay>
			<ModalContent>
			<TitleModal>Add pet</TitleModal>
			<ModalClose></ModalClose>
			<Formik
				initialValues={formValues}
				validationSchema={SignupPetSchema}
				onSubmit={values => { console.log(values) }}>
				style={isTablet}
				{isFirstStep ? <ModalStep1></ModalStep1> : <ModalStep2></ModalStep2>}
			</Formik>
			</ModalContent>
		</ModalOverlay>,
		modalRoot
	)	
}
