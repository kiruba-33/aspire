/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import { AppProvider, useAppContext } from './context/RouterContext';
import { visaServicesData } from './data/visaServices';
import { destinationsData } from './data/destinations';
import { articlesData } from './data/contentData';
import { siteConfig } from './config/siteConfig';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { MobileActionBar } from './components/MobileBottomBar';
import { ConsultationModal } from './components/ConsultationForm';
import { ToastNotification } from './components/ToastNotification';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { VisaServicesHubPage, VisaServiceDetailPage } from './pages/VisaServicesPage';
import { DestinationsHubPage, DestinationDetailPage } from './pages/DestinationsPage';
import { ResourcesPage, ArticleDetailPage } from './pages/ResourcesPage';
import {
  ProcessPage,
  SuccessStoriesPage,
  ContactPage,
  BookConsultationPage,
  LegalPage,
} from './pages/ContactAndBookingPages';

const RouteView: React.FC = () => {
  const { currentPath } = useAppContext();
  const normalized = currentPath === '/' ? '/' : currentPath.replace(/\/+$/, '');

  useEffect(() => {
    let pageTitle = 'Aspire Visa Experts | Overseas & Immigration Visa Consultancy';

    if (normalized === '/about') {
      pageTitle = `About Us — ${siteConfig.shortName}`;
    } else if (normalized === '/visa-services') {
      pageTitle = `Visa Services — ${siteConfig.shortName}`;
    } else if (normalized.startsWith('/visa-services/')) {
      const slug = normalized.replace('/visa-services/', '');
      const svc = visaServicesData.find((v) => v.slug === slug);
      if (svc) pageTitle = `${svc.title} — ${siteConfig.shortName}`;
    } else if (normalized === '/destinations') {
      pageTitle = `Destinations — ${siteConfig.shortName}`;
    } else if (normalized.startsWith('/destinations/')) {
      const slug = normalized.replace('/destinations/', '');
      const dest = destinationsData.find((d) => d.slug === slug);
      if (dest) pageTitle = `${dest.name} Visas — ${siteConfig.shortName}`;
    } else if (normalized === '/process') {
      pageTitle = `Our Process — ${siteConfig.shortName}`;
    } else if (normalized === '/success-stories') {
      pageTitle = `Success Stories — ${siteConfig.shortName}`;
    } else if (normalized === '/resources') {
      pageTitle = `Visa & Travel Insights — ${siteConfig.shortName}`;
    } else if (normalized.startsWith('/resources/')) {
      const slug = normalized.replace('/resources/', '');
      const art = articlesData.find((a) => a.slug === slug);
      if (art) pageTitle = `${art.title} — ${siteConfig.shortName}`;
    } else if (normalized === '/contact') {
      pageTitle = `Contact Us — ${siteConfig.shortName}`;
    } else if (normalized === '/book-consultation') {
      pageTitle = `Book Consultation — ${siteConfig.shortName}`;
    } else if (normalized.startsWith('/legal/')) {
      pageTitle = `Legal & Compliance — ${siteConfig.shortName}`;
    }

    document.title = pageTitle;
  }, [normalized]);

  if (normalized === '/about') return <AboutPage />;
  if (normalized === '/visa-services') return <VisaServicesHubPage />;
  if (normalized.startsWith('/visa-services/')) {
    const slug = normalized.replace('/visa-services/', '');
    const resolvedSlug = slug === 'immigration-pr' ? 'immigration' : slug;
    const service = visaServicesData.find((v) => v.slug === resolvedSlug);
    if (service) return <VisaServiceDetailPage service={service} />;
    return <VisaServicesHubPage />;
  }

  if (normalized === '/destinations') return <DestinationsHubPage />;
  if (normalized.startsWith('/destinations/')) {
    const slug = normalized.replace('/destinations/', '');
    const resolvedSlug = slug === 'europe-schengen' ? 'schengen' : slug;
    const destination = destinationsData.find((d) => d.slug === resolvedSlug);
    if (destination) return <DestinationDetailPage destination={destination} />;
    return <DestinationsHubPage />;
  }

  if (normalized === '/process') return <ProcessPage />;
  if (normalized === '/success-stories') return <SuccessStoriesPage />;

  if (normalized === '/resources') return <ResourcesPage />;
  if (normalized.startsWith('/resources/')) {
    const slug = normalized.replace('/resources/', '');
    const article = articlesData.find((a) => a.slug === slug);
    if (article) return <ArticleDetailPage article={article} />;
    return <ResourcesPage />;
  }

  if (normalized === '/contact') return <ContactPage />;
  if (normalized === '/book-consultation') return <BookConsultationPage />;
  if (normalized.startsWith('/legal/')) {
    const policy = normalized.replace('/legal/', '');
    return <LegalPage policySlug={policy} />;
  }

  return <HomePage />;
};

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <AppProvider>
        <div className="min-h-screen flex flex-col bg-[#F6F8FC] text-[#172033] overflow-x-hidden">
          <Navbar />
          <main className="flex-1">
            <RouteView />
          </main>
          <Footer />
          <WhatsAppButton floating />
          <MobileActionBar />
          <ConsultationModal />
          <ToastNotification />
        </div>
      </AppProvider>
    </MotionConfig>
  );
}
