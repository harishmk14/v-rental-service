import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from './Vehiclemodal';
const ManageVehicle = () => {
  const location = useLocation();
  const initialStatus = location.state?.status || 'Add Vehicle';
  const [status, setStatus] = useState(initialStatus);
  const [showModal, setShowModal] = useState(false);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  useEffect(() => {
    if (location.state?.status) {
      setStatus(location.state.status);
    }
  }, [location.state]);

  const handleplusClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="managev_sidebar" style={{ boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)" }}>
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
        <div style={{ display: "flex", width: "74.7rem", justifyContent: "end", backgroundColor: "#f4f4f4", position: "fixed", zIndex: "1", overflow: "auto", marginLeft: "10px" }}>
          <div style={{ display: "flex", height: "3rem", width: "3rem", backgroundColor: "#132b75", borderRadius: "10px", boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)", margin: "15px 5px 7.5px 0", alignItems: "center", justifyContent: "center" }}>
            <PlusIcon color="white" size={30} style={{ cursor: "pointer" }} onClick={handleplusClick} />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", margin: "5rem 0 0 15px" }}>
          <div style={{ display: "flex", height: "15.5rem", width: "74rem", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)", marginBottom: "15px" }}>
            <div style={{display:"flex",backgroundColor:"pink",minHeight: "15.5rem",width:"20rem"}}>

            </div>
            <div style={{display:"flex",backgroundColor:"lightblue",minHeight: "15.5rem",width:"13.5rem"}}>

            </div>
            <div style={{display:"flex",backgroundColor:"lightgreen",minHeight: "15.5rem",width:"13.5rem"}}>

            </div>
            <div style={{display:"flex",backgroundColor:"lightgrey",minHeight: "15.5rem",width:"13.5rem"}}>

            </div>
            <div style={{display:"flex",backgroundColor:"lightgreen",minHeight: "15.5rem",width:"13.5rem"}}>

            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default ManageVehicle;
