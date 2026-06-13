import React from 'react';
import NavigationBar from '../components/Nav';

export default function Booking() {
  return (
    <div className="booking">
      <NavigationBar />
      <h1>Booking Page</h1>
      <div className="container" style={{ maxWidth: 480 }}>

        {/* text input */}
        <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" placeholder="you@example.com" />
        </div>

        
  
        {/* dropdown */}
        <div className="mb-3">
        <label className="form-label">Service</label>
        <select className="form-select">
            <option>Lawn Mowing</option>
            <option>Hedge Cutting</option>
            <option>Plant installation</option>
        </select>
        </div>

        {/* textarea */}
        <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea className="form-control" rows={3} placeholder="Write something..." />
        </div>

 

        <button className="btn btn-primary">Submit</button>

        </div>
    </div>
  );
}