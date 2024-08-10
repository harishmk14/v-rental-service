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
            <h1 style={{color:"#132b75"}}>User Information</h1>
           </div>
           <div style={{display:"flex"}}>
             <div className='mine'> 
                <label className='upc'>First Name</label>
                <label className='upc'>Last Name</label>
                <label className='upc'>Age</label>
                <label className='upc'>Gender</label>
                <label className='upc'>Mobile</label>
                <label className='upc'>Email</label>
                <label className='upc'>Address</label>
                <label className='upc'>Password</label>
             </div> 
             <div className='mine'>
             <span className='upcc'>Harish</span>
             <span className='upcc'>Mohan</span>
             <span className='upcc'>21</span>
             <span className='upcc'>Male</span>
             <span className='upcc'>9345450700</span>
             <span className='upcc'>harrismk142003@gmail.com</span>
             <span className='upcc'>no 19 , ist cross ganapathy nagar , karaikal , 609602</span>
             <span className='upcc'>123456789</span>
             </div>
           </div>
        </div>    
    </div>
    </div>
  );
};

export default Profile;
