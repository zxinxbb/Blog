import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AddBlog from './pages/CreateBlog';
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
           /* <Route
          path='/add-user'
          element={<AddBlog />}
          /> */ 
        </Routes>
      </BrowserRouter>
     
    </div>
  );
  }

export default App;