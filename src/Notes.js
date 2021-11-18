import React from "react";

const Notes =(props)=>{

  const deletenote =()=>{
    props.del(props.id);
  }  
 
  
  return (
        <>
        
          <div className="col-md-3 text-center my-4">
                    <div className="card cardclass" style={{width: "18rem",display:"inline-block"}}>
                       <div className="text-left" >
                      
                           <h5 >{props.title}</h5>
                           <p >{props.notes}</p>
                           </div>
                           <div className="text-right pr-2"> <i onClick={deletenote} className="fas fa-trash minus"></i></div>
                          

                        
                     </div>
          </div>
     
        
        </>
    )
}

export default Notes;