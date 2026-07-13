import {
  Mail,
  HelpCircle,
  MessageSquare,
  ShieldCheck,
  Clock,
} from "lucide-react";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      <section className="container mx-auto max-w-5xl px-6 py-16">

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm">
            <HelpCircle className="h-4 w-4 text-primary" />
            Support Center
          </div>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            We're Here to Help
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Need assistance with CourseHUB? Have questions or found a problem?
            Our support team is ready to help.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border bg-card p-6">

            <Mail className="mb-4 h-10 w-10 text-primary" />

            <h2 className="text-xl font-semibold">
              Email Support
            </h2>

            <p className="mt-3 text-muted-foreground">
              Reach out to us anytime via email and we'll get back to you as
              soon as possible.
            </p>

            <p className="mt-6 font-medium">
              support@coursehub.com
            </p>

          </div>

          <div className="rounded-2xl border bg-card p-6">

            <MessageSquare className="mb-4 h-10 w-10 text-primary" />

            <h2 className="text-xl font-semibold">
              Feedback
            </h2>

            <p className="mt-3 text-muted-foreground">
              Have an idea or feature request? We'd love to hear your feedback
              to improve CourseHUB.
            </p>

          </div>

          <div className="rounded-2xl border bg-card p-6">

            <ShieldCheck className="mb-4 h-10 w-10 text-primary" />

            <h2 className="text-xl font-semibold">
              Privacy & Security
            </h2>

            <p className="mt-3 text-muted-foreground">
              We value your privacy and keep your data safe using industry best
              practices.
            </p>

          </div>

          <div className="rounded-2xl border bg-card p-6">

            <Clock className="mb-4 h-10 w-10 text-primary" />

            <h2 className="text-xl font-semibold">
              Response Time
            </h2>

            <p className="mt-3 text-muted-foreground">
              We usually respond within <strong>24–48 hours</strong> on
              business days.
            </p>

          </div>

        </div>

        <div className="mt-14 rounded-3xl border bg-card p-8 text-center">

          <h2 className="text-2xl font-bold">
            Still Need Help?
          </h2>

          <p className="mt-3 text-muted-foreground">
            If your question isn't answered here, feel free to contact our
            support team.
          </p>

          <a
            href="mailto:support@coursehub.com"
            className="mt-8 inline-flex rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            Contact Support
          </a>

        </div>

      </section>

    </main>
  );
}