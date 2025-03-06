import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const DpsBetterLifePage = () => {
  return (
    <>
      <Helmet>
        <title>DPS Better Life Club - DIPAPA Holdings</title>
        <meta name="description" content="DPS Better Life Club is a transformative organisation focused on sustainable community development across Lesotho, Zimbabwe, and South Africa" />
        <meta name="keywords" content="community development, insurance solutions, food security, emotional well-being, empowerment programs" />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="bg-primary text-white relative flex items-center justify-start"
        style={{
          backgroundImage: `url('/public/dps-better-life-hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left flex items-center justify-center" style={{textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">DPS Better Life Club: Fostering Resilient Communities Through Comprehensive Support</h1>
            <p className="text-xl text-gray-200">DPS Better Life Club is a transformative organisation focused on sustainable community development across Lesotho, Zimbabwe, and South Africa</p>
          </motion.div>
        </div>
      </section>
      
      {/* Two Column About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Organization Overview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">About DPS Better Life Club</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2019, DIPS (Better Life Club) is a transformative organization focused on sustainable community 
                development across Lesotho, Zimbabwe, and South Africa. Our core mission is to foster resilient communities 
                by providing comprehensive insurance solutions that prioritize food security and emotional well-being.
              </p>
              <p className="text-gray-600">
                We empower individuals and families to create impactful legacies while navigating life's challenges through 
                innovative programs that combine economic empowerment with social responsibility.
              </p>
            </motion.div>

            {/* Right Column - Social Impact Initiatives */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-primary mb-6">Our Social Impact Initiatives</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Humanitarian Work</h4>
                    <p className="text-gray-600">Delivering essential resources to vulnerable communities in crisis situations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Sustainable Development</h4>
                    <p className="text-gray-600">Implementing food security programs as foundations for community resilience</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Empowerment Programs</h4>
                    <p className="text-gray-600">Training community members as distributors to promote financial independence</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">The Growing DPS Better Life Club Footprint</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white p-4 rounded-xl shadow-lg"
                  >
                    <img src="/south-africa.png" alt="South African Flag" className="w-full h-auto" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white p-4 rounded-xl shadow-lg"
                  >
                    <img src="/lesotho.png" alt="Lesotho Flag" className="w-full h-auto" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white p-4 rounded-xl shadow-lg"
                  >
                    <img src="/zimbabwe.png" alt="Zimbabwe Flag" className="w-full h-auto" />
                  </motion.div>
                </div>
              </div>
            </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <p className="text-gray-600">We foster resilient communities through comprehensive insurance solutions that prioritize food security and emotional well-being.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <p className="text-gray-600">Our social impact initiatives include humanitarian work, sustainable development models, and empowerment programs.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <p className="text-gray-600">The "Pastors Helping Pastors" initiative provides financial support, professional development, and networking opportunities.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <p className="text-gray-600">Our family benefits structure ensures comprehensive coverage for members, spouses, and children.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Learn More?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us to discover how DPS Better Life Club can help you achieve your goals.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/contact"
                className="inline-flex items-center bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DpsBetterLifePage;
