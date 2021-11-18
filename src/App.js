import './App.css';
import Header from './Header';
import Footer from './Footer';
import "./maincss.css";
import Writenote from './Writenote.js';
import Notes from './Notes';
import React,{useState,useEffect} from 'react';



function App() {
  const [mode ,setmode] =useState('light');
const [mainNote,setnotes] =useState(()=>{
  var localdata =localStorage.getItem('mainNote');
  return localdata?JSON.parse(localdata):[];
});

  const getnotes=(note)=>{
  
   if(note.title!=null && note.notes!=null){
    setnotes((prevalue)=>{
      return [...prevalue,note];
    })
   }
  
 
  }
  const deletethis =(id)=>{
    setnotes((oldItems)=>
      oldItems.filter((val,ind)=>{
        return ind!==id;
      })
    )
  }
  const clicktochange =()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      document.title='TEXTUTILS - Dark Mode';
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.title='TEXTUTILS - Light Mode';
     }
   };
  useEffect(()=>{
    localStorage.setItem('mainNote',JSON.stringify(mainNote));
 },[mainNote]);

  return (
    <>
<Header mode ={mode} change={clicktochange}/>
  
 
   <Writenote passnotes ={getnotes}/>
   <div className="row">
   {mainNote.map((val,index)=>{
      return <Notes key={index} title ={val.title} id={index} notes={val.notes} del={deletethis}/>
   })}
   </div>
   <Footer/>


  
</>
  );
}

export default App;
