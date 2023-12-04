import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favorites: [],
}

export const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers:{
        setFavorite: (state, action) =>{
            state.favorites = {...state.favorites, ...action.payload}
            console.log(state.favorites)
        },
    },
})  

export const {setFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;