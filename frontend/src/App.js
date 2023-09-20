import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
    {/*   <Navbar  /> */}
        <Routes>
          <Route
            path='/'
            element={<Homepage />}
          />
         {/*  <Route
          path='/add-blog'
          element={<AddBlog />}
          />
           <Route
          path='/edit-blog'
          element={<EditBlog />}
          />
           <Route
          path='/add-user'
          element={<Login />}
          /> */}
        </Routes>
      </BrowserRouter>
     
    </div>
  );
  }

export default App;
