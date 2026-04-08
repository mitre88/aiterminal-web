import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — AI Terminal",
  description: "AI Terminal Terms of Service. Read the terms and conditions for using AI Terminal.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] font-mono">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-[#00FF41] text-sm hover:underline opacity-70 hover:opacity-100 transition-opacity"
          >
            &larr; Back to AI Terminal
          </Link>
          <h1 className="mt-8 text-4xl sm:text-5xl font-bold text-[#E0E0E0]">
            Terms of Service
          </h1>
          <p className="mt-3 text-[#555] text-sm">
            Last Updated: April 7, 2026
          </p>
        </div>

        <p className="text-[#888] leading-7 mb-10">
          Please read these Terms of Service (&quot;Terms&quot;) carefully before using AI
          Terminal (the &quot;App&quot;). By downloading, installing, or using the App, you
          agree to be bound by these Terms.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-[#888] leading-7">
              By accessing or using AI Terminal, you agree to these Terms and
              our Privacy Policy. If you do not agree, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              2. Description of Service
            </h2>
            <p className="text-[#888] leading-7">
              AI Terminal is an SSH terminal emulator for iPhone and iPad that
              allows you to connect to SSH-enabled servers and computers over a
              network connection. The App is a tool — what you do with it is
              your responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              3. Acceptable Use
            </h2>
            <p className="text-[#888] leading-7 mb-4">
              You agree to use AI Terminal only for lawful purposes. You must
              not use the App to:
            </p>
            <ul className="space-y-2 text-[#888]">
              {[
                "Gain unauthorized access to computer systems or networks",
                "Violate any applicable laws or regulations",
                "Infringe on intellectual property rights of others",
                "Transmit malware, viruses, or harmful code",
                "Engage in any activity that disrupts or interferes with computer systems",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#FF5F57] mt-0.5 text-xs">[!]</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-[#888] leading-7">
              AI Terminal and its original content, features, and functionality
              are owned by AI Terminal and are protected by applicable
              intellectual property laws. You may not copy, modify, distribute,
              sell, or lease any part of the App without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p className="text-[#888] leading-7">
              AI Terminal is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without any
              warranties of any kind, express or implied. We do not warrant that
              the App will be uninterrupted, error-free, or free of viruses or
              other harmful components. Use the App at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-[#888] leading-7">
              To the maximum extent permitted by law, AI Terminal shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including loss of data, revenue, or profits,
              arising from your use of the App, even if we have been advised of
              the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              7. User Responsibility
            </h2>
            <p className="text-[#888] leading-7">
              You are solely responsible for the SSH connections you establish,
              the commands you execute, and the security of the SSH credentials
              you store. Ensure you have proper authorization before connecting
              to any computer system. We are not responsible for any damage
              caused to systems you connect to via AI Terminal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              8. App Store Terms
            </h2>
            <p className="text-[#888] leading-7">
              AI Terminal is distributed through the Apple App Store. Your use
              of the App is also subject to Apple&apos;s App Store Terms of Service.
              Apple is not a party to these Terms and is not responsible for the
              App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-[#888] leading-7">
              We reserve the right to modify these Terms at any time. We will
              update the &quot;Last Updated&quot; date when changes are made. Continued use
              of the App after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              10. Governing Law
            </h2>
            <p className="text-[#888] leading-7">
              These Terms are governed by and construed in accordance with
              applicable law. Any disputes arising from these Terms shall be
              resolved through binding arbitration or in the appropriate courts
              of competent jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              11. Contact
            </h2>
            <p className="text-[#888] leading-7 mb-4">
              Questions about these Terms? Contact us:
            </p>
            <div className="p-4 rounded-lg border border-[rgba(0,255,65,0.2)] bg-[rgba(0,255,65,0.03)]">
              <p className="text-[#E0E0E0]">
                Email:{" "}
                <a
                  href="mailto:support@aiterminal.app"
                  className="text-[#00FF41] hover:underline"
                >
                  support@aiterminal.app
                </a>
              </p>
            </div>
          </section>
        </div>

        <hr className="mt-16 border-[rgba(0,255,65,0.1)]" />
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#444]">
          <p>&copy; {new Date().getFullYear()} AI Terminal. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#00FF41] transition-colors">
              Home
            </Link>
            <Link href="/privacy" className="hover:text-[#00FF41] transition-colors">
              Privacy
            </Link>
            <Link href="/support" className="hover:text-[#00FF41] transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
