
import React from "react";
import { Search } from "lucide-react";

interface FAQSearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
}

const FAQSearchBar = ({ searchTerm, onSearchChange, onClearSearch }: FAQSearchBarProps) => {
  return (
    <div className="relative mb-6 flex items-center">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search for questions..."
          className="w-full py-3 pl-12 pr-10 bg-white rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
        />
        {searchTerm && (
          <button
            onClick={onClearSearch}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default FAQSearchBar;
