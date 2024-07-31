// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';

// // function FormList() {
// //   const [forms, setForms] = useState([]);

// //   useEffect(() => {
// //     fetch('/api/forms')
// //       .then(response => response.json())
// //       .then(data => setForms(data));
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Form List</h1>
// //       <Link to="/form/create">Create Form</Link>
// //       <ul>
// //         {forms.map(form => (
// //           <li key={form._id}>
// //             <Link to={`/form/${form._id}`}>{form.title}</Link> | <Link to={`/form/${form._id}/edit`}>Edit</Link>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default FormList;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function FormList() {
//   const [forms, setForms] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('/api/forms')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => setForms(data))
//       .catch(error => setError(error.message));
//   }, []);

//   return (
//     <div>
//       <h1>Form List</h1>
//       <Link to="/form/create">Create Form</Link>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <ul>
//           {forms.map(form => (
//             <li key={form._id}>
//               <Link to={`/form/${form._id}`}>{form.title}</Link> | <Link to={`/form/${form._id}/edit`}>Edit</Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default FormList;


//test  working code
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function FormList() {
//   const [forms, setForms] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/forms') // Ensure the URL is correct
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => setForms(data))
//       .catch(error => setError(error.message));
//   }, []);

//   return (
//     <div>
//       <h1>Form List</h1>
//       <Link to="/form/create">Create Form</Link>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <ul>
//           {forms.map(form => (
//             <li key={form._id}>
//               <Link to={`/form/${form._id}`}>{form.title}</Link> | <Link to={`/form/${form._id}/edit`}>Edit</Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default FormList;



// test styling
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import './FormList.css'; // Custom styles

// function FormList() {
//   const [forms, setForms] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/forms')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => setForms(data))
//       .catch(error => setError(error.message));
//   }, []);

//   return (
//     <div className="container text-center mt-5">
//       <h1>Welcome to Form.Com</h1>
//       <p>This is a simple form builder form</p>
//       <Link to="/form/create">
//         <Button variant="success" className="mb-4">Create Form</Button>
//       </Link>
//       {forms.length === 0 ? (
//         <p>You have no forms created.</p>
//       ) : (
//         <ul className="list-unstyled">
//           {forms.map(form => (
//             <li key={form._id} className="mb-2">
//               <Link to={`/form/${form._id}`} className="mr-2">{form.title}</Link>
//               <Link to={`/form/${form._id}/edit`} className="mr-2">Edit</Link>
//               <Button variant="danger" size="sm">Delete</Button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default FormList;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './FormList.css'; // Custom styles

function FormList() {
  const [forms, setForms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/forms')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setForms(data))
      .catch(error => setError(error.message));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/forms/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        setForms(forms.filter(form => form._id !== id));
      })
      .catch(error => setError(error.message));
  };

  return (
    <div className="container text-center mt-5 bg-white p-4">
      <h1>Welcome to Form.Com</h1>
      <p>This is a simple form builder form</p>
      <Link to="/form/create">
        <Button variant="success" className="mb-4">Create New Form</Button>
      </Link>
      {forms.length === 0 ? (
        <p>You have no forms created.</p>
      ) : (
        <ul className="list-unstyled text-left">
          {forms.map(form => (
            <li key={form._id} className="mb-4 p-3 border rounded">
              <div className="form-details">
                <h5>{form.title}</h5>
                <div className="form-buttons mt-2">
                  <Link to={`/form/${form._id}`}>
                    <Button variant="primary" className="mr-2">View</Button>
                  </Link>
                  <Link to={`/form/${form._id}/edit`}>
                    <Button variant="warning" className="mr-2">Edit</Button>
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(form._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
}

export default FormList;
