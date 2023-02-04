import { Form, Field, ErrorMessage } from 'formik';
import { Label, TextModal, InputComment, ButtonDone, ButtonBack } from "./ModalStep.styled"
import handleSubmit from "../ModalAddsPet";
import setFormValues from "../ModalAddsPet";



function ModalStepTwo() {
	const handleChange = (e) => {
        const { name, date, breed, avatar, comments, value } = e.target;
        setFormValues((prev) => {
            return {
                ...prev,
				[name]: value,
				[date]: value,
				[breed]: value,
				[avatar]: value,
				[comments]: value,
            }
        })
	}

	return (
		<Form onSubmit={handleSubmit}>
			<TextModal>Add photo and some comments</TextModal>
			{/*//img add cart вместо инпута*/}
			<div>
			<Field
				name="avatar"
				type="file"
				placeholder="add photo pets"
				onChange={handleChange}
				value={setFormValues.avatar}
			>
			</Field>
			</div>
			<ErrorMessage name="photo" />
			<Label>Comments
				<InputComment>
				<Field
					name="comments"
					type="text"
					placeholder="Type comments"
					onChange={handleChange}
					value={setFormValues.comments}
				>
				</Field>
				</InputComment>
			</Label>
			<ErrorMessage name="comments" />
				{/*//вихід з форми та очищення полів*/}
			<ButtonBack>Back</ButtonBack>
			{/*перехід на наступну сторінку по кнопці next*/}
			<ButtonDone type="submit" onClick={ handleSubmit}>Done</ButtonDone>
		</Form>
	)
}

export default ModalStepTwo;