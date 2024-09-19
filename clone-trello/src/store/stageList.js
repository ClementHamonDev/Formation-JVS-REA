import { createSlice } from "@reduxjs/toolkit";

const stageList = createSlice({
  name: 'stageList',
  initialState: {
    stages: []
  },
  reducers: {
    addStage: (state, action) => {
      state.stages.push(action.payload);
    },
    addCard: (state, action) => {
      state.stages.forEach(stage => {
        if (stage.id === action.payload.parentId) {
          if (Object.hasOwn(stage, 'children')) {
            stage.children.push(action.payload);
          } else {
            stage.children = [action.payload];
          }
        }
      });
    },
    moveCardWithinStage: (state, action) => {
      const { cardId, sourceIndex, destinationIndex } = action.payload;

      // Find the card to move within the same list
      const list = state.stages.find(list => list.children.some(card => card.id == cardId));
      if (list) {
        const [movedCard] = list.children.splice(sourceIndex, 1);
        list.children.splice(destinationIndex, 0, movedCard);
      }
    },
    moveCardAcrossStages: (state, action) => {
      const { cardId, sourceListId, destinationListId, destinationIndex } = action.payload;

      // Find the source and destination lists
      const sourceList = state.stages.find(list => list.id == sourceListId);
      const destinationList = state.stages.find(list => list.id == destinationListId);

      if (sourceList && destinationList) {
        // Remove the card from the source list
        const [movedCard] = sourceList.children.filter(card => card.id == cardId);
        sourceList.children = sourceList.children.filter(card => card.id != cardId);

        // Add the card to the destination list at the specified index
        if (destinationIndex != undefined) {
          if(!destinationList.children) destinationList.children = [];
          destinationList.children.splice(destinationIndex, 0, movedCard);
        } else {
          destinationList.children.push(movedCard);
        }
      }
    },
  }
});

export const { addStage, addCard, moveCardWithinStage, moveCardAcrossStages } = stageList.actions;
export default stageList.reducer;