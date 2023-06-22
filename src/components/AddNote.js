import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const [title, setTitle] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};
	const handleTitleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setTitle(event.target.value);
		}
	}

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(title,noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note new'>

			<textarea
				rows='1'
				cols='10'
				placeholder='Type the Title...'
				value={title}
				onChange={handleTitleChange}
			></textarea>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
