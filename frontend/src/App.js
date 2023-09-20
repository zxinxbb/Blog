import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './pages/EditUser';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      {/* <Navbar  /> */}
        <Routes>
          <Route
            path='/'
            element={<EditUser />}
          />
          {/* <Route
          path='/add-blog'
          element={<AddBlog />}
          />
           <Route
          path='/edit-blog'
          element={<EditBlog />}
          />
           <Route
          path='/Add-user'
          element={<Login />}
          /> */}
        </Routes>
      </BrowserRouter>
     
    </div>
  );
  }

export default App;
