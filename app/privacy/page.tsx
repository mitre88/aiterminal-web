import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Terminal",
  description:
    "AI Terminal Privacy Policy. We collect zero personal data. All data stored locally on your device.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-3 text-[#555] text-sm">
            Last Updated: April 7, 2026
          </p>
          <div className="mt-6 p-4 rounded-xl border border-[rgba(0,255,65,0.4)] bg-[rgba(0,255,65,0.05)]">
            <p className="text-[#00FF41] font-bold text-lg">
              TL;DR: We collect absolutely nothing.
            </p>
            <p className="text-[#888] text-sm mt-1">
              No accounts, no analytics, no servers, no cloud. All data stays
              on your device.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <p className="text-[#888] leading-7 mb-10">
          This Privacy Policy describes how{" "}
          <strong className="text-[#E0E0E0]">AI Terminal</strong> (&quot;we&quot;,
          &quot;our&quot;, or &quot;the app&quot;) handles your information. By using AI
          Terminal, you agree to the practices described in this policy. Please
          read it carefully — it is very short, because we have very little to
          say.
        </p>

        <div className="space-y-12">
          {/* Section 1: Data We Collect */}
          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              1. Data We Collect
            </h2>
            <p className="text-[#888] leading-7 mb-4">
              <strong className="text-[#E0E0E0]">
                We do not collect any personal data.
              </strong>{" "}
              All data you enter into AI Terminal is stored locally on your
              device and is never transmitted to our servers. We have no servers.
            </p>
            <p className="text-[#888] leading-7">
              Specifically, we do NOT collect:
            </p>
            <ul className="mt-3 space-y-2 text-[#888]">
              {[
                "Your name, email address, or any account information",
                "Your IP address or location data",
                "SSH host addresses or usernames",
                "Passwords or authentication credentials",
                "Terminal command history",
                "Device identifiers (IDFA, IDFV, etc.)",
                "Usage data, crash reports, or analytics of any kind",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#00FF41] mt-0.5 text-xs">[x]</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2: SSH Credentials */}
          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              2. SSH Credentials and Connection Data
            </h2>
            <p className="text-[#888] leading-7 mb-4">
              SSH host addresses, port numbers, and usernames that you save in
              AI Terminal are stored locally on your device using{" "}
              <strong className="text-[#E0E0E0]">SwiftData</strong> — Apple&apos;s
              local database framework. This data never leaves your device and is
              never transmitted to our servers (again, we have no servers).
            </p>
            <p className="text-[#888] leading-7">
              SSH passwords and authentication keys, if you choose to save them,
              are stored in{" "}
              <strong className="text-[#E0E0E0]">Apple&apos;s Keychain</strong> —
              the most secure storage available on iOS, protected by your
              device&apos;s hardware security and Face ID / Touch ID.
            </p>
          </section>

          {/* Section 3: No Analytics */}
          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              3. No Analytics, No Tracking
            </h2>
            <p className="text-[#888] leading-7 mb-4">
              AI Terminal does{" "}
              <strong className="text-[#E0E0E0]">not use any analytics SDKs</strong>,
              crash reporters, third-party tracking libraries, or any software
              that transmits data about your usage to external servers. This
              includes but is not limited to:
            </p>
            <ul className="mt-3 space-y-2 text-[#888]">
              {[
                "Firebase / Google Analytics",
                "Mixpanel, Amplitude, or similar product analytics",
                "Crashlytics, Sentry, or crash reporting tools",
                "AppsFlyer, Adjust, or attribution SDKs",
                "Any advertising network SDKs",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#555] mt-0.5 text-xs">[–]</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4: No Third-Party Sharing */}
          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              4. No Third-Party Data Sharing
            </h2>
            <p className="text-[#888] leading-7">
              We do not share any data with third parties because we do not
              collect any data in the first place. There is nothing to share.
            </p>
          </section>

          {/* Section 5: Keychain */}
          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              5. Keychain Usage
            </h2>
            <p className="text-[#888] leading-7">
              If you choose to save SSH passwords within the app, they are stored
              exclusively in{" "}
              <strong className="text-[#E0E0E0]">Apple&apos;s iOS Keychain</strong>.
              The Keychain is encrypted at the hardware level, protected by your
              device passcode, and optionally by Face ID or Touch ID. Apple
              ensures that Keychain data can only be accessed by the app that
              stored it and is not included in unencrypted backups.
            </p>
          </section>

          {/* Section 6: Permissions */}
          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              6. Device Permissions
            </h2>
            <p className="text-[#888] leading-7 mb-4">
              AI Terminal requests only the following permissions, and only for
              the stated purposes:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-[rgba(0,255,65,0.15)] bg-[rgba(0,255,65,0.02)]">
                <h3 className="text-[#E0E0E0] font-semibold mb-1">
                  Camera
                </h3>
                <p className="text-[#888] text-sm">
                  Used exclusively for the QR Code scanner feature, which allows
                  you to quickly connect to a saved SSH host by scanning a QR
                  code on your Mac. Camera access is never used to take photos,
                  record video, or capture any imagery beyond decoding QR codes.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-[rgba(0,255,65,0.15)] bg-[rgba(0,255,65,0.02)]">
                <h3 className="text-[#E0E0E0] font-semibold mb-1">
                  Network Access
                </h3>
                <p className="text-[#888] text-sm">
                  Used exclusively to establish SSH connections to the specific
                  host addresses that you manually configure. The app does not
                  make any network connections to AI Terminal servers, analytics
                  endpoints, or any destinations other than the SSH host you
                  specify.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Children */}
          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              7. Children&apos;s Privacy
            </h2>
            <p className="text-[#888] leading-7">
              This app is not directed at children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you believe that a child under 13 has provided us with personal
              information, please contact us immediately at the email address
              below so we can take appropriate action.
            </p>
          </section>

          {/* Section 8: Data Security */}
          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              8. Data Security
            </h2>
            <p className="text-[#888] leading-7">
              Because all data is stored locally on your device, the security of
              your data is primarily determined by your device&apos;s security
              settings — passcode, Face ID, and device encryption. We strongly
              recommend enabling a strong device passcode and Face ID / Touch ID
              to protect the data stored by AI Terminal.
            </p>
          </section>

          {/* Section 9: Changes to Policy */}
          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-[#888] leading-7">
              We may update this Privacy Policy from time to time. We will notify
              you of any significant changes by updating the &quot;Last Updated&quot; date
              at the top of this page. We encourage you to review this policy
              periodically. Your continued use of AI Terminal after changes are
              posted constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* Section 10: Contact */}
          <section>
            <h2 className="text-xl font-bold text-[#00FF41] mb-4">
              10. Contact Us
            </h2>
            <p className="text-[#888] leading-7 mb-4">
              If you have any questions or concerns about this Privacy Policy or
              the data practices of AI Terminal, please contact us:
            </p>
            <div className="p-4 rounded-lg border border-[rgba(0,255,65,0.2)] bg-[rgba(0,255,65,0.03)]">
              <p className="text-[#E0E0E0]">
                Email:{" "}
                <a
                  href="mailto:privacy@aiterminal.app"
                  className="text-[#00FF41] hover:underline"
                >
                  privacy@aiterminal.app
                </a>
              </p>
              <p className="text-[#888] text-sm mt-2">
                Website:{" "}
                <a
                  href="https://aiterminal.app"
                  className="text-[#00FF41] hover:underline"
                >
                  https://aiterminal.app
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <hr className="mt-16 border-[rgba(0,255,65,0.1)]" />
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#444]">
          <p>&copy; {new Date().getFullYear()} AI Terminal. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#00FF41] transition-colors">
              Home
            </Link>
            <Link href="/terms" className="hover:text-[#00FF41] transition-colors">
              Terms
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
