import { ArenaFooter } from "@/components/ArenaFooter";
import { ArenaHeader } from "@/components/ArenaHeader";
import { type ReactNode, useEffect } from "react";

const CONTACT_EMAIL = "malik@7bandfinancialagency.com";
const EFFECTIVE_DATE = "October 27, 2026";

type Section = { heading: string; body: ReactNode };

function LegalPage({ title, sections }: { title: string; sections: Section[] }) {
  useEffect(() => {
    document.title = `${title} — THE FLOW`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-[oklch(0.11_0.008_95)] text-foreground antialiased">
      <ArenaHeader />
      <main className="pt-28 pb-20 sm:pt-32">
        <article className="container mx-auto max-w-3xl">
          <h1 className="font-display text-base sm:text-lg leading-relaxed text-glow-gold">
            {title.toUpperCase()}
          </h1>
          <p className="mt-3 text-xs text-[oklch(0.6_0.02_95)]">
            THE FLOW · 7Band Financial Agency · Effective {EFFECTIVE_DATE}
          </p>
          <div className="mt-8 space-y-8">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-heading text-sm font-semibold tracking-wider text-[oklch(0.9_0.19_95)]">
                  {s.heading}
                </h2>
                <div className="mt-2 space-y-3 text-sm leading-relaxed text-[oklch(0.78_0.02_95)] [&_a]:text-[oklch(0.9_0.19_95)] [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <ArenaFooter />
    </div>
  );
}

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

export function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        {
          heading: "Who we are",
          body: (
            <p>
              THE FLOW is a free weekly webinar hosted by Malik East and run by 7Band Financial
              Agency ("we," "us"). This policy explains what we collect when you visit
              theflow.7bandfinancialagency.com or register for the webinar, and how we use it.
            </p>
          ),
        },
        {
          heading: "What we collect",
          body: (
            <ul>
              <li>What you enter on the registration form: your name, email address, and, if you choose to give it, your mobile phone number and your answers to the form's questions.</li>
              <li>Which webinar date you registered for and which site sent you to us.</li>
              <li>Whether you opened our emails, clicked our links or attended the webinar.</li>
              <li>Basic technical data your browser sends, such as device type and pages visited.</li>
            </ul>
          ),
        },
        {
          heading: "How we use it",
          body: (
            <ul>
              <li>To register you and send your confirmation, Zoom link, reminders and replay.</li>
              <li>To send text messages about the webinar, only if you checked the box agreeing to receive them.</li>
              <li>To answer your questions and, if you book one, to hold your free call.</li>
              <li>To improve the webinar and this site.</li>
            </ul>
          ),
        },
        {
          heading: "Text messaging (SMS) privacy",
          body: (
            <>
              <p>
                No mobile information will be shared with third parties or affiliates for marketing
                or promotional purposes. Text messaging originator opt-in data and consent will not
                be shared with any third parties, except the aggregators and providers that deliver
                our text messages.
              </p>
              <p>
                You can stop text messages at any time by replying STOP. See our{" "}
                <a href="/terms">Terms &amp; Conditions</a> for the full messaging terms.
              </p>
            </>
          ),
        },
        {
          heading: "Who we share it with",
          body: (
            <>
              <p>We do not sell or rent your personal information.</p>
              <p>
                We share it only with the services that run the webinar for us, such as our
                registration and messaging platform (GoHighLevel / LeadConnector), Zoom, and Google,
                and only so they can do that work. We may also share information when the law
                requires it.
              </p>
            </>
          ),
        },
        {
          heading: "Your choices",
          body: (
            <ul>
              <li>Emails: click "unsubscribe" at the bottom of any email.</li>
              <li>Texts: reply STOP to any message.</li>
              <li>To see, correct or delete your information, email {mail}.</li>
            </ul>
          ),
        },
        {
          heading: "How long we keep it",
          body: (
            <p>
              We keep your information while you are registered or in contact with us, and delete it
              when you ask us to, unless the law requires us to keep it longer.
            </p>
          ),
        },
        {
          heading: "Children",
          body: <p>THE FLOW is for adults. We do not knowingly collect information from anyone under 18.</p>,
        },
        {
          heading: "Changes and contact",
          body: (
            <p>
              If we change this policy, we will update the date at the top of this page. Questions?
              Email {mail}.
            </p>
          ),
        },
      ]}
    />
  );
}

export function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      sections={[
        {
          heading: "The webinar",
          body: (
            <p>
              THE FLOW is a free educational webinar hosted by Malik East and run by 7Band Financial
              Agency. Registering is free and does not require any purchase. By registering or using
              this site, you agree to these terms.
            </p>
          ),
        },
        {
          heading: "Education, not advice",
          body: (
            <p>
              Everything on this site and in the webinar is general education. It is not financial,
              legal, tax, credit or insurance advice for your situation. Talk to licensed
              professionals before making financial decisions. Results vary, and nothing we share is
              a promise or guarantee of any outcome.
            </p>
          ),
        },
        {
          heading: "How Malik gets paid",
          body: (
            <p>
              Malik East is a licensed life insurance agent. If a life insurance policy is right for
              you, the insurance company pays him a commission, and he will tell you how much.
            </p>
          ),
        },
        {
          heading: "Text messaging (SMS) terms",
          body: (
            <>
              <p>
                <strong>Program:</strong> THE FLOW webinar updates from 7Band Financial Agency.
              </p>
              <p>
                <strong>What you'll get:</strong> if you checked the box agreeing to receive text
                messages, we will text you about the webinar you registered for: your confirmation,
                reminders, the join link and the replay.
              </p>
              <p>
                <strong>How often:</strong> message frequency varies, usually up to 6 messages for
                each webinar you register for.
              </p>
              <p>
                <strong>Cost:</strong> message and data rates may apply.
              </p>
              <p>
                <strong>Opting out:</strong> reply STOP to any message to cancel. You will get one
                message confirming you've been unsubscribed, and no more after that. Reply HELP for
                help, or email {mail}.
              </p>
              <p>
                Agreeing to receive text messages is not a condition of registering. Carriers are not
                liable for delayed or undelivered messages. See our{" "}
                <a href="/privacy">Privacy Policy</a> for how we handle your information.
              </p>
            </>
          ),
        },
        {
          heading: "Using this site",
          body: (
            <p>
              The content on this site and in the webinar belongs to 7Band Financial Agency. You may
              watch and take notes for your own use, but please don't copy, resell or republish it
              without our permission.
            </p>
          ),
        },
        {
          heading: "Changes and contact",
          body: (
            <p>
              We may update these terms; the date at the top of the page shows the latest version.
              Questions? Email {mail}.
            </p>
          ),
        },
      ]}
    />
  );
}
