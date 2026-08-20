import profilePicture from "../assets/images/pp.jpg";
function Hero() {
  return (
    <section className="relative isolate px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#08143c] to-[#8FD9FB] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        ></div>
      </div>
      <div className="mx-auto max-w-2xl pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="text-center">
          <img
            src={profilePicture}
            alt="Amanda Koka Picture"
            className="mx-auto h-30 w-30 rounded-full object-cover"
          />
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-balance text-gray-900 ">
            Hello, I'm Amanda Koka!
          </h1>
          <p className="mt-8 text-lg font-bold text-pretty text-gray-500 sm:text-xl/8">
            A Third Year Software Engineering Student
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md hover:bg-gray-100 px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              My projects
            </a>
            <a
              href="https://github.com/amandakoka"
              target="_blank"
              className="rounded-md hover:bg-gray-100 px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/amandakoka"
              target="_blank"
              className="rounded-md hover:bg-gray-100 px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="rounded-md hover:bg-gray-100 px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 text-sm/6 font-semibold text-gray-900"
            >
              Contact me <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#08143c] to-[#8FD9FB] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        ></div>
      </div>
    </section>
  );
}

export default Hero;
