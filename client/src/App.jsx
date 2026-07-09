import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Questions from "./pages/Questions";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import QuestionDetails from './pages/QuestionDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path='/questions/:id' element={<QuestionDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
