 import React, {useState} from 'react'
 
 const TextForm = (props) => {

 const changHandler= ()=> {
     let newText = text.toUpperCase()
    //  console.log(newText);
    setText(newText)

 }

 const changOnHandler= (event)=> {
    // console.log("change text");
     setText(event.target.value)
    
 }
 let changHandler1 = ()=>{
    let newText1 = text.toLowerCase()
    //  console.log(newText);
    setText(newText1)

 }

 let changHandler2 =()=>{
    let newText2 = ""
  
    //  console.log(newText);
    setText(newText2 )
 }




 const removeSpace= () => {
 let text = document.getElementById("exampleFormControlTextarea1").value;
 navigator.clipboard.writeText(text)

 }

//  const selectText = ()=> {
//    let newText1 = split([ ]);
//    (newText1.join(" "));
//  }
 const [text, setText] = useState("")

   return (
     <><div>
        <h1>{props.heading}</h1>
     
  

<div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={changOnHandler}></textarea>
</div>
<button className='btn btn-primary '  onClick={changHandler}>Change UpperCase</button>
<button className='btn btn-warning mx-3' onClick={changHandler1}>Change LowreCase</button>
<button className='btn btn-primary' onClick={changHandler2} >Clear Text</button>
<button className='btn btn-primary mx-3'  >select Text</button>
<button className='btn btn-primary' onClick={removeSpace} >remove Space</button>
  
     </div>
     <div className='container m-3'>
        <p>{text.split(" ").length} Words and {text.length} Characters </p>

     </div>
     </>
   )
 }
 
 export default TextForm
 