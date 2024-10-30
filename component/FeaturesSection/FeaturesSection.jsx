const FeaturesSection = () => {
    const features = [
        { text: 'Extensive Course Library', icon: '📚' },
        { text: 'Expert Instructors', icon: '👨‍🏫' },
        { text: 'Custom Learning Paths', icon: '🛤️' },
        { text: 'Analytics and Reporting', icon: '📊' },
    ];

    return (
        <section className="p-8 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature) => (
                    <div
                        key={feature.text}
                        className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105"
                    >
                        <div className="text-4xl text-blue-500 mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold">{feature.text}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};



  export default FeaturesSection;
  