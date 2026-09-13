import { useState } from "react";

function Filter({ onClose, setFilters }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const [category, setCategory] = useState("all");
  const [selectedTypes, setSelectedTypes] = useState(["all"]);

  const categories = [
    { label: "All", value: "all" },
    { label: "Veg", value: "veg" },
    { label: "Non-Veg", value: "non-veg" },
    { label: "Drinks", value: "drink" },
  ];

  const types = {
    veg: [
      { label: "Momo", value: "momo" },
      { label: "Chowmein", value: "chowmein" },
      { label: "Thukpa", value: "thukpa" },
      { label: "Soup", value: "soup" },
      { label: "Curry", value: "curry" },
      { label: "Main Course", value: "main-course" },
    ],

    "non-veg": [
      { label: "Momo", value: "momo" },
      { label: "Chowmein", value: "chowmein" },
      { label: "Thukpa", value: "thukpa" },
      { label: "Soup", value: "soup" },
      { label: "Curry", value: "curry" },
      { label: "Main Course", value: "main-course" },
    ],

    drink: [
      { label: "Soft Drink", value: "soft-drink" },
      { label: "Hot Drink", value: "hot-drink" },
      { label: "Alcoholic Drink", value: "alcoholic-drink" },
    ],
  };

  const currentTypes = types[category] || [];

  const handleCategoryChange = (value) => {
    setCategory(value);
    setSelectedTypes(["all"]);
  };

  const handleTypeChange = (value) => {
    if (value === "all") {
      setSelectedTypes(["all"]);
      return;
    }

    setSelectedTypes((prev) => {
      let updated;

      if (prev.includes(value)) {
        updated = prev.filter((item) => item !== value);
      } else {
        updated = [...prev.filter((item) => item !== "all"), value];
      }

      if (updated.length === 0) {
        return ["all"];
      }

      if (updated.length === currentTypes.length) {
        return ["all"];
      }

      return updated;
    });
  };

  const handleFilters = () => {
    setFilters({
      min: Number(minPrice),
      max: Number(maxPrice),
      category,
      types: selectedTypes,
    });
  };

  const handleClear = () => {
    setMinPrice(0);
    setMaxPrice(1000);
    setCategory("all");
    setSelectedTypes(["all"]);

    setFilters({
      min: null,
      max: null,
      category: "all",
      types: ["all"],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="flex h-[80vh] w-[92vw] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700/70 dark:bg-(--surface) sm:h-[70vh] sm:w-[75vw] lg:h-[75vh] lg:w-[60vw] lg:max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-(--text)">
              Filter Menu
            </h2>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Find exactly what you're craving.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-2xl leading-none text-gray-400 transition hover:text-gray-700 dark:hover:text-white"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {/* Category */}
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
              Category
            </h3>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {categories.map((item) => {
                const isSelected = category === item.value;

                return (
                  <button
                    type="button"
                    key={item.value}
                    onClick={() => handleCategoryChange(item.value)}
                    className={`rounded-xl border px-3 py-3 text-sm transition ${
                      isSelected
                        ? "border-(--primary) bg-(--primary)/10 text-(--primary)"
                        : "border-gray-200 bg-gray-50 text-gray-600 hover:border-(--primary) hover:bg-(--primary)/5 hover:text-(--primary) dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:border-(--primary) dark:hover:bg-(--primary)/10 dark:hover:text-(--primary)"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Type */}
          {category !== "all" && (
            <section className="mt-7">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                Type
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={() => handleTypeChange("all")}
                  className={`rounded-xl border px-3 py-3 text-sm transition ${
                    selectedTypes.includes("all")
                      ? "border-(--primary) bg-(--primary)/10 text-(--primary)"
                      : "border-gray-200 bg-gray-50 text-gray-600 hover:border-(--primary) hover:bg-(--primary)/5 hover:text-(--primary) dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:border-(--primary) dark:hover:bg-(--primary)/10 dark:hover:text-(--primary)"
                  }`}
                >
                  All
                </button>

                {currentTypes.map((type) => {
                  const isSelected = selectedTypes.includes(type.value);

                  return (
                    <button
                      type="button"
                      key={type.value}
                      value={type.value}
                      onClick={() => handleTypeChange(type.value)}
                      className={`rounded-xl border px-3 py-3 text-sm transition ${
                        isSelected
                          ? "border-(--primary) bg-(--primary)/10 text-(--primary)"
                          : "border-gray-200 bg-gray-50 text-gray-600 hover:border-(--primary) hover:bg-(--primary)/5 hover:text-(--primary) dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:border-(--primary) dark:hover:bg-(--primary)/10 dark:hover:text-(--primary)"
                      }`}
                    >
                      {type.label}
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {/* Price Range */}
          <section className="mt-7">
            <h3 className="mb-4 text-xl text-gray-900 dark:text-(--text)">
              Price Range
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {/* Minimum */}
              <div className="space-y-2">
                <div className="text-center text-sm text-gray-600 dark:text-gray-300">
                  Minimum
                </div>

                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="0"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/20 dark:border-gray-600 dark:bg-gray-800/60 dark:text-gray-200 dark:placeholder:text-gray-500"
                />
              </div>

              {/* Maximum */}
              <div className="space-y-2">
                <div className="text-center text-sm text-gray-600 dark:text-gray-300">
                  Maximum
                </div>

                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="1000"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/20 dark:border-gray-600 dark:bg-gray-800/60 dark:text-gray-200 dark:placeholder:text-gray-500"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 border-t border-gray-200 px-5 py-4 dark:border-gray-700">
          <button
            onClick={handleClear}
            className="text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Clear All
          </button>

          <button
            onClick={() => {
              handleFilters();
              onClose();
            }}
            className="rounded-lg bg-(--primary) px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:scale-[0.98]"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
