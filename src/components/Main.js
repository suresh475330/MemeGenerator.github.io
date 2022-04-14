import React,{useState ,useEffect} from 'react'

const Main = ()=>{
 
    const [meme,setmeme] = useState(
        {
            topText : '',
            bottomText : '',
            randomImg : "https://i.imgflip.com/1h7in3.jpg"
        }
    )
    const [allMemeImg,setAllMemeImg] = useState([])
     
     function getMemeImg(e){
        e.preventDefault()
        const  randomNum = Math.floor(Math.random() * allMemeImg.length )
        const url = allMemeImg[randomNum].url
        setmeme((item)=> ({
            ...item,
            randomImg : url
        }))
     }

     const ApiUrl =  ' https://api.imgflip.com/get_memes'

        useEffect(()=>{
            async function getData(){
                try {
              const response = await fetch(ApiUrl)
               const data = await response.json()
             setAllMemeImg(data.data.memes)
                } catch (error) {
                    console.log(error);
                }
             }
            getData()
        },[])
   
     function typeText(e){
         const {name,value} = e.target
        setmeme((oldValue)=>{
         return{
             ...oldValue,
             [name] : value
         }
        })
     }

    return(
        <main>
          <div className='form' >
          <input name='topText' type='text' onChange={typeText} placeholder='Top Text' value={meme.topText} />
          <input name='bottomText'  type='text' onChange={typeText} placeholder='Bottom Text' value={meme.bottomText} />
          <button  onClick={getMemeImg} >Get a new meme image  🖼</button>
           <img alt='meme' src={meme.randomImg}/> 
           <div className='text'>
           <h1 className='topText'>{meme.topText}</h1>
           <h1 className='bottomText'>{meme.bottomText}</h1>
           </div>
        </div>
        </main>
    )
}
export default Main