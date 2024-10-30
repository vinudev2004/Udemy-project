const BusinessHeader = () => {
    return (
        <header className="bg-purple-700 text-white p-6 text-center relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/sm.jpg')" }} />
            <h1 className="text-4xl font-bold relative z-10">Udemy for Business</h1>
            <p className="mt-2 text-lg relative z-10">Empower your team with world-class learning.</p>
            <div className="mt-4 relative z-10">
                <button className="bg-white text-purple-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Get Started
                </button>
            </div>
        </header>
    );
};

  
  export default BusinessHeader;
  