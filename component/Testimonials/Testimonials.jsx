import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8">What Our Customers Say</h3>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="p-6 border rounded shadow-lg">
            <p>"Udemy Business has transformed our team's skill set!"</p>
            <p className="font-bold">- John Doe</p>
          </div>
          <div className="p-6 border rounded shadow-lg">
            <p>"The course variety is incredible and very beneficial."</p>
            <p className="font-bold">- Jane Smith</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
