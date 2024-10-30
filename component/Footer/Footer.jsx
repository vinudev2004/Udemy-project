import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-gray-700 text-white text-center p-6">
      <h2 className="text-lg font-bold mb-4">Top companies choose Udemy Business to build in-demand career skills.</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <a href="/udemy-business" className="hover:underline">Udemy Business</a>
        <a href="/teach" className="hover:underline">Teach on Udemy</a>
        <a href="/app" className="hover:underline">Get the app</a>
        <a href="/about" className="hover:underline">About us</a>
        <a href="/contact" className="hover:underline">Contact us</a>
        <a href="/careers" className="hover:underline">Careers</a>
        <a href="/blog" className="hover:underline">Blog</a>
        <a href="/help" className="hover:underline">Help and Support</a>
        <a href="/affiliate" className="hover:underline">Affiliate</a>
        <a href="/investors" className="hover:underline">Investors</a>
        <a href="/terms" className="hover:underline">Terms</a>
        <a href="/privacy" className="hover:underline">Privacy policy</a>
        <a href="/sitemap" className="hover:underline">Sitemap</a>
        <a href="/accessibility" className="hover:underline">Accessibility statement</a>
      </div>
    </footer>
      </>
  )
}

export default Footer