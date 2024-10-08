import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdminData } from './Slice/adminSlice';
import './styles.css'; 
import pro from './img/12345.jpg';

const Profile = () => {
  const dispatch = useDispatch();
  const { admin, loading, error } = useSelector((state) => state.admin);

  useEffect(() => {
    const adminId =  localStorage.getItem('loggedInAdminId');
    dispatch(fetchAdminData(adminId));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{display:"flex",backgroundColor:"#f4f4f4",width:"96rem",height:"88.9vh"}}>
      <div style={{display:"flex",width:"29.6rem",height:"88.9vh"}}>
        <div style={{display:"flex",flexDirection:"column", backgroundColor:"white",width:"28rem",height:"82vh",margin:"25px 0px 25px 25px", borderRadius:"10px",boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)'}}>
          <div style={{display:"flex", width:"28rem",height:"auto",justifyContent:"center",marginTop:"3rem"}}>
            <img style={{width:"15rem",height:"15rem",borderRadius:"55%",boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)'}} src={pro} alt="Avatar"/>
          </div>
          <div style={{display:"flex", width:"28rem",height:"auto",justifyContent:"center",marginTop:"2rem"}}>
            <button style={{width:"8rem",padding:"10px",border:"none", borderRadius:"6px",backgroundColor:"#132b75",color:"white", cursor:"pointer"}}>Upload Photo</button>
          </div>
        </div>
      </div>
      <div style={{display:"flex",width:"66rem",height:"88.9vh"}}>
        <div style={{display:"flex", flexDirection:"column" ,backgroundColor:"white",width:"63rem",height:"82vh",margin:"25px 25px 25px 25px", borderRadius:"10px",boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)'}}>
            <div style={{display:"flex",justifyContent:"center",width:"55rem"}}>
              <h1 style={{color:"#132b75"}}>Admin Information</h1>
            </div>
          <div style={{display:"flex",marginTop:"25px"}}>
            <div className='mine'> 
              <label className='upc'>Company Name</label>
              <label className='upc'>Admin Name</label>
              <label className='upc'>Contact No</label>
              <label className='upc'>Email ID</label>
              <label className='upc'>Location</label>
              <label className='upc'>Admin ID</label>
              <label className='upc'>Password</label>
            </div> 
            <div className='mine'>
              <span className='upcc'>{admin?.companyName}</span>
              <span className='upcc'>{admin?.ownerName}</span>
              <span className='upcc'>{admin?.contactNO}</span>
              <span className='upcc'>{admin?.email}</span>
              <span className='upcc'>{admin?.location}</span>
              <span className='upcc'>{admin?.adminId}</span>
              <span className='upcc'>{admin?.password}</span>
            </div>
          </div>
        </div>    
      </div>
    </div>
  );
};

export default Profile;
