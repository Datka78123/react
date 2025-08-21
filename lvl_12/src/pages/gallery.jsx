import { useMemo, useCallback } from "react";
import useFetch from "../hooks/useFetch";
import usePagination from "../hooks/usePagination";
import ImageCard from "../components/ImageCard";

function Gallery() {
    const accessKey = "3YN7l39L6cXUcUUHeqXEoXsXjS_nJ0NckE4f_JFykWk"; 
    const query = "cars"; 

    const { page, nextPage, prevPage } = usePagination();
    const { data, loading, error } = useFetch(
        `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${accessKey}`
    );

    const images = useMemo(() => data?.results || [], [data]);

    const handleClick = useCallback((img) => {
        alert(`You clicked: ${img.alt_description}`);
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return null;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Gallery: {query}</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {images.map((img) => (
                    <ImageCard key={img.id} img={img} onClick={handleClick} />
                ))}
            </div>
            <div style={{ marginTop: "20px" }}>
                <button onClick={prevPage} disabled={page === 1}>
                    Prev
                </button>
                <span style={{ margin: "0 10px" }}>Page {page}</span>
                <button onClick={nextPage}>Next</button>
            </div>
        </div>
    );
}

export default Gallery;
