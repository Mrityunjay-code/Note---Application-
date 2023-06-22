import { MdDeleteForever, MdEdit } from 'react-icons/md';

const Note = ({ id, title, text, date, handleDeleteNote, handleEditNote }) => {
	return (
		<div className='note'>
			<h1>{title}</h1>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdEdit
					onClick={handleEditNote(id)}
					className='edit-icon'
					size='1.3em'
				/>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
