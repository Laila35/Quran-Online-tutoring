import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function TermsAndConditions() {
  return (
    <>
    <head>        
    <title>Terms and Conditions | Quran Online Tutoring</title>
    </head>
      <head>
        <title>Terms and Conditions | Quran Online Tutoring</title>
        <meta
          name="description"
          content="Terms and Conditions for Quran Online Tutoring. Understand the terms of service, payment policies, and usage guidelines for our platform."
        />
      </head>

      <div className="min-h-screen bg-white px-6 py-12 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-8">
            Terms and Conditions
          </h1>
          <p className="text-gray-700 mb-6">
            Welcome to Quran Online Tutoring. By accessing or using our platform, you agree to be bound by these Terms and Conditions. Please read them carefully.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By using our services, you accept and agree to comply with these terms. If you do not agree to any part of these terms, please refrain from using our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">2. Services Provided</h2>
            <p className="text-gray-700">
              Quran Online Tutoring offers online Quran learning classes for students of all ages and levels. We provide one-on-one sessions with qualified teachers and various course options.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">3. User Accounts</h2>
            <p className="text-gray-700 mb-2">
              To access our services, you may need to create an account. You agree to provide accurate and complete information and to keep your account information up to date. You are responsible for maintaining the confidentiality of your account and password.
            </p>
            <p className="text-gray-700">
              You agree to notify us immediately of any unauthorized use of your account or breach of security. We are not liable for any loss or damage arising from your failure to safeguard your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">4. Payment and Fees</h2>
            <p className="text-gray-700 mb-2">
              Our services may require payment. You agree to pay all applicable fees as displayed on our    
               <Link className="text-emerald-600" href="/pricing"> Fee Page</Link>
               
               . Payment is due in advance of the services, and failure to pay may result in suspension of your account.
            </p>
            <p className="text-gray-700">
              We reserve the right to modify our pricing at any time. Any changes will be communicated to you in advance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">5. Cancellation and Refund Policy</h2>
            <p className="text-gray-700">
              You may cancel your subscription or specific classes by contacting us at <a href="mailto:admin@QuranOnlineTutoring.com" className="text-emerald-600">admin@QuranOnlineTutoring.com</a>. Refunds may be issued based on the refund policy outlined on our platform or as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">6. Prohibited Activities</h2>
            <p className="text-gray-700 mb-2">
              Users agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Use the platform for any unlawful or fraudulent activities.</li>
              <li>Disrupt or interfere with the platform`&apos;`s functionality or access.</li>
              <li>Attempt to gain unauthorized access to our systems or user accounts.</li>
              <li>Impersonate another user or misrepresent your affiliation with any entity.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700">
              All content, including text, images, logos, and course materials on Quran Online Tutoring, are the intellectual property of Quran Online Tutoring or its licensors. Unauthorized use of our intellectual property is strictly prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700">
              To the fullest extent permitted by law, Quran Online Tutoring and its affiliates will not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms and Conditions at any time. Any updates will be posted on this page, and we encourage users to review the terms regularly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">10. Governing Law</h2>
            <p className="text-gray-700">
              These Terms and Conditions are governed by the laws of your jurisdiction. Any disputes arising under these terms shall be resolved in accordance with applicable local laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">11. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about these Terms and Conditions, please contact us at <a href="mailto:admin@QuranOnlineTutoring.com" className="text-emerald-600">admin@QuranOnlineTutoring.com</a>.
            </p>
          </section>

          <p className="text-gray-500 text-sm mt-8">
          </p>
        </div>
      </div>
    </>
  );
}

export default TermsAndConditions;
