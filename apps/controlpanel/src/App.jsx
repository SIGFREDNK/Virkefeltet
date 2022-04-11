import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route index element={<LandingPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
