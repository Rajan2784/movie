import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'counter',
  initialState : {
    url:{},
    genres:{},
  },
  reducers: {
    getApiConfiguration:(state,action)=>{
        state.url = action.payload;
    },
    getGenres:(state,action)=>{
        state.genres = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres} = homeSlice.actions

export default homeSlice;