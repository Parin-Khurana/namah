export default function TermsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Terms and Conditions</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms and Conditions and all applicable
              laws and regulations. If you do not agree with any of these terms, you are prohibited from using or
              accessing this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on our website for personal,
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">3. Disclaimer</h2>
            <p>
              The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or
              implied, and hereby disclaim and negate all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">4. Limitations</h2>
            <p>
              In no event shall our organization or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on our website, even if we or an authorized representative has been
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">5. Revisions and Errata</h2>
            <p>
              The materials appearing on our website could include technical, typographical, or photographic errors. We
              do not warrant that any of the materials on our website are accurate, complete, or current. We may make
              changes to the materials contained on our website at any time without notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">6. Links</h2>
            <p>
              We have not reviewed all of the sites linked to our website and are not responsible for the contents of
              any such linked site. The inclusion of any link does not imply endorsement by our organization. Use of any
              such linked website is at the user's own risk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">7. Modifications</h2>
            <p>
              We may revise these terms of service for our website at any time without notice. By using this website,
              you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of our jurisdiction
              and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
