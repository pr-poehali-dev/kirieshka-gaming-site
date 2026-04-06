import { useState } from "react";
import Icon from "@/components/ui/icon";
import { VIDEOS, PERKS } from "@/constants/channel";

export function AboutSection() {
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

export function VideosSection() {
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

export function SubscribeSection() {
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

export function Footer() {
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
