import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import useTheme from "./hooks/useTheme";

const Gallery = lazy(() => import("./pages/gallery"));
const ArticlePage = lazy(() => import("./pages/articlePage"));

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="p-[20px]">
        <nav className="mb-[20px]">
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/gallery" style={{ marginRight: "10px" }}>
            Gallery
          </Link>
          <Link to="/article">Article</Link>
          <button
            onClick={toggleTheme}
            style={{ marginLeft: "20px", padding: "5px 10px" }}
          >
            Toggle Theme ({theme})
          </button>
        </nav>
        <Suspense fallback={<p>Loading page...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/article" element={<ArticlePage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
