import React, {useState} from "react";
const Writenote=(props)=>{
     const [expand,setexpand] =useState(false);
     const [warning,setwarning] =useState(false);

     const [note, setnote] = useState(
    {
         title:"",
         notes:""
     });
     const setchange =(event)=>{
      const name =event.target.name;
      const value =event.target.value;
      
            setnote((oldvalue)=>{
             return {
                 ...oldvalue,
                 [name]:value
             }
         })
        }
 const change =()=>{
      if(note.title!=="" || note.notes!==""){
        props.passnotes(note);
        setnote({
                 title:'',
                 notes:''
              })
              setwarning(false)
      }else{
        setwarning(true)
      }
    }
 const settrue=()=>{
         setexpand(true);
     }
     const close=()=>{
        setexpand(false);
    }
   


  return(
            <>
            {warning?<h6 className="text-center my-3 warning"><i class="fas fa-exclamation-triangle"></i> You have not written anything.</h6>:null}
             
         <div className="box text-right">
        
         {expand?
         <>
         
         <p className='text-left text-grey start'>Start adding your notes</p>
             <input type="text" onChange={setchange} name="title" value={note.title} className="form-control inp"  placeholder="Title"/></>:null}<br/>
         <div className="form-floating">
             <textarea className="form-control" onClick={settrue} onChange={setchange} name="notes" value={note.notes} placeholder="Take a note..."></textarea>
         </div>
        
         <br/> 
         {expand?
         <i onClick={change} className="fas fa-plus plus"></i>
         :null}
         
         {expand?<div className="text-center"><i onClick={close} className="fas fa-angle-double-up"></i></div>:null    }  
         </div>
         
        
            </>
        )
    }

export default Writenote;