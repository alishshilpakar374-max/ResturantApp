import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlidersHorizontal } from "lucide-react";

import { Button, Input } from "../components";
import { PreviewDish, Filter } from "../components";
import { SearchSvg } from "../assets/svg";

import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import {
  vegDishes,
  nonVegDishes,
  coldDrinks,
  hotDrinks,
  alcoholicDrinks,
} from "../data";

function Menu() {
  const dispatch = useDispatch();

  const cartDishes = useSelector((state) => state.cart.dishes);

  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    min: null,
    max: null,
    category: "all",
  });

  const [filter, setFilter] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const allDishes = [
    ...vegDishes,
    ...nonVegDishes,
    ...coldDrinks,
    ...hotDrinks,
    ...alcoholicDrinks,
  ];

  const filteredDishes = allDishes.filter(
    (dish) =>
      dish.name.toLowerCase().includes(search.toLowerCase()) &&
      (filters.min === null || dish.price >= filters.min) &&
      (filters.max === null || dish.price <= filters.max) &&
      (filters.category === "all" || dish.category === filters.category),
  );

  return (
    <div className="min-h-screen w-full bg-(--bg) text-(--text)">
      {/* ==================== Search Section ==================== */}
      <section className="px-6 pt-5 sm:px-10 lg:px-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-(--primary)">
            Explore
          </p>

          <h1 className="mt-1 text-2xl font-bold sm:text-3xl">Our Menu</h1>

          <p className="mt-1 text-center text-sm text-(--muted)">
            Find something delicious for every mood.
          </p>

          {/* Search + Filter */}
          <div className="mt-5 flex w-full items-center gap-3 sm:w-[80%] lg:w-[70%]">
            {/* Search */}
            <div className="relative flex-1">
              <Input
                className="
                  w-full
                  rounded-xl
                  border border-(--border)
                  bg-(--surface)
                  pr-10
                  text-(--text)
                  shadow-sm
                  placeholder:text-(--muted)
                  focus:border-(--primary)
                  focus:outline-none
                  focus:ring-2
                  focus:ring-(--primary)/20
                "
                placeholder="Search MoMo, Dessert, Drinks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {!search && (
                <SearchSvg
                  className="
                    pointer-events-none
                    absolute right-3 top-1/2
                    h-4.5 w-4.5
                    -translate-y-1/2
                    text-(--muted)
                  "
                />
              )}
            </div>

            {/* Filter */}
            <button
              type="button"
              onClick={() => setFilter(true)}
              aria-label="Filter dishes"
              className="
                flex h-10 w-10
                shrink-0
                items-center justify-center
                rounded-xl
                border border-(--border)
                bg-(--surface)
                text-(--muted)
                shadow-sm
                transition-all duration-200
                hover:border-(--primary)
                hover:text-(--primary)
                active:scale-95
              "
            >
              <SlidersHorizontal size={19} strokeWidth={1.7} />
            </button>
          </div>
        </div>
      </section>

      {/* ==================== Menu Items ==================== */}
      <section className="mt-7 px-4 pb-10 sm:px-8 lg:px-12">
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {filteredDishes.map((dish) => {
              const isActive = cartDishes.some((item) => item.id === dish.id);

              return (
                <div
                  key={dish.id}
                  className="
                    group flex
                    min-h-24
                    items-center justify-between
                    gap-3
                    rounded-2xl
                    border border-(--border)
                    bg-(--surface)
                    p-3
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:shadow-lg
                  "
                >
                  {/* ================= Image + Info ================= */}
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    {/* Image */}
                    <div className="relative shrink-0 overflow-hidden rounded-xl">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        onClick={() => setSelectedDish(dish)}
                        className="
                          h-16 w-16
                          cursor-pointer
                          object-cover
                          transition-transform duration-300
                          group-hover:scale-105
                          sm:h-20 sm:w-20
                        "
                      />

                      {/* Rating */}
                      <span
                        className="
                          absolute bottom-1 left-1
                          rounded-md
                          bg-black/65
                          px-1.5 py-0.5
                          text-[9px]
                          font-medium
                          text-white
                          backdrop-blur-sm
                        "
                      >
                        ★ {dish.popularity}
                      </span>
                    </div>

                    {/* Information */}
                    <div className="min-w-0">
                      <h2
                        className="
                          truncate
                          text-sm font-semibold
                          text-(--text)
                          sm:text-base
                        "
                      >
                        {dish.name}
                      </h2>

                      <p className="mt-1 text-sm font-semibold text-(--primary)">
                        Rs. {dish.price}
                      </p>

                      <button
                        type="button"
                        onClick={() => setSelectedDish(dish)}
                        className="
                          mt-1
                          text-[11px]
                          font-medium
                          text-(--muted)
                          transition-colors
                          hover:text-(--primary)
                        "
                      >
                        View details →
                      </button>
                    </div>
                  </div>

                  {/* ================= Cart Button ================= */}
                  <Button
                    onClick={() => {
                      if (isActive) {
                        dispatch(removeFromCart(dish.id));
                      } else {
                        dispatch(addToCart(dish));
                      }
                    }}
                    className={`
                      shrink-0
                      rounded-lg
                      px-3 py-2
                      text-xs
                      font-semibold
                      text-white
                      shadow-sm
                      transition-all duration-200
                      hover:opacity-90
                      active:scale-95
                      sm:px-4
                      sm:text-sm
                      ${isActive ? "bg-green-500" : "bg-(--primary)"}
                    `}
                  >
                    {isActive ? "Added ✓" : "Add"}
                  </Button>
                </div>
              );
            })}
          </div>
        ) : (
          /* ==================== No Results ==================== */
          <div className="flex min-h-60 flex-col items-center justify-center text-center">
            <div
              className="
                flex h-14 w-14
                items-center justify-center
                rounded-full
                bg-(--primary)/10
                text-2xl
              "
            >
              🍽️
            </div>

            <h2 className="mt-4 text-lg font-semibold">No dishes found</h2>

            <p className="mt-1 max-w-xs text-sm text-(--muted)">
              Try searching for something else or adjust your filters.
            </p>
          </div>
        )}
      </section>

      {/* ==================== Dish Preview ==================== */}
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

      {/* ==================== Filter ==================== */}
      {filter && (
        <Filter
          filters={filters}
          setFilters={setFilters}
          onClose={() => setFilter(false)}
        />
      )}
    </div>
  );
}

export default Menu;
