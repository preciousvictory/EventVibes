
import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import Navbar from '../components/Navbar';
import AnimatedButton from '../components/ui/Button';


const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex- bg-primary">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <AnimatedButton to="/auth/signup" className="mx-auto mt-8">Name </AnimatedButton>

        {/* Features Section */}
        <section className="section-padding text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full filter blur-[150px]"></div>

          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium mb-4">
                Platform Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Powered by <span className="text-gradient">Web3 Technology</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our platform leverages decentralized storage, AI-powered search, and blockchain rewards to create a unique experience for event participants.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Media Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row justify-between items-center mb-12"
            >
              <div>
                <span className="inline-block py-1 px-3 text-white rounded-full text-xs font-medium mb-4">
                  Featured Content
                </span>
                <h2 className="text-3xl font-bold text-white">
                  Explore Recent <span className="text-gradient">Event Media</span>
                </h2>
              </div>

            </motion.div>

          </div>
        </section>

      </main>

    </div>
  );
};

export default LandingPage;
