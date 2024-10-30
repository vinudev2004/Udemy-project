import React from 'react'

const HeroSection = () => {
  return (
    <div>
       <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Learn at your own pace</h1>
          <p className="text-lg text-gray-600 mb-6">
            Build skills with courses, certificates, and degrees online from world-class institutions.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
            Get Started
          </button>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
