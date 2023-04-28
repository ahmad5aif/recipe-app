import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Search() {

  const navigate = useNavigate();
  const [value, setValue] = useState('')

  const handleSearch = (event) => {
    navigate(`/search?query=${value}`)
  }

  return (
    <>
      <div className="search container">
        <input
          placeholder='Type to search'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        
        <button onClick={handleSearch} >

          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true">
            <path d="m19 19-3.5-3.5"></path>
            <circle cx="11" cy="11" r="6"></circle>
          </svg>

        </button>

      </div>
    </>
  )
}