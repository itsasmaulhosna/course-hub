import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto max-w-7xl px-6 py-16">

        <div className="text-center">
          <span className="inline-flex items-center rounded-full border bg-muted px-4 py-2 text-sm font-medium">
            Contact Us
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            We'd Love to Hear From You
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Have a question, suggestion, or need assistance? Send us a message
            and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">

          {/* Contact Form */}

          <div className="rounded-3xl border bg-card p-8 shadow-sm">

            <h2 className="text-2xl font-semibold">
              Send a Message
            </h2>

            <p className="mt-2 text-muted-foreground">
              Fill out the form below and we'll respond shortly.
            </p>

            <form className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90 cursor-pointer"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Info */}

          <div className="space-y-6">

            <div className="rounded-3xl border bg-card p-6">

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Mail size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-muted-foreground">
                    support@coursehub.com
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-3xl border bg-card p-6">

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Phone size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-muted-foreground">
                    +880 1XXX-XXXXXX
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-3xl border bg-card p-6">

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Location
                  </h3>

                  <p className="text-muted-foreground">
                    Dhaka, Bangladesh
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-3xl border bg-card p-6">

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Clock size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Support Hours
                  </h3>

                  <p className="text-muted-foreground">
                    Sunday – Thursday
                  </p>

                  <p className="text-muted-foreground">
                    9:00 AM – 6:00 PM (GMT+6)
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-3xl border bg-primary p-8 text-primary-foreground">

              <h3 className="text-2xl font-bold">
                Need Immediate Help?
              </h3>

              <p className="mt-3 opacity-90">
                For technical issues or account-related questions,
                contact our support team. We typically respond within
                24 hours.
              </p>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}