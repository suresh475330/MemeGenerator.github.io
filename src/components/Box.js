import React,{useState} from 'react'
import Navbar from './Navbar'


function Box(){

    const [formData,setFormData] = useState({
         email:'',
         password:'',
         confirmPassword:'',
         newStudent : false
    })

    function handleChange(event){
       const {name,value,type,checked} = event.target
       setFormData((oldValue)=>{
           return{
               ...oldValue,
               [name] : type === "checkbox" ? checked : value
           }
       })
    }

    function formSumit(e){
     e.preventDefault()
     if(formData.email,formData.password,formData.confirmPassword === '' && formData.newStudent === false){
         alert('plz fill the form');
     }
      else if(formData.password === formData.confirmPassword){
         console.log(formData);
     } else{
         alert('password was incrroct');
         return
     }
     if(formData.newStudent){
         alert(" your a new student");
     }
     
    }


    return(
        <div>
            <Navbar />
             <div>
            <h1 className='title-f' style={{color:'skyblue',textAlign:'center'}}>Welcome to my from page</h1>
            <div style={{padding:'1em',border:'1px solid #919191',margin:'1em'}}>
        <form className='ui form' onSubmit={formSumit} >
            
            <input className='field error' type='email' placeholder='enter your email'
             name='email' value={formData.email} onChange={handleChange}
            />
            <input  type='password' placeholder='enter your password'
            name='password' value={formData.password} onChange={handleChange}
            />
            <input type='password' placeHolder='confirm password'
            name='confirmPassword' value={formData.confirmPassword} onChange={handleChange}
            />
            <div className='ui checkbox'>
            <input id='okTo' type='checkbox'
            name='newStudent' checked={formData.newStudent} onChange={handleChange}
            />
            <label htmlFor='okTo'>i am the new student</label>
            </div>
            <button className='"ui submit button'>Submit</button>
        </form>
        </div>
        </div>
        </div>
       
       
    )
}

export default Box