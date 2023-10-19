"use client"
import React, { useState, useEffect } from 'react';

const UseCaseDetails = ({ useCase }) => {

    
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setPdfFile(file);
    };

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async () => {
        // Perform file upload and API requests here
        // ...

        // Update the response state
        // setResponse(result);
    };
    const [pdfFile, setPdfFile] = useState(null);
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    return (
        <div className="flex flex-1 flex-col">
            {/* Header */}
            {/* ... your existing header code ... */}

            {/* Main Content */}
            <div className="container relative flex flex-col md:grid md:space-y-0 w-full md:grid-cols-12 md:flex-1 md:grid-rows-full space-y-4 md:gap-6">
                {/* Left Section */}
                <section className="pt-8 border-gray-100 md:col-span-7 pb-24 relative break-words copiable-code-container">
                    <div className="mb-6">
                        <h2 className="text-4xl font-bold mb-4">{useCase.title}</h2>
                        <p>{useCase.content}</p>

                        {/* Model Description */}
                        <div className="mt-8">
                            <h3 className="text-2xl font-bold mb-2">Model Description</h3>
                            {useCase.modelDescription}
                        </div>

                        {/* Model Sources */}
                        <div className="mt-8">
                            <h3 className="text-2xl font-bold mb-2">Model Sources</h3>
                            {/* ... Model Sources content ... */}
                        </div>

                        {/* Evaluation */}
                        <div className="mt-8">
                            <h3 className="text-2xl font-bold mb-2">Evaluation</h3>
                            {/* ... Evaluation content ... */}
                        </div>

                        {/* Diffusers Section */}
                        <div className="mt-8">
                            <h3 className="text-2xl font-bold mb-2">🧨 Diffusers</h3>
                            {/* ... Diffusers Section content ... */}
                        </div>
                    </div>
                </section>

                {/* Right Section (PDF Upload and Query) */}
                <section className="pt-8 border-gray-100 md:col-span-5 pt-6 md:pb-24 md:pl-6 md:border-l order-first md:order-none">
                    <div className='divider-column-vertical'></div>
                    <div className="m-4">
                        <div className="mb-4">
                            <label htmlFor="pdfUpload" className="block text-sm font-medium text-gray-500">
                                Upload your PDF
                            </label>
                            <input
                                type="file"
                                id="pdfUpload"
                                accept=".pdf"
                                onChange={handleFileUpload}
                                className="mt-1 p-2 border rounded-md"
                            />
                        </div>

                        {pdfFile && (
                            <div className="mb-4">
                                <label htmlFor="query" className="block text-sm font-medium text-gray-500">
                                    Ask questions about your PDF file:
                                </label>
                                <input
                                    type="text"
                                    id="query"
                                    value={query}
                                    onChange={handleQueryChange}
                                    className="mt-1 p-2 border rounded-md"
                                />
                            </div>
                        )}

                        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Submit
                        </button>

                        {response && (
                            <div className="mt-4">
                                <h2 className="text-2xl font-bold">Response:</h2>
                                <p>{response}</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default UseCaseDetails