import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormList from './components/FormList';
import FormEditor from './components/FormEditor';
import FormViewer from './components/FormViewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormList />} />
        <Route path="/form/create" element={<FormEditor />} />
        <Route path="/form/:id/edit" element={<FormEditor />} />
        <Route path="/form/:id" element={<FormViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
