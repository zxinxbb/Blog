import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CreateBlog from './pages/CreateBlog';
import EditBlog from './pages/EditBlog';
import Navbar from './components/Navbar';
import Auth0ProviderWithHistory from './auth0Provider';
import { Auth0Provider } from '@auth0/auth0-react';
import './css/main.css'


const App = () => {
  return (
    <Auth0Provider>
    <BrowserRouter>

      <Auth0ProviderWithHistory>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/add-blog"
            element={<CreateBlog />}
          />
          <Route
            path="/:id"
            element={<EditBlog />}
          />

        </Routes>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;