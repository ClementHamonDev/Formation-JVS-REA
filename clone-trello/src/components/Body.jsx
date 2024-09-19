import { useDispatch, useSelector } from 'react-redux';
import AddNew from "./AddNew";
import Stage from "./Stage";
import { DragDropContext } from 'react-beautiful-dnd';
import { moveCardWithinStage, moveCardAcrossStages } from '../store/stageList';

export default function Body() {
  const stages = useSelector((state) => state.stageList.stages);

  const dispatch = useDispatch();
  const handleDragEnd = (result) => {

    const { source, destination, draggableId } = result;

    // If the drag is canceled or the card is dropped in the same position, do nothing
    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return;
    }

    // Determine if the drag is within the same stage or across different stages
    const sourceList = stages.find((stage) => stage.id.toString() === source.droppableId);
    const destinationList = stages.find((stage) => stage.id.toString() === destination.droppableId);

    if (sourceList && destinationList && sourceList === destinationList) {
      // Within the same stage, dispatch an action to move the card within the same stage
      dispatch(moveCardWithinStage({ cardId: draggableId, sourceIndex: source.index, destinationIndex: destination.index }));
    } else if (sourceList && destinationList) {
      // Across different stages, dispatch an action to move the card between stages
      dispatch(moveCardAcrossStages({ cardId: draggableId, sourceListId: source.droppableId, destinationListId: destination.droppableId, destinationIndex: destination.index }));
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className=" bg-blue-200  min-h-screen">
        <div className="flex flex-wrap items-stretch">
          {stages.map((stage, index) => (
            <Stage key={stage.id} stage={stage} index={index} />
          ))}
        </div>

        <div className="p-3 bg-gray-200 max-[550px]:w-10/12 max-[800px]:w-6/12 w-4/12 text-center mx-auto rounded-lg">
          <AddNew type="stage" />
        </div>
      </div>
    </DragDropContext>
  )
}