import React from 'react';
import CohortDetails from './components/CohortDetails';
import './App.css';

function App() {
  const cohorts = [
    {
      name: "Full Stack Java",
      status: "Ongoing",
      startDate: "2024-01-15",
      endDate: "2024-06-30",
      participants: 45
    },
    {
      name: "Data Science",
      status: "Completed",
      startDate: "2023-09-01",
      endDate: "2023-12-20",
      participants: 38
    },
    {
      name: "DevOps Engineering",
      status: "Ongoing",
      startDate: "2024-02-01",
      endDate: "2024-07-15",
      participants: 52
    }
  ];

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '30px 0' }}>
        Academy - Cohort Dashboard
      </h1>
      <div style={{ textAlign: 'center' }}>
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;