const BusinessOverview = () => {
    return (
        <section className="p-8 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-center rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Transform Your Organization</h2>
            <p className="mt-4 max-w-xl mx-auto">
                With Udemy for Business, provide your team with access to thousands of courses tailored to enhance skills and drive success.
            </p>
            <div className="mt-6">
                <img 
                    src="/flat-2.png" 
                    alt="Team Collaboration" 
                    className="mx-auto w-3/4 md:w-1/2"
                />
            </div>
            <div className="mt-8">
                <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Explore Courses
                </button>
            </div>
        </section>
    );
};

  
  export default BusinessOverview;
  