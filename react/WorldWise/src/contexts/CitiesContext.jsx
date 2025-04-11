import { createContext, useCallback, useReducer } from "react";
import { useContext,useEffect } from "react";

const CitiesContext=createContext();
const BASE_URL='http://localhost:8000'

const initialState={
  cities:[],
  isLoading:false,
  currentCity:{},
  error:""
}

function reducer(state,action){

  switch(action.type){
    case 'loading':
      return {...state,isLoading:true}
    case 'city/loaded':
      return {
        ...state,isLoading:false,currentCity:action.payload
      }
    case 'cities/loaded':
      return {
        ...state,cities:action.payload,isLoading:false
      }

    case 'city/created':
      return {
        ...state,isLoading:false,cities:[...state.cities,action.payload],
        currentCity:action.payload
      }
      
    case 'city/deleted':
      
      return {
        ...state,isLoading:false,cities:state.cities.filter(city=>city.id!==action.payload),currentCity:{}
      }

    case 'rejected':
      return {...state,error:action.payload,isLoading:false}

    default:throw new Error('unknown action type')
  }

}


function CitiesProvider({children}){
    
    const [{cities,isLoading,currentCity,error},dispatch]=useReducer(reducer,initialState)
    useEffect(function(){
      async function fetchCities() {
        try {
         dispatch({type:"loading"})
          const res=await fetch(`${BASE_URL}/cities`)
        const data=await res.json()
        dispatch({type:"cities/loaded",payload:data})
        } catch (error) {
          dispatch({type:'rejected',payload:'There was an error fetching cities data'})
          console.error(error)
        }
        
      }
      fetchCities()
    },[])
    const getCity=useCallback( async function getCity(id){
     if(Number(id)===currentCity.id) return;
        try {
          dispatch({type:"loading"})
          const res=await fetch(`${BASE_URL}/cities/${id}`)
        const data=await res.json()
        dispatch({type:"city/loaded",payload:data})
        } catch (error) {
          dispatch({type:'rejected',payload:'There was an error getting city data'})
        }
      },[currentCity.id])
      async function createCity(newCity){
     
        try {
          dispatch({type:"loading"})
          const res=await fetch(`${BASE_URL}/cities`,{
            method:"POST",
            body:JSON.stringify(newCity),
            headers:{
              "Content-Type":"application/json",
            },
          })
          const data=await res.json()
        dispatch({type:"city/created",payload:data})
        } catch (error) {
          dispatch({type:'rejected',payload:'There was an error creating city'})
        }
        
      
    }
      async function deleteCity(id){
        try {
          dispatch({type:"loading"})
          await fetch(`${BASE_URL}/cities/${id}`,{
            method:"DELETE",
           
          })
        
        dispatch({type:"city/deleted",payload:id})
        } catch (error) {
          dispatch({type:'rejected',payload:'There was an error deleting city'})
        }
        
      
    }


    return <CitiesContext.Provider value={{cities,isLoading,currentCity,getCity,createCity,deleteCity,error}}>{children}</CitiesContext.Provider>
}
function useCities(){
    const context=useContext(CitiesContext)
    if(context===undefined) throw new Error('CitiesContext was used outside CitiesProvider')
    return context;
}


export {CitiesProvider,useCities}
