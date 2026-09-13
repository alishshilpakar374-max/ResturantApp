function Features({
  icon,
  heading,
  description,
  pClassName = "",
  className = "",
}) {
  const Icon = icon;

  return (
    <div className={className}>
      <div
        className="
          mx-auto flex h-40 w-40 flex-col items-center justify-center
          rounded-lg
          border border-(--border)
          bg-(--surface)
          p-5
          text-(--text)
          shadow-lg
          transition duration-300
          hover:-translate-y-2
          hover:shadow-xl

          lg:h-50 lg:w-72
        "
      >
        {Icon && <Icon className="mb-2 h-10 w-10 text-(--primary)" />}

        <h1 className="mb-2 text-center text-sm font-semibold">{heading}</h1>

        <p
          className={`whitespace-pre-line text-center text-xs leading-6 text-(--muted) ${pClassName}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default Features;
