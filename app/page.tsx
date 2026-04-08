import Link from "next/link";
import Image from "next/image";

// ============================================================
// TERMINAL MOCK COMPONENT
// ============================================================

function TerminalWindow({
  title,
  lines,
}: {
  title: string;
  lines: { prompt?: string; cmd?: string; output?: string; color?: string }[];
}) {
  return (
    <div className="terminal-chrome border border-[rgba(0,255,65,0.3)] shadow-[0_0_20px_rgba(0,255,65,0.15)] rounded-xl overflow-hidden">
      <div className="terminal-chrome-bar">
        <div className="terminal-dot bg-[#FF5F57]" />
        <div className="terminal-dot bg-[#FEBC2E]" />
        <div className="terminal-dot bg-[#28C840]" />
        <span className="ml-3 text-xs text-[#666] font-mono">{title}</span>
      </div>
      <div className="bg-[#0A0A0A] p-4 font-mono text-sm space-y-1">
        {lines.map((line, i) => (
          <div key={i}>
            {line.prompt && (
              <span>
                <span className="text-[#00FF41]">{line.prompt}</span>
                <span className="text-[#E0E0E0]"> {line.cmd}</span>
              </span>
            )}
            {line.output && (
              <div
                className={`pl-0 ${
                  line.color === "green"
                    ? "text-[#00FF41]"
                    : line.color === "amber"
                    ? "text-[#FFB000]"
                    : line.color === "dim"
                    ? "text-[#666]"
                    : line.color === "red"
                    ? "text-[#FF5F57]"
                    : "text-[#E0E0E0]"
                }`}
              >
                {line.output}
              </div>
            )}
          </div>
        ))}
        <div className="flex items-center">
          <span className="text-[#00FF41]">user@macbook</span>
          <span className="text-[#E0E0E0]"> ~ </span>
          <span className="w-2 h-4 bg-[#00FF41] inline-block animate-[blink_1s_step-end_infinite] ml-0.5" />
        </div>
      </div>
    </div>
  );
}

// ============================================================
// TERMY MASCOT (CSS/SVG drawn)
// ============================================================

function TermyMascot({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-[float_3s_ease-in-out_infinite] drop-shadow-[0_0_20px_rgba(0,255,65,0.6)]"
    >
      {/* Body — voxel robot terminal */}
      <rect x="25" y="35" width="70" height="60" rx="6" fill="#111" stroke="#00FF41" strokeWidth="1.5" />
      {/* Screen face */}
      <rect x="32" y="42" width="56" height="36" rx="3" fill="#0A0A0A" stroke="#00FF41" strokeWidth="1" />
      {/* Screen glow */}
      <rect x="32" y="42" width="56" height="36" rx="3" fill="rgba(0,255,65,0.03)" />
      {/* Eyes — terminal cursor style */}
      <rect x="42" y="52" width="10" height="14" rx="2" fill="#00FF41" opacity="0.9" />
      <rect x="68" y="52" width="10" height="14" rx="2" fill="#00FF41" opacity="0.9" />
      {/* Eye inner */}
      <rect x="45" y="55" width="4" height="4" rx="1" fill="#0A0A0A" />
      <rect x="71" y="55" width="4" height="4" rx="1" fill="#0A0A0A" />
      {/* Mouth — command prompt */}
      <text x="38" y="83" fontFamily="monospace" fontSize="8" fill="#00FF41" opacity="0.8">&gt;_</text>
      {/* Antenna */}
      <rect x="57" y="22" width="6" height="14" rx="3" fill="#00FF41" opacity="0.7" />
      <circle cx="60" cy="19" r="5" fill="#00FF41" opacity="0.9" />
      <circle cx="60" cy="19" r="2.5" fill="#0A0A0A" />
      {/* Legs */}
      <rect x="35" y="93" width="18" height="12" rx="3" fill="#111" stroke="#00FF41" strokeWidth="1" />
      <rect x="67" y="93" width="18" height="12" rx="3" fill="#111" stroke="#00FF41" strokeWidth="1" />
      {/* Arms */}
      <rect x="8" y="50" width="18" height="10" rx="3" fill="#111" stroke="#00FF41" strokeWidth="1" />
      <rect x="94" y="50" width="18" height="10" rx="3" fill="#111" stroke="#00FF41" strokeWidth="1" />
      {/* Chest detail */}
      <rect x="50" y="85" width="20" height="4" rx="2" fill="#00FF41" opacity="0.2" />
      <circle cx="47" cy="87" r="2" fill="#00FF41" opacity="0.6" />
      <circle cx="73" cy="87" r="2" fill="#00FF41" opacity="0.6" />
    </svg>
  );
}

// ============================================================
// PHONE MOCKUP FRAME
// ============================================================

function PhoneMockup({ children, theme = "green" }: { children: React.ReactNode; theme?: string }) {
  const borderColor =
    theme === "green"
      ? "#00FF41"
      : theme === "amber"
      ? "#FFB000"
      : theme === "blue"
      ? "#00BFFF"
      : "#E0E0E0";

  return (
    <div
      className="relative rounded-[2.5rem] overflow-hidden border-2 shadow-2xl"
      style={{
        borderColor,
        boxShadow: `0 0 30px ${borderColor}30, 0 20px 60px rgba(0,0,0,0.8)`,
        width: 220,
        height: 476,
        background: "#0A0A0A",
        flexShrink: 0,
      }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-10" />
      {/* Screen content */}
      <div className="pt-8 h-full overflow-hidden">{children}</div>
      {/* Home indicator */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full"
        style={{ background: borderColor, opacity: 0.4 }}
      />
    </div>
  );
}

// ============================================================
// SCREENSHOT PLACEHOLDERS
// ============================================================

function TerminalScreenshot({ theme }: { theme: "green" | "amber" | "blue" | "white" }) {
  const colors = {
    green: { accent: "#00FF41", bg: "#0A0A0A", dim: "#006B1B" },
    amber: { accent: "#FFB000", bg: "#0A0800", dim: "#664700" },
    blue: { accent: "#00BFFF", bg: "#000A0A", dim: "#004D66" },
    white: { accent: "#E0E0E0", bg: "#111", dim: "#555" },
  };
  const c = colors[theme];

  return (
    <div
      className="h-full font-mono text-xs p-3 overflow-hidden"
      style={{ background: c.bg, color: c.accent }}
    >
      <div style={{ color: c.dim }} className="mb-2 text-[10px]">
        AI Terminal v1.0 — Connected
      </div>
      <div>
        <span style={{ color: c.accent }}>user@mac</span>
        <span className="text-[#888]">:~$ </span>
        <span>ls -la</span>
      </div>
      <div style={{ color: c.dim }}>total 64</div>
      <div>
        <span style={{ color: c.accent }}>drwxr-xr-x</span> Documents/
      </div>
      <div>
        <span style={{ color: c.accent }}>drwxr-xr-x</span> Projects/
      </div>
      <div>
        <span style={{ color: c.accent }}>-rw-r--r--</span> .zshrc
      </div>
      <div className="mt-2">
        <span style={{ color: c.accent }}>user@mac</span>
        <span className="text-[#888]">:~$ </span>
        <span>htop</span>
      </div>
      <div
        className="mt-1 p-1 rounded text-[9px]"
        style={{ border: `1px solid ${c.dim}` }}
      >
        <div style={{ color: c.accent }}>CPU [||||||||  80%]</div>
        <div style={{ color: c.accent }}>MEM [|||||     52%]</div>
        <div style={{ color: c.dim }}>PID  NAME</div>
        <div>1234 node</div>
        <div>5678 python3</div>
      </div>
      <div className="mt-2">
        <span style={{ color: c.accent }}>user@mac</span>
        <span className="text-[#888]">:~$ </span>
        <span className="inline-block w-1.5 h-3 align-middle animate-[blink_1s_step-end_infinite]" style={{ background: c.accent }} />
      </div>
    </div>
  );
}

// ============================================================
// FEATURES DATA
// ============================================================

const FEATURES = [
  {
    icon: "//",
    title: "Full SSH Terminal",
    desc: "Complete terminal emulator with ANSI color support. Run any command, just like sitting at your Mac.",
  },
  {
    icon: "QR",
    title: "QR Code Scanner",
    desc: "Scan a QR code on your Mac to instantly connect. No typing IP addresses. Just scan and go.",
  },
  {
    icon: "{}",
    title: "Command Snippets",
    desc: "Save frequently-used commands as snippets. One tap to run your most common workflows.",
  },
  {
    icon: "T_",
    title: "Multiple Themes",
    desc: "Hacker green, amber, blue, or white. Customize your terminal to match your vibe.",
  },
  {
    icon: "><",
    title: "Pinch to Zoom",
    desc: "Adjust font size on the fly with a pinch gesture. Comfortable reading on any iPhone.",
  },
  {
    icon: "0x",
    title: "Zero Data Collection",
    desc: "No accounts. No cloud sync. No analytics. Your SSH keys and connections never leave your device.",
  },
];

// ============================================================
// NAVIGATION
// ============================================================

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(0,255,65,0.1)] bg-[rgba(10,10,10,0.9)] backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[#00FF41] font-bold text-lg tracking-wider">
            AI<span className="text-[#E0E0E0]">Terminal</span>
          </span>
          <span className="text-[#00FF41] text-xs opacity-50 animate-[blink_1s_step-end_infinite]">
            _
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm text-[#888]">
          <a href="#features" className="hover:text-[#00FF41] transition-colors">
            Features
          </a>
          <a href="#screenshots" className="hover:text-[#00FF41] transition-colors">
            Screenshots
          </a>
          <a href="#termy" className="hover:text-[#00FF41] transition-colors">
            Meet Termy
          </a>
          <Link
            href="/support"
            className="hover:text-[#00FF41] transition-colors"
          >
            Support
          </Link>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[rgba(0,255,65,0.4)] text-[#00FF41] text-sm font-semibold hover:bg-[rgba(0,255,65,0.1)] transition-all"
        >
          App Store
        </a>
      </div>
    </nav>
  );
}

// ============================================================
// HERO SECTION
// ============================================================

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,65,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[rgba(0,255,65,0.03)] blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="text-center lg:text-left">
          {/* ASCII badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[rgba(0,255,65,0.3)] text-[#00FF41] text-xs mb-6 bg-[rgba(0,255,65,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-pulse" />
            <span>Now available on the App Store</span>
          </div>

          {/* ASCII art decoration */}
          <pre className="text-[#00FF41] opacity-20 text-xs mb-4 hidden lg:block leading-tight">
{`  ___   ___   _____
 / _ \\ |_ _| |_   _|
| | | | | |    | |
| |_| | | |    | |
 \\___/ |___|   |_|`}
          </pre>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="text-[#E0E0E0]">Your Mac.</span>
            <br />
            <span className="text-[#00FF41] text-glow">From your pocket.</span>
          </h1>

          <p className="text-[#888] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            AI Terminal is a full SSH terminal for iPhone. Connect to any Mac or
            Linux server in seconds — no accounts, no cloud, no compromises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-[rgba(0,255,65,0.5)] bg-[rgba(0,255,65,0.08)] text-[#00FF41] font-bold hover:bg-[rgba(0,255,65,0.15)] hover:border-[rgba(0,255,65,0.8)] transition-all shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:shadow-[0_0_30px_rgba(0,255,65,0.4)]"
            >
              <Image
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                width={140}
                height={47}
                priority
              />
            </a>
            <span className="text-[#555] text-sm">Free — iOS 17+</span>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 mt-10 justify-center lg:justify-start">
            <div>
              <p className="text-[#00FF41] font-bold text-2xl">0</p>
              <p className="text-[#555] text-xs uppercase tracking-wider">Data Collected</p>
            </div>
            <div className="w-px bg-[rgba(0,255,65,0.15)]" />
            <div>
              <p className="text-[#00FF41] font-bold text-2xl">100%</p>
              <p className="text-[#555] text-xs uppercase tracking-wider">On-Device</p>
            </div>
            <div className="w-px bg-[rgba(0,255,65,0.15)]" />
            <div>
              <p className="text-[#00FF41] font-bold text-2xl">SSH2</p>
              <p className="text-[#555] text-xs uppercase tracking-wider">Protocol</p>
            </div>
          </div>
        </div>

        {/* Right: Terminal window mockup */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow effect behind terminal */}
            <div className="absolute inset-0 bg-[rgba(0,255,65,0.05)] blur-3xl rounded-3xl" />
            <TerminalWindow
              title="AI Terminal — macbook-pro.local"
              lines={[
                { prompt: "user@macbook:~$", cmd: "ssh alex@192.168.1.10" },
                {
                  output:
                    "Welcome to macOS Sequoia — alex@alex-macbook-pro",
                  color: "green",
                },
                { output: "Last login: Mon Apr  7 09:41:22 2026", color: "dim" },
                { prompt: "alex@alex-macbook-pro:~$", cmd: "ls ~/Projects" },
                { output: "AITerminal/    webapp/    scripts/", color: "green" },
                { prompt: "alex@alex-macbook-pro:~$", cmd: "cd AITerminal && npm run dev" },
                {
                  output: "  READY  started server on 0.0.0.0:3000",
                  color: "green",
                },
                { output: "✓ Compiled successfully in 842ms", color: "dim" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FEATURES SECTION
// ============================================================

function FeaturesSection() {
  return (
    <section
      className="py-24 px-6 border-t border-[rgba(0,255,65,0.1)]"
      id="features"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#00FF41] text-sm font-mono uppercase tracking-[0.2em] mb-3 opacity-70">
            // features
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E0E0E0]">
            Everything you need.
            <br />
            <span className="text-[#00FF41]">Nothing you don&apos;t.</span>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-[rgba(0,255,65,0.15)] bg-[rgba(0,255,65,0.02)] hover:border-[rgba(0,255,65,0.4)] hover:bg-[rgba(0,255,65,0.05)] transition-all duration-300"
            >
              <div className="text-[#00FF41] font-mono font-bold text-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                [{f.icon}]
              </div>
              <h3 className="text-[#E0E0E0] font-semibold text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Ad placeholder */}
        <div className="mt-16 mx-auto max-w-3xl">
          {/* Google AdSense: replace with your ad code */}
          <div
            className="w-full h-24 rounded-lg border border-dashed border-[rgba(0,255,65,0.15)] bg-[rgba(0,255,65,0.02)] flex items-center justify-center"
            aria-label="Advertisement"
          >
            <p className="text-[#333] text-xs font-mono">
              {/* Google AdSense: replace with your ad code */}
              [advertisement placeholder — 728x90]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SCREENSHOTS SECTION
// ============================================================

function ScreenshotsSection() {
  const themes: ("green" | "amber" | "blue" | "white")[] = [
    "green",
    "amber",
    "blue",
    "white",
  ];
  const themeNames = ["Hacker Green", "Amber", "Ocean Blue", "Classic White"];

  return (
    <section
      className="py-24 px-6 border-t border-[rgba(0,255,65,0.1)] bg-[rgba(0,255,65,0.01)]"
      id="screenshots"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-[#00FF41] text-sm font-mono uppercase tracking-[0.2em] mb-3 opacity-70">
            // themes
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E0E0E0]">
            Your terminal,{" "}
            <span className="text-[#00FF41]">your style.</span>
          </h2>
          <p className="text-[#666] mt-4 max-w-xl mx-auto">
            Choose from 4 carefully crafted color themes. Every detail designed
            for hours of comfortable use.
          </p>
        </div>

        {/* Phone mockups */}
        <div className="flex justify-center gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {themes.map((theme, i) => (
            <div key={i} className="flex flex-col items-center gap-4 flex-shrink-0">
              <PhoneMockup theme={theme}>
                <TerminalScreenshot theme={theme} />
              </PhoneMockup>
              <p className="text-[#555] text-xs font-mono">{themeNames[i]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// TERMY MASCOT SECTION
// ============================================================

function TermySection() {
  return (
    <section
      className="py-24 px-6 border-t border-[rgba(0,255,65,0.1)]"
      id="termy"
    >
      <div className="mx-auto max-w-4xl">
        <div className="grid sm:grid-cols-2 gap-12 items-center">
          {/* Termy visual */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[rgba(0,255,65,0.1)] blur-3xl rounded-full" />
              <TermyMascot size={180} />
            </div>
            {/* Speech bubble */}
            <div className="relative max-w-xs">
              <div className="p-4 rounded-xl border border-[rgba(0,255,65,0.3)] bg-[rgba(0,255,65,0.05)] text-[#00FF41] font-mono text-sm">
                <span className="opacity-70">$</span>{" "}
                <span className="animate-[blink_1s_step-end_infinite]">
                  Hello, I&apos;m Termy! Ready to connect to your Mac?_
                </span>
              </div>
              {/* Arrow pointing up */}
              <div className="absolute -top-3 left-8 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[rgba(0,255,65,0.3)]" />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[#00FF41] text-sm font-mono uppercase tracking-[0.2em] mb-3 opacity-70">
              // meet_termy
            </p>
            <h2 className="text-4xl font-bold text-[#E0E0E0] mb-6">
              Meet <span className="text-[#00FF41]">Termy</span>
            </h2>
            <p className="text-[#888] leading-relaxed mb-4">
              Termy is your kawaii voxel robot companion — a pixel-art terminal
              character always ready to help you connect, debug, and command your
              Mac from anywhere.
            </p>
            <p className="text-[#888] leading-relaxed mb-4">
              Watch Termy&apos;s antenna blink when connecting, celebrate with
              you when scripts succeed, and offer encouragement when commands
              fail. Your terminal has never had a better co-pilot.
            </p>
            <div className="space-y-3 mt-6">
              {[
                { state: "idle", desc: "Waiting patiently for your commands" },
                { state: "happy", desc: "Command executed successfully!" },
                { state: "thinking", desc: "Processing... give me a second" },
                { state: "excited", desc: "New connection established!" },
              ].map((mood, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00FF41] opacity-60" />
                  <span className="text-[#00FF41] font-mono text-sm">
                    [{mood.state}]
                  </span>
                  <span className="text-[#666] text-sm">{mood.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PRIVACY HIGHLIGHT
// ============================================================

function PrivacySection() {
  return (
    <section className="py-24 px-6 border-t border-[rgba(0,255,65,0.1)] bg-[rgba(0,255,65,0.01)]">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[#00FF41] text-sm font-mono uppercase tracking-[0.2em] mb-3 opacity-70">
          // privacy_first
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#E0E0E0] mb-6">
          We collect{" "}
          <span className="text-[#00FF41] text-glow">absolutely nothing.</span>
        </h2>
        <p className="text-[#888] text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          No accounts required. No cloud sync. No analytics SDK. No crash
          reporters phoning home. Your SSH connections, credentials, and commands
          are stored locally on your device — period.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "NO",
              label: "No Accounts",
              desc: "Use the app without creating any account",
            },
            {
              icon: "0B",
              label: "Zero Network Traffic",
              desc: "App only connects to your specified SSH host",
            },
            {
              icon: "ON",
              label: "On-Device Storage",
              desc: "SwiftData + Keychain. Your data never leaves",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-[rgba(0,255,65,0.2)] bg-[rgba(0,255,65,0.03)]"
            >
              <div className="text-[#00FF41] font-mono font-bold text-2xl mb-3">
                [{item.icon}]
              </div>
              <h3 className="text-[#E0E0E0] font-semibold mb-2">{item.label}</h3>
              <p className="text-[#666] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/privacy"
          className="text-[#00FF41] text-sm font-mono hover:underline opacity-70 hover:opacity-100 transition-opacity"
        >
          Read the full Privacy Policy &rarr;
        </Link>
      </div>
    </section>
  );
}

// ============================================================
// CTA SECTION
// ============================================================

function CTASection() {
  return (
    <section className="py-24 px-6 border-t border-[rgba(0,255,65,0.1)]">
      <div className="mx-auto max-w-3xl text-center">
        <TerminalWindow
          title="download.sh"
          lines={[
            { prompt: "$", cmd: "open 'https://apps.apple.com/app/aiterminal'" },
            { output: "Opening App Store...", color: "green" },
            { output: "Installing AI Terminal...", color: "dim" },
            { output: "[####################] 100%", color: "green" },
            { output: "Installation complete. Your Mac awaits.", color: "green" },
          ]}
        />

        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-[rgba(0,255,65,0.6)] bg-[rgba(0,255,65,0.08)] text-[#00FF41] font-bold text-lg hover:bg-[rgba(0,255,65,0.15)] hover:border-[rgba(0,255,65,0.9)] transition-all shadow-[0_0_30px_rgba(0,255,65,0.2)] hover:shadow-[0_0_50px_rgba(0,255,65,0.4)]"
          >
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              width={160}
              height={53}
            />
          </a>
          <p className="text-[#444] text-sm font-mono mt-4">
            Free — iOS 17.0+ — iPhone &amp; iPad
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================

function Footer() {
  return (
    <footer className="border-t border-[rgba(0,255,65,0.1)] py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[#00FF41] font-bold tracking-wider">
              AI<span className="text-[#E0E0E0]">Terminal</span>
            </span>
            <span className="text-[#333] text-sm">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex gap-6 text-sm text-[#555] font-mono">
            <Link href="/privacy" className="hover:text-[#00FF41] transition-colors">
              privacy
            </Link>
            <Link href="/terms" className="hover:text-[#00FF41] transition-colors">
              terms
            </Link>
            <Link href="/support" className="hover:text-[#00FF41] transition-colors">
              support
            </Link>
            <a
              href="mailto:support@aiterminal.app"
              className="hover:text-[#00FF41] transition-colors"
            >
              contact
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-[#333] text-xs font-mono">
          <pre className="leading-tight opacity-30">{`> Built with SSH, love, and zero tracking.`}</pre>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Nav />
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <TermySection />
      <PrivacySection />
      <CTASection />
      <Footer />
    </main>
  );
}
