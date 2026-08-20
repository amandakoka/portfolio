function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500">© 2026 Amanda Koka</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/amandakoka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/amandakoka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            LinkedIn
          </a>

          <a href="#hero" className="text-sm text-gray-500 hover:text-gray-900">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
