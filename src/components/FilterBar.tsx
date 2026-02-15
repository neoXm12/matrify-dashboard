
import React from 'react'

export function FilterBar() {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex gap-2">
      <input
        type="text"
        placeholder="Search matches..."
        className="flex-1 border rounded px-3 py-2"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
    </div>
  )
}
