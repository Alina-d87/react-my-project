import { useState } from 'react';
import { Form, Field, ErrorMessage } from 'formik';

import { Label, ButtonNext, ButtonCancel } from "./ModalAddsPet.styled"
//input add styled

export const ModalStep1 = () => {
	const [isCloseModal, setIsCloseModal] = useState("true");
	const [isSecondStep, setIsSecondStep] = useState("false");
	
	const handelNextStep = () => {
		setIsSecondStep(true)
	}

	return (
		<Form>
			<Label>Name pet
				<Field name="name" type="text" placeholder="Type name pet" />
			</Label>
			<ErrorMessage name="name" />
			<Label>Date of birth
				<Field name="date" type="date" placeholder="Type date of birth" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" title="Date in the format dd/mm/yyyy" />
			</Label>
			<ErrorMessage name="date" />
			<Label>Breed
				<Field name="breed" type="text" placeholder="Type breed" />
			</Label>
			<ErrorMessage name="breed" />
			{/*//вихід з форми та очищення полів*/}
			<ButtonCancel onClick={() => { setIsCloseModal(true) }}>Cancel</ButtonCancel>
			{/*перехід на наступну сторінку по кнопці next*/}
			<ButtonNext type="button" onClick={ handelNextStep}>Next</ButtonNext>
		</Form>
	)
}