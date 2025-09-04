'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      // name:"Email",
      title: 'Email Us',
      description: "Send us a message and we'll respond within 24 hours",
      action: 'Email',
      link: 'djedfit@gmail.com' // Opens Gmail or default mail client
    },
    {
      icon: Phone,
      // name:"Number",
      title: 'Call Us',
      description: 'Speak with our team about your fitness management needs',
      action: '01002784461',
      link: 'https://wa.me/201002784461' // WhatsApp (2010... = +20 country code)
    },
    {
      icon: MessageSquare,
      // name:"Facebook",
      title: 'Social Media',
      description: 'Get instant answers to your questions',
      action: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=61580294721308' // Example: social link
    },
    {
      icon: MapPin,
      // name:"Location",
      title: 'Visit Us',
      description: 'Come see our team in person and book your package',
      action: 'New Cairo, Egypt',
      link: '' // Google Maps link
    }
  ]
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your fitness management? Let&apos;s discuss how DjedFit can 
            revolutionize your gym, coaching practice, or fitness journey.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 card-hover h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{method.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{method.description}</p>

                  {/* Clickable link */}
                  <a 
                    href={method.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 font-semibold hover:underline"
                  >
                    {method.action}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <Card className="bg-gradient-to-br from-purple-600 to-blue-600 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Ready to Get Started?
              </h3>
              <p className="text-purple-100 mb-6">
                Join hundreds of gyms and fitness professionals who trust DjedFit 
                to power their success.
              </p>
              <Button 
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full"
              >
                Start Your Free Trial
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}