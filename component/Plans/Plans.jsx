import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'Access to basic courses',
      'Community support',
      'Certificate of completion',
    ],
  },
  {
    name: 'Standard',
    price: '$19.99/month',
    features: [
      'Access to all courses',
      'Offline access',
      'Certificate of completion',
    ],
  },
  {
    name: 'Premium',
    price: '$29.99/month',
    features: [
      'Access to all courses',
      'Offline access',
      '1-on-1 mentorship',
      'Certificate of completion',
    ],
  },
];

const Work = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
      <h1 className="text-4xl font-bold mb-10">Udemy Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white rounded-lg shadow-lg p-5 text-center">
            <h2 className="text-2xl font-semibold mb-3">{plan.name}</h2>
            <p className="text-xl font-bold text-gray-700 mb-5">{plan.price}</p>
            <ul className="list-disc list-inside mb-5">
              {plan.features.map((feature) => (
                <li key={feature} className="text-gray-600">{feature}</li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
