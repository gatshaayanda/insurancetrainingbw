import { Metadata } from 'next';
import { GraduationCap, BookOpenCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services – Insurance Training BW',
  description:
    'Explore the learning options offered by Insurance Training BW: Distance Learning and Tuition-based training.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <BookOpenCheck size={36} className="text-[#3A8DDB]" />,
      title: 'Distance Learning',
      price: 'P2000 per course',
      desc: 'Study at your own pace, from anywhere. Includes materials, calendar, and exam prep. Ideal for flexible learners.',
    },
    {
      icon: <GraduationCap size={36} className="text-[#3A8DDB]" />,
      title: 'Tuition Learning',
      price: 'P4000 per course',
      desc: 'Attend in-person or live sessions. Guided learning with structured support. Recommended for best results.',
    },
  ];

  return (
    <section className="py-20 bg-[#F1F1F1] text-[#0F264B]">
      <div className="container mx-auto max-w-5xl text-center space-y-12">
        <h1 className="text-4xl font-bold">🎓 Study Options</h1>
        <p className="text-[#4F5F7A] max-w-2xl mx-auto">
          Choose a learning track that suits your goals, availability, and budget.
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          {services.map(({ icon, title, price, desc }) => (
            <div key={title} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-sm font-bold text-[#3A8DDB] mb-2">{price}</p>
              <p className="text-sm text-[#4F5F7A]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
