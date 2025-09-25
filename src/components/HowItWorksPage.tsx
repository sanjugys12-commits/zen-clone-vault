import { Search, Users, Send, MessageCircle, ArrowRight, Target, BarChart3, Shield, Clock } from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Zenvve prospects and qualifies your target leads",
      description: "Our expert team researches and identifies high-quality prospects that match your ideal customer profile. We use advanced search techniques and qualification criteria to ensure every lead has genuine potential for your business.",
      details: [
        "Deep research into your target market and ideal customer profile",
        "Advanced LinkedIn search and filtering techniques",
        "Lead qualification based on company size, role, industry, and activity",
        "Verification of contact information and engagement potential"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      number: 2,
      icon: Users,
      title: "Our network of SDRs are activated for outreach",
      description: "We activate our network of SDRs specifically for your campaign. Each SDR is experienced and understands LinkedIn best practices for effective outreach.",
      details: [
        "Experienced SDRs with established LinkedIn presence and connections",
        "SDRs who understand LinkedIn etiquette and compliance",
        "Strategic SDR selection based on your target audience",
        "Proper account warming and preparation for outreach campaigns"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      number: 3,
      icon: Send,
      title: "Account owners execute personalized outreach",
      description: "Our team crafts and sends personalized messages that resonate with your prospects. Each message is tailored to the recipient and follows proven outreach sequences that maximize response rates while maintaining authenticity.",
      details: [
        "Personalized messaging based on prospect research and profile analysis",
        "Multi-touch sequences with strategic timing and follow-ups",
        "A/B testing of message templates to optimize performance",
        "Compliance with LinkedIn's terms of service and best practices"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      number: 4,
      icon: MessageCircle,
      title: "You receive replies and booked meetings directly",
      description: "All positive responses, meeting requests, and interested prospects are forwarded directly to you. You only deal with warm leads who have already expressed interest, allowing you to focus on closing deals rather than cold outreach.",
      details: [
        "Qualified responses filtered and forwarded to your inbox",
        "Meeting booking links and calendar integration support",
        "Lead scoring and prioritization based on engagement level",
        "Detailed context and conversation history for each prospect"
      ],
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Higher Quality Leads",
      description: "Our prospecting expertise ensures you only connect with qualified prospects who match your ideal customer profile."
    },
    {
      icon: Shield,
      title: "Brand Safety",
      description: "Using separate accounts protects your brand while maintaining professional outreach standards."
    },
    {
      icon: BarChart3,
      title: "Scalable Results",
      description: "Add more accounts anytime to increase your outreach capacity and lead generation volume."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Focus on closing deals while we handle the time-consuming prospecting and outreach process."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Zenvve Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We find your leads and run outreach at scale.
            </p>
          </div>

          {/* Scale Example */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Scale Example
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Massive Scale, Zero Effort
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                With 20 accounts, you can scale up to <span className="font-bold text-blue-600">3,000+ new connections per month</span> — all with leads we find for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 1;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={isEven ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                        <IconComponent className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <div className="text-sm font-semibold text-gray-500">
                        Step {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {step.title}
                    </h3>
                    
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-4">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? 'lg:col-start-1' : ''}>
                    <div className={`bg-white rounded-2xl shadow-lg p-8 border-2 border-dashed ${step.borderColor}`}>
                      <div className="text-center">
                        <div className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                          <IconComponent className={`w-10 h-10 ${step.color}`} />
                        </div>
                        <div className="text-6xl font-bold text-gray-200 mb-4">
                          {step.number}
                        </div>
                        <div className="space-y-3">
                          <div className="h-3 bg-gray-200 rounded w-full"></div>
                          <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why This Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our systematic approach delivers consistent results while protecting your brand and saving your time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
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

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Timeline: From Setup to Results
            </h2>
            <p className="text-xl text-gray-600">
              Here's what you can expect in your first month with Zenvve
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Days 1-3: Campaign Setup</h3>
                <p className="text-gray-600">We analyze your ideal customer profile, research your target market, and prepare our accounts for your campaign.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Days 4-7: Outreach Launch</h3>
                <p className="text-gray-600">We begin sending personalized connection requests and messages to your qualified prospects across multiple accounts.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Days 8-14: First Responses</h3>
                <p className="text-gray-600">You start receiving your first warm replies and meeting requests as prospects engage with our outreach.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Days 15-30: Full Scale Results</h3>
                <p className="text-gray-600">Your campaign reaches full capacity with consistent daily replies, booked meetings, and qualified leads flowing to your inbox.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your LinkedIn Outreach?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let us handle the prospecting and outreach while you focus on closing deals. 
            Start receiving warm replies and booked meetings in your first week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pricing"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold text-lg shadow-lg flex items-center justify-center group"
            >
              See Pricing & Book a Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;