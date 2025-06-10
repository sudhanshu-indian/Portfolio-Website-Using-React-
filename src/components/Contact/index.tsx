import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, TwitterIcon, GithubIcon, SendIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    try {
      // In a real app, you'd use EmailJS or Formspree here
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      setFormStatus('error');
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };
  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.3)'
    },
    blur: {
      scale: 1,
      boxShadow: 'none'
    }
  };
  return <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out and I'll get back to you as soon as possible.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mr-4">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      Email
                    </h4>
                    <a href="mailto:youremail@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      youremail@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      Phone
                    </h4>
                    <a href="tel:+91 234 567 890" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +91 234 567 890
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mr-4">
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Bihar, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <motion.a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors" whileHover={{
                scale: 1.1,
                rotate: 5
              }} whileTap={{
                scale: 0.9
              }}>
                  <LinkedinIcon size={20} />
                </motion.a>
                <motion.a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-400 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-colors" whileHover={{
                scale: 1.1,
                rotate: 5
              }} whileTap={{
                scale: 0.9
              }}>
                  <TwitterIcon size={20} />
                </motion.a>
                <motion.a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white transition-colors" whileHover={{
                scale: 1.1,
                rotate: 5
              }} whileTap={{
                scale: 0.9
              }}>
                  <GithubIcon size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={inputVariants} whileFocus="focus" animate="blur" className="relative">
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-purple-500 transition-all" />
                  </motion.div>
                  <motion.div variants={inputVariants} whileFocus="focus" animate="blur" className="relative">
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-purple-500 transition-all" />
                  </motion.div>
                </div>
                <motion.div variants={inputVariants} whileFocus="focus" animate="blur" className="relative">
                  <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-purple-500 transition-all" />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus" animate="blur" className="relative">
                  <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Your Message" required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-purple-500 transition-all resize-none"></textarea>
                </motion.div>
                <motion.button type="submit" disabled={formStatus === 'submitting'} className={`px-6 py-3 rounded-full font-medium shadow-lg flex items-center justify-center gap-2 w-full md:w-auto ${formStatus === 'submitting' ? 'bg-gray-400 dark:bg-gray-600 text-white cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-purple-500/30'}`} whileHover={formStatus !== 'submitting' ? {
                scale: 1.02
              } : {}} whileTap={formStatus !== 'submitting' ? {
                scale: 0.98
              } : {}}>
                  {formStatus === 'idle' && <>
                      <SendIcon size={18} />
                      Send Message
                    </>}
                  {formStatus === 'submitting' && <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>}
                  {formStatus === 'success' && <>
                      <CheckCircleIcon size={18} />
                      Message Sent!
                    </>}
                  {formStatus === 'error' && <>
                      <AlertCircleIcon size={18} />
                      Failed to Send
                    </>}
                </motion.button>
                {/* Form Status Message */}
                <AnimatedStatusMessage status={formStatus} />
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
interface AnimatedStatusMessageProps {
  status: 'idle' | 'submitting' | 'success' | 'error';
}
const AnimatedStatusMessage: React.FC<AnimatedStatusMessageProps> = ({
  status
}) => {
  return <motion.div initial={{
    height: 0,
    opacity: 0
  }} animate={{
    height: status === 'success' || status === 'error' ? 'auto' : 0,
    opacity: status === 'success' || status === 'error' ? 1 : 0
  }} transition={{
    duration: 0.3
  }} className="overflow-hidden">
      {status === 'success' && <div className="px-4 py-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 mt-4 flex items-center gap-2">
          <CheckCircleIcon size={18} />
          <span>Your message has been sent successfully!</span>
        </div>}
      {status === 'error' && <div className="px-4 py-3 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 mt-4 flex items-center gap-2">
          <AlertCircleIcon size={18} />
          <span>
            There was an error sending your message. Please try again.
          </span>
        </div>}
    </motion.div>;
};
export default Contact;