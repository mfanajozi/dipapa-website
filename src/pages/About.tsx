import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  Users, 
  Globe, 
  Award,
  Handshake,
  LineChart
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <>
      <Helmet>
        <title>About DIPAPA Holdings - Our Vision and Mission</title>
        <meta 
          name="description" 
          content="Learn about DIPAPA Holdings' commitment to community development, economic inclusion, and sustainable solutions across Southern Africa." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About DIPAPA Holdings
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              Building sustainable communities and fostering economic inclusion across Southern Africa
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Target className="h-12 w-12 text-secondary mb-6" />
              <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading force in developing community-equitable enterprises and ensuring 
                a localized economy value chain that benefits all stakeholders across Southern Africa.
                We envision communities where economic opportunities are accessible to all, and 
                sustainable development is the norm rather than the exception.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Award className="h-12 w-12 text-secondary mb-6" />
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To create lasting positive change through innovative solutions and strategic partnerships
                that empower communities, foster economic growth, and build sustainable futures. We are
                committed to developing initiatives that create real value and meaningful impact in the
                lives of people we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide our actions and decisions as we work towards our vision
              of sustainable community development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Users className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold text-primary mb-3">Community First</h3>
              <p className="text-gray-600">
                We prioritize the needs and aspirations of communities in everything we do,
                ensuring our initiatives create lasting positive impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Handshake className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold text-primary mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of partnerships and working together to achieve
                greater impact and create sustainable solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <LineChart className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek innovative approaches to address community challenges
                and create sustainable development solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through our various initiatives and companies, we've made significant strides
              in community development and economic inclusion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-secondary mb-2">3</div>
              <div className="text-gray-600">Countries Served</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-secondary mb-2">3+</div>
              <div className="text-gray-600">Innovative Solutions</div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}