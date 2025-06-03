export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="text-xl font-bold">1. Introduction</h2>
            <p>
              This Privacy Policy describes how we collect, use, and disclose your personal information when you visit
              our website or use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">2. Information We Collect</h2>
            <p>
              We may collect personal information that you provide directly to us, such as your name, email address,
              phone number, and any other information you choose to provide.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">4. Sharing of Information</h2>
            <p>We may share your personal information with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Service providers who perform services on our behalf</li>
              <li>Professional advisors, such as lawyers and accountants</li>
              <li>Government authorities when required by law</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">5. Your Choices</h2>
            <p>
              You may update, correct, or delete your personal information by contacting us. You may also opt out of
              receiving promotional emails from us by following the instructions in those emails.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              Email: privacy@organization.com
              <br />
              Phone: (123) 456-7890
              <br />
              Address: 123 Main Street, City, State 12345
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
