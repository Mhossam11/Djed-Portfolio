'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function Screenshots() {
  const screenshots = [
    {
      title: 'Dashboard Overview',
      description: 'Comprehensive analytics and quick access to key features',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Workout Planning',
      description: 'Create and customize workout routines for every client',
      image: 'https://images.pexels.com/photos/4164512/pexels-photo-4164512.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Nutrition Tracking',
      description: 'Monitor dietary habits and macro distribution',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Progress Analytics',
      description: 'Visualize client progress with detailed charts and metrics',
      image: 'https://images.pexels.com/photos/4498597/pexels-photo-4498597.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Platform <span className="gradient-text">Showcase</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a glimpse of DjedFit intuitive interface and powerful features designed 
            to streamline your fitness management workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden card-hover border-0 shadow-lg group">
                <div className="relative">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{screenshot.title}</h3>
                    <p className="text-gray-200 text-sm">{screenshot.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Ready to see DjedFit in action?
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the full potential of our platform with a personalized demo tailored to your needs.
            </p>
            <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Request Demo
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}