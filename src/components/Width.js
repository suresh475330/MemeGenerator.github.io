import React,{useEffect,useState} from "react";
import Navbar from "./Navbar";


function Width(){

    const [show,setShow] = useState(true)

    const [size,setSize] = useState({
        width :  window.innerWidth,
        height :  window.innerHeight
    })
    
    useEffect(()=>{

        function setting(){
            setSize((oldValue)=>{
                return{
                   ...oldValue,
                   width : window.innerWidth,
                   height : window.innerHeight
                }
            })
        }
        window.addEventListener('resize',setting)

        return ()=> window.removeEventListener(setting())
    },[])
    

    return( 
        <div>
            <Navbar />
           <div style={{padding:'1em' ,border:'1px solid black', margin:'3rem', display:'grid',placeItems:'center',gap:'1rem'}}>
           <button style={{color:'red',padding:'1em'}} onClick={()=> setShow(!show)}>togle width height</button>
         { show && <p> windows width : {size.width}</p>}
         { show && <p> windows height : {size.height}</p>}
           </div>
         
         </div>

         
    )
       
         
}

export default Width