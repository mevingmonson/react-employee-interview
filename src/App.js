import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeLists from './Containers/EmployeeLists';
import EmployeeDetails from './Containers/EmployeeDetails';
import EmployeeBuilder from './Containers/EmployeeBuilder';


function App() {
  return (
    <div className="container-fluid">
      <EmployeeBuilder />
    </div>
  );
}

export default App;
