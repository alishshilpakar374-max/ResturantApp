function PreviewDish({ image, name, popularity, description, onClose }) {
  return (
    // Dark overlay
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    >
      {/* Preview card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="  relative flex h-[69vh] w-[92vw]  flex-col overflow-hidden rounded-2xl bg-(--surface) shadow-2xl sm:h-[65vh] sm:w-[75vw] lg:h-[70vh] lg:w-[60vw]  lg:max-w-4xl lg:flex-row
  "
      >
        {/* Image */}
        <div className="relative h-1/2 w-full shrink-0 lg:h-full lg:w-1/2">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="  absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center  rounded-full
            bg-black/60  text-lg text-white backdrop-blur-sm
            transition hover:bg-black/80 active:scale-95 lg:hidden"
          >
            ✕
          </button>

          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>

        {/* Details */}
        <div className="flex min-h-0 flex-1 flex-col p-5 lg:w-1/2">
          {/* Name + description */}
          <div className="flex-1 overflow-y-auto">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="hidden absolute right-3 top-3 z-10 h-9 w-9 rounded-full bg-black/60  text-lg text-white backdrop-blur-sm transition hover:bg-black/80 active:scale-95 lg:flex lg:items-center lg:justify-center"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              {name}
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base">
              {description}
            </p>
          </div>

          {/* Popularity */}
          <div className="mt-4 flex shrink-0 items-center justify-between border-t border-gray-700 pt-4">
            <h3 className="text-sm font-medium text-gray-400">Popularity</h3>

            <p className="text-sm font-medium text-(--primary)">
              ⭐ {popularity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewDish;
