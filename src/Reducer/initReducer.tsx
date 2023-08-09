
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    initAdded(state: any, action: PayloadAction<any>) {
        const obejct: any = {
            id: action?.payload?.id,
            text: action.payload.text,
            completed: false
        }
      state.push(obejct)
    },
    initToggled(state: any, action: PayloadAction<any>) {
      const todo = state.find((todo: { id: any }) => todo.id === action.payload)
      todo.completed = !todo.completed
    }
  }
})

export const { initAdded, initToggled } = initSlice.actions
export default initSlice.reducer
