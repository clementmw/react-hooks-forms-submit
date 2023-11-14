import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submitData, setSubmitData] = useState([])

  function handleSubmit (e) {
    e.preventDefault();
    const formData = {firstName:firstName, lastName: lastName}
    const dataArray = [...submitData, formData]
    setSubmitData(dataArray)
    setFirstName('');
    setLastName('');
  }
  const listOfSubmissions = submitData.map ((data,index)=>{
    return(
     <div key = {index}> 
      {data.firstName} {data.lastName}
     </div>
)
  })



  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h1>Submissions</h1>
    {listOfSubmissions}
    </>
  );

}

export default Form;
