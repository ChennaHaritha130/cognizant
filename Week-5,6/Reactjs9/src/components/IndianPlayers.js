import React from 'react';

const IndianPlayers = () => {
    // Destructuring
    const [oddPlayer, evenPlayer, ...rest] = [
        "Virat Kohli", "Rohit Sharma", "Surya Kumar Yadav",
        "Hardik Pandya", "KL Rahul", "Ravindra Jadeja"
    ];

    // Two arrays
    const T20Players = ["Ishan Kishan", "Rinku Singh", "Axar Patel"];
    const RanjiTrophyPlayers = ["Cheteshwar Pujara", "Shubman Gill", "Prithvi Shaw"];

    // Merge using Spread Operator (ES6)
    const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

    return (
        <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
            <h2>Team Split using Destructuring</h2>
            <p><strong>Odd Team Player:</strong> {oddPlayer}</p>
            <p><strong>Even Team Player:</strong> {evenPlayer}</p>

            <h2>Merged Players (T20 + Ranji Trophy)</h2>
            <ul>
                {allPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
};

export default IndianPlayers;