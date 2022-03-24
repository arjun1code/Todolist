  
 import '../index.css'  
 import React, { useEffect, useState } from 'react'
 const localItem = () => {
   const list = localStorage.getItem('list')
   if (list) {
     return JSON.parse(localStorage.getItem("list"))
   } else {
     return []
   }
 }
 const Home = () => {
   const [addData, setAddData] = useState(localItem())
   const [editTogeler, seteditTogeler] = useState(true)
   const [editId, seTeditId] = useState(null)
   const [inputData, setInputData] = useState({
     title: '',
     description: '',
     date_time: '',
     status: '',
     prioritiy: ''
   })
 
   useEffect(() => {
     localStorage.setItem('list', JSON.stringify(addData))
   }, [addData])
 
   // inputHandler
   const inputHandler = (e) => {
     const { name, value } = e.target
     setInputData({ ...inputData, [name]: value })
   }
 
   //  addHandler
   const addHandler = () => {
     const { title, description, date_time, status, prioritiy } = inputData
     if (inputData && !editTogeler) {
       // edit functionality
 
       setAddData(
         addData.map((elm) => {
           console.log(elm)
           if (elm.id === editId) {
             return { ...elm, title, description, date_time, status, prioritiy, id: editId }
           }
           return { ...elm }
         })
       )
 
       setInputData({ title: '', description: '', date_time: '', status: '', prioritiy: '' })
       seteditTogeler(true)
       seTeditId(null)
     } else if (inputData === title, description, date_time, status, prioritiy) {
       const Recored = { ...inputData, id: new Date().getMilliseconds().toString() }
       setAddData([...addData, Recored])
       setInputData({ title: '', description: '', date_time: '', status: '', prioritiy: '' })
       seteditTogeler(true)
     } else {
       alert('nh')
     }
   }
 
   // editHandler
   const editHandler = (id) => {
     const EditData = addData.find((editElement) => {
       return editElement.id == id
     })
     setInputData(EditData)
     seteditTogeler(false)
     seTeditId(id)
   }
   // deleteHandler functionlity
   const deleteHandler = (id) => {
     console.log(id)
     const remove = addData.filter((removeElement) => {
       return removeElement.id !== id;
     })
     setAddData(remove)
   }
 
 
 
   // submitHandelar
 
   const submitHandelar = (e) => {
     e.preventDefault()
   }
 
 
   // reset button
 
   const reset=()=>{
     setInputData({ title: '', description: '', date_time: '', status: '', prioritiy: '' })
 
   }
 
 
   return (
     <>
       <form action="" onSubmit={submitHandelar}>
         <div className="first">
           <div className="second">
             <h2 style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>TODO LIST</h2>
             <label htmlFor=" titele" >Title</label>
             <div> <input type="text" name='title' value={inputData.title} onChange={inputHandler} id="titele" /></div>
 
             <label htmlFor=" titele" >Description</label>
             <div> <input type="text" name='description' value={inputData.description} onChange={inputHandler} id="titele" /></div>
 
             <label htmlFor=" titele" >Date_Time</label>
             <div> <input type="datetime-local" name='date_time' value={inputData.date_time} id="titele" onChange={inputHandler} /></div>
 
             <label htmlFor=" titele" >Status</label>
             <div> <input type="text" name='status' value={inputData.status} onChange={inputHandler} id="titele" /></div>
 
             <label htmlFor=" titele" >Prioritiy</label>
             <div> <input type="text" name='prioritiy' value={inputData.prioritiy} onChange={inputHandler} id="titele" /></div>
              <span><button onClick={reset}>Reset</button></span>
             {
               editTogeler ?  <span><button onClick={addHandler}>Add_List</button> </span> 
                 : <span ><button onClick={addHandler} style={{ backgroundColor: 'green', color: 'white' }}><i className="fa-solid fa-pen-to-square"  ></i></button> </span>
             }
           </div>
         </div>
       </form >
       {
         addData.length > 0 ? <div className="first">
           <div className="secondTable">
             <table>
               <thead>
                 <tr>
                   <th>Id</th>
                   <th>Title</th>
                   <th>Description</th>
                   <th>Date_Time</th>
                   <th>Status</th>
                   <th>Prioritiy</th>
                   <th>Edit</th>
                   <th>Delete</th>
                 </tr>
               </thead>
               <tbody>
                 {
                   addData.map((element, i) => {
                     return (
                       <tr key={element.id} style={{ backgroundColor: 'green', color: 'white', fontWeight: 'bold' }}>
                         <td>{i + 1}</td>
                         <td>{element.title}</td>
                         <td>{element.description}</td>
                         <td>{element.date_time}</td>
                         <td>{element.status}</td>
                         <td>{element.prioritiy}</td>
                         <td><i className="fa-solid fa-pen-to-square" onClick={() => editHandler(element.id)} ></i></td>
                         <td><i className="fa-solid fa-trash-can" onClick={() => deleteHandler(element.id)}></i></td>
                       </tr>
                     )
                   })
                 }
               </tbody>
             </table>
             {/* all data remove handler */}
             {
               addData.length > 1 ? <button className='btn' onClick={() => setAddData('')}>AllRemove</button> : null
             }
           </div>
         </div> : null
       }
     </>
   )
 }
 
 export default Home
  