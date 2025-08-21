import { memo } from "react";

function ImageCard({ img, onClick }) {
    return (
        <div
            style={{
                borderRadius: "10px",
                overflow: "hidden",
                cursor: "pointer",
            }}
            onClick={() => onClick(img)}
        >
            <img
                src={img.urls.small}
                alt={img.alt_description}
                style={{ width: "300px", borderRadius: "10px" }}
            />
        </div>
    );
}

export default memo(ImageCard);
