import main from "../assets/img/main/main.jpg";

import { Features, PreviewDish } from "../components";

import { DeliverySvg, FreshSvg, QualitySvg } from "../assets/svg";

import { useNavigate } from "react-router-dom";

import { vegDishes, nonVegDishes, hotDrinks, coldDrinks } from "../data";

import { useState } from "react";

function Home() {
  const [selectedDish, setSelectedDish] = useState(null);

  const navigate = useNavigate();

  const features = [
    {
      icon: FreshSvg,
      heading: "Fresh Ingredients",
      description: "We use the best \n quality ingredients",
    },
    {
      icon: DeliverySvg,
      heading: "Fast Delivery",
      description: "Get your food\n delivered fast",
    },
    {
      icon: QualitySvg,
      heading: "Best Quality",
      description: "We always maintain\n the best quality",
    },
  ];

  const popularDishes = [
    ...vegDishes,
    ...nonVegDishes,
    ...coldDrinks,
    ...hotDrinks,
  ];

  return (
    <div className="bg-(--bg) text-(--text) transition-colors duration-300">
      {/* ================= HERO ================= */}

      <section className="relative isolate h-[60vh] min-h-105 w-full overflow-hidden sm:h-[65vh] lg:h-[70vh]">
        {/* Hero Image */}
        <img
          src={main}
          alt="Freshly prepared food at Waypoint"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/95 via-[#0f172a]/65 to-[#0f172a]/10" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#0f172a]/70 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="max-w-xl text-white">
              {/* Eyebrow */}
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-7 bg-(--primary)" />

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-(--primary) sm:text-sm">
                  Welcome to Waypoint
                </p>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Good Food.
                <br />
                <span className="text-(--primary)">Good Mood.</span>
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-md text-sm leading-6 text-gray-200 sm:text-base sm:leading-7">
                Experience delicious food made with fresh ingredients, quality
                you can taste, and flavors worth coming back for.
              </p>

              {/* CTA */}
              <div className="mt-7 flex items-center gap-4">
                <button
                  onClick={() => navigate("/menu")}
                  className=" rounded-lg bg-(--primary) px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0 active:scale-95 "
                >
                  Explore Menu
                </button>

                <button
                  className=" rounded-lg border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10 active:scale-95
            "
                >
                  Book Table
                </button>
              </div>

              {/* Small trust line */}
              <div className="mt-7 flex items-center gap-4 text-xs text-gray-300 sm:text-sm">
                <span>✦ Fresh Ingredients</span>
                <span className="h-1 w-1 rounded-full bg-gray-500" />
                <span>✦ Quality Food</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POPULAR DISHES ================= */}

      <section className="mx-6 mt-8 sm:mx-10 lg:mx-12">
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">
            Explore Popular Dishes
          </h2>

          <p className="mt-1 text-sm text-(--muted)">
            Discover what our customers love the most.
          </p>
        </div>

        {/* Dishes */}
        <div className="mt-5 grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
          {popularDishes
            .filter((dish) => dish.popularity === 5 || dish.popularity === 4)
            .slice(0, 8)
            .map((dish) => (
              <div
                key={dish.id}
                className="
            group overflow-hidden rounded-2xl
            border border-(--border)
            bg-(--surface)
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden sm:h-40">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    onClick={() => setSelectedDish(dish)}
                    className="
                h-full w-full cursor-pointer
                object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
                  />

                  {/* Rating */}
                  <span
                    className="
                absolute right-2 top-2
                rounded-full
                bg-black/60
                px-2 py-1
                text-[11px] font-medium text-white
                backdrop-blur-sm
              "
                  >
                    ★ {dish.popularity}
                  </span>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2 p-3">
                  <h2 className="truncate text-sm font-semibold text-(--text) sm:text-base">
                    {dish.name}
                  </h2>

                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-(--primary)">
                      Rs. {dish.price}
                    </p>

                    <button
                      onClick={() => setSelectedDish(dish)}
                      className="
                  text-xs font-medium text-(--muted)
                  transition-colors duration-200
                  hover:text-(--primary)
                "
                    >
                      View →
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* View Full Menu */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate("/menu")}
            className="
        rounded-lg
        border border-(--primary)
        px-5 py-2
        text-sm font-semibold
        text-(--primary)
        transition-all duration-200
        hover:bg-(--primary)/10
        active:scale-95
      "
          >
            View Full Menu →
          </button>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="mt-12 pb-10">
        <h2 className="mb-6 text-center text-xl font-semibold sm:text-2xl">
          Why Choose Us?
        </h2>

        <div className="px-5">
          <div
            className="
              grid grid-cols-2 gap-4
              lg:grid-cols-3 lg:gap-10
            "
          >
            {features.map((f, index) => (
              <Features
                key={f.heading}
                icon={f.icon}
                heading={f.heading}
                description={f.description}
                className={
                  index === features.length - 1
                    ? "col-span-2 lg:col-span-1"
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= DISH PREVIEW ================= */}

      {selectedDish && (
        <PreviewDish
          image={selectedDish.image}
          name={selectedDish.name}
          id={selectedDish.id}
          popularity={selectedDish.popularity}
          description={selectedDish.description}
          onClose={() => setSelectedDish(null)}
        />
      )}
    </div>
  );
}

export default Home;
