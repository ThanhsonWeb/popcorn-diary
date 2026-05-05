function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} PopcornDiary. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Designed & Developed by <span className="text-yellow-400 font-semibold">Son Jony</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
