import artWithAmanda from "../assets/images/artwithamanda.png";
function Projects() {
  return (
    <section className=" text-center rounded overflow-hidden shadow-lg">
      <img className="w-full" src={artWithAmanda} alt="Art With Amanda"></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Art With Amanda</div>
        <p className="text-gray-700 text-base"></p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Python
        </span>
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Django
        </span>
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Stripe
        </span>
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          AWS S3
        </span>
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Bootstrap
        </span>
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          PostgreSQL
        </span>
      </div>
    </section>
  );
}

export default Projects;
