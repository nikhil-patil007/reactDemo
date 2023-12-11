import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LoginPage from './LoginPage'
import SignUpPage from "./SignUpPage"; 
import IndexPage from "./IndexPage";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import ActivateFiles from "./ActivateFiles";



const loading = () => {
  return <LinearProgress />;
}

function App() {
  return (
    <>
    <LinearProgress/>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<SignUpPage />} />
            <Route path='/' element={<ActivateFiles />} />
            <Route path='dashboard' element={<IndexPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
