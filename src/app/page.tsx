'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const keys = useRef<string[]>([]);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      keys.current.push(e.key.toLowerCase());
      if (keys.current.length > 5) keys.current.shift();
      if (keys.current.join('') === 'admin') router.push('/login-secret-login-for-admins97F4B2NXQ');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);

  const longPress = {
    onTouchStart: () => setTouchStart(Date.now()),
    onTouchEnd: () => {
      if (touchStart && Date.now() - touchStart > 600) {
        router.push('/login-secret-login-for-admins97F4B2NXQ');
      }
      setTouchStart(null);
    },
  };

  return (
    <>
      {/* Hero */}
      <section
        {...longPress}
        className="text-center px-6 pt-28 pb-20 bg-gradient-to-br from-[#3A8DDB] to-[#98bfff] text-white"
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-2xl mx-auto mb-4 drop-shadow-lg">
          The World Needs Insurers — Train With Us Today
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          The best insurance training school in Botswana. Start your journey with us.
        </p>
        <Link
          href="/enroll"
          className="inline-flex items-center gap-2 bg-white text-[#0F264B] rounded-full px-7 py-3 font-semibold hover:brightness-105 transition"
        >
          🎓 Apply Now
        </Link>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#F9FAFB] text-center">
        <div className="container grid grid-cols-2 sm:grid-cols-4 gap-6 text-[#0F264B] font-semibold text-xl">
          <div><p>10,000+</p><span className="block text-sm font-normal text-gray-500">Graduates</span></div>
          <div><p>10+</p><span className="block text-sm font-normal text-gray-500">Years of Operation</span></div>
          <div><p>40+</p><span className="block text-sm font-normal text-gray-500">Corporate Clients</span></div>
          <div><p>50+</p><span className="block text-sm font-normal text-gray-500">Short Courses</span></div>
        </div>
      </section>

      {/* What is COP */}
      <section className="py-20 bg-[#3A8DDB] text-white px-6">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">What is a COP?</h2>
          <p className="text-lg">
            A Certificate of Proficiency (COP) is a recognized insurance credential. It opens doors to underwriting, claims, insurance sales and more. Do it online or attend classes — even pay in installments.
          </p>
          <ul className="list-disc list-inside text-left max-w-xl mx-auto space-y-1">
            <li>Distance or in-person</li>
            <li>Finish in 3 months</li>
            <li>Advance your career</li>
            <li>Pay in 2 installments</li>
          </ul>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white text-center px-6">
        <div className="container max-w-5xl mx-auto space-y-12">
          <h2 className="text-2xl font-bold text-[#0F264B]">Our Courses</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: 'Risk Management COP', code: 'IRM' },
              { title: 'Anti-Money Laundering COP', code: 'AML' },
              { title: 'Retirement Funds COP', code: 'RFM' },
            ].map(({ title, code }) => (
              <div key={code} className="card">
                <h3 className="text-lg font-semibold text-[#0F264B]">{title}</h3>
                <p className="text-sm text-gray-600 mt-2">{code}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-[#F9FAFB] text-center px-6">
        <div className="container max-w-2xl mx-auto">
          <blockquote className="italic text-[#0F264B] text-xl font-semibold mb-2">
            “Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”
          </blockquote>
          <p className="text-sm text-gray-600">– Malcolm X</p>
        </div>
      </section>

      {/* Questions CTA */}
      <section className="py-16 bg-[#3A8DDB] text-white text-center px-6">
        <div className="container max-w-xl mx-auto space-y-4">
          <h2 className="text-xl font-bold">Questions?</h2>
          <p className="text-white/90">
            Is there something specific about our Training Institute you'd like to know?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0F264B] px-6 py-3 rounded-full font-semibold hover:brightness-105"
          >
            📩 Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
