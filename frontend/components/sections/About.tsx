'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Check, Target, ExternalLink } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section 1: About Leimarics - UPDATED */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                alt="Leimarics Team"
                fill
                className="object-cover"
              />
              <div className="absolute top-8 left-8">
                <Badge variant="default" className="bg-white text-navy-900 text-lg px-6 py-3">
                  50+ Happy Clients
                </Badge>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 -left-8 w-64 h-64 bg-coral-500/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-8 -right-8 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="coral" className="mb-4">About Leimarics</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-display">
              Built for Global Scale
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Leimarics was founded on three timeless principles: <strong>Strength, Vision, and Wisdom</strong>. 
              Built to be a versatile and global entity, Leimarics serves as the bridge between current 
              potential and future achievement.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We believe that every business deserves a world-class digital presence. Our mission is to 
              provide the systems and structures that allow brands to communicate clearly, grow sustainably, 
              and lead their markets.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              By combining high-performance tools with a global perspective, Leimarics delivers the quality 
              and reliability required to succeed in a rapidly evolving world.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {[
                'Custom websites built to global standards',
                'Mobile-responsive across all devices',
                'SEO-optimized for international reach',
                '24/7 support for clients worldwide',
                'Fast delivery without compromising quality',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-coral-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Mission Box */}
            <div className="bg-gradient-to-br from-navy-50 to-blue-50 rounded-2xl p-6 border border-navy-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coral-500 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-2">Our Mission</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    At Leimarics, we don&apos;t just build for today—we architect for forever. 
                    Our goal is to empower businesses with digital solutions that stand the test of time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Meet the Founder - Keep existing content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <Badge variant="coral" className="mb-4">Meet the Founder</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-display">
              Hi, I&apos;m Leo Francis
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              As the founder of Leimarics, I&apos;m passionate about helping businesses establish 
              their digital presence and achieve their goals online. With over 5 years of experience 
              in web development, I&apos;ve worked with diverse clients to create websites that not 
              only look great but deliver real business results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My philosophy is simple: <strong>every business deserves a website they can be proud of</strong>. 
              Whether you&apos;re a small startup or an established enterprise, I work closely with you 
              to understand your vision and bring it to life with cutting-edge technology and proven strategies.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-coral-500 mb-1">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-coral-500 mb-1">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-coral-500 mb-1">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'UI/UX Design'].map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://leo-francis-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="group">
                  View My Portfolio
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline">
                  Let&apos;s Work Together
                </Button>
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-xl">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-800 font-medium">
                Verified Professional - Based in Goa, India
              </span>
            </div>
          </motion.div>

          {/* Founder Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/leo-francis.jpg"
                alt="Leo Francis - Founder of Leimarics"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg">
                  <div className="font-bold text-navy-900 text-lg">Leo Francis</div>
                  <div className="text-coral-500 font-medium">Founder & Lead Developer</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-coral-500/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-8 -left-8 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}