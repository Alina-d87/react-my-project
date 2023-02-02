import { useState } from "react"
import { Form, Field, ErrorMessage } from 'formik';
import { Label,TextModal, ButtonDone, ButtonBack } from "./ModalAddsPet.styled"

export const ModalStep2 = () => {
	const [isFirstStep, setIsFirstStep] = useState(true);
	const [isDone, setIsDone] = useState("false")

	const handelBackStep = () => {
		setIsFirstStep(true)
	}

	const handleSubmit = (e) => {
		if (Field === e.value) {
			setIsDone(true);
		}
		//send data server
	}

	return (
		<Form onSubmit={handleSubmit}>
			<TextModal>Add photo and some comments</TextModal>
			{/*//img add cart вместо инпута*/}
			<Field
				name="photo"
				type="file"
				placeholder="add photo pets">
			</Field>
			<ErrorMessage name="photo" />
			<Label>Comments
				<Field
					name="comments"
					type="text"
					placeholder="Type comments"
				width="394px">
				</Field>
			</Label>
			<ErrorMessage name="comments" />
				{/*//вихід з форми та очищення полів*/}
			<ButtonBack onClick={handelBackStep}>Back</ButtonBack>
			{/*перехід на наступну сторінку по кнопці next*/}
			<ButtonDone type="submit" onClick={ handleSubmit}>Done</ButtonDone>
		</Form>
	)
}