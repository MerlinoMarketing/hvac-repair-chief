'use client';

import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Client-side validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[\d\s()+-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous messages
    setSubmitMessage('');
    setErrors({});

    // Validate form
    if (!validateForm()) {
      setSubmitStatus('error');
      setSubmitMessage('Please fix the errors in the form');
      return;
    }

    // Set loading state
    setSubmitStatus('loading');

    try {
      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success!
        setSubmitStatus('success');
        setSubmitMessage(data.message || 'Thank you! We will contact you shortly.');

        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });

        // Auto-hide success message after 10 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setSubmitMessage('');
        }, 10000);
      } else {
        // Handle validation errors from server
        if (data.errors) {
          setErrors(data.errors);
        }
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Unable to submit form. Please check your connection and try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get Your <span className="text-cyan-600">Free Estimate</span>
          </h2>
          <p className="text-xl text-slate-600">
            Ready to get started? Contact us today for a free, no-obligation estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-slate-100/80 border border-slate-600/50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-green-300">{submitMessage}</div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && submitMessage && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-red-300">{submitMessage}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-600 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={submitStatus === 'loading'}
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.name ? 'border-red-500' : 'border-slate-600'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-600 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={submitStatus === 'loading'}
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.email ? 'border-red-500' : 'border-slate-600'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-600 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={submitStatus === 'loading'}
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.phone ? 'border-red-500' : 'border-slate-600'
                  }`}
                  placeholder="(954) 289-6718"
                />
                {errors.phone && (
                  <p className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-slate-600 mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={submitStatus === 'loading'}
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-slate-900 focus:outline-none focus:border-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.service ? 'border-red-500' : 'border-slate-600'
                  }`}
                >
                  <option value="">Select a service...</option>
                  <option value="ac-repair">AC Repair</option>
                  <option value="ac-install">AC Installation</option>
                  <option value="emergency">Emergency HVAC Service</option>
                  <option value="maintenance">HVAC Maintenance</option>
                  <option value="duct-cleaning">Duct Cleaning</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-600 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={submitStatus === 'loading'}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-600 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell us about your HVAC project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {submitStatus === 'loading' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Get Free Estimate
                  </>
                )}
              </button>

              <p className="text-sm text-slate-500 text-center">
                We typically respond within 1 hour during business hours
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-gradient-to-br from-cyan-600/10 to-teal-500/10 border-2 border-cyan-600/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Prefer to Call?</h3>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:+19542896718"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-cyan-600/20 p-3 rounded-lg group-hover:bg-cyan-600/30 transition-colors">
                    <Phone className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Call Us Today</div>
                    <div className="text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                      (954) 289-6718
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@pompanobeachhouseacrepair.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-cyan-600/20 p-3 rounded-lg group-hover:bg-cyan-600/30 transition-colors">
                    <Mail className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Email Us</div>
                    <div className="text-lg font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                      info@pompanobeachhouseacrepair.com
                    </div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-600/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Visit Our Office</div>
                    <div className="text-lg font-semibold text-slate-900">
                      123 Main Street<br />
                      Pompano Beach, FL 33432
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-600/20 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Business Hours</div>
                    <div className="text-slate-900">
                      <div>Mon-Fri: 7:00 AM - 6:00 PM</div>
                      <div>Sat: 8:00 AM - 4:00 PM</div>
                      <div>Sun: Emergency Only</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Service */}
            <div className="bg-red-500/10 border-2 border-red-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="inline-block h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
                24/7 Emergency Service
              </h3>
              <p className="text-slate-600 mb-4">
                Storm damage? HVAC breakdown? We offer emergency HVAC services around the clock.
              </p>
              <a
                href="tel:+19542896718"
                className="inline-block bg-red-500 hover:bg-red-600 text-slate-900 font-bold px-6 py-3 rounded-lg transition-all duration-200"
              >
                Call Emergency Line
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="bg-slate-100/80 border border-slate-600/50 rounded-2xl p-8">
              <h4 className="font-bold text-slate-900 mb-4">Why Contact Us?</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                  Free, no-obligation estimates
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                  Same-day response guaranteed
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                  Licensed & insured professionals
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                  Transparent pricing, no hidden fees
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
