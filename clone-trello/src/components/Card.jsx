import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { AiOutlineClockCircle, AiOutlineBars } from 'react-icons/ai';

export default function Card({ cardInfo, index }) {

  return (
    <Draggable draggableId={cardInfo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className="draggable-card bg-white p-2 m-2 shadow-md rounded-md"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {cardInfo.addBackgroundImage && (
            <div className='w-full h-32 relative my-2'>
              <img src={cardInfo.backgroundImage} alt="" className='w-full h-full object-cover rounded-md' />
            </div>
          )}
          <div className="bg-white h-3 w-full rounded-full my-1">
            <div className="bg-teal-500 h-full rounded-full "
              style={{ width: `${cardInfo.taskProgress}%` }}
            ></div>
          </div>
          <p className="text-xl">{cardInfo.title}</p>

          <div className="flex items-center justify-between p-2 ">
            <div className="flex space-x-4">
              <span >
                <AiOutlineClockCircle className='mr-3  text-gray-800' />
                {cardInfo.deadline && cardInfo.deadline}
              </span>
              <span>
                <AiOutlineBars className='text-gray-800' />
              </span>
            </div>
          </div>

        </div>
      )}
    </Draggable>
  );
}