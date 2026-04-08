"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const FAQ_ITEMS = [
  {
    question: "How do I set up SSH on my Mac?",
    answer:
      "On your Mac, go to System Settings > General > Sharing and enable Remote Login. This starts the SSH server. Note the username and IP address shown — you will need these to connect from AI Terminal.",
  },
  {
    question: "What is the default SSH port?",
    answer:
      "The default SSH port is 22. AI Terminal uses port 22 unless you specify otherwise. If your Mac SSH is configured on a different port, enter it when adding the connection.",
  },
  {
    question: "How do I use the QR code feature?",
    answer:
      "On your Mac, open the connection sharing feature in your terminal (or use the AI Terminal companion script). This generates a QR code encoding your host's IP, port, and username. In AI Terminal on your iPhone, tap the QR scan button and point the camera at the QR code. The connection fills in automatically.",
  },
  {
    question: "My connection keeps timing out. What do I do?",
    answer:
      "Check that your iPhone and Mac are on the same network (or that your Mac is accessible from your network). Verify SSH is enabled on your Mac in System Settings > General > Sharing > Remote Login. Check that no firewall is blocking port 22. Try pinging your Mac's IP from another device to confirm connectivity.",
  },
  {
    question: "Can I connect over cellular (not just Wi-Fi)?",
    answer:
      "Yes, if your Mac has a public IP address or you use a service like Tailscale, you can connect from anywhere. For home Macs behind NAT, you may need to configure port forwarding on your router.",
  },
  {
    question: "Where are my saved connections stored?",
    answer:
      "All saved connections are stored locally on your iPhone using SwiftData. They are never uploaded to any cloud service or server. This data is included in encrypted iCloud backups only if you have iCloud Backup enabled.",
  },
  {
    question: "How do I change the terminal theme?",
    answer:
      "Tap the Settings tab (gear icon) in AI Terminal. Under Appearance, you can select from Hacker Green, Amber, Ocean Blue, or Classic White themes. Changes apply instantly.",
  },
  {
    question: "How do I add command snippets?",
    answer:
      "In the terminal view, tap the snippet button (the {} icon in the toolbar). From there you can add new snippets with a name and command. Tap any saved snippet to insert it instantly into the command line.",
  },
  {
    question: "Does AI Terminal support SSH key authentication?",
    answer:
      "Password authentication is currently supported. SSH key authentication support is planned for a future update. Key material, when added, will be stored securely in the iOS Keychain.",
  },
  {
    question: "What iOS version is required?",
    answer: "AI Terminal requires iOS 17.0 or later.",
  },
];

const TROUBLESHOOTING_STEPS = [
  {
    title: "Check SSH is enabled on Mac",
    description:
      "System Settings > General > Sharing > Remote Login must be turned ON. Note the SSH command shown — it contains your username and IP address.",
  },
  {
    title: "Verify network connectivity",
    description:
      "Your iPhone and Mac must be on the same Wi-Fi network (or Mac must be reachable over the internet). Open Safari and try to load a webpage to confirm your iPhone has internet/network access.",
  },
  {
    title: "Check firewall settings",
    description:
      "On your Mac, go to System Settings > Network > Firewall. If the firewall is on, ensure it is not blocking incoming SSH connections on port 22.",
  },
  {
    title: "Use the correct IP address",
    description:
      "Mac IP addresses can change. On your Mac, go to System Settings > Wi-Fi > your network > Details to find the current local IP address. Or use the QR code feature to avoid IP address errors entirely.",
  },
  {
    title: "Restart the SSH service",
    description:
      "On your Mac, turn Remote Login off and back on in System Settings > General > Sharing. This restarts the SSH daemon and can resolve connection issues.",
  },
  {
    title: "Update AI Terminal",
    description:
      "Check the App Store for updates to AI Terminal. Updates contain bug fixes and connection improvements.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[rgba(0,255,65,0.15)] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left text-[#E0E0E0] font-medium hover:bg-[rgba(0,255,65,0.03)] transition-colors"
      >
        <span className="pr-4">{question}</span>
        <span className={`text-[#00FF41] text-xl transition-transform flex-shrink-0 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 pt-0">
          <p className="text-[#888] leading-7 text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-xl border border-[rgba(0,255,65,0.3)] bg-[rgba(0,255,65,0.05)] text-center">
        <p className="text-[#00FF41] font-bold text-2xl mb-2">[OK]</p>
        <p className="text-[#E0E0E0] font-semibold mb-2">Message sent successfully</p>
        <p className="text-[#888] text-sm">
          We will respond within 24-48 hours at the email you provided.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-[#00FF41] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "mt-2 block w-full rounded-lg border border-[rgba(0,255,65,0.2)] bg-[rgba(0,255,65,0.03)] px-4 py-3 text-[#E0E0E0] placeholder-[#444] font-mono text-sm focus:border-[rgba(0,255,65,0.6)] focus:outline-none focus:ring-1 focus:ring-[rgba(0,255,65,0.3)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm text-[#888]">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm text-[#888]">
          Topic
        </label>
        <select id="subject" name="subject" required className={inputClass}>
          <option value="">Select a topic</option>
          <option value="connection">Connection issues</option>
          <option value="feature">Feature request</option>
          <option value="bug">Bug report</option>
          <option value="privacy">Privacy question</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-[#888]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe your issue in detail, including your iOS version and Mac OS version..."
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[rgba(0,255,65,0.5)] bg-[rgba(0,255,65,0.08)] text-[#00FF41] font-bold hover:bg-[rgba(0,255,65,0.15)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "> Send message"}
      </button>
    </form>
  );
}

export default function SupportPage() {
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
            Support
          </h1>
          <p className="mt-3 text-[#888]">
            Having trouble connecting? We are here to help.
          </p>
        </div>

        {/* Quick info */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {[
            { label: "Version", value: "1.0.0" },
            { label: "Min iOS", value: "17.0+" },
            { label: "Response time", value: "24-48h" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg border border-[rgba(0,255,65,0.15)] bg-[rgba(0,255,65,0.02)] text-center"
            >
              <p className="text-[#00FF41] font-bold text-xl">{item.value}</p>
              <p className="text-[#555] text-xs mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#E0E0E0] mb-2">
            FAQ
          </h2>
          <p className="text-[#555] text-sm mb-8">
            Common questions about SSH setup and AI Terminal
          </p>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#E0E0E0] mb-2">
            Troubleshooting
          </h2>
          <p className="text-[#555] text-sm mb-8">
            Connection not working? Follow these steps in order.
          </p>
          <div className="space-y-6">
            {TROUBLESHOOTING_STEPS.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[rgba(0,255,65,0.4)] text-[#00FF41] text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-[#E0E0E0] font-semibold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#888] text-sm leading-6">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#E0E0E0] mb-2">
            Contact Us
          </h2>
          <p className="text-[#555] text-sm mb-8">
            Did not find your answer? Send us a message.
          </p>
          <ContactForm />
          <p className="mt-6 text-[#555] text-sm">
            Or email us directly at{" "}
            <a
              href="mailto:support@aiterminal.app"
              className="text-[#00FF41] hover:underline"
            >
              support@aiterminal.app
            </a>
          </p>
        </section>

        {/* Footer */}
        <hr className="border-[rgba(0,255,65,0.1)]" />
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#444]">
          <p>&copy; {new Date().getFullYear()} AI Terminal.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#00FF41] transition-colors">
              Home
            </Link>
            <Link href="/privacy" className="hover:text-[#00FF41] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#00FF41] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
