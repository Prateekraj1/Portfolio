import React from 'react'

const loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="w-40 h-40 rounded-lg bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 animate-shimmer" />
    </div>
  )
}

export default loading