import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { companies } from '../data/companies';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CompanyPage() {
  const { slug } = useParams();
  const company = companies.find((c) => c.slug === slug);

  if (!company) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{company.name} - DIPAPA Holdings</title>
        <meta name="description" content={company.summary} />
        <meta name="keywords" content={company.keywords.join(', ')} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{company.headline}</h1>
            <p className="text-xl text-gray-200">{company.summary}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
