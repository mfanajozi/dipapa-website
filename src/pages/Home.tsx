import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  Building2, 
  Users, 
  Lightbulb,
  Target,
  Heart,
  Globe
} from 'lucide-react';
import { companies } from '../data/companies';
import { testimonials } from '../data/testimonials';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [statsRef, statsInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });
  const [companiesRef, companiesInView] = useInView({ triggerOnce: true });

  return (
    <>
      <Helmet>
        <title>DIPAPA Holdings - Building Sustainable Communities Through Innovation</title>
        <meta name="description" content="DIPAPA Holdings delivers sustainable living solutions that empower individuals and strengthen communities through innovation and collaboration." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-primary text-white py-32"
        style={{
          backgroundImage: `url('/diverse-community.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for text contrast
            zIndex: 1,
          }}
        />
        <motion.div 
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerChildren}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn} className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Building Sustainable Communities Through Innovation
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                DIPAPA Holdings is committed to developing community-equitable enterprises
                and ensuring a localised economy value chain that benefits all stakeholders
                across Southern Africa.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
                >
                  Discover Our Impact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeIn}
              className="text-center p-8 border-2 border-primary rounded-lg"
            >
              <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">3+</h3>
              <p className="text-gray-600">Companies in Portfolio</p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="text-center p-8 border-2 border-primary rounded-lg"
            >
              <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">1000+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="text-center p-8 border-2 border-primary rounded-lg"
            >
              <Globe className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">3</h3>
              <p className="text-gray-600">Countries Served</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Approach to Community Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating lasting change through innovative solutions and sustainable practices
              that empower communities and foster economic growth.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Building2 className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Community Development</h3>
              <p className="text-gray-600">
                We build sustainable communities through innovative solutions and strategic partnerships,
                focusing on long-term impact and community ownership.
              </p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Users className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Economic Inclusion</h3>
              <p className="text-gray-600">
                Our initiatives create pathways for economic participation, ensuring communities
                have access to opportunities for growth and prosperity.
              </p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Lightbulb className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We leverage cutting-edge technology and innovative approaches to address
                community challenges and create sustainable solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Companies Section */}
      <motion.section 
        ref={companiesRef}
        initial="hidden"
        animate={companiesInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each of our companies plays a unique role in building stronger communities
              and creating sustainable impact across Southern Africa.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.slug}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{company.name}</h3>
                  <p className="text-gray-600 mb-4">{company.description}</p>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={`/companies/${company.slug}`}
                      className="text-secondary hover:text-secondary-dark font-medium inline-flex items-center"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What People Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the people and communities we've had the privilege to work with.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to build stronger, more sustainable communities
            across Southern Africa. Together, we can create lasting change.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
