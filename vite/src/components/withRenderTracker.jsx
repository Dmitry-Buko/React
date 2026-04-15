import { useEffect, useRef } from "react";

export function withRenderTracker (WrappedComponent, conponentName) {
  
  function TrackerComponent (props){
    const tracker = useRef(0)
    tracker.current += 1

    useEffect(()=>{
      console.log(`Компонент ${conponentName} рендерился ${tracker.current} раз` );
    })

    return <WrappedComponent {...props}/>
  }

  return TrackerComponent
}
