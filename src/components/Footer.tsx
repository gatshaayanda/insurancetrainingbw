export default function Footer() {
  return (
    <footer className="bg-[#D9DCE2] text-[#0F264B] mt-12 border-t border-gray-200">
      <div className="container px-4 py-6 text-center text-sm space-y-1">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <nav className="flex space-x-6 text-sm font-medium">
            <a href="/" className="hover:text-[#3A8DDB] transition">Home</a>
            <a href="/about" className="hover:text-[#3A8DDB] transition">About</a>
            <a href="/courses" className="hover:text-[#3A8DDB] transition">Courses</a>
            <a href="/enroll" className="hover:text-[#3A8DDB] transition">Enroll</a>
            <a href="/contact" className="hover:text-[#3A8DDB] transition">Contact</a>
          </nav>
        </div>

        <div className="mt-4">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Insurance Training BW</p>
          <p className="text-xs text-gray-600">Site by New Creations Media DDC</p>
        </div>
      </div>
    </footer>
  );
}
