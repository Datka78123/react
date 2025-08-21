import { useState } from "react";

export default function usePagination(initialPage = 1) {
    const [page, setPage] = useState(initialPage);

    const nextPage = () => setPage((p) => p + 1);
    const prevPage = () => setPage((p) => Math.max(p - 1, 1));

    return { page, nextPage, prevPage };
}
