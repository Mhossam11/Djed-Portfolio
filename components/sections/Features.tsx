'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Apple, 
  Pill, 
  Dumbbell, 
  Users, 
  Calendar, 
  BarChart3, 
  MessageSquare, 
  Shield 
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Apple,
      title: 'Nutrition Planning',
      description: 'Create personalized meal plans with macro tracking and dietary preferences management.'
    },
    {
      icon: Pill,
      title: 'Supplement Management',
      description: 'Track supplement intake, interactions, and optimize nutrition supplementation protocols.'
    },
    {
      icon: Dumbbell,
      title: 'Exercise Tracking',
      description: 'Comprehensive workout planning, progress tracking, and performance analytics.'
    },
    {
      icon: Users,
      title: 'Trainer Management',
      description: 'Efficiently manage personal trainers, schedules, and client assignments.'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automated booking system with calendar integration and availability management.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into client progress, gym performance, and business metrics.'
    },
    {
      icon: MessageSquare,
      title: 'Communication Hub',
      description: 'Seamless messaging between coaches, clients, and gym management teams.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with HIPAA compliance and encrypted data storage.'
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
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive toolkit that makes DjedFit the ultimate solution 
            for modern fitness management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm leading-relaxed ">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}