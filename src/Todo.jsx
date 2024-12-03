
import "./Todo.css"
import { MdDelete, MdUTurnRight } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid"
import { CiUndo } from "react-icons/ci";
import { RxLetterCaseUppercase } from "react-icons/rx";
import { RxLetterCaseLowercase } from "react-icons/rx";
    
    
    
function Todo(){

        const [arr,setArr]=useState([{task:"Example Task One"
            ,index:uuidv4(),
            isDone:false,isUpper:false}])
        const [inptext,setInpText]=useState()
       
         
function updatevalue(event){

            setInpText(event.target.value)
            console.log(inptext)
}
function AddArr(){

    
    if(inptext.length!=0){
        setArr([...arr,{task:inptext,index:uuidv4(),isDone:false,isUpper:false}])
        setInpText("")
        
    }
    else{
        alert("Please enter the task first")
    }

    

}







function deleteObj(id){
    setArr(  arr.filter((ar)=>{
       return ar.index!==id
    }) )
}
function markAsDone(id){

 setArr(   arr.map( (ar)=>{
    
    if(ar.index==id){
        return {...ar,isDone:true } 
    }
    else{
        return ar
    }
 })  )
 const obj=arr.find((ar)=>{
   return ar.index===id;
 })
    console.log(obj.task)
   alert(`Great job! 🎉 On Completing your Work:- ${obj.task}`)

    }
function markAsUndone(id){
        setArr(   arr.map( (ar)=>{
    
            if(ar.index==id){
                return {...ar,isDone:false } 
            }
            else{
                return ar
            }
         })  )
    }
    function  updateOneUpp(id){
        
        return setArr((prevarr)=>{
             
             return  prevarr.map((ar)=>{
             if(id===ar.index) {
                 return   {...ar,task:ar.task.toUpperCase(),isUpper:true} 
               
             }
             else{
                 return ar
             }
     
         
          })
             }
            
         )
      
     }
   function  updateOnelow(id){

    return setArr((prevarr)=>{
             
        return  prevarr.map((ar)=>{
        if(id===ar.index) {
            return   {...ar,task:ar.task.toLowerCase(),isUpper:false} 
          
        }
        else{
            return ar
        }

    
     })
        }
       
    )

}
return(
        <div className="container" >
        <div className="main-cont"> 
    <div className="title">   <h1> Todo List using REACT</h1> </div>   
 
      <div className="inputcontainer"> 
      <input type="text" placeholder="Enter the task" className="inputText" value={inptext} onChange={updatevalue}/>
      <button  className="addbtn" onClick={AddArr}> Add</button>
      </div> 
         



                 <div className="arrcontainer">

         {arr.map((ar)=>(
             <li className="arrlist" key={ar.index} style={{textDecoration:ar.isDone?"line-through":""}} >
             <div className="task">  {ar.task}</div>



            <div className="buttons">

            <button className="markAsDone" onClick={()=>{
                 if(ar.isDone==false) {return  markAsDone(ar.index)}
                  else { return markAsUndone(ar.index)}} }>
                 {ar.isDone==false?  <IoCheckmarkDoneSharp />: <CiUndo />}
                  </button> 



             <button className="delete" onClick={()=> deleteObj(ar.index)}><MdDelete /></button>

              <button className="edit" onClick={()=> {if(ar.isUpper==false) { return updateOneUpp(ar.index) } else { return updateOnelow(ar.index) }}}> {ar.isUpper?<RxLetterCaseLowercase />: <RxLetterCaseUppercase />}  </button>
            </div>


             </li>
           
         ))}
          </div>
          </div>
        </div>
    )


}
export {Todo}