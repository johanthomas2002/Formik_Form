import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css';



function App() {

  // Validation schema
  const validationSchema = Yup.object().shape({
  name: Yup.string().min(3,"Name must be of atleast e characters").required('Full Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string().max(10,"Phone number must be of length 10").matches(/^[0-9]+$/, "Only digits are allowed").required('Phone number is required'),
  dob: Yup.date().required('Date of birth is required'),
  gender: Yup.string().required('Gender is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
  address: Yup.string().required('Address is required'),
  country: Yup.string().required('Country is required'),
  terms: Yup.bool().oneOf([true], 'You must accept the terms and conditions')
  });

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='mt-5 mb-5 p-5 w-50 form'>
        <h1 className='text-center'>Registration Form</h1>
        
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            dob: '',
            gender: '',
            password: '',
            confirmPassword: '',
            address: '',
            country: '',
            terms: false
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Form data', values);
          }}
        >
          {({ handleSubmit, handleChange, values }) => (
            <Form onSubmit={handleSubmit} className='mt-4'>

              <Form.Group className="mb-3">
                <Form.Label className='fw-bold'>Full Name</Form.Label>
                <Field name="name" as={Form.Control} size='lg' type="text" placeholder="Enter name" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className='fw-bold'>Email</Form.Label>
                <Field name="email" as={Form.Control} size='lg' type="email" placeholder="Enter email" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className='fw-bold'>Phone Number</Form.Label>
                <Field name="phone" as={Form.Control} size='lg' type="text" placeholder="Enter phone number" />
                <ErrorMessage name="phone" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className='fw-bold'>Date of Birth</Form.Label>
                <Field name="dob" as={Form.Control} size='lg' type="date" />
                <ErrorMessage name="dob" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className='fw-bold'>Gender</Form.Label>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="gender"
                  value="male"
                  checked={values.gender === 'male'}
                  onChange={handleChange}
                  className='fs-5'
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="gender"
                  value="female"
                  checked={values.gender === 'female'}
                  onChange={handleChange}
                  className='fs-5'
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="gender"
                  value="other"
                  checked={values.gender === 'other'}
                  onChange={handleChange}
                  className='fs-5'
                />
                <ErrorMessage name="gender" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3 mt-2">
                <Form.Label className='fw-bold'>Password</Form.Label>
                <Field name="password" as={Form.Control} size='lg' type="password" placeholder="Enter password" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className='fw-bold'>Confirm Password</Form.Label>
                <Field name="confirmPassword" as={Form.Control} size='lg' type="password" placeholder="Confirm password" />
                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className='fw-bold'>Address</Form.Label>
                <Field name="address" as="textarea" size='lg' rows={3} className="form-control" />
                <ErrorMessage name="address" component="div" className="text-danger" />
              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label className='fw-bolder'>Country</Form.Label>
                <Field name="country" as={Form.Select} aria-label="Default select example" size='lg'>
                  <option value="">Select Your Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Denmark">Denmark</option>
                </Field>
                <ErrorMessage name="country" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3 mt-3">
                <Form.Label className='fw-bold'>Profile Picture (optional)</Form.Label>
                <Form.Control size='lg' type="file" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Field name="terms" type="checkbox" className='fs-5' />
                <Form.Label className='fw-bolder ms-2'>I accept the terms and conditions</Form.Label>
                <ErrorMessage name="terms" component="div" className="text-danger" />
              </Form.Group>

              <Button type="submit" className='btn btn-success w-100 fw-bolder' size='lg'>Register</Button>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
