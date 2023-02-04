import { Form, Field, ErrorMessage } from 'formik';
import setFormValues from "../ModalAddsPet";

import { Label, Input, ButtonNext, ButtonCancel } from "./ModalStep.styled"

function ModalStepOne () {
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
		<Form>
			<Label>Name pet
				<Input>
				<Field
					name="name"
					type="text"
					placeholder="Type name pet"
					onChange={handleChange}
					value={setFormValues.name}
					/>
				</Input>
			</Label>
			<ErrorMessage name="name" />
			<Label>Date of birth
				<Input>
				<Field
					name="date"
					type="text"
					placeholder="Type date of birth"
					pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" title="Date in the format dd/mm/yyyy"
					onChange={handleChange}
					value={setFormValues.date}
				/>
				</Input>
			</Label>
			<ErrorMessage name="date" />
			<Label>Breed
				<Input>
				<Field
					name="breed"
					type="text"
					placeholder="Type breed"
					onChange={handleChange}
					value={setFormValues.breed}
				/>
				</Input>
			</Label>
			<ErrorMessage name="breed" />
			{/*//вихід з форми та очищення полів*/}
			<ButtonCancel>Cancel</ButtonCancel>
			{/*перехід на наступну сторінку по кнопці next*/}
			<ButtonNext type="submit">Next</ButtonNext>
		</Form>
	)
}

export default ModalStepOne;