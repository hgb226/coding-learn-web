'use client';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useState } from 'react';

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]); // Local dummy data for search results

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    setIsLoading(true);

    // Simulate a delay for loading
    setTimeout(() => {
      setIsLoading(false);
      setSearchResults(value ? [`Result for "${value}"`] : []);
    }, 500); // Adjust time as needed for simulation
  };

  const deleteText = () => {
    setQuery('');
    setSearchResults([]);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
      <div className="relative">
        <div
            className={
              isFocused
                  ? 'border bg-white border-black rounded-2xl flex-1 h-10 px-2 sm:px-4 transition duration-200 w-full flex items-center'
                  : 'border bg-white border-gray-300 rounded-2xl flex-1 h-10 px-2 sm:px-4 transition duration-200 w-full flex items-center'
            }
        >
          <SearchIcon className="opacity-70 lg:mr-2 w-1/12"></SearchIcon>
          <input
              type="text"
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="search...."
              value={query}
              className="border-none flex-1 h-full outline-none px-0 sm:px-4 text-sm"
              onChange={handleInputChange}
          />
          {query && <CancelIcon onClick={deleteText} className="object-right opacity-50 ml-4"></CancelIcon>}
        </div>
        {query && (
            <div className="absolute top-full left-0 w-full rounded-lg bg-white shadow-xl z-10 mt-4">
              {isLoading ? (
                  <div className="items-center p-4">
                    <Stack sx={{ color: 'grey.500', alignItems: 'center' }} spacing={2} direction="row">
                      <CircularProgress color="inherit" size={20} />
                      <span>Searching &quot;{query}&quot;</span>
                    </Stack>
                  </div>
              ) : (
                  <div className="items-center p-4">
                    <SearchIcon className="opacity-60 mr-2"></SearchIcon>
                    {searchResults.length === 0 ? (
                        <span className="text-gray-500">No result for &quot;{query}&quot;</span>
                    ) : (
                        <span className="text-gray-500">Result for &quot;{query}&quot;</span>
                    )}

                    {searchResults.map((result, index) => (
                        <div key={index} className="p-2 cursor-pointer">
                          {result}
                        </div>
                    ))}
                  </div>
              )}
            </div>
        )}
      </div>
  );
};

export default SearchComponent;
