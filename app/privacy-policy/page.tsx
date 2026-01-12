'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/layouts/Section'

export default function PrivacyPolicy() {
  return (
    <main className="bg-gray-50 min-h-screen">
      
      {/* HERO */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-neutral-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extralight text-center mb-6 text-white tracking-tight leading-tight"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center text-lg text-white/70 max-w-2xl mx-auto"
          >
            Last updated: January 12, 2026
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <Section background="bg-white">
        <article className="max-w-3xl mx-auto prose prose-neutral prose-lg">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
              Introduction
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Compoxen ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at compoxen.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </motion.div>

          {/* Data Collection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
              Information We Collect
            </h2>
            
            <h3 className="text-xl font-medium text-neutral-800 mb-3 mt-6">
              Personal Data
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We may collect personally identifiable information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-6">
              <li>Fill out a dealer kit request form</li>
              <li>Request a quote for our products</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our website</li>
              <li>Create an account on our dealer portal</li>
            </ul>
            <p className="text-neutral-600 leading-relaxed mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-6">
              <li>Name and business name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>State/region of operation</li>
            </ul>

            <h3 className="text-xl font-medium text-neutral-800 mb-3 mt-6">
              Automatically Collected Data
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-8">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
            </ul>
          </motion.div>

          {/* Cookie Usage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
              Cookie Usage
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
              <li>Remember your preferences and settings</li>
              <li>Understand how you interact with our website</li>
              <li>Improve site performance and functionality</li>
              <li>Provide personalized content and recommendations</li>
            </ul>
            <p className="text-neutral-600 leading-relaxed mb-8">
              You can control cookie settings through your browser preferences. However, disabling cookies may affect certain features of our website.
            </p>
          </motion.div>

          {/* Third-Party Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We may share your information with third-party service providers to help us operate our business and website:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
              <li><strong>Analytics providers</strong> (e.g., Google Analytics) to understand website usage</li>
              <li><strong>Email service providers</strong> to send communications and newsletters</li>
              <li><strong>CRM platforms</strong> to manage customer relationships</li>
              <li><strong>Payment processors</strong> for secure transaction handling</li>
              <li><strong>Hosting providers</strong> to maintain our website infrastructure</li>
            </ul>
            <p className="text-neutral-600 leading-relaxed mb-8">
              These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </motion.div>

          {/* Data Protection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
              How We Protect Your Data
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-8">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure server infrastructure</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication protocols</li>
              <li>Employee training on data protection practices</li>
            </ul>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
              Your Rights
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
              <li>Access and review your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability (receive your data in a machine-readable format)</li>
            </ul>
            <p className="text-neutral-600 leading-relaxed mb-8">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="text-neutral-700 mb-2">
                <strong>Compoxen</strong>
              </p>
              <p className="text-neutral-600 mb-1">
                Email: <a href="mailto:privacy@compoxen.com" className="text-amber-700 hover:text-amber-800 transition">privacy@compoxen.com</a>
              </p>
              <p className="text-neutral-600 mb-1">
                Phone: 385‑483‑3700
              </p>
              <p className="text-neutral-600">
                Address: Lehi, Utah
              </p>
            </div>
          </motion.div>

          {/* Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
              Updates to This Policy
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-8">
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center pt-8 border-t border-gray-200"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-amber-700 hover:text-amber-800 font-medium transition"
            >
              ← Back to Home
            </Link>
          </motion.div>

        </article>
      </Section>
    </main>
  )
}
