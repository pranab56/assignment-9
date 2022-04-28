import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/component/Home/Home'
import Review from '../src/component/Review/Review'
import DashBoard from '../src/component/Dashboard/DashBoard';
import About from '../src/component/About/About';
import Blogs from '../src/component/Blogs/Blogs'
import Heder from './component/Heder/Heder';
import NotFound from './component/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <Heder></Heder>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
