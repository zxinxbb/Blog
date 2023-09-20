import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AddBlog from './pages/AddBlog';
import EditBlog from './pages/EditBlog';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar  />
        <Routes>
          <Route
            path='/'
            element={<Homepage />}
          />
          <Route
          path='/add-blog'
          element={<AddBlog />}
          />
           <Route
          path='/:id'
          element={<EditBlog />}
          />
           {/* <Route
          path='/add-user'
          element={<AddUser />}
          /> */}
        </Routes>
      </BrowserRouter>
     
    </div>
  );
  }

export default App;