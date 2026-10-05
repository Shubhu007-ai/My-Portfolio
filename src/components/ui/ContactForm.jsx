import React, { useState } from 'react';
import { Mail, ArrowRight, AlertCircle, CheckCircle2, RotateCcw } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';

export function ContactForm({ className = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isReadyToSend, setIsReadyToSend] = useState(false);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!data.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!isValidEmail(data.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!data.message.trim()) {
      errs.message = 'Please enter your message.';
    }
    return errs;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validate(formData);
    setErrors(validationErrors);
  };

  const handleChange = (field, value) => {
    const nextData = { ...formData, [field]: value };
    setFormData(nextData);
    if (touched[field]) {
      const validationErrors = validate(nextData);
      setErrors(validationErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      const subject = `Portfolio Contact - ${formData.name.trim()}`;
      const body = `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`;
      const mailtoUrl = `mailto:${socialLinks.emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open the user's default email client
      window.location.href = mailtoUrl;

      setTimeout(() => {
        setIsSubmitting(false);
        setIsReadyToSend(true);
      }, 300);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setTouched({});
    setErrors({});
    setIsReadyToSend(false);
  };

  const mailtoPrefillHref = `mailto:${socialLinks.emailAddress}?subject=${encodeURIComponent(
    `Portfolio Contact - ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className={`p-6 sm:p-8 rounded-2xl bg-white border border-[#E4E1D9] shadow-sm ${className}`}>
      {isReadyToSend ? (
        <div className="py-6 space-y-5 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] border border-[#4F46E5]/30 text-[#4F46E5] mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7 text-emerald-600" />
          </div>
          
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#171717] tracking-tight">
              Your email client is ready with the message.
            </h3>
            <p className="text-[#666666] text-xs sm:text-sm font-sans max-w-sm mx-auto leading-relaxed">
              If your email application did not launch automatically, tap below to open it with your drafted details.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#E4E1D9] text-left max-w-sm mx-auto space-y-1 text-xs font-mono text-[#666666]">
            <div>
              <span className="text-[#8A8A8A]">From: </span>
              <span className="text-[#171717] font-medium">{formData.name} &lt;{formData.email}&gt;</span>
            </div>
            <div>
              <span className="text-[#8A8A8A]">To: </span>
              <span className="text-[#4F46E5] font-medium">{socialLinks.emailAddress}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={mailtoPrefillHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#4F46E5] hover:bg-[#3730A3] text-white text-xs font-mono font-medium shadow-sm transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Open in Email App →</span>
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#E4E1D9] text-[#171717] hover:bg-[#F7F5F0] text-xs font-mono font-medium transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#666666]" />
              <span>Edit / Reset</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="border-b border-[#E4E1D9] pb-3">
            <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#171717] tracking-tight">
              Send a Message
            </h3>
            <p className="text-[#666666] text-xs font-sans mt-0.5">
              Draft your message and connect directly via your email client.
            </p>
          </div>

          {/* Name Field */}
          <div className="space-y-1.5">
            <label 
              htmlFor="form-name" 
              className="block text-[11px] font-mono uppercase tracking-wider text-[#171717] font-semibold"
            >
              Name <span className="text-[#4F46E5]">*</span>
            </label>
            <input
              id="form-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              aria-invalid={!!(touched.name && errors.name)}
              aria-describedby={touched.name && errors.name ? 'form-name-error' : undefined}
              className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-[#171717] text-sm placeholder:text-[#8A8A8A] focus:outline-none transition-all duration-200 ${
                touched.name && errors.name
                  ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                  : 'border-[#E4E1D9] hover:border-[#4F46E5]/40 focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5]/30'
              }`}
            />
            {touched.name && errors.name && (
              <p id="form-name-error" role="alert" className="text-rose-600 text-xs flex items-center gap-1.5 font-sans mt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label 
              htmlFor="form-email" 
              className="block text-[11px] font-mono uppercase tracking-wider text-[#171717] font-semibold"
            >
              Email <span className="text-[#4F46E5]">*</span>
            </label>
            <input
              id="form-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              aria-invalid={!!(touched.email && errors.email)}
              aria-describedby={touched.email && errors.email ? 'form-email-error' : undefined}
              className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-[#171717] text-sm placeholder:text-[#8A8A8A] focus:outline-none transition-all duration-200 ${
                touched.email && errors.email
                  ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                  : 'border-[#E4E1D9] hover:border-[#4F46E5]/40 focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5]/30'
              }`}
            />
            {touched.email && errors.email && (
              <p id="form-email-error" role="alert" className="text-rose-600 text-xs flex items-center gap-1.5 font-sans mt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-1.5">
            <label 
              htmlFor="form-message" 
              className="block text-[11px] font-mono uppercase tracking-wider text-[#171717] font-semibold"
            >
              Message <span className="text-[#4F46E5]">*</span>
            </label>
            <textarea
              id="form-message"
              name="message"
              rows={4}
              required
              placeholder="Describe your project, inquiry, or engineering role..."
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              aria-invalid={!!(touched.message && errors.message)}
              aria-describedby={touched.message && errors.message ? 'form-message-error' : undefined}
              className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-[#171717] text-sm placeholder:text-[#8A8A8A] focus:outline-none resize-none transition-all duration-200 ${
                touched.message && errors.message
                  ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                  : 'border-[#E4E1D9] hover:border-[#4F46E5]/40 focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5]/30'
              }`}
            />
            {touched.message && errors.message && (
              <p id="form-message-error" role="alert" className="text-rose-600 text-xs flex items-center gap-1.5 font-sans mt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-sans font-semibold text-xs text-white bg-[#4F46E5] hover:bg-[#3730A3] hover:-translate-y-0.5 shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Validating...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
