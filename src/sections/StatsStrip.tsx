
import React from 'react'
import { stats } from '../data/mock'
import { StatBadge } from '../components/StatBadge'

export function StatsStrip() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((s) => (
        <StatBadge key={s.id} {...s} />
      ))}
    </div>
  )
}
