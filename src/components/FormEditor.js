

//test
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// function FormEditor() {
//   const { id } = useParams();
//   const [form, setForm] = useState({ title: '', fields: [] });
//   const [inputType, setInputType] = useState('text');
//   const [title, setTitle] = useState('');
//   const [placeholder, setPlaceholder] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id) {
//       fetch(`/api/forms/${id}`)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then(data => setForm(data))
//         .catch(err => console.error('Fetch error:', err));
//     }
//   }, [id]);

//   const handleAddField = () => {
//     if (form.fields.length < 20) {
//       setForm({
//         ...form,
//         fields: [...form.fields, { type: inputType, title, placeholder }]
//       });
//       setTitle('');
//       setPlaceholder('');
//     }
//   };

//   const handleSave = () => {
//     fetch(`/api/forms/${id || ''}`, {
//       method: id ? 'PUT' : 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(() => navigate('/'))
//       .catch(err => console.error('Save error:', err));
//   };

//   const handleDeleteField = (index) => {
//     setForm({
//       ...form,
//       fields: form.fields.filter((_, i) => i !== index)
//     });
//   };

//   return (
//     <div>
//       <h1>{id ? 'Edit Form' : 'Create Form'}</h1>
//       <input
//         type="text"
//         value={form.title}
//         onChange={(e) => setForm({ ...form, title: e.target.value })}
//         placeholder="Form Title"
//       />
//       <div>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Input Title"
//         />
//         <input
//           type="text"
//           value={placeholder}
//           onChange={(e) => setPlaceholder(e.target.value)}
//           placeholder="Placeholder"
//         />
//         <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
//           <option value="text">Text</option>
//           <option value="email">Email</option>
//           <option value="password">Password</option>
//           <option value="number">Number</option>
//           <option value="date">Date</option>
//         </select>
//         <button onClick={handleAddField}>Add Field</button>
//       </div>
//       <div>
//         {form.fields.map((field, index) => (
//           <div key={index}>
//             <input
//               type={field.type}
//               placeholder={field.placeholder}
//               readOnly
//             />
//             <button onClick={() => handleDeleteField(index)}>Delete</button>
//           </div>
//         ))}
//       </div>
//       <button onClick={handleSave}>Save Form</button>
//     </div>
//   );
// }

// export default FormEditor;

//working proper
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// function FormEditor() {
//   const { id } = useParams();
//   const [form, setForm] = useState({ title: '', fields: [] });
//   const [inputType, setInputType] = useState('text');
//   const [title, setTitle] = useState('');
//   const [placeholder, setPlaceholder] = useState('');
//   const navigate = useNavigate();


  
//   useEffect(() => {
//     if (id) {
//       fetch(`http://localhost:5000/api/forms/${id}`)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then(data => setForm(data))
//         .catch(err => console.error('Fetch error:', err));
//     }
//   }, [id]);

//   const handleAddField = () => {
//     if (form.fields.length < 20) {
//       setForm({
//         ...form,
//         fields: [...form.fields, { type: inputType, title, placeholder }]
//       });
//       setTitle('');
//       setPlaceholder('');
//     }
//   };

  
//   const handleSave = () => {
//     fetch(`http://localhost:5000/api/forms/${id || ''}`, {
//       method: id ? 'PUT' : 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(() => navigate('/'))
//       .catch(err => console.error('Save error:', err));
//   };

//   const handleDeleteField = (index) => {
//     setForm({
//       ...form,
//       fields: form.fields.filter((_, i) => i !== index)
//     });
//   };

//   return (
//     <div>
//       <h1>{id ? 'Edit Form' : 'Create Form'}</h1>
//       <input
//         type="text"
//         value={form.title}
//         onChange={(e) => setForm({ ...form, title: e.target.value })}
//         placeholder="Form Title"
//       />
//       <div>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Input Title"
//         />
//         <input
//           type="text"
//           value={placeholder}
//           onChange={(e) => setPlaceholder(e.target.value)}
//           placeholder="Placeholder"
//         />
//         <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
//           <option value="text">Text</option>
//           <option value="email">Email</option>
//           <option value="password">Password</option>
//           <option value="number">Number</option>
//           <option value="date">Date</option>
//         </select>
//         <button onClick={handleAddField}>Add Field</button>
//       </div>
//       <div>
//         {form.fields.map((field, index) => (
//           <div key={index}>
//             <input
//               type={field.type}
//               placeholder={field.placeholder}
//               readOnly
//             />
//             <button onClick={() => handleDeleteField(index)}>Delete</button>
//           </div>
//         ))}
//       </div>
//       <button onClick={handleSave}>Save Form</button>
//     </div>
//   );
// }

// export default FormEditor;


// styling code

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form, Row, Col, InputGroup } from 'react-bootstrap';
import './FormEditor.css'; // Custom styles

function FormEditor() {
  const { id } = useParams();
  const [form, setForm] = useState({ title: '', fields: [] });
  const [inputType, setInputType] = useState('text');
  const [title, setTitle] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/forms/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => setForm(data))
        .catch(err => console.error('Fetch error:', err));
    }
  }, [id]);

  const handleAddField = () => {
    if (form.fields.length < 20) {
      setForm({
        ...form,
        fields: [...form.fields, { type: inputType, title, placeholder }]
      });
      setTitle('');
      setPlaceholder('');
    }
  };

//   const handleSave = () => {
//     fetch(`http://localhost:5000/api/forms/${id || ''}`, {
//       method: id ? 'PUT' : 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(() => navigate('/'))
//       .catch(err => console.error('Save error:', err));
//   };
// const handleSave = () => {
//     if (!form.title || !form.fields || !Array.isArray(form.fields)) {
//       console.error('Form is missing required fields');
//       return;
//     }
  
//     fetch(`http://localhost:5000/api/forms/${id || ''}`, {
//       method: id ? 'PUT' : 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json(); // Ensure you return the JSON to use in the next `.then`
//     })
//     .then(data => {
//       console.log('Response Data:', data); // Log the response data
//       navigate('/'); // Redirect on successful save
//     })
//     .catch(err => console.error('Save error:', err));
//   };
  

const handleSave = () => {
    if (!form.title || !form.fields || !Array.isArray(form.fields)) {
      console.error('Form is missing required fields');
      return;
    }
  
    fetch(`http://localhost:5000/api/forms/${id || ''}`, {
      method: id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          console.error('Error response:', err);
          throw new Error(`HTTP error! status: ${response.status}`);
        });
      }
      return response.json(); 
    })
    .then(data => {
      console.log('Response Data:', data); 
      navigate('/'); 
    })
    .catch(err => console.error('Save error:', err));
  };
  
  const handleDeleteField = (index) => {
    setForm({
      ...form,
      fields: form.fields.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="container mt-5">
      <h1>{id ? 'Edit Form' : 'Create Form'}</h1>
      <Row>
        <Col md={6}>
          <h2>Untitled Form <span role="img" aria-label="edit">✏️</span></h2>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Input Title"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              value={placeholder}
              onChange={(e) => setPlaceholder(e.target.value)}
              placeholder="Placeholder"
            />
          </InputGroup>
          <Form.Select value={inputType} onChange={(e) => setInputType(e.target.value)} className="mb-3">
            <option value="text">Text</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
            <option value="number">Number</option>
            <option value="date">Date</option>
          </Form.Select>
          <Button onClick={handleAddField} variant="primary" className="w-100 mb-3">Add Field</Button>
        </Col>
        <Col md={6}>
          <h2>Form Editor</h2>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Form Title"
            />
          </InputGroup>
          <div>
            {form.fields.map((field, index) => (
              <InputGroup className="mb-3" key={index}>
                <Form.Control
                  type={field.type}
                  placeholder={field.placeholder}
                 // readOnly
                />
                <Button onClick={() => handleDeleteField(index)} variant="danger">Delete</Button>
              </InputGroup>
            ))}
          </div>
          <Button onClick={handleSave} variant="success" className="w-100">Save Form</Button>
        </Col>
      </Row>
    </div>
  );
}

export default FormEditor;

