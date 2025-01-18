import React, { useState, useEffect } from "react";
import axios from "axios";

const InAppBrowser = ({ query }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query) {
            setLoading(true);
            axios
                .get(`https://api.duckduckgo.com`, {
                    params: {
                        q: query,
                        format: "json",
                        pretty: 1,
                    },
                })
                .then((response) => {
                    setResults(response.data.RelatedTopics || []);
                    setLoading(false);
                })
                .catch((error) => {
                    setError("Failed to fetch results");
                    setLoading(false);
                });
        }
    }, [query]);

    return (
        <div className="in-app-browser">
            {loading && <p>Loading results...</p>}
            {error && <p>{error}</p>}
            {results.length === 0 && !loading && !error && <p>No results found.</p>}
            {results.map((result, index) => (
                <div key={index} className="search-result">
                    {result.Result && (
                        <>
                            <h3>
                                <a href={result.FirstURL} target="_blank" rel="noopener noreferrer">
                                    {result.Text}
                                </a>
                            </h3>
                            <p>{result.Text}</p>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default InAppBrowser;