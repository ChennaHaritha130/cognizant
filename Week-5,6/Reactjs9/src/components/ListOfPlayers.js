import React from 'react';

const ListOfPlayers = () => {
    // Array of 11 players
    const players = [
        { name: "Virat Kohli", score: 85 },
        { name: "Rohit Sharma", score: 92 },
        { name: "KL Rahul", score: 65 },
        { name: "Surya Kumar", score: 78 },
        { name: "Hardik Pandya", score: 45 },
        { name: "Jasprit Bumrah", score: 25 },
        { name: "Ravindra Jadeja", score: 88 },
        { name: "MS Dhoni", score: 95 },
        { name: "Shikhar Dhawan", score: 55 },
        { name: "Yuzvendra Chahal", score: 30 },
        { name: "Rishabh Pant", score: 72 }
    ];

    // Filter players with score < 70 using Arrow Function
    const lowScorers = players.filter(player => player.score < 70);

    return (
        <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
            <h2>All Players (Using map())</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - Score: <strong>{player.score}</strong>
                    </li>
                ))}
            </ul>

            <h2>Players with Score Below 70 (Using Arrow + filter)</h2>
            <ul>
                {lowScorers.map((player, index) => (
                    <li key={index} style={{ color: 'red' }}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListOfPlayers;