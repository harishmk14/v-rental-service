import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ManageVehicle = () => {

  const location = useLocation();
  const initialStatus = location.state?.status || 'Add Vehicle';
  const [status, setStatus] = useState(initialStatus);



  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  useEffect(() => {
    if (location.state?.status) {
      setStatus(location.state.status);
    }
  }, [location.state]);

  return (
    <div style={{display:"flex"}}>
      <div className="managev_sidebar" style={{boxShadow:"0 1px 6px 0 rgba(0, 0, 0, 0.2)"}}>
        <div>
          <h1 style={{ textAlign: "center", color: "#132b75" }}>Manage Vehicle</h1>
        </div>
        <div className='verticalbar'>
          <ul>
            <li className={status === 'Add Vehicle' ? 'active' : ''} onClick={() => handleStatusChange('Add Vehicle')}><span>Add Vehicle</span></li>
            <li className={status === 'Update Vehicle' ? 'active' : ''} onClick={() => handleStatusChange('Update Vehicle')}><span>Update Vehicle</span></li>
            <li className={status === 'Delete Vehicle' ? 'active' : ''} onClick={() => handleStatusChange('Delete Vehicle')}><span>Delete Vehicle</span></li>
          </ul>
        </div>
      </div>
      <div className="managev_cards">
        <div style={{display:"flex",width:"74.7rem",justifyContent:"end",backgroundColor:"#f4f4f4",position:"fixed",zIndex:"1",overflow:"auto",marginLeft:"10px"}}>
          <div style={{display:"flex",height:"3rem", width:"3rem", backgroundColor:"#132b75", borderRadius:"10px",boxShadow:"0 1px 6px 0 rgba(0, 0, 0, 0.2)",margin: "15px 5px 7.5px 0",alignItems:"center",justifyContent:"center"}}>
            <PlusIcon color="white" size={28} style={{cursor:"pointer"}}/>
          </div>
        </div>

        <div style={{display:"flex",flexDirection:"column", justifyContent:"center",margin: "5rem 0 0 15px"}}>
          <div style={{display:"flex",height:"15.5rem", width:"74rem", backgroundColor:"white", borderRadius:"10px",boxShadow:"0 1px 6px 0 rgba(0, 0, 0, 0.2)",marginBottom:"15px"}}>        </div>
          <div style={{display:"flex",height:"15.5rem", width:"74rem", backgroundColor:"white", borderRadius:"10px",boxShadow:"0 1px 6px 0 rgba(0, 0, 0, 0.2)",marginBottom:"15px"}}>        </div>
          <div style={{display:"flex",height:"15.5rem", width:"74rem", backgroundColor:"white", borderRadius:"10px",boxShadow:"0 1px 6px 0 rgba(0, 0, 0, 0.2)",marginBottom:"15px"}}>        </div>
          <div style={{display:"flex",height:"15.5rem", width:"74rem", backgroundColor:"white", borderRadius:"10px",boxShadow:"0 1px 6px 0 rgba(0, 0, 0, 0.2)",marginBottom:"15px"}}>        </div>
          <div style={{display:"flex",height:"15.5rem", width:"74rem", backgroundColor:"white", borderRadius:"10px",boxShadow:"0 1px 6px 0 rgba(0, 0, 0, 0.2)",marginBottom:"15px"}}>        </div>
        </div>
      </div>
    </div>
  );
};
export default ManageVehicle;
