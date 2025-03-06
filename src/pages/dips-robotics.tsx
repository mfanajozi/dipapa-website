import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const DipsRoboticsPage = () => {
  return (
    <>
      <Helmet>
        <title>DIPS Robotics - DIPAPA Holdings</title>
        <meta name="description" content="DIPS Robotics is dedicated to inspiring the next generation of engineers and problem solvers through hands-on learning experiences and cutting-edge technology" />
        <meta name="keywords" content="robotics education, STEM education, children's workshops, VR learning, coding for kids" />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="bg-primary text-white relative flex items-center justify-start"
        style={{
          backgroundImage: `url('/dips-robotics-hero.png')`,
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">DIPS Robotics: Igniting Young Minds Through Robotics Education</h1>
            <p className="text-xl text-gray-200">DIPS Robotics is dedicated to inspiring the next generation of engineers and problem solvers through hands-on learning experiences and cutting-edge technology</p>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">About DIPS Robotics</h2>
            <p className="text-gray-600">
              As Dips Robotics, we're passionate about igniting the spark of curiosity and innovation in young minds.
              With a focus on education and empowerment, we collaborate closely with schools and children aged 4 to 18
              to introduce them to the captivating world of robotics. We pride ourselves in being MICT SETA accredited
              and the preferred service provider.
              Through hands-on learning experiences, interactive workshops, and cutting-edge technology, we aim to inspire
              the next generation of engineers, programmers, and problem solvers. Our dedicated team is committed to
              fostering creativity, critical thinking, and teamwork, equipping students with the skills they need to thrive
              in an ever-evolving technological landscape. Join us on this exciting journey of discovery and exploration!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-xl shadow-lg"
            >
              <img src="/public/partners/mict-seta.png" alt="MICT SETA" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-xl shadow-lg"
            >
              <img src="/public/partners/mmatau-inc.png" alt="Mmatau Inc" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-xl shadow-lg"
            >
              <img src="/public/partners/victorious-ministries.png" alt="Victorious Ministries" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-xl shadow-lg"
            >
              <img src="/gallery/zmgoro.png" alt="zmgoro" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-xl shadow-lg"
            >
              <img src="/gallery/wisechild2.png" alt="wisechild2" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-xl shadow-lg"
            >
              <img src="/gallery/wisechild2_a.png" alt="wisechild2_a" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-xl shadow-lg"
            >
              <img src="/gallery/lego_1.png" alt="lego_1" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-xl shadow-lg"
            >
              <img src="/gallery/lego_2.png" alt="lego_2" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-xl shadow-lg"
            >
              <img src="/gallery/robotics_1.png" alt="robotics_1" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-xl shadow-lg"
            >
              <img src="/gallery/robotics_2.png" alt="robotics_2" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DipsRoboticsPage;
