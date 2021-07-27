import React, { useState } from 'react';
import './Login.module.scss';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import Select from 'react-select';
import { MONTH_OPTIONS } from '../../utils/constants';
import { SignupSchema } from './validation';
import { customStyles } from '../../utils/general';
axios.defaults.baseURL = 'http://myurl';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const baseURL = 'http://atologistinfotech.com/api/register.php';

export default function Login() {
  const [response, setResponse] = useState();
  const handleSubmit = values => {
    const params = {
      firstname: values.firstName,
      lastname: values.lastName,
      email: values.email,
      encryptpassword: values.password,
      mobile: values.number,
      dob: `${values.day}-${values.month.value}-${values.year}`,
    };
    axios
      .post(baseURL, params)
      .then(res => {
        if (res) {
          setResponse({ success: true, message: 'Successfully Registered' });
        }
      })
      .catch(err => setResponse({ success: false, message: err.message }));
  };

  return (
    <div className="login_box_container">
      <div className="login_box">
        <div className="login_body">
          <h2>Sign up</h2>
          <p>Create a Atologist account</p>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              year: '',
              day: '',
              password: '',
              month: '',
              number: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleChange, handleBlur, values }) => (
              <Form>
                <div className="field_wrapper">
                  <div className="field">
                    <Field
                      name="firstName"
                      placeHolder="First Name"
                      className={
                        errors.firstName && touched.firstName && 'red_border'
                      }
                    />
                    {errors.firstName && touched.firstName ? (
                      <div className="error-message">{errors.firstName}</div>
                    ) : null}
                  </div>
                  <div className="field right">
                    <Field
                      name="lastName"
                      placeHolder="Last Name"
                      className={
                        errors.lastName && touched.lastName && 'red_border'
                      }
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className="error-message">{errors.lastName}</div>
                    ) : null}
                  </div>
                </div>
                <div className="field_wrapper">
                  <div className="full_field">
                    <Field
                      name="email"
                      type="email"
                      placeHolder="Email Id"
                      className={errors.email && touched.email && 'red_border'}
                    />
                    {errors.email && touched.email ? (
                      <div className="error-message">{errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className="field_wrapper">
                  <div className="full_field">
                    <Field
                      name="password"
                      type="password"
                      placeHolder="Password"
                      className={
                        errors.password && touched.password && 'red_border'
                      }
                    />
                    {errors.password && touched.password ? (
                      <div className="error-message">{errors.password}</div>
                    ) : null}
                  </div>
                </div>
                <div className="field_wrapper">
                  <div className="full_field">
                    <Field
                      name="number"
                      type="text"
                      placeHolder="Mobile number"
                      className={errors.number && 'red_border'}
                    />
                    {errors.number && touched.number ? (
                      <div className="error-message">{errors.number}</div>
                    ) : null}
                  </div>
                </div>
                <div className="field_wrapper">
                  <div className="month_field">
                    <Select
                      className={errors.month && touched.month && 'red_border'}
                      styles={customStyles}
                      name="month"
                      id="month"
                      placeholder="Birth month"
                      value={values.month}
                      onChange={selectedOption => {
                        const event = {
                          target: {
                            name: 'month',
                            value: selectedOption,
                          },
                        };
                        handleChange(event);
                      }}
                      onBlur={() => {
                        handleBlur({ target: { name: 'month' } });
                      }}
                      options={MONTH_OPTIONS}
                    />
                  </div>
                  <div className="day_field">
                    <Field
                      name="day"
                      type="text"
                      placeHolder="Day"
                      className={errors.day && touched.day && 'red_border'}
                    />
                  </div>
                  <div className="day_field">
                    <Field
                      name="year"
                      type="text"
                      placeHolder="Year"
                      className={errors.year && touched.year && 'red_border'}
                    />
                  </div>
                  {(errors.year && touched.year) ||
                  (errors.month && touched.month) ||
                  (errors.day && touched.day) ? (
                    <div className="error-message">
                      {errors.month || errors.year || errors.day}
                    </div>
                  ) : null}
                </div>
                <button type="submit" className="submit_btn">
                  Submit
                </button>
                <p className="ureg-sign-in">
                  Already have an account? <a href="#signIn">Sign in</a>
                </p>
                {response &&
                  (response.success ? (
                    <p>{response.message}</p>
                  ) : (
                    <p className="error-message">{response.message}</p>
                  ))}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
