import { Input, Button } from "../components";

function Contact() {
  return (
    <section className="px-5 py-8 sm:px-10 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wider text-(--primary)">
            GET IN TOUCH
          </p>

          <h1 className="mt-2 text-3xl font-bold text-(--text) sm:text-4xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500 dark:text-gray-400">
            Have a question, feedback, or want to know more about our food? We'd
            love to hear from you.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700/70 dark:bg-(--surface)">
            <h2 className="text-xl font-semibold text-(--text)">
              Get in Touch
            </h2>

            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {/* Contact Details */}
              <div className="space-y-5 text-sm">
                <div>
                  <p className="font-medium text-(--primary)">📍 Location</p>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Bhaktapur, Nepal
                  </p>
                </div>

                <div>
                  <p className="font-medium text-(--primary)">📞 Phone</p>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    +977 98XXXXXXXX
                  </p>
                </div>

                <div>
                  <p className="font-medium text-(--primary)">✉️ Email</p>
                  <p className="mt-1 break-all text-gray-500 dark:text-gray-400">
                    hello@waypoint.com
                  </p>
                </div>

                <div>
                  <p className="font-medium text-(--primary)">
                    🕒 Opening Hours
                  </p>

                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Sunday – Saturday
                    <br />
                    10:00 AM – 10:00 PM
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                <iframe
                  src="https://www.google.com/maps?q=27.676840,85.438412&output=embed"
                  width="100%"
                  height="300"
                  className="border-0"
                  loading="lazy"
                  title="Kamal Pokhari, Kamal Binayak, Bhaktapur"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700/70 dark:bg-(--surface)">
            <Input
              label="Your Name"
              placeholder="Enter your name"
              className="border border-gray-300 bg-gray-50 text-(--text) focus:border-(--primary) dark:border-gray-600 dark:bg-gray-800/60"
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 bg-gray-50 text-(--text) focus:border-(--primary) dark:border-gray-600 dark:bg-gray-800/60"
            />

            <div>
              <label className="mb-1 inline-block pl-1 text-sm font-medium text-(--text)">
                Message
              </label>

              <textarea
                placeholder="Write your message..."
                rows="5"
                className="w-full resize-none rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-(--text) outline-none transition placeholder:text-gray-400 focus:border-(--primary) focus:ring-1 focus:ring-(--primary) dark:border-gray-600 dark:bg-gray-800/60 dark:placeholder:text-gray-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-lg bg-(--primary) py-2.5 text-white shadow-sm transition hover:opacity-90 active:scale-[0.98]"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
