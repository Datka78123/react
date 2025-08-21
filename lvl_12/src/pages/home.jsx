
import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Welcome to the Gallery App 🚀</h1>
            <p>Choose a page:</p>
            <Link to="/gallery">Go to Gallery</Link>
        </div>
    );
}

export default Home;
