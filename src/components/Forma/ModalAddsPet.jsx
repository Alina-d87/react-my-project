import ModalForm from "./ModalForm";
import { useState, useEffect } from "react";
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import * as Yup from "yup";
import { useMediaQuery } from 'react-responsive';
import ModalStepOne  from "./ModalStep/ModalStepOne"
import ModalStepTwo from "./ModalStep/ModalStepTwo"
import { addPet } from  "../../redux/user/pets/petOperations";
import { fetchPets } from "services/API/API";
import { ModalOverlay, TitleModal, IconClose, Icon } from "./ModalAddsPet.styled";
import close from "../../img/close.png"

const modalRoot = document.getElementById("modal-root");

//.toISOString() применить к дате

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


function ModalAddsPet() {
	const [isStep, setIsStep] = useState(0);
	const [formValues, setFormValues] = useState({
		name: " ",
		date: " ",
		breed: " ",
		avatar: " ",
		comments: " ",
	})

	const [isCloseModal, setIsCloseModal] = useState("true");

	const navigate = useNavigate();

	const handleNextStep = async (newFormValues, final = false) => {
		setFormValues(prev => ({ ...prev, ...newFormValues }));

		if (final) {
			try {
				await dispatch(addPet(newFormValues));
				navigate('user/pets');
			}
			catch (error) {
				toast.error(error);
			}
			return;
		}
		setIsStep(prev => prev +1)
	}

	const handleBackStep = (newFormValues) => {
		setFormValues(prev => ({ ...prev, ...newFormValues }));
		setIsStep(prev => prev - 1);
	}

	const steps = [
		<ModalStepOne next={handleNextStep} formValues={formValues} />,
		<ModalStepTwo next={handleNextStep} prev={handleBackStep} formValues={formValues} />
	];

	// куда передаем loading and error????
	//{isLoading && !error&& <b> Request in progress...</b>}
	//const isLoading = useSelector(getIsLoading);
	//const error = useSelector(getError);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPets());
	}, [dispatch])

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

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormValues((prev) => {
			return {
				...prev
			}
		});
		const form = e.target;
		dispatch(addPet(e.target.elements.text.value));
		form.reset();
	}

	const ModalClose = () => {
		return (
			<IconClose type="button" onClick={closeModal} >
				<Icon src={close} alt="close-icon" />
			</IconClose>
		);
	};

	const isTablet = useMediaQuery({ minWidth: 768 });

	return createPortal(
		<ModalOverlay>
			<ModalForm>
			<TitleModal>Add pet</TitleModal>
			<ModalClose></ModalClose>
			<Formik
				initialValues={formValues}
				validationSchema={SignupPetSchema}
				onSubmit={handleSubmit}
				style={isTablet}>
				{isStep ? <ModalStepOne></ModalStepOne> : <ModalStepTwo></ModalStepTwo>}
				</Formik>
				{steps[isStep]}
			</ModalForm>
		</ModalOverlay>,
		modalRoot
	)	
}

export default ModalAddsPet;
