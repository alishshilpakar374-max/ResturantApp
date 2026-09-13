import main from "../assets/img/main/main.jpg";

function About() {
  return (
    <section className="px-5 py-5 sm:px-10 lg:px-20 lg:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row">
        {/* Image */}
        <div className="relative w-full lg:w-1/2">
          <img
            src={main}
            alt="Delicious food at Waypoint"
            className="h-75 w-full rounded-xl object-cover sm:h-100"
          />

          <div className="absolute inset-0 rounded-xl bg-black/10"></div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <p className="mb-2 text-sm font-medium text-(--primary)">
            ABOUT WAYPOINT
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            Good Food, Made With Care.
          </h1>

          <p className="mt-5 leading-7 text-gray-900 dark:text-gray-300">
            At Waypoint, we believe great food brings people together. We serve
            delicious, freshly prepared meals made with quality ingredients and
            care.
          </p>

          <p className="mt-4 leading-7 text-gray-900 dark:text-gray-300">
            From traditional favorites to modern flavors, our menu is designed
            to offer something for everyone. Whether you're enjoying a quick
            bite, sharing a meal with friends, or ordering from home, we aim to
            make every experience enjoyable.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
            <div>
              <h2 className="text-2xl font-bold text-(--primary)">4.8★</h2>
              <p className="mt-1 text-xs font-bold text-gray-500 sm:text-sm ">
                Rating
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-(--primary)">50+</h2>
              <p className="mt-1 text-xs font-bold text-gray-500 sm:text-sm">
                Delicious Dishes
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-(--primary)">10K+</h2>
              <p className="mt-1 font-bold text-xs text-gray-500 sm:text-sm">
                Happy Customers
              </p>
            </div>
          </div>

          <p className="mt-6 text-lg font-semibold text-(--primary)">
            Good Food. Good Mood.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
