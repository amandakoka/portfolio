function Navbar() {
  return (
    <nav className="sticky top-0 z-100 transition-[background,border-color,backdrop-filter] duration-300 border-b bg-white/80 backdrop-blur-lg backdrop-saturate-180 border-b-black/6">
      <div className="nav-inner">
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="text-xl md:text-2xl font-bold text-text no-underline tracking-[-0.03em] cursor-pointer inline-flex items-center min-h-11 -my-2"
          >
            Amanda Koka
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex gap-1">
            <a
              href="#hero"
              className="cursor-pointer rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-gray-100"
            >
              About
            </a>

            <a
              href="#projects"
              className="cursor-pointer rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-gray-100"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="cursor-pointer rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-gray-100"
            >
              Contact
            </a>
          </div>

          <a
            href="/AMANDA-KOKA-CV.pdf"
            download
            className="hidden h-9 items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 text-base font-semibold shadow-sm transition hover:shadow-md md:inline-flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-download"
              aria-hidden="true"
            >
              <path d="M12 15V3"></path>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <path d="m7 10 5 5 5-5"></path>
            </svg>
            Download CV
          </a>

          <button
            className="flex md:hidden items-center justify-center bg-transparent border-none cursor-pointer p-2 min-w-11 min-h-11 rounded-lg"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="nav-menu"
          >
            <div className="">
              <svg
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="4"
                  x2="20"
                  y1="6"
                  y2="6"
                  opacity="1"
                  style={{
                    transform: "none",
                    transformOrigin: "50% 50%",
                    transformBox: "fill-box",
                  }}
                ></line>

                <line
                  x1="4"
                  x2="20"
                  y1="12"
                  y2="12"
                  opacity="1"
                  style={{
                    transform: "none",
                    transformOrigin: "50% 50%",
                    transformBox: "fill-box",
                  }}
                ></line>

                <line
                  x1="4"
                  x2="20"
                  y1="18"
                  y2="18"
                  opacity="1"
                  style={{
                    transform: "none",
                    transformOrigin: "50% 50%",
                    transformBox: "fill-box",
                  }}
                ></line>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
