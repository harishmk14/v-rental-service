import React from 'react';
import './styles.css'; 
import pro from './img/12345.jpg'

const Profile = () => {
  return (
    <div style={{display:"flex",backgroundColor:"#f4f4f4",width:"96rem",height:"88.9vh"}}>
    <div style={{display:"flex",width:"29.6rem",height:"88.9vh"}}>
        <div style={{display:"flex",flexDirection:"column", backgroundColor:"white",width:"28rem",height:"82vh",margin:"25px 0px 25px 25px", borderRadius:"10px",boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)'}}>
        <div style={{display:"flex", width:"28rem",height:"auto",justifyContent:"center",marginTop:"3rem"}}>
          <img style={{width:"15rem",height:"15rem",borderRadius:"55%",boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)'}}  src={pro} alt="Avatar"/>
          </div>
          <div style={{display:"flex", width:"28rem",height:"auto",justifyContent:"center",marginTop:"2rem"}}>
          <button style={{width:"8rem",padding:"10px",border:"none", borderRadius:"6px",backgroundColor:"#132b75",color:"white", cursor:"pointer"}}>Upload Photo</button>
          </div>
        </div>
    </div>
    <div style={{display:"flex",width:"66rem",height:"88.9vh"}}>
        <div style={{display:"flex", flexDirection:"column" ,backgroundColor:"white",width:"63rem",height:"82vh",margin:"25px 25px 25px 25px", borderRadius:"10px",boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)'}}>
           <div style={{display:"flex",justifyContent:"center"}}>
            <h2 style={{color:"#132b75"}}>Admin Information</h2>
           </div>
        </div>    
    </div>
    </div>
  );
};

export default Profile;
