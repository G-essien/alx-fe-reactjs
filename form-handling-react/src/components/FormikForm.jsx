
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        alert('Registration Successful');
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Username</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
