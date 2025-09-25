import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Ready to Scale Your Outreach?
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Stop Wasting Time on Manual Outreach
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join other businesses who have transformed their lead generation with Zenvve. 
            Get warm replies and booked meetings delivered directly to your inbox.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">85%</div>
              <div className="text-blue-100">Higher Response Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">3x</div>
              <div className="text-blue-100">More Meetings Booked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50%</div>
              <div className="text-blue-100">Cost Savings vs SDRs</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-demo"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              See Pricing & Book a Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/how-it-works"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg"
            >
              Learn How It Works
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-100 text-sm mb-4">Trusted by growing businesses worldwide</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-lg font-semibold text-white">500+ Companies</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-lg font-semibold text-white">10k+ Leads Generated</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-lg font-semibold text-white">85% Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;