import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <div className="text-blue-500 text-center">
      <h1>Hello, Tailwind CSS is working!</h1>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
