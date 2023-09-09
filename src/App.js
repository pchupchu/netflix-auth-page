import { Route, Routes } from "react-router-dom";
import Auth from './pages/auth';
import Main from './pages/main';

function App() {
  return (
    <div className="h-full">
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
