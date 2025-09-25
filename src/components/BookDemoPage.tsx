import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const formSchema = z.object({
  full_name: z.string().min(2, 'Full name must be at least 2 characters'),
  work_email: z
    .string()
    .email('Invalid email address')
    .refine((email) => {
      // Business email validation - reject common personal email domains
      const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'];
      const domain = email.split('@')[1]?.toLowerCase();
      return !personalDomains.includes(domain);
    }, 'Please use a business email address'),
  company_name: z.string().min(2, 'Company name must be at least 2 characters'),
  job_title: z.string().optional(),
  phone_number: z.string().optional(),
  linkedin_accounts_needed: z.string().min(1, 'Please select number of accounts needed'),
  monthly_outreach_goal: z.string().optional(),
  timeline_to_start: z.string().min(1, 'Please select your timeline'),
});

type FormData = z.infer<typeof formSchema>;

const BookDemoPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: '',
      work_email: '',
      company_name: '',
      job_title: '',
      phone_number: '',
      linkedin_accounts_needed: '',
      monthly_outreach_goal: '',
      timeline_to_start: '',
    },
  });

  const onSubmit = async (values: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Create FormData object for Formspree submission
      const formData = new FormData();
      
      // Add all form fields with proper names
      formData.append('full_name', values.full_name);
      formData.append('work_email', values.work_email);
      formData.append('company_name', values.company_name);
      formData.append('job_title', values.job_title || '');
      formData.append('phone_number', values.phone_number || '');
      formData.append('linkedin_accounts_needed', values.linkedin_accounts_needed);
      formData.append('monthly_outreach_goal', values.monthly_outreach_goal || '');
      formData.append('timeline_to_start', values.timeline_to_start);
      
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xwprkgey', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        toast({
          title: "Demo Request Submitted!",
          description: "Thanks! Our team will reach out within 24 hours to discuss your outreach needs.",
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center animate-fade-in"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thanks! We've Got Your Request
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our team will reach out within 24 hours to discuss your outreach needs and schedule your personalized demo.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="mr-4"
            >
              Submit Another Request
            </Button>
            <Button
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 animate-fade-in"
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Book Your Demo
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book a Demo with Zenvve
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tell us a little about your outreach needs and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 animate-scale-in"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Honeypot field for spam prevention */}
              <input 
                type="text" 
                name="website" 
                style={{display: 'none'}} 
                tabIndex={-1} 
                autoComplete="off" 
              />
              
              {/* Row 1: Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-medium">
                        Full Name *
                      </FormLabel>
                      <FormControl>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            placeholder="John Doe"
                            className="transition-all duration-200"
                            {...field}
                          />
                        </motion.div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="work_email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-medium">
                        Work Email *
                      </FormLabel>
                      <FormControl>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            className="transition-all duration-200"
                            {...field}
                          />
                        </motion.div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Row 2: Company and Job Title */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="company_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-medium">
                        Company Name *
                      </FormLabel>
                      <FormControl>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            placeholder="Acme Inc."
                            className="transition-all duration-200"
                            {...field}
                          />
                        </motion.div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="job_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-medium">
                        Job Title
                      </FormLabel>
                      <FormControl>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            placeholder="CEO, Sales Director, etc."
                            className="transition-all duration-200"
                            {...field}
                          />
                        </motion.div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Row 3: Phone and LinkedIn Accounts */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-medium">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            className="transition-all duration-200"
                            {...field}
                          />
                        </motion.div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="linkedin_accounts_needed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-medium">
                        Number of LinkedIn Accounts Needed *
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <motion.div
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <SelectTrigger className="transition-all duration-200">
                              <SelectValue placeholder="Select account range" />
                            </SelectTrigger>
                          </motion.div>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="10-15">10–15 Accounts</SelectItem>
                          <SelectItem value="20-25">20–25 Accounts</SelectItem>
                          <SelectItem value="50+">50+ Accounts</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Row 4: Outreach Goal and Timeline */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="monthly_outreach_goal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-medium">
                        Monthly Outreach Goal
                      </FormLabel>
                      <FormControl>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            placeholder="e.g., 1000 prospects per month"
                            className="transition-all duration-200"
                            {...field}
                          />
                        </motion.div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline_to_start"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-medium">
                        Timeline to Start *
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <motion.div
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <SelectTrigger className="transition-all duration-200">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                          </motion.div>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="within-1-month">Within 1 month</SelectItem>
                          <SelectItem value="later">Later</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-4 text-lg font-semibold transition-all duration-200 hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Booking Demo...
                      </>
                    ) : (
                      'Book a Demo'
                    )}
                  </Button>
                </motion.div>
              </div>
            </form>
          </Form>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center animate-fade-in"
        >
          <p className="text-gray-600 text-sm mb-4">Trusted by growing businesses worldwide</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-sm font-semibold text-gray-700">500+ Companies</div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="text-sm font-semibold text-gray-700">85% Success Rate</div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="text-sm font-semibold text-gray-700">24h Response Time</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookDemoPage;