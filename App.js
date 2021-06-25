import logo from './logo.svg';
import React ,{useState}from 'react';

import './App.css';
import react from 'react';
// import react from 'react';

const App =() => {
const [firstname,setfirstname]= useState(" ")
const [lastname,setlastname]= useState(" ")
const [dob,setdate]= useState(" ")
const [email,setemail]= useState(" ")
const [cellno,setphoneno]= useState(" ")
const [option,setoption]= useState(" ")

const [malegender,setmale]= useState(false)
const [femalegender,setfemale]= useState(true)
const [resume,setresume]= useState(" ")
const [box,setcheckbox]= useState(false)











  const submit=(e)=>{
    e.preventDefault();
    alert("above registration is completed")
    const dataform={
      fname:firstname,
      lname:lastname,
      sdate:dob,
      gmail:email,
      no:cellno,
      mle:malegender,
      options:option,
      fmle:femalegender,
      rmue:resume,
      checkbox:box
    }
    console.log(dataform);
  }
  return (
    <react.StrictMode>
      <h1>regesitration form</h1>
      <form onSubmit={submit}>
      <label>Name</label>
      <input type="text" placeholder="first name" onChange={(e)=>{setfirstname(e.target.value)}}/>
      <input type="text" placeholder="last name" onChange={(e)=>{setlastname(e.target.value)}}/>
      <br></br>

      <label>date of birth</label>
      <input type="date" onChange={(e)=>{setdate(e.target.value)}} />
      <br></br>

      <label>Email</label>
      <input type="email" placeholder="example@gmail.com" onChange={(e)=>{setemail(e.target.value)}} />
      <br></br>

      <label>phone no</label>
      <input type="tel" placeholder="10 digit" onChange={(e)=>{setphoneno(e.target.value)}} />
      <br></br>

      <label>Gender</label>
      <input type="radio"  onClick={(e)=>{setmale(true)}} /><span>male</span>
      <input type="radio"  onClick={(e)=>{setfemale(false)}} /><span>female</span>

      <br></br>
<label>Gender</label>
<select onClick={(e)=>{setoption(e.target.value)}}>
        <option>BE</option>
        <option>Bsc</option>
      </select>
      <br></br>
      <label>Experience</label>
      <select>
        <option>Fresher</option>
        <option>0-2yrs</option>
      </select>
      <br>
      </br>
      <label>Resume</label>
      <input type="file" onChange={(e)=>{setresume(e.target.value)}}/>
      <br></br>
      <input type="checkbox" onClick={(e)=>{setcheckbox(true)}}/><span>I declare above information are true</span>
      <br></br>
      
      <button type="submit" class="btn btn-default">Submit</button>
      
      </form>
      </react.StrictMode>
    
  );
}

export default App;
