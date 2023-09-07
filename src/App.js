import { Route, Routes } from "react-router-dom";
import Auth from './pages/auth';
import Main from './pages/main';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/signin"
          element={<Auth />}
        />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
