const BenefitsSection = () => {
    const benefits = [
        {
            title: "Diverse Course Selection",
            description: "Access thousands of courses across various fields to meet your team's needs.",
        },
        {
            title: "Expert Instructors",
            description: "Learn from industry leaders and experienced professionals.",
        },
        {
            title: "Flexible Learning",
            description: "Allow your team to learn at their own pace, anytime and anywhere.",
        },
        {
            title: "Engagement Analytics",
            description: "Track progress and engagement with robust reporting tools.",
        },
    ];

    return (
        <section className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center">Why Choose Udemy for Business?</h2>
            <p className="mt-4 text-center max-w-2xl mx-auto">
                Improve skills, enhance productivity, and drive engagement with our comprehensive learning platform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {benefits.map((benefit, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105"
                    >
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-gray-700">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

  
  export default BenefitsSection;
  