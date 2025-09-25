import { Search, Users, Send, MessageCircle, ArrowRight } from 'lucide-react';

const HowItWorksPreview = () => {
  const steps = [
    {
      icon: Search,
      title: "Zenvve Prospects Your Leads",
      description: "We research and identify high-quality prospects that match your ideal customer profile.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Users,
      title: "Accounts Activated",
      description: "Our network of SDRs is activated for your campaign.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Send,
      title: "Outreach Executed",
      description: "We run personalized outreach campaigns across multiple accounts to maximize reach.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: MessageCircle,
      title: "You Get Replies",
      description: "Receive warm replies and booked meetings directly in your inbox - ready to close.",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Simple Process, Powerful Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined 4-step process takes care of everything from prospecting to delivery, 
            so you can focus on closing deals.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="relative h-full">
                    <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-gray-200 hover:border-blue-300 transition-all duration-300 group h-full flex flex-col">
                      <div className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-8 h-8 ${step.color}`} />
                      </div>
                      <div className="text-sm font-semibold text-gray-500 mb-2">
                        Step {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed flex-grow">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Arrow between steps */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`w-8 h-8 ${step.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-500 mb-2">
                          Step {index + 1}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-blue-600 rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/how-it-works"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group"
          >
            Learn More About Our Process
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPreview;