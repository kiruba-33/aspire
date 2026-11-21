import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShieldAlert } from 'lucide-react';
import { visaServicesData } from '../data/visaServices';
import { destinationsData } from '../data/destinations';
import { siteConfig } from '../config/siteConfig';
import { useAppContext } from '../context/RouterContext';
import {
  validateName,
  validatePhone,
  validateEmail,
  validateRequiredSelect,
} from '../utils/validation';
import { CTAButton } from './CTAButton';
import { Modal } from './Modal';

interface ConsultationFormProps {
  initialVisaCategory?: string;
  initialDestination?: string;
  onSuccess?: () => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialVisaCategory = '',
  initialDestination = '',
  onSuccess,
}) => {
  const { showToast } = useAppContext();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '10:00 AM – 12:00 PM',
    visaCategory: initialVisaCategory,
    destination: initialDestination,
    currentLocation: '',
    message: '',
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      visaCategory: initialVisaCategory || prev.visaCategory,
      destination: initialDestination || prev.destination,
    }));
  }, [initialVisaCategory, initialDestination]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    const nameErr = validateName(formData.name);
    if (nameErr) newErrors.name = nameErr;

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) newErrors.email = emailErr;

    const visaErr = validateRequiredSelect(formData.visaCategory, 'Visa Category');
    if (visaErr) newErrors.visaCategory = visaErr;

    const destErr = validateRequiredSelect(formData.destination, 'Destination');
    if (destErr) newErrors.destination = destErr;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitted(true);
    showToast(
      'Consultation Scheduled',
      'Thank you! An Aspire Visa Experts consultant will contact you shortly.'
    );
    if (onSuccess) onSuccess();
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-[#F6F8FC] border border-emerald-200 p-6 sm:p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="font-display text-xl font-bold text-[#001952]">
          Thank you! Our visa consultant will contact you shortly.
        </h3>
        <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
          We have noted your consultation request for{' '}
          <span className="font-semibold text-[#001952]">{formData.visaCategory}</span> to{' '}
          <span className="font-semibold text-[#001952]">{formData.destination}</span>. Our Colombo
          office ({siteConfig.workingHours}) will confirm your session.
        </p>
        <div className="mt-6">
          <CTAButton
            variant="outline"
            size="sm"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                preferredDate: '',
                preferredTime: '10:00 AM – 12:00 PM',
                visaCategory: '',
                destination: '',
                currentLocation: '',
                message: '',
              });
            }}
          >
            Submit Another Request
          </CTAButton>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="consult-name" className="block text-xs font-semibold text-[#172033] mb-1.5">
            Full Name *
          </label>
          <input
            id="consult-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g., Kasun Perera"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F2BA49]"
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="consult-phone" className="block text-xs font-semibold text-[#172033] mb-1.5">
            Phone Number *
          </label>
          <input
            id="consult-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+94 77 123 4567"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F2BA49]"
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="consult-email" className="block text-xs font-semibold text-[#172033] mb-1.5">
            Email Address *
          </label>
          <input
            id="consult-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@example.com"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F2BA49]"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="consult-location" className="block text-xs font-semibold text-[#172033] mb-1.5">
            City / Location
          </label>
          <input
            id="consult-location"
            type="text"
            value={formData.currentLocation}
            onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
            placeholder="e.g., Colombo, Kandy, Galle"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F2BA49]"
          />
        </div>

        <div>
          <label htmlFor="consult-visa" className="block text-xs font-semibold text-[#172033] mb-1.5">
            Visa Category *
          </label>
          <select
            id="consult-visa"
            value={formData.visaCategory}
            onChange={(e) => setFormData({ ...formData, visaCategory: e.target.value })}
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
          {errors.visaCategory && <p className="text-xs text-red-600 mt-1">{errors.visaCategory}</p>}
        </div>

        <div>
          <label
            htmlFor="consult-destination"
            className="block text-xs font-semibold text-[#172033] mb-1.5"
          >
            Destination *
          </label>
          <select
            id="consult-destination"
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
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
          {errors.destination && <p className="text-xs text-red-600 mt-1">{errors.destination}</p>}
        </div>

        <div>
          <label htmlFor="consult-date" className="block text-xs font-semibold text-[#172033] mb-1.5">
            Preferred Consultation Date
          </label>
          <input
            id="consult-date"
            type="date"
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F2BA49]"
          />
        </div>

        <div>
          <label htmlFor="consult-time" className="block text-xs font-semibold text-[#172033] mb-1.5">
            Preferred Time (SLST)
          </label>
          <select
            id="consult-time"
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F2BA49]"
          >
            <option>10:00 AM – 12:00 PM</option>
            <option>12:00 PM – 2:30 PM</option>
            <option>2:30 PM – 4:30 PM</option>
            <option>4:30 PM – 6:30 PM</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="consult-message" className="block text-xs font-semibold text-[#172033] mb-1.5">
          Brief Travel / Application Context
        </label>
        <textarea
          id="consult-message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Share your intended travel month or questions (please do not share passport numbers or sensitive credentials)."
          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F2BA49]"
        />
      </div>

      <div className="flex items-start gap-2 text-xs text-slate-500 bg-[#F6F8FC] p-3 rounded-lg border border-slate-200/80">
        <ShieldAlert className="w-4 h-4 text-[#002D7A] shrink-0 mt-0.5" aria-hidden="true" />
        <span>
          Initial advisory booking only. Do not submit passport numbers, document scans, or banking
          credentials.
        </span>
      </div>

      <div className="pt-1">
        <CTAButton type="submit" variant="gold" size="lg" className="w-full" showArrow>
          Request Consultation
        </CTAButton>
      </div>
    </form>
  );
};

export const ConsultationModal: React.FC = () => {
  const { isConsultationModalOpen, closeConsultationModal, consultationPreFill } =
    useAppContext();

  return (
    <Modal
      isOpen={isConsultationModalOpen}
      onClose={closeConsultationModal}
      title="Book a Consultation"
      subtitle="Connect with Aspire Visa Experts (Pvt) Ltd for personalized pathway and documentation guidance."
    >
      <ConsultationForm
        initialVisaCategory={consultationPreFill.visaCategory}
        initialDestination={consultationPreFill.destination}
      />
    </Modal>
  );
};
