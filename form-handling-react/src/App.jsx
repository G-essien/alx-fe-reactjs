import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';


function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>User Registration</h1>
      <FormikForm />
      <RegistrationForm />
    </div>
  );
}

export default App;


