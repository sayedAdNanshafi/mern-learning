import { useEffect } from "react"
import { useRef } from "react"

export function useOutsideClick(handler){
    const ref=useRef()
      function handleClick(e){
        if(ref.current&&!ref.current.contains(e.target)) handler()
          console.log(ref.current)
      }
      useEffect(function(){
        document.addEventListener('click',handleClick,true)
        return ()=>document.removeEventListener("click",handleClick,true)
      },[])
      return ref
}