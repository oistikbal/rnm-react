import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {getCharacters, getEpisodes, getLocations} from "./store/RnMSlice"
import CharacterSection from "./components/CharacterSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


export default function App() {
  const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getCharacters())
    dispatch(getEpisodes())
    dispatch(getLocations())
},[])

  return (
    <CharacterSection></CharacterSection>
  );
}