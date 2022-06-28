import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Product';
import ForumHome from './pages/ForumHome';
import ForumPost from './pages/ForumPost';
import CompletedSignUp from './pages/CompletedSignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="seg3125-p2-engine/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="completed-signup" element={<CompletedSignUp />} />
          <Route path="product" element={<Product />} />
          <Route path="forums">
            <Route index element={<ForumHome />} />
            <Route path="post" element={<ForumPost />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

