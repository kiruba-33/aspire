import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { visaServicesData } from '../data/visaServices';
import { destinationsData } from '../data/destinations';
import { getMailtoHref, getPhoneHref, getWhatsAppUrl } from '../utils/contactLinks';
import {
  validateName,
  validatePhone,
  validateEmail,
  validateRequiredSelect,
} from '../utils/validation';
import { useAppContext } from '../context/RouterContext';
import { CTAButton } from './CTAButton';

export const ContactForm: React.FC = () => {
  const { showToast } = useAppContext();

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    visaCategory: '',
    destination: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    const nErr = validateName(form.fullName);
    if (nErr) newErrors.fullName = nErr;

    const pErr = validatePhone(form.phone);
    if (pErr) newErrors.phone = pErr;

    const eErr = validateEmail(form.email);
    if (eErr) newErrors.email = eErr;

    const vErr = validateRequiredSelect(form.visaCategory, 'Visa Category');
    if (vErr) newErrors.visaCategory = vErr;

    const dErr = validateRequiredSelect(form.destination, 'Destination');
    if (dErr) newErrors.destination = dErr;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitted(true);
    showToast('Enquiry Received', 'Thank you! An Aspire Visa Experts advisor will contact you shortly.');
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="font-display text-xl font-bold text-[#001952]">
          Thank you! Our visa consultant will contact you shortly.
        </h3>
        <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
          We received your enquiry for {form.visaCategory} ({form.destination}). Our Colombo advisory
          team will respond on {form.phone}.
        </p>
        <div className="mt-6">
          <CTAButton
            variant="outline"
            size="md"
            onClick={() => {
              setSubmitted(false);
              setForm({
                fullName: '',
                phone: '',
                email: '',
                visaCategory: '',
                destination: '',
                message: '',
              });
            }}
          >
            Send Another Enquiry
          </CTAButton>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <h3 className="font-display text-xl font-bold text-[#001952] mb-1">Send an Enquiry</h3>
      <p className="text-sm text-slate-500 mb-4">
        Tell us about your intended destination and timeline. Please avoid sharing passport numbers
        or sensitive documents in this form.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold text-[#172033] mb-1.5">
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            placeholder="Your full name"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F2BA49]"
          />
          {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#172033] mb-1.5">
            Phone *
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+94 77 123 4567"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F2BA49]"
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-xs font-semibold text-[#172033] mb-1.5">
          Email *
        </label>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F2BA49]"
        />
        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-visa" className="block text-xs font-semibold text-[#172033] mb-1.5">
            Visa Category *
          </label>
          <select
            id="contact-visa"
            value={form.visaCategory}
            onChange={(e) => setForm({ ...form, visaCategory: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F2BA49]"
          >
            <option value="">Select Visa Category</option>
            {visaServicesData.map((v) => (
              <option key={v.slug} value={v.title}>
                {v.title}
              </option>
            ))}
            <option value="Other Visa Category">Other Visa Category</option>
          </select>
          {errors.visaCategory && (
            <p className="text-xs text-red-600 mt-1">{errors.visaCategory}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-destination"
            className="block text-xs font-semibold text-[#172033] mb-1.5"
          >
            Destination *
          </label>
          <select
            id="contact-destination"
            value={form.destination}
            onChange={(e) => setForm({ ...form, destination: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F2BA49]"
          >
            <option value="">Select Destination</option>
            {destinationsData.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.name}
              </option>
            ))}
            <option value="Other Country">Other Country</option>
          </select>
          {errors.destination && (
            <p className="text-xs text-red-600 mt-1">{errors.destination}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-[#172033] mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Share your intended travel dates or specific questions..."
          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F2BA49]"
        />
      </div>

      <div className="pt-2">
        <CTAButton type="submit" variant="gold" size="lg" className="w-full sm:w-auto" showArrow>
          Send Enquiry
        </CTAButton>
      </div>
    </form>
  );
};

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#F6F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Bold Headline & Sri Lanka Office Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#002D7A] mb-2">
                Speak With Aspire
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#001952] tracking-tight leading-[1.12]">
                Let’s Talk About Your Journey.
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Visit our Colombo advisory office or connect remotely from anywhere in Sri Lanka via
                phone, WhatsApp, or email.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-5">
              <div>
                <h3 className="font-display text-base font-bold text-[#001952]">
                  {siteConfig.companyName}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{siteConfig.addressSecondary}</p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F2BA49] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#001952]">Office Address</p>
                    <p className="text-slate-600">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#F2BA49] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#001952]">Phone</p>
                    <a
                      href={getPhoneHref()}
                      className="text-[#002D7A] hover:underline font-semibold tabular-nums"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#F2BA49] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#001952]">Email</p>
                    <a
                      href={getMailtoHref('Aspire Visa Enquiry')}
                      className="text-[#002D7A] hover:underline font-medium"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#F2BA49] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#001952]">Working Hours</p>
                    <p className="text-slate-600">{siteConfig.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href={getPhoneHref()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#001952] hover:bg-[#002D7A] text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F2BA49]" aria-hidden="true" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-center shadow-xs">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
