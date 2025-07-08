import { Metadata } from 'next';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact – Insurance Training BW',
  description: 'Reach out to Insurance Training BW via WhatsApp, email, or phone to learn more or register.',
};

export default function ContactPage() {
  return (
    <section className="py-20 bg-white text-[#0F264B]">
      <div className="container mx-auto max-w-2xl text-center space-y-10 px-6">
        <h1 className="text-4xl font-bold">📞 Get in Touch</h1>
        <p className="text-[#4F5F7A]">
          Whether you're ready to register or just have a question, we're here to help.
        </p>

        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <MessageCircle size={32} className="text-[#3A8DDB]" />
            <p className="font-semibold mt-2">WhatsApp Us</p>
            <a
              href="https://wa.me/26772199926"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3A8DDB] underline"
            >
              +267 72 199 926
            </a>
            <a
              href="https://wa.me/26773931344"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3A8DDB] underline"
            >
              +267 73 931 344
            </a>
          </div>

          <div className="flex flex-col items-center">
            <Mail size={32} className="text-[#3A8DDB]" />
            <p className="font-semibold mt-2">Email</p>
            <a href="mailto:info@insurancetrainingbw.com" className="text-[#3A8DDB] underline">
              info@insurancetrainingbw.com
            </a>
          </div>

          <div className="flex flex-col items-center">
            <Phone size={32} className="text-[#3A8DDB]" />
            <p className="font-semibold mt-2">Call Us</p>
            <p>+267 72 199 926</p>
            <p>+267 73 931 344</p>
          </div>
        </div>
      </div>
    </section>
  );
}
