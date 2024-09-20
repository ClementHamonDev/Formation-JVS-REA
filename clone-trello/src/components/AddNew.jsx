import React, { useState } from 'react';
import { addStage, addCard } from '../store/stageList';
import { useDispatch } from 'react-redux';

export default function AddNew({ type, parentId }) {
  const [inputTitle, setInputTitle] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [cardDeadline, setCardDeadline] = useState(''); // Task deadline

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputTitle) return;

    if (type == 'card') {
      let cardInfo = { title: inputTitle, id: Date.now(), parentId };
      if (cardDeadline) {
        const dateObj = new Date(cardDeadline);

        if (!isNaN(dateObj.getTime())) {
          const day = dateObj.getDate();
          const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(dateObj);
          const formattedDate = `${day} ${month}`;
          cardInfo.deadline = formattedDate;
        }
      }
      

      const taskProgress = Math.floor(Math.random() * 100);
      cardInfo.taskProgress = taskProgress;
      dispatch(addCard(cardInfo));
    } else {
      dispatch(addStage({ title: inputTitle, id: Date.now() }));
    }
    hideForm();
    setInputTitle('');
    setCardDeadline('');
  };

  const updateInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const openForm = () => {
    setShowForm(true);
  }

  const hideForm = () => {
    setShowForm(false);
    setInputTitle('');
    setCardDeadline('');

  }

  const updateDeadline = (e) => {
    const inputDate = e.target.value;
    setCardDeadline(inputDate);
  }

  return (
    <div className="">
      <button onClick={openForm}>Add New {type == 'card' ? 'Card' : 'Column'} +</button>
      {showForm &&
        <form action="" onSubmit={submitHandler} className="mt-2" >
          <input type="text" value={inputTitle} onChange={updateInputTitle}
            placeholder={type == 'card' ? 'Enter Card Title' : 'Enter Column Title'}
            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg p-2.5 ${inputTitle.trim() === '' ? 'border-red-500' : 'border-gray-300'
              }`}
            required
          />
          {type == 'card' &&
            <>
              <p className='my-2'> <span>Task Deadline: </span>
                <input type='date' value={cardDeadline} onChange={updateDeadline}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 '
                ></input>
              </p>
            
            </>
          }

          <div className="mt-2">
            <button type='submit' onClick={submitHandler} className="m-2 bg-green-300 px-4 py-2 rounded-md" >Save</button>
            <button onClick={hideForm} className="" >Cancel</button>
          </div>
        </form>
      }
    </div>
  )
}