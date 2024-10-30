
 // CourseSection.js
import React from 'react';

const courses = [
  {
    title: 'Web Development Bootcamp',
    description: 'Learn full-stack web development.',
    image: '/web.jpg',
    rating: 4.5,
    price: '$99.99',
  },
  {
    title: 'Data Science and Machine Learning',
    description: 'Analyze data with Python.',
    image: '/ds.jpg',
    rating: 4.8,
    price: '$129.99',
  },
  {
    title: 'Graphic Design Essentials',
    description: 'Create stunning visuals and designs.',
    image: '/gd.jpg',
    rating: 4.2,
    price: '$79.99',
  },
  {
    title: 'Digital Marketing Strategies',
    description: 'Master online marketing techniques.',
    image: '/sm.jpg',
    rating: 4.7,
    price: '$89.99',
  },
];

const CourseSection = () => {
  return (
    <section className="py-6 px-6">
      <h2 className="text-2xl font-bold mb-4">Popular Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-gray-500">{course.description}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">{Array(Math.round(course.rating)).fill('⭐')}</span>
                <span className="text-gray-500 ml-2">({course.rating})</span>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold">{course.price}</span>
                <button className="bg-black text-white px-4 py-1 rounded-md hover:bg-gray-800">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseSection;

