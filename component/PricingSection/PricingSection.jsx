const PricingSection = () => {
    const plans = [
        {
            name: "Basic Plan",
            price: "$29/month",
            features: [
                "Access to 100+ courses",
                "Email support",
                "Basic reporting",
            ],
        },
        {
            name: "Pro Plan",
            price: "$49/month",
            features: [
                "Access to all courses",
                "Priority support",
                "Advanced reporting",
                "Custom learning paths",
            ],
        },
        {
            name: "Enterprise Plan",
            price: "Contact Us",
            features: [
                "Unlimited course access",
                "Dedicated account manager",
                "Custom integrations",
                "Tailored training solutions",
            ],
        },
    ];

    return (
        <section className="p-8 bg-gray-100 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-bold mb-4">Flexible Pricing Plans</h2>
            <p className="mt-4">Choose a plan that fits your organization’s needs.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                        <p className="text-xl font-bold text-purple-600 mb-4">{plan.price}</p>
                        <ul className="list-disc list-inside mb-4 text-left">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="text-gray-700">{feature}</li>
                            ))}
                        </ul>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                            Get a Quote
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

  
  export default PricingSection;
  