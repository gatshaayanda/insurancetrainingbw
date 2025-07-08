import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'About Us – Insurance Training BW',
  description: 'Learn about our mission, accreditation, impact, and leadership in insurance education across Botswana.',
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 bg-white text-[#0F264B]">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg">
            Training Insurers of Tomorrow. Officially accredited by BQA — Accreditation Number: <strong>ETP 0620</strong>
          </p>
       
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB] text-[#0F264B]">
        <div className="container max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
            <p className="text-gray-700">
              Insurance Training Institute is a Botswana Qualifications Authority (BQA)–accredited provider delivering
              industry-relevant education in insurance and professional development. We’ve empowered thousands since 2013.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Impact</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>10,000+ trained individuals</li>
              <li>95% employment rate among graduates</li>
              <li>Courses aligned with industry & regulatory standards</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Leadership</h2>
            <p className="text-gray-700">
              Led by <strong>Mr. Samson Macharia</strong>, a seasoned professional with 25+ years’ experience and an Associate of the Insurance Institute of South Africa (<a href="https://iisa.co.za" className="underline text-[#3A8DDB]" target="_blank">IISA</a>).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700">
              To develop skilled professionals who are competent, compliant, and future-fit for Botswana’s financial and service sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center text-[#0F264B]">
        <div className="container max-w-2xl mx-auto space-y-4">
          <blockquote className="italic font-semibold text-xl">
            “Education is the most powerful weapon which you can use to change the world.”
          </blockquote>
          <p className="text-sm text-gray-600">– Nelson Mandela</p>
        </div>
      </section>
    </>
  );
}
