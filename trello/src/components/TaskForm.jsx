import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onAddTask({ title, description });
      setTitle('');
      setDescription('');
    } else {
      alert('Veuillez entrer un titre et une description');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 text-center text-base border-2 border-white rounded-lg p-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre"
        className="w-full  rounded-lg p-2 mb-2 text-black text-center"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full rounded-lg p-2 mb-2 text-black text-center"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Nouvelle tâche
      </button>
    </form>
  );
};

export default TaskForm;
