import React from 'react'

function ReceiveMessage({message}) {
  return (
 
   <div className="d-flex flex-row m-4 justify-content-end ">
   <div className="p-3 me-3 border" style={{borderRadius: '15px', backgroundColor: "#fbfbfb"}}>
     <p className="small mb-0">{message}</p>
   </div>
   <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
     alt="avatar 1" style={{width: "45px" ,height: '100%'}}/>
 </div>
)
}

export default ReceiveMessage