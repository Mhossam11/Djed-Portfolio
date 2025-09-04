'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Zap } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Users, number: '500+', label: 'Gyms Connected' },
    { icon: Target, number: '10K+', label: 'Active Users' },
    { icon: Zap, number: '99.9%', label: 'Uptime' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">DjedFit</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
            DjedFit revolutionizes fitness management by creating a unified platform that seamlessly 
            connects coaches, clients, and gym facilities. Our comprehensive solution streamlines 
            nutrition planning, supplement management, and exercise tracking while empowering gyms 
            to optimize their personal trainer operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-8 card-hover border-0 shadow-lg">
                <CardContent className="pt-6">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                  <h3 className="text-3xl font-bold mb-2 gradient-text">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
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
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            One Platform, Infinite Possibilities
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Transform your fitness ecosystem with intelligent management tools that grow with your business 
            and enhance every client interaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}