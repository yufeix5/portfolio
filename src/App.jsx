import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Works from "./pages/Works";
import WorkDetail from "./pages/WorkDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* 永远显示 */}
      <NavBar />

      {/* 路由切换的只有 main 内容 */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:slug" element={<WorkDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      {/* 永远显示 */}
      <Footer />
    </div>
  );
}
