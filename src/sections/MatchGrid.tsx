
import React from 'react'
import { profiles } from '../data/mock'
import { MatchCard } from '../components/MatchCard'

export function MatchGrid() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Your Matches</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {profiles.map((p) => (
          <MatchCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  )
}
