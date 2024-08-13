// src/components/Customers.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from './Slice/customerSlice';

const Customers = () => {
  const dispatch = useDispatch();
  const { customers, status, error } = useSelector((state) => state.customers);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCustomers());
    }
  }, [dispatch, status]);

  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    content = (
      <div style={{display:"flex", backgroundColor:"#f4f4f4",width:"100%",minHeight:"100%"}}>
        <div style={{display:"flex",flexDirection:"column",backgroundColor:"white",margin:"2rem",width:"92rem",height:"79.5vh",borderRadius:"10px",border:"1px solid #132b75 "}}>
          <div style={{display:"flex",width:"92rem",height:"3.5rem", borderRadius:"10px 10px 0 0",borderBottom:"1px solid #132b75 "}}>
            <div style={{display:"flex",width:"4rem",justifyContent:"center",alignItems:"center"}}><p className='sam'>S.No</p></div>
            <div style={{display:"flex",width:"10rem",justifyContent:"center",alignItems:"center"}}><p className='sam'>First Name</p></div>
            <div style={{display:"flex",width:"10rem",justifyContent:"center",alignItems:"center"}}><p className='sam'>Last Name</p></div>
            <div style={{display:"flex",width:"10rem",justifyContent:"center",alignItems:"center"}}><p className='sam'>Gender</p></div>
            <div style={{display:"flex",width:"5rem",justifyContent:"center",alignItems:"center"}}><p className='sam'>Age</p></div>
            <div style={{display:"flex",width:"13rem",justifyContent:"center",alignItems:"center"}}><p className='sam'>Mobile No</p></div>
            <div style={{display:"flex",width:"16rem",justifyContent:"center",alignItems:"center"}}><p className='sam'>Email</p></div>
            <div style={{display:"flex",width:"24rem",justifyContent:"center",alignItems:"center"}}><p className='sam'>Address</p></div>
          </div>
          <div style={{display:"flex",flexDirection:"column",width:"92rem",height:"50rem",overflowY:"scroll"}}>

            {customers.map((customer, index) => (
              <React.Fragment key={customer.id}>
                <div style={{display:"flex"}}>
                <div style={{display:"flex",width:"4rem",justifyContent:"center",alignItems:"center"}}><p>{index + 1}</p></div>
                <div style={{display:"flex",width:"10rem",justifyContent:"center",alignItems:"center"}}><p>{customer.fName}</p></div>
                <div style={{display:"flex",width:"10rem",justifyContent:"center",alignItems:"center"}}><p>{customer.lName}</p></div>
                <div style={{display:"flex",width:"10rem",justifyContent:"center",alignItems:"center"}}><p>{customer.gender}</p></div>
                <div style={{display:"flex",width:"5rem",justifyContent:"center",alignItems:"center"}}><p>{customer.age}</p></div>
                <div style={{display:"flex",width:"13rem",justifyContent:"center",alignItems:"center"}}><p>{customer.mobile}</p></div>
                <div style={{display:"flex",width:"16rem",justifyContent:"center",alignItems:"center"}}><p>{customer.email}</p></div>
                <div style={{display:"flex",width:"24rem",justifyContent:"center",alignItems:"center"}}><p>{customer.address}</p></div>
                </div>
                <div style={{display:"flex",width:"88.9rem",borderBottom:"1px solid #c2c5d0 ",margin:"0px 1rem 0px 1rem"}}></div>
              </React.Fragment>
            ))}

          </div>
        </div>
      </div>
    );
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return content;
};

export default Customers;
