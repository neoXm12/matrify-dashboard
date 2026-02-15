
import React from 'react'
import { recommendations } from '../data/mock'

export function Recommendations() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-bold mb-2">Recommendations</h2>
      <ul className="list-disc list-inside">
        {recommendations.map((r) => (
          <li key={r.id}>{r.text}</li>
        ))}
      </ul>
    </div>
  )
}
