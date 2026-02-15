
import React from 'react'
import { Stat } from '../types'

export function StatBadge({ label, value }: Stat) {
  return (
    <div className="bg-white rounded-xl shadow p-4 text-center">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  )
}
