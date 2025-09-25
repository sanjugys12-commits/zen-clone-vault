import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star } from 'lucide-react';

const PricingPage = () => {

  const pricingTiers = [
    {
      name: 'Starter Pack',
      accounts: '15 Accounts',
      monthlyPrice: 1799,
      prospects: '1,500 prospects per week',
      popular: false
    },
    {
      name: 'Growth Pack',
      accounts: '25 Accounts',
      monthlyPrice: 2799,
      prospects: '2,500 prospects per week',
      popular: true
    },
    {
      name: 'Custom Pack',
      accounts: 'Custom Accounts',
      monthlyPrice: null,
      prospects: 'Tailored to your needs',
      popular: false,
      custom: true
    }
  ];

  const allFeatures = [
    'Lead prospecting done for you',
    'Real human-managed accounts',
    'Outreach fully managed',
    'Weekly reporting',
    'Dedicated support',
    'Custom message templates',
    'A/B testing included',
    'Scalable account expansion anytime'
  ];

  const faqs = [
    {
      question: 'Do you prospect the leads or do I have to provide them?',
      answer: 'We handle all the prospecting for you! Our team researches and identifies high-quality prospects that match your ideal customer profile. You don\'t need to provide lead lists or spend time on manual research - we take care of everything from finding leads to qualifying them before outreach.'
    },
    {
      question: 'Are these real accounts?',
      answer: 'Yes, absolutely. We use genuine, human-managed LinkedIn accounts - not bots or automation tools. Each account is operated by real people who understand LinkedIn\'s best practices and maintain authentic engagement patterns. This ensures higher deliverability, better response rates, and complete compliance with LinkedIn\'s terms of service.'
    },
    {
      question: 'Is this safe for my brand?',
      answer: 'Completely safe. Since we use separate, real LinkedIn accounts (not your company accounts), there\'s zero risk to your brand or existing LinkedIn presence. Our human-managed approach ensures all outreach follows LinkedIn\'s guidelines, and we maintain professional communication standards that reflect positively on your business.'
    },
    {
      question: 'Can I add more accounts later?',
      answer: 'Yes, you can easily upgrade your account pack at any time. Whether you want to scale from 10 to 20 accounts or jump to our Scale Pack, we can accommodate your growing needs. Contact our support team and we\'ll help you transition to a larger pack seamlessly.'
    },
    {
      question: 'Do I need Sales Navigator?',
      answer: 'No, you don\'t need to purchase Sales Navigator. Our team has access to all the prospecting tools and premium LinkedIn features needed to find and qualify your leads. This is all included in your account pack pricing - no additional subscriptions required.'
    },
    {
      question: 'How quickly can you get started?',
      answer: 'We can typically get your campaign up and running within 3-5 business days. This includes account setup, lead research based on your ideal customer profile, and launching your first outreach sequences. You\'ll start seeing replies within the first week.'
    },
    {
      question: 'What kind of reporting do you provide?',
      answer: 'You\'ll receive comprehensive weekly reports showing key metrics like messages sent, connection requests, response rates, meeting bookings, and lead quality scores. We also provide insights and recommendations to continuously improve your campaign performance.'
    },
    {
      question: 'Can I customize the outreach messages?',
      answer: 'Absolutely! We work with you to create personalized message templates that reflect your brand voice and value proposition. Our team will craft compelling sequences that resonate with your target audience, and we continuously optimize based on response rates and feedback.'
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose the Right Account Pack
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              All plans include lead prospecting + outreach. The only difference is how many accounts you want to scale with.
            </p>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What's Included in All Plans
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {allFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-blue-400 group ${
                  tier.popular
                    ? 'border-blue-500 scale-105'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {tier.name}
                    </h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-200">
                      {tier.custom ? (
                        <span>Custom Pricing</span>
                      ) : (
                        <>
                          ${tier.monthlyPrice?.toLocaleString()}
                          <span className="text-lg text-gray-600 font-normal">/month</span>
                        </>
                      )}
                    </div>
                    <div className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {tier.accounts}
                    </div>
                    <p className="text-gray-600 text-sm font-medium group-hover:text-gray-700 transition-colors duration-200">
                      {tier.custom ? tier.prospects : `Up to ${tier.prospects}`}
                    </p>
                  </div>

                  <Link
                    to="/book-demo"
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group ${
                      tier.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    Book a Demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our LinkedIn outreach service
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`transform transition-transform duration-200 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
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
            Join hundreds of businesses who have transformed their lead generation with Zenvve. 
            Start getting warm replies and booked meetings delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-demo" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold text-lg shadow-lg">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;