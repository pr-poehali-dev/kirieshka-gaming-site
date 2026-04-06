import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О канале" },
  { id: "videos", label: "Видео" },
  { id: "subscribe", label: "Подписка" },
];

const VIDEOS = [
  {
    id: 1,
    title: "ТОП-10 ИГРОВЫХ МОМЕНТОВ МЕСЯЦА 🔥",
    views: "248K просмотров",
    duration: "14:32",
    date: "3 дня назад",
    category: "Топ",
  },
  {
    id: 2,
    title: "КАК ВЫЖИТЬ В ХАРДКОР РЕЖИМЕ — ГАЙД",
    views: "189K просмотров",
    duration: "22:10",
    date: "1 неделю назад",
    category: "Гайд",
  },
  {
    id: 3,
    title: "САМЫЙ БЕЗУМНЫЙ РАН ЗА 2025 ГОД",
    views: "412K просмотров",
    duration: "35:47",
    date: "2 недели назад",
    category: "Летсплей",
  },
  {
    id: 4,
    title: "РЕАКЦИЯ НА САМЫЕ ТУПЫЕ ЧИТЫ В ИГРАХ",
    views: "321K просмотров",
    duration: "18:05",
    date: "3 недели назад",
    category: "Реакция",
  },
  {
    id: 5,
    title: "ПРОХОЖУ ИГРУ, В КОТОРУЮ НИКТО НЕ ВЕРИЛ",
    views: "97K просмотров",
    duration: "1:02:33",
    date: "1 месяц назад",
    category: "Летсплей",
  },
  {
    id: 6,
    title: "ОБЗОР ИНДИ ИГРЫ ГОДА — ЧЕСТНО",
    views: "155K просмотров",
    duration: "29:18",
    date: "1 месяц назад",
    category: "Обзор",
  },
];

const PERKS = [
  { icon: "Zap", title: "Уведомления раньше всех", desc: "Узнавай о новых видео первым" },
  { icon: "Trophy", title: "Значок подписчика", desc: "Эксклюзивный бейдж в чате" },
  { icon: "Heart", title: "Приоритет в Q&A", desc: "Твои вопросы — первые в очереди" },
  { icon: "Gift", title: "Раздачи и конкурсы", desc: "Участвуй в закрытых гивэвеях" },
];

function Header({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0c12]/95 backdrop-blur-md border-b border-[#1e2433]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#ff4500] rounded flex items-center justify-center" style={{ boxShadow: "0 0 10px #ff4500" }}>
            <span className="text-white font-bold text-sm" style={{ fontFamily: "Oswald, sans-serif" }}>К</span>
          </div>
          <span className="font-bold text-xl text-white group-hover:text-[#ff6b1a] transition-colors" style={{ fontFamily: "Oswald, sans-serif" }}>
            КИРИЕШКА
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-link font-medium text-sm uppercase tracking-widest transition-colors ${
                active === item.id ? "text-[#ff4500] active" : "text-gray-400 hover:text-white"
              }`}
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollTo("subscribe")}
          className="hidden md:flex items-center gap-2 neon-btn bg-[#ff4500] text-white font-semibold uppercase tracking-wider px-5 py-2 rounded text-sm"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          <Icon name="Youtube" size={16} />
          Подписаться
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#111520] border-t border-[#1e2433]">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-6 py-4 font-medium uppercase tracking-wider text-gray-300 hover:text-[#ff4500] hover:bg-[#1e2433]/30 transition-colors border-b border-[#1e2433]/50"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function HeroSection() {
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

function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-[#111520]">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #ff4500, transparent)", opacity: 0.5 }} />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl opacity-60"
                style={{ transform: "rotate(3deg)", boxShadow: "0 0 10px #ff4500, inset 0 0 10px rgba(255,69,0,0.1)", border: "1px solid #ff4500" }}
              />
              <div
                className="corner-decor relative w-72 h-72 rounded-2xl overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1a1f2e 0%, #0d1018 100%)", border: "1px solid #1e2433" }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center pulse-glow"
                    style={{ background: "#ff4500" }}
                  >
                    <span className="font-bold text-5xl text-white" style={{ fontFamily: "Oswald, sans-serif" }}>К</span>
                  </div>
                  <span className="font-bold text-2xl text-white" style={{ fontFamily: "Oswald, sans-serif" }}>Кириешка</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 pulse-glow" />
                    <span className="text-sm text-green-400" style={{ fontFamily: "Rubik, sans-serif" }}>Онлайн</span>
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-4 -right-4 bg-[#0a0c12] border border-[#ff4500] rounded-lg px-3 py-2 flex items-center gap-2"
                style={{ boxShadow: "0 4px 20px rgba(255,69,0,0.3)" }}
              >
                <Icon name="Award" size={16} className="text-[#ff6b1a]" />
                <span className="text-sm text-white" style={{ fontFamily: "Oswald, sans-serif" }}>С 2020 года</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1" style={{ background: "linear-gradient(to right, #ff4500, transparent)" }} />
              <span className="text-xs text-[#ff6b1a] uppercase tracking-widest" style={{ fontFamily: "Rubik, sans-serif" }}>О КАНАЛЕ</span>
            </div>

            <h2 className="font-bold text-5xl text-white mb-6 leading-tight" style={{ fontFamily: "Oswald, sans-serif" }}>
              КТО ТАКОЙ<br />
              <span style={{ color: "#ff4500" }}>КИРИЕШКА?</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6" style={{ fontFamily: "Rubik, sans-serif" }}>
              Привет! Я Кириешка — геймер, ютубер и любитель острых ощущений в играх и жизни. На канале я делаю летсплеи, обзоры и угарные моменты без воды и лишних слов.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8" style={{ fontFamily: "Rubik, sans-serif" }}>
              Более <span className="text-white font-medium">4 лет</span> в YouTube. Прошёл сотни игр, собрал тысячи часов контента и продолжаю каждый день. Канал без понтов — только честно, смешно и по делу.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Летсплеи", "Обзоры", "Гайды", "Хардкор", "Инди игры", "Реакции"].map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 rounded border text-gray-400 hover:text-[#ff6b1a] hover:border-[#ff4500] transition-colors cursor-default"
                  style={{ fontFamily: "Rubik, sans-serif", borderColor: "#1e2433", background: "#0a0c12" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #ff4500, transparent)", opacity: 0.5 }} />
    </section>
  );
}

function VideosSection() {
  const [filter, setFilter] = useState("Все");
  const categories = ["Все", "Топ", "Летсплей", "Обзор", "Гайд", "Реакция"];
  const filtered = filter === "Все" ? VIDEOS : VIDEOS.filter((v) => v.category === filter);

  return (
    <section id="videos" className="py-24 bg-[#0a0c12]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#ff4500]" />
            <span className="text-xs text-[#ff6b1a] uppercase tracking-widest" style={{ fontFamily: "Rubik, sans-serif" }}>Контент</span>
            <div className="h-px w-16 bg-[#ff4500]" />
          </div>
          <h2 className="font-bold text-5xl text-white mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
            ПОСЛЕДНИЕ <span style={{ color: "#ff4500" }}>ВИДЕО</span>
          </h2>
          <p className="text-gray-500" style={{ fontFamily: "Rubik, sans-serif" }}>Новые видео каждую неделю</p>
        </div>

        <div className="flex items-center gap-2 flex-wrap justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-medium uppercase tracking-wider text-sm px-5 py-2 rounded transition-all ${
                filter === cat
                  ? "bg-[#ff4500] text-white"
                  : "border border-[#1e2433] text-gray-400 hover:border-gray-500 hover:text-gray-200"
              }`}
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((video, i) => (
            <div
              key={video.id}
              className="game-card rounded-xl overflow-hidden cursor-pointer bg-[#111520]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-video" style={{ background: "linear-gradient(135deg, #1a1f2e 0%, #0d1018 100%)" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center pulse-glow"
                    style={{ background: "rgba(255,69,0,0.15)", border: "1px solid rgba(255,69,0,0.3)" }}
                  >
                    <Icon name="Play" size={28} className="text-[#ff4500]" />
                  </div>
                </div>
                <div className="thumb-overlay" />
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded" style={{ fontFamily: "Rubik, sans-serif" }}>
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2 text-xs font-medium uppercase px-2 py-0.5 rounded bg-[#ff4500] text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {video.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white text-base mb-2 leading-tight line-clamp-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {video.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500" style={{ fontFamily: "Rubik, sans-serif" }}>{video.views}</span>
                  <span className="text-xs text-gray-600" style={{ fontFamily: "Rubik, sans-serif" }}>{video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn inline-flex items-center gap-2 border border-[#ff4500] text-[#ff4500] font-semibold uppercase tracking-wider px-8 py-3 rounded text-sm hover:bg-[#ff4500] hover:text-white transition-colors"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            <Icon name="Youtube" size={18} />
            Все видео на YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

function SubscribeSection() {
  return (
    <section id="subscribe" className="py-24 relative overflow-hidden bg-[#111520]">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #ff4500, transparent)", opacity: 0.5 }} />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#ff4500" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#ff4500]" />
            <span className="text-xs text-[#ff6b1a] uppercase tracking-widest" style={{ fontFamily: "Rubik, sans-serif" }}>Подписка</span>
            <div className="h-px w-16 bg-[#ff4500]" />
          </div>
          <h2 className="font-bold text-5xl text-white mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
            ВСТУПАЙ В <span style={{ color: "#ff4500" }}>КОМАНДУ</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto" style={{ fontFamily: "Rubik, sans-serif" }}>
            Подпишись и стань частью геймерского сообщества Кириешки
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {PERKS.map((perk, i) => (
            <div
              key={perk.title}
              className="corner-decor game-card rounded-xl p-6 text-center bg-[#0a0c12]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(255,69,0,0.12)", border: "1px solid rgba(255,69,0,0.25)" }}
              >
                <Icon name={perk.icon} fallback="Star" size={22} className="text-[#ff4500]" />
              </div>
              <h3 className="font-semibold text-white text-base mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>{perk.title}</h3>
              <p className="text-gray-500 text-sm" style={{ fontFamily: "Rubik, sans-serif" }}>{perk.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="max-w-2xl mx-auto rounded-2xl p-8 md:p-12 text-center relative overflow-hidden bg-[#0a0c12]"
          style={{ border: "1px solid #1e2433" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: "linear-gradient(to right, #ff4500, #ff6b1a)" }}
          />
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-glow"
            style={{ background: "#ff4500" }}
          >
            <Icon name="Youtube" size={36} className="text-white" />
          </div>
          <h3 className="font-bold text-3xl text-white mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
            320 000+ подписчиков
          </h3>
          <p className="text-gray-400 mb-8" style={{ fontFamily: "Rubik, sans-serif" }}>
            Присоединяйся к сообществу — нажми кнопку и подпишись прямо сейчас
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn inline-flex items-center gap-3 bg-[#ff4500] text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            <Icon name="Youtube" size={24} />
            Подписаться на YouTube
          </a>
          <p className="text-gray-600 text-sm mt-6" style={{ fontFamily: "Rubik, sans-serif" }}>
            Бесплатно · Новые видео каждую неделю · Без спама
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t bg-[#0a0c12]" style={{ borderColor: "#1e2433" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: "#ff4500" }}>
              <span className="font-bold text-white text-sm" style={{ fontFamily: "Oswald, sans-serif" }}>К</span>
            </div>
            <span className="font-bold text-lg text-white" style={{ fontFamily: "Oswald, sans-serif" }}>КИРИЕШКА</span>
          </div>
          <p className="text-gray-600 text-sm text-center" style={{ fontFamily: "Rubik, sans-serif" }}>
            © 2025 Кириешка. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            {[
              { name: "Youtube", href: "https://youtube.com" },
              { name: "Send", href: "#" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-[#1e2433] text-gray-500 hover:text-[#ff4500] hover:border-[#ff4500] transition-all"
              >
                <Icon name={s.name} fallback="Link" size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "#0a0c12" }}>
      <Header active={activeSection} setActive={setActiveSection} />
      <HeroSection />
      <AboutSection />
      <VideosSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Index;