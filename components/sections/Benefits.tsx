'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, User } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Building,
      title: 'For Gyms',
      description: 'Streamline operations, increase trainer efficiency, and boost member satisfaction with integrated management tools.',
      features: ['Staff Management', 'Revenue Analytics', 'Member Retention', 'Equipment Tracking']
    },
    {
      icon: Users,
      title: 'For Coaches',
      description: 'Enhance client relationships with professional tools for nutrition, training, and progress monitoring.',
      features: ['Client Management', 'Program Templates', 'Progress Tracking', 'Communication Tools']
    },
    {
      icon: User,
      title: 'For Clients',
      description: 'Access personalized fitness plans, track progress, and stay connected with coaches in one convenient app.',
      features: ['Custom Workouts', 'Nutrition Tracking', 'Progress Photos', 'Direct Messaging']
    }
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
            Benefits for <span className="gradient-text">Everyone</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DjedFit creates value across the entire fitness ecosystem, delivering tailored solutions 
            for gyms, coaches, and clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-0 shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {benefit.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Unified Experience Across All Platforms
            </h3>
            <p className="text-gray-600 text-lg">
              Whether you&apos;re managing a gym, coaching clients, or pursuing your fitness goals, 
              DjedFit adapts to your needs with synchronized data and seamless collaboration tools.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}