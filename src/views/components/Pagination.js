"use client";

export default function Pagination({ next, previous, onNext, onPrev }) {
    return (
        <div style={{ marginTop: "1rem" }}>
            <button onClick={onPrev} disabled={!previous} style={{ marginRight: "1rem" }}>
                Previous
            </button>
            <button onClick={onNext} disabled={!next}>
                Next
            </button>
        </div>
    );
}
