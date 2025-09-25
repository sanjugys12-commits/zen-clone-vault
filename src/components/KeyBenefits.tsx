import { Target, Users, Shield, Settings } from 'lucide-react';

const KeyBenefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "We Find & Qualify Leads for You",
      description: "Our team researches and identifies high-quality prospects that match your ideal customer profile.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Scale Outreach Instantly",
      description: "Reach more prospects simultaneously using our network of SDRs, dramatically increasing your outreach capacity.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Shield,
      title: "SDR Managed Accounts",
      description: "Our network of SDRs ensures higher deliverability, better engagement, and compliance with LinkedIn's terms.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Settings,
      title: "Fully Managed Outreach",
      description: "From initial contact to follow-ups, we handle the entire outreach process so you can focus on closing deals.",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Zenvve for LinkedIn Outreach?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stop wasting time on manual prospecting and cold outreach. Let our expert team handle 
            the entire process while you focus on what matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100"
              >
                <div className={`w-14 h-14 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;