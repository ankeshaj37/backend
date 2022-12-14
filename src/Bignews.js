import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { db } from './firebase'
import Navbar from './Navbar'

const Bignews = () => {
  const [get, setGet] = useState([])

  console.log(get);

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')

  useEffect(() => {
    db.collection('bignews').onSnapshot((tap) => (
      setGet(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
    ))

  }, [])

  const add = () => {
    db.collection("bignews").add({ title:title,image:image,video:video})
    setTitle("")
    setImage("")
    setVideo("")
  };

  const delt = (uid) => {
    db.collection('bignews').doc(uid).delete()
    console.log(uid);
  }

  return (
    <>
      <Navbar />
     <Dashboard/>
      <div className='ddd'>
      <h1>Big News</h1>
        <div className='boxx'>
        <label>BIG TITLE</label>
          <div>
            
          <input type='text'placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <label>BIG IMAGE</label>
          <div>
          <input type='text' placeholder='Enter Image url'  value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            <label>BIG VIDEO</label>
            <div>
            <input type='text'placeholder='Enter Video url' value={video} onChange={(e) => setVideo(e.target.value)} />
            </div><br/>
          <button onClick={add}>Add</button>
        </div>
        

       <div className='bigadd col-lg-12 '>
       
       {get.map((e,i) => (
            <> 
           
             <div className='adddiv col-lg-3'>
              <p>{i+1}</p>
             <div> <p>{e.uid}</p></div>
            <div><p>title : {e.data.title}</p></div>
            <div>image : <img  className='imageadd' src= {e.data.image} /></div>
      
            <div > video : <video  className='videooo' width="320" height="240" controls>
                <source src={e.data.video} type="video/mp4" />
              </video></div>
          
             <div className='butadd'><button onClick={() => delt(e.uid)}>delete</button></div>
             </div>
            </>
          ))}
       </div>
          
        </div>

      
    </>

  )
}

export default Bignews