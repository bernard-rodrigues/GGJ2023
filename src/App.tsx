import { useEffect, useState } from "react";
import { InGame } from "./pages/InGame";

export function App() {
  
  const [ screen, setSecreen ] = useState(adjustScreen())
  
  function adjustScreen(){
    if(innerWidth/innerHeight >= 16/9){
      return {
        height: innerHeight,
        width: innerHeight*(16/9)
      }
    }else{
      return {
        height: innerWidth*(9/16),
        width: innerWidth
      }
    }
  }
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      setSecreen(adjustScreen())
    })
  }, [])
  
  return (
    <div
      className="relative overflow-hidden left-1/2 -translate-x-1/2 border-2 border-[#28160d]"
      style={{
        height: screen.height,
        width: screen.width,
        marginTop: (window.innerHeight - screen.height)/2
      }}
    >
      <InGame />
    </div>
  )
}
