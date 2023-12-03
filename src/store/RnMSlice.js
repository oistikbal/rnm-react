import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    characters : [],
    episodes : [],
    locations : [],
    completed : false
}

const rnmCompleted = () => {return (initialState.characters.lenght != 0 && initialState.episodes.lenght != 0 && initialState.locations.lenght != 0)}

export const getCharacters = createAsyncThunk("rnm/getCharacters", async() => {
    const response  = await axios.get("https://rickandmortyapi.com/api/character")
    return response.data;
})

export const getEpisodes = createAsyncThunk("rnm/getEpisodes", async() => {
    const response = await axios.get("https://rickandmortyapi.com/api/episode")
    return response.data;
})

export const getLocations = createAsyncThunk("rnm/getLocations", async() => {
    const response = await axios.get("https://rickandmortyapi.com/api/location")
    return response.data;
})

export const rnmSlice = createSlice({
    name: "rnm",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getCharacters.fulfilled, (state,action)=>{
            state.characters = action.payload
            if(rnmCompleted)
                state.completed = true
        })
        builder.addCase(getEpisodes.fulfilled, (state,action)=>{
            state.episodes = action.payload
            if(rnmCompleted)
                state.completed = true
        })
        builder.addCase(getLocations.fulfilled, (state,action)=>{
            state.locations = action.payload
            if(rnmCompleted)
                state.completed = true
        });
    },
})

export default rnmSlice.reducer

/*

*/