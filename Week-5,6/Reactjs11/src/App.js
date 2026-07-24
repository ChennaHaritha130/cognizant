import React, { useState } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const flights = [
        { id: 1, from: "Delhi", to: "Mumbai", time: "10:00 AM", price: "₹4500" },
        { id: 2, from: "Bangalore", to: "Hyderabad", time: "02:30 PM", price: "₹3800" }
    ];

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>✈️ Flight Ticket Booking</h1>

            {isLoggedIn ? (
                <div>
                    <h2>Welcome User! 🎉</h2>
                    <h3>Available Flights</h3>
                    {flights.map(flight => (
                        <div key={flight.id} style={{border: '1px solid #ccc', margin: '10px auto', padding: '15px', maxWidth: '500px'}}>
                            <p>{flight.from} → {flight.to}</p>
                            <p>Time: {flight.time} | Price: {flight.price}</p>
                            <button>Book Ticket</button>
                        </div>
                    ))}
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Guest View</h2>
                    <p>Please login to book tickets.</p>
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                </div>
            )}
        </div>
    );
}

export default App;