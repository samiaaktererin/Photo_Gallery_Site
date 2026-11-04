import {createContext, useContext, useEffect, useState, } from "react";

const PhotoContext= createContext();//using to share data across the component tree without manually passing props down every single level
const API_URL= "https://jsonplaceholder.typicode.com/photos";

export const PhotoProvider=({children})=>{
    const [photos, setPhotos]= useState([]);//useState in React to persist data between component re-renders and to tell React when that data changes so it updates the UI.
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState("");

//useEffect()-Data Fetching, Subscriptions & Listeners,Manual DOM Manipulation, Resource Cleanup ; to synchronize your component with external systems and handle "side effects" that happen outside the standard React rendering flow
//fetching images

 useEffect(() => {
    const fetchPhotos= async()=>{
        try {
            setLoading(true);
            setError("");

            const response= await fetch(API_URL);
            if(!response.ok){
                throw new Error ("Failed to fetch photot");
            }

            const data= await response.json()//it is a lightweight, human-readable format for storing and exchanging data
            setPhotos(data.slice(0,100));//slice() method in JavaScript to extract a specific portion of an array or string and return it as a new entity, without modifying the original data.
        }
        catch(err){
            setError(err.message || "something went wrong");
        }
        finally{
            setLoading(false);
        }
        };
        fetchPhotos();
    },
        []);//The empty dependency array means the effect runs when the component mounts.
    
        return (
    <PhotoContext.Provider
      value={{
        photos,
        loading,
        error,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error("usePhotos must be used inside <PhotoProvider>");
  }
  return context;
};