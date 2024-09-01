import RegistrationForm from './components/RegistrationForm';
import formikForm from './components/formikForm'



function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>User Registration</h1>
      <div>{formikForm }</div>
      <RegistrationForm />
    </div>
  );
}

export default App;


