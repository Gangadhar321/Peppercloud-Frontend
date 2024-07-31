// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function FormViewer() {
//   const { id } = useParams();
//   const [form, setForm] = useState(null);

//   useEffect(() => {
//     fetch(`/api/forms/${id}`)
//       .then(response => response.json())
//       .then(data => setForm(data));
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here
//   };

//   if (!form) return <div>Loading...</div>;

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>{form.title}</h1>
//       {form.fields.map((field, index) => (
//         <div key={index}>
//           <input
//             type={field.type}
//             placeholder={field.placeholder}
//             required
//           />
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormViewer;

// test
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function FormViewer() {
//   const { id } = useParams();
//   const [form, setForm] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/forms/${id}`) // Ensure the full URL is used
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => setForm(data))
//       .catch(error => console.error('Fetch error:', error.message));
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here
//   };

//   if (!form) return <div>Loading...</div>;

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>{form.title}</h1>
//       {form.fields.map((field, index) => (
//         <div key={index}>
//           <input
//             type={field.type}
//             placeholder={field.placeholder}
//             required
//           />
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormViewer;


//test2 working

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function FormViewer() {
//   const { id } = useParams();
//   const [form, setForm] = useState(null);
//   const [formData, setFormData] = useState({});

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/forms/${id}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => setForm(data))
//       .catch(error => {
//         console.error('Fetch error:', error.message);
//         setForm({ error: 'Failed to load form' });
//       });
//   }, [id]);

//   const handleChange = (index, event) => {
//     const newFormData = { ...formData, [index]: event.target.value };
//     setFormData(newFormData);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const submittedData = form.fields.map((field, index) => ({
//       type: field.type,
//       value: formData[index] || ''
//     }));

//     fetch(`http://localhost:5000/api/forms/${id}/submit`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(submittedData),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Form submitted successfully', data);
//         // Handle successful submission, e.g., show a success message or redirect
//       })
//       .catch(error => console.error('Submit error:', error.message));
//   };

//   if (!form) return <div>Loading...</div>;
//   if (form.error) return <div>{form.error}</div>;

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>{form.title}</h1>
//       {form.fields.map((field, index) => (
//         <div key={index}>
//           <input
//             type={field.type}
//             placeholder={field.placeholder}
//             value={formData[index] || ''}
//             onChange={(e) => handleChange(index, e)}
//             required
//           />
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormViewer;

// working code properly
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function FormViewer() {
//   const { id } = useParams();
//   const [form, setForm] = useState(null);
//   const [formData, setFormData] = useState({});

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/forms/${id}`)
//       .then(response => response.json())
//       .then(data => {
//         if (data.error) {
//           setForm({ error: data.error });
//         } else {
//           setForm(data);
//         }
//       })
//       .catch(error => {
//         console.error('Fetch error:', error.message);
//         setForm({ error: 'Failed to load form' });
//       });
//   }, [id]);

//   const handleChange = (index, event) => {
//     const newFormData = { ...formData, [index]: event.target.value };
//     setFormData(newFormData);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const submittedData = form.fields.map((field, index) => ({
//       type: field.type,
//       value: formData[index] || ''
//     }));

//     fetch(`http://localhost:5000/api/forms/${id}/submit`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(submittedData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.message === 'Form submitted successfully') {
//           console.log('Form submitted successfully');
//           // Handle success, e.g., redirect or show a success message
//         } else {
//           console.error('Submit error:', data.message);
//         }
//       })
//       .catch(error => console.error('Submit error:', error.message));
//   };

//   if (!form) return <div>Loading...</div>;
//   if (form.error) return <div>{form.error}</div>;

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>{form.title}</h1>
//       {form.fields.map((field, index) => (
//         <div key={index}>
//           <input
//             type={field.type}
//             placeholder={field.placeholder}
//             value={formData[index] || ''}
//             onChange={(e) => handleChange(index, e)}
//             required
//           />
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormViewer;



//code using styling

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import './FormViewer.css'; // Custom styles

function FormViewer() {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/forms/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setForm({ error: data.error });
        } else {
          setForm(data);
        }
      })
      .catch(error => {
        console.error('Fetch error:', error.message);
        setForm({ error: 'Failed to load form' });
      });
  }, [id]);

  const handleChange = (index, event) => {
    const newFormData = { ...formData, [index]: event.target.value };
    setFormData(newFormData);
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const submittedData = form.fields.map((field, index) => ({
//       type: field.type,
//       value: formData[index] || ''
//     }));

//     fetch(`http://localhost:5000/api/forms/${id}/submit`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(submittedData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.message === 'Form submitted successfully') {
//           console.log('Form submitted successfully');
//           // Handle success, e.g., redirect or show a success message
//         } else {
//           console.error('Submit error:', data.message);
//         }
//       })
//       .catch(error => console.error('Submit error:', error.message));
//   };

//test not working
// const handleSubmit = (event) => {
//     event.preventDefault();
  
//     const submittedData = form.fields.map((field, index) => ({
//       type: field.type,
//       value: formData[index] || ''
//     }));
  
//     fetch(`http://localhost:5000/api/forms/${id}/submit`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(submittedData),
//     })
//       .then(response => response.text()) // Read response as text
//       .then(text => {
//         try {
//           const data = JSON.parse(text); // Attempt to parse JSON
//           console.log('Response Data:', data); // Log the server response
//         } catch (e) {
//           console.error('Failed to parse JSON:', e);
//           console.error('Raw Response:', text); // Log the raw response
//         }
//       })
//       .catch(err => {
//         console.error('Submit error:', err); // Log any errors
//       });
//   };
  
const handleSubmit = (event) => {
    event.preventDefault();
  
    // Prepare data to submit
    const submittedData = form.fields.map((field, index) => ({
      type: field.type,
      value: formData[index] || ''
    }));
  
    console.log(submittedData, 'submit'); // Log data to be sent
  
    // Check if fetch is available and called correctly
    if (typeof fetch === 'undefined') {
      console.error('fetch is not defined');
      return;
    }
  
    // Send data to the server
    fetch(`http://localhost:5000/api/forms/${id}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submittedData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('Response Status:', response.status); // Log response status
        return response.text(); // Read response as text
      })
      .then(text => {
        try {
          const data = JSON.parse(text); // Attempt to parse JSON
          console.log('Response Data:', data); // Log the server response
        } catch (e) {
          console.error('Failed to parse JSON:', e);
          console.error('Raw Response:', text); // Log the raw response
        }
      })
      .catch(err => {
        console.error('Submit error:', err); // Log any errors
      });
  };
  

  if (!form) return <div>Loading...</div>;
  if (form.error) return <div>{form.error}</div>;

  return (
    <Form onSubmit={handleSubmit} className="container mt-5">
      <h1>{form.title}</h1>
      {form.fields.map((field, index) => (
        <InputGroup className="mb-3" key={index}>
          <Form.Control
            type={field.type}
            placeholder={field.placeholder}
            value={formData[index] || ''}
            onChange={(e) => handleChange(index, e)}
            required
          />
        </InputGroup>
      ))}
      <Button type="submit" variant="primary" className="w-100">Submit</Button>
    </Form>
  );
}

export default FormViewer;
