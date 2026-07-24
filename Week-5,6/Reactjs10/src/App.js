import React from 'react';
import './App.css';

function App() {
  // Single Office Object
  const office = {
    name: "Tech Park Plaza",
    rent: 75000,
    address: "123 Silicon Valley, Bangalore"
  };

  // List of Office Spaces
  const offices = [
    { id: 1, name: "Tech Park Plaza", rent: 75000, address: "123 Silicon Valley, Bangalore" },
    { id: 2, name: "Innovation Hub", rent: 45000, address: "456 MG Road, Bangalore" },
    { id: 3, name: "Startup Center", rent: 92000, address: "789 Electronic City, Bangalore" },
    { id: 4, name: "Co-Work Space", rent: 55000, address: "101 Whitefield, Bangalore" }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '900px', margin: '0 auto' }}>

      {/* Heading using JSX */}
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>
        Office Space Rental Portal
      </h1>

      {/* Image with Attribute */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img
          src="https://source.unsplash.com/random/800x300/?office"
          alt="Modern Office Space"
          style={{ borderRadius: '10px', width: '100%', maxWidth: '800px' }}
        />
      </div>

      {/* Single Office Details */}
      <div style={{
        border: '2px solid #3498db',
        padding: '20px',
        margin: '20px 0',
        borderRadius: '10px'
      }}>
        <h2>Featured Office</h2>
        <p><strong>Name:</strong> {office.name}</p>
        <p>
          <strong>Rent:</strong>
          <span style={{
            color: office.rent > 60000 ? 'green' : 'red',
            fontWeight: 'bold'
          }}>
            ₹{office.rent.toLocaleString()}
          </span>
        </p>
        <p><strong>Address:</strong> {office.address}</p>
      </div>

      {/* List of Offices using map() */}
      <h2 style={{ textAlign: 'center' }}>Available Office Spaces</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {offices.map((item) => (
          <div key={item.id} style={{
            border: '1px solid #ddd',
            padding: '15px',
            width: '280px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
          }}>
            <h3>{item.name}</h3>
            <p>
              <strong>Rent: </strong>
              <span style={{
                color: item.rent > 60000 ? 'green' : 'red',
                fontWeight: 'bold'
              }}>
                ₹{item.rent.toLocaleString()}
              </span>
            </p>
            <p><strong>Address:</strong> {item.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;