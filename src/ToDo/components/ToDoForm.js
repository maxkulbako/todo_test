import { useState } from 'react';

export function ToDoForm({ onAddItem }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  
  const addItemHandler = (e) => {
    e.preventDefault();
    
    if(!title) {
      setTitleError(true);
      return;
    }

    if(!description) {
      setDescriptionError(true);
      return;
    }

    onAddItem({ title, description });

    setTitle('');
    setDescription('');
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'title':
        setTitle(value);
        setTitleError(false);
        break;
      case 'description':
        setDescription(value);
        setDescriptionError(false);
        break;
      default:
        break;
    }
  }

  return (
    <form>
      <div className="form_input_wrapper">
        <input
          name='title'
          style={{ borderColor: titleError ? 'red' : null }}
          placeholder="Enter title"
          value={title}
          onChange={handleInputChange}
        />
        {titleError && <p style={{ color: 'red' }}>This field is empty</p>}
      </div>
      <div className="form_input_wrapper">
        <input
          name='description'
          style={{ borderColor: descriptionError ? 'red' : null }}
          placeholder="Enter description"
          value={description}
          onChange={handleInputChange}
        />
        {descriptionError && <p style={{ color: 'red' }}>This field is empty</p>}
      </div>
      <button
        onClick={addItemHandler}
      >
        create
      </button>
    </form>
  );
}