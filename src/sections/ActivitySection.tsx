
import React from 'react'
import { activities } from '../data/mock'

export function ActivitySection() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-bold mb-2">Recent Activity</h2>
      <ul className="space-y-2">
        {activities.map((a) => (
          <li key={a.id} className="text-sm text-gray-700">
            <span className="font-semibold">{a.user}</span> {a.action} - <span className="text-gray-500">{a.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
