const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "Udemy for Business has transformed our team's skills!",
            name: "HR Manager",
            position: "HR Department",
        },
        {
            quote: "The courses are incredibly engaging and relevant!",
            name: "Software Engineer",
            position: "Tech Team",
        },
        {
            quote: "Our productivity has skyrocketed since we started using Udemy!",
            name: "Project Manager",
            position: "Operations",
        },
        {
            quote: "The platform is user-friendly and filled with valuable resources!",
            name: "Marketing Director",
            position: "Marketing",
        },
    ];

    return (
        <section className="p-8 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105"
                    >
                        <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                        <p className="mt-4 font-semibold">{testimonial.name}</p>
                        <p className="text-gray-500">{testimonial.position}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

  
  export default TestimonialsSection;
  