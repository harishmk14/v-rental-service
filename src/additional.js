<div className="box_fixed" style={{ display:"flex",flexDirection:"column",backgroundColor:"white",height:"36rem", borderRadius:"10px",boxShadow:"0 1px 6px 0 rgba(0, 0, 0, 0.2)"}}>
<div style={{display:"flex"}}>
  <h1 style={{textAlign:"center",color: "#132b75", width:"74rem" }}>Add Vehicle</h1>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap:"20px",margin:"0px 30px 0px 30px" }}>
  {/* Brand Name */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>Brand Name</label>
      <input
        type="text"
        placeholder="Brand Name"
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)}
        style={{ width: "20rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5"}} 
      />
    </div>
  </div>
  {/* Type */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>Type</label>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ width: "21.4rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5",color:"#827979" }}
      >
        <option value="">Select</option>
        <option value="bike">Bike</option>
        <option value="car">Car</option>
        <option value="van">Van</option>
        <option value="bus">Bus</option>
      </select>
    </div>
  </div>
  {/* Price */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>Price</label>
      <input
        type="number"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ width: "20rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5" }} 
      />
    </div>
  </div>
  {/* Seater */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>Seater</label>
      <input
        type="number"
        placeholder="Enter seater capacity"
        value={seater}
        onChange={(e) => setSeater(e.target.value)}
        style={{ width: "20rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5" }} 
      />
    </div>
  </div>
  {/* AC or Non-AC */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>AC or Non-AC</label>
      <select
        value={acType}
        onChange={(e) => setAcType(e.target.value)}
        style={{ width: "21.4rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5",color:"#827979" }}
      >
        <option value="">Select</option>
        <option value="ac">AC</option>
        <option value="non-ac">Non-AC</option>
      </select>
    </div>
  </div>
  {/* Gear Type */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>Gear Type</label>
      <select
        value={gearType}
        onChange={(e) => setGearType(e.target.value)}
        style={{ width: "21.4rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5",color:"#827979" }}
      >
        <option value="">Select</option>
        <option value="manual">Manual</option>
        <option value="auto">Automatic</option>
      </select>
    </div>
  </div>
  {/* Fuel Type */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>Fuel Type</label>
      <select
        value={fuelType}
        onChange={(e) => setFuelType(e.target.value)}
        style={{ width: "21.4rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5",color:"#827979" }}
      >
        <option value="">Select</option>
        <option value="petrol">Petrol</option>
        <option value="diesel">Diesel</option>
        <option value="gas">Gas</option>
      </select>
    </div>
  </div>
  {/* Color */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>Color</label>
      <input
        type="text"
        placeholder="Enter color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ width: "20rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5" }} 
      />
    </div>
  </div>
  {/* Registration No */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>Registration No</label>
      <input
        type="text"
        placeholder="Enter registration number"
        value={registrationNo}
        onChange={(e) => setRegistrationNo(e.target.value)}
        style={{ width: "20rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5" }} 
      />
    </div>
  </div>
  {/* Model */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>Model</label>
      <input
        type="text"
        placeholder="Enter model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        style={{ width: "20rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5" }} 
      />
    </div>
  </div>
  {/* Review */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>Review</label>
      <input
        type="text"
        placeholder="Enter review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        style={{ width: "20rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5" }} 
      />
    </div>
  </div>
  {/* Star Rating */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>Star Rating</label>
      <input
        type="number"
        placeholder="Enter star rating"
        value={starRating}
        onChange={(e) => setStarRating(e.target.value)}
        style={{ width: "20rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5" }} 
      />
    </div>
  </div>
  {/* Toll Type */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>Toll Type</label>
      <select
        value={tollType}
        onChange={(e) => setTollType(e.target.value)}
        style={{ width: "21.4rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5",color:"#827979" }}
      >
        <option value="">Select</option>
        <option value="paid">Paid</option>
        <option value="free">Free</option>
      </select>
    </div>
  </div>
  {/* Range */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>Range</label>
      <input
        type="number"
        placeholder="Enter range"
        value={range}
        onChange={(e) => setRange(e.target.value)}
        style={{ width: "20rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5" }} 
      />
    </div>
  </div>
  {/* Image */}
  <div style={{display:"grid",justifyItems:"center"}}>
    <div style={{display:"grid"}}>
      <label>Image</label>
      <input
        type="file"
        style={{ width: "20rem", borderRadius:"5px", padding:"10px", border:"1.5px solid #b6b5b5" }} 
      />
    </div>
  </div>
</div>
<div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
  <button onClick={handleAdd} style={{marginRight:"10px",padding:"10px 20px",backgroundColor:"#132b75",color:"white",border:"none",borderRadius:"5px"}}>Add</button>
  <button onClick={handleReset} style={{padding:"10px 20px",backgroundColor:"#b6b5b5",color:"white",border:"none",borderRadius:"5px"}}>Reset</button>
</div>
</div>



const [brandName, setBrandName] = useState("");
const [type, setType] = useState("");
const [price, setPrice] = useState("");
const [seater, setSeater] = useState("");
const [acType, setAcType] = useState("");
const [gearType, setGearType] = useState("");
const [fuelType, setFuelType] = useState("");
const [color, setColor] = useState("");
const [registrationNo, setRegistrationNo] = useState("");
const [model, setModel] = useState("");
const [review, setReview] = useState("");
const [starRating, setStarRating] = useState("");
const [tollType, setTollType] = useState("");
const [range, setRange] = useState("");

const handleReset = () => {
    // Reset all form fields to their initial values
    setBrandName("");
    setType("");
    setPrice("");
    setSeater("");
    setAcType("");
    setGearType("");
    setFuelType("");
    setColor("");
    setRegistrationNo("");
    setModel("");
    setReview("");
    setStarRating("");
    setTollType("");
    setRange("");
  };

  const handleAdd = () => {
    // Logic to handle adding the vehicle
    console.log("Vehicle added");
  };



  // src/Admin.js

import { LogOut } from 'lucide-react';
import './styles.css';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

function Admin() {

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  console.log("12345678",path)

  return (
    <div className='nav_fixed'>
      <div style={{ display:"flex", width:"100%", height:"5rem", backgroundColor:"#132b75"}} className='admin_nav'>
        <div style={{margin:"20px", fontSize:"24px", fontWeight:"bold", color:"white"}}>V-RENTAL</div>
        <nav style={{margin:"25px 25px 25px 350px"}}>
          <ul>
            <li>
              <span
                className={path === '/admin' ? 'active' : ''}
                onClick={() => navigate('/admin')}
              >
                Profile
              </span>
            </li>
            <li>
              <span
                className={path === '/admin/managevehicle' ? 'active' : ''}
                onClick={() => navigate('/admin/managevehicle')}
              >
                Add Vehicle
              </span>
            </li>
            <li>
              <span
                className={path === '/admin/vehiclestatus' ? 'active' : ''}
                onClick={() => navigate('/admin/vehiclestatus')}
              >
                Vehicle Status
              </span>
            </li>
            <li>
              <span
                className={path === '/admin/customers' ? 'active' : ''}
                onClick={() => navigate('/admin/customers')}
              >
                Customer
              </span>
            </li>
          </ul>
        </nav>

        <LogOut style={{cursor:"pointer", margin:"25px 25px 25px 400px"}} color='white' size={25} onClick={() => navigate('/')}/>
      </div>

        <Outlet />
    </div>
  );
}

export default Admin;
