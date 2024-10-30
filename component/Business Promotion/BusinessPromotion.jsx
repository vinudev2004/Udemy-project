import React from 'react'

const BusinessPromotion = () => {
  return (
    <div>
      <section className="bg-blue-100 py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Upskill your team with Udemy Business</h2>
            <p className="text-gray-600 mb-6">
              Get unlimited access to 20,000+ top Udemy courses anytime, anywhere.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
              Get Udemy Business
            </button>
          </div>
          <img
            src="/image.png"
            alt="Udemy Business"
            className="rounded-lg shadow-lg w-full md:w-1/2 max-w-xs h-auto"
          />
        </div>
      </section>
    </div>
  )
}

export default BusinessPromotion
