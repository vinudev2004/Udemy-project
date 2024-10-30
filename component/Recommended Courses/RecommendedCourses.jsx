const recommendedCourses = [
    {
      title: 'Introduction to React',
      description: 'Build user interfaces with React.',
      image: '/image-7.png',
      rating: 4.6,
      price: '$89.99',
    },
    {
      title: 'Python for Everybody',
      description: 'Learn Python from scratch.',
      image: '/image-3.png',
      rating: 4.7,
      price: '$99.99',
    },
    {
      title: 'UX/UI Design Bootcamp',
      description: 'Understand user experience and design principles.',
      image: '/image-4.jpg',
      rating: 4.4,
      price: '$79.99',
    },
    {
      title: 'Cloud Computing Basics',
      description: 'Introduction to cloud technologies.',
      image: '/cm.jpg',
      rating: 4.5,
      price: '$109.99',
    },
  ];
  
  const RecommendedSection = () => {
    const handleEnroll = (courseTitle) => {
      alert(`You have enrolled in ${courseTitle}!`);
    };
  
    return (
      <section className="py-6 px-6">
        <h2 className="text-2xl font-bold mb-4">Recommended Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
              <img src={course.image} alt={`${course.title} course`} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-gray-500">{course.description}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">{Array(Math.round(course.rating)).fill('⭐')}</span>
                  <span className="text-gray-500 ml-2">({course.rating})</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-bold">{course.price}</span>
                  <button 
                    className="bg-black text-white px-4 py-1 rounded-md hover:bg-gray-800"
                    onClick={() => handleEnroll(course.title)}
                  >
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
  
  export default RecommendedSection;
  