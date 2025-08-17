import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="text-center text-[#fff]">
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
