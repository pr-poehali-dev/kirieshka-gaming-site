import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0c12]">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#ff4500" }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-8 blur-3xl" style={{ background: "#ff6b1a" }} />
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,69,0,0.3) 2px, rgba(255,69,0,0.3) 4px)" }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 animate-fade-in"
          style={{ borderColor: "#ff4500", background: "rgba(255,69,0,0.08)", animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#ff4500] pulse-glow" />
          <span className="text-[#ff6b1a] text-sm font-medium tracking-wider uppercase" style={{ fontFamily: "Rubik, sans-serif" }}>
            YouTube Канал
          </span>
        </div>

        <h1
          className="font-bold text-7xl md:text-9xl text-white mb-4 glitch-text animate-fade-in"
          style={{ fontFamily: "Oswald, sans-serif", animationDelay: "0.2s", opacity: 0, letterSpacing: "-2px" }}
        >
          КИРИЕ<span className="neon-text" style={{ color: "#ff4500" }}>ШКА</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-xl mx-auto animate-fade-in"
          style={{ fontFamily: "Rubik, sans-serif", animationDelay: "0.4s", opacity: 0 }}
        >
          Игры, угар и честные обзоры — без воды и скуки
        </p>

        <div
          className="flex items-center justify-center gap-8 md:gap-16 mb-10 animate-fade-in"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          {[
            { num: "320K+", label: "подписчиков" },
            { num: "450+", label: "видео" },
            { num: "2.1M", label: "просмотров в мес" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-bold text-3xl md:text-4xl text-white" style={{ fontFamily: "Oswald, sans-serif" }}>{s.num}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1" style={{ fontFamily: "Rubik, sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-center gap-4 flex-wrap animate-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn flex items-center gap-2 bg-[#ff4500] text-white font-semibold uppercase tracking-wider px-8 py-3.5 rounded text-base"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            <Icon name="Youtube" size={20} />
            Смотреть канал
          </a>
          <button
            onClick={() => { const el = document.getElementById("videos"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
            className="neon-btn flex items-center gap-2 border border-gray-600 text-gray-300 hover:text-white font-semibold uppercase tracking-wider px-8 py-3.5 rounded text-base hover:border-[#ff4500] transition-colors"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            <Icon name="Play" size={20} />
            Видео
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-gray-500 uppercase tracking-widest" style={{ fontFamily: "Rubik, sans-serif" }}>Скролл</span>
        <Icon name="ChevronDown" size={20} className="text-gray-500 animate-bounce" />
      </div>
    </section>
  );
}
