// src/journey.js
import './styles.css';

function Journey() {

  return (
    <div className='journey_page'>
      <div className='journey_sidebar'>
       <div>
          <h1 style={{textAlign:"center", color:"#132b75"}}>Booking Status</h1>
       </div>
       <div className='verticalbar'>
         <ul>
         <li><span >Ongoing Journey</span></li>
         <li><span >In Progress</span></li>
         <li><span >Completed</span></li>
         </ul>
       </div>
      </div>
      <div className='journey_cards'></div>
    </div>
  );
}

export default Journey;
