import { useCallback, useEffect, useRef, useState } from "react";
import {
  BookOpen, Download, Headphones, Instagram, Linkedin, Mail, MapPin, Menu,
  Mic, Pause, Phone, Play, Send, Star, Volume2, X, Youtube,
} from "lucide-react";
import { portfolioContent as content } from "../content/portfolio";

const iconMap = { BookOpen, Headphones, Instagram, Linkedin, Mail, MapPin, Mic, Phone, Youtube };
const sectionClass = "relative px-[5vw] py-[100px]";
const sectionHeadClass = "mb-[52px] max-w-[600px]";
const eyebrowClass = "mb-[14px] font-mono text-[12px] uppercase tracking-[0.06em] text-gold";
const titleClass = "m-0 font-display text-[clamp(26px,3.4vw,42px)] font-bold";
const sectionDescriptionClass = "mt-4 text-[14.5px] leading-[1.7] text-marble-dim";
const pillClass = "rounded-full border border-line text-marble-dim";
const panelClass = "rounded-2xl border border-line bg-panel";
const outlineButtonClass = "flex items-center gap-2 rounded-full border border-line bg-transparent px-6 py-3 text-[14px] text-marble transition-colors duration-200 hover:border-gold hover:text-gold";
const goldButtonClass = "rounded-full border-0 bg-gold px-5 py-2.5 text-[13px] font-semibold text-[#141414] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(198,161,91,0.28)]";
const patternedBackground = {
  background: "repeating-linear-gradient(45deg, rgba(198,161,91,0.05) 0 2px, transparent 2px 16px)",
};

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reveal = () => element.classList.add("is-visible");
    if (!("IntersectionObserver" in window)) {
      reveal();
      return undefined;
    }

    const observer = getRevealObserver();
    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

let revealObserver;

function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px 40px" });
  }
  return revealObserver;
}

export default function VoiceOverPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTrack, setActiveTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => setProgress((value) => (value >= 1 ? 0 : value + 0.004)), 120);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const selectTrack = useCallback((work) => {
    setActiveTrack((current) => {
      if (current?.id === work.id) {
        setIsPlaying((playing) => !playing);
        return current;
      }
      setProgress(0);
      setIsPlaying(true);
      return work;
    });
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background font-sans text-marble">
      {Array.from({ length: 14 }).map((_, index) => (
        <span
          key={index}
          className="dust pointer-events-none absolute animate-dust rounded-full bg-gold opacity-35"
          style={{
            left: `${(index * 7.3) % 100}%`, bottom: `-${20 + (index % 5) * 10}px`,
            width: 2 + (index % 3), height: 2 + (index % 3),
            animationDuration: `${9 + (index % 6)}s`, animationDelay: `${index * 0.6}s`,
          }}
        />
      ))}

      <nav className="sticky-layer sticky top-0 z-40 flex items-center justify-between border-b border-line bg-[rgba(13,17,22,0.96)] px-[5vw] py-[18px]">
        <div className="flex items-center gap-2.5">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-gold font-display text-[15px] text-gold">{content.identity.initials}</div>
          <div>
            <div className="font-display text-[14px] uppercase tracking-[0.08em]">{content.identity.name}</div>
            <div className="font-mono text-[9px] uppercase tracking-[0.06em] text-marble-dim">{content.identity.role}</div>
          </div>
        </div>
        <div className="flex items-center gap-[30px] max-[900px]:hidden">
          {content.navigation.map((item) => (
            <button key={item.href} onClick={() => scrollTo(item.href)} className="group relative border-0 bg-transparent pb-1 text-[14px] text-marble-dim transition-colors duration-200 hover:text-marble">
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button onClick={() => scrollTo("#kontak")} className={goldButtonClass}>{content.common.contactCta}</button>
        </div>
        <button className="hidden border-0 bg-transparent text-marble max-[900px]:flex" onClick={() => setMenuOpen((value) => !value)} aria-label="Menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <header id="beranda" className="relative flex min-h-[90vh] items-center overflow-hidden px-[5vw] pb-[60px] pt-20">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_55%_at_75%_25%,rgba(198,161,91,0.10),transparent_60%),linear-gradient(180deg,#0B0E12_0%,#10151B_55%,#0D1116_100%)]" />
        <div className="hero-enter relative z-[2] grid w-full grid-cols-[1.1fr_0.9fr] items-center gap-12 max-[900px]:grid-cols-1">
          <div>
            <div className="mb-[26px] inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-[11px] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-patina" />{content.hero.eyebrow}
            </div>
            <h1 className="m-0 font-display text-[clamp(38px,5.4vw,64px)] font-semibold leading-[1.08] tracking-[0.01em]">
              {content.hero.greeting}<span className="block text-gold">{content.hero.headline}</span>
            </h1>
            <div className="mt-2.5 font-display text-[clamp(18px,2.2vw,26px)] text-marble-dim">{content.hero.role}</div>
            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.7] text-marble-dim">{content.hero.description}</p>
            <div className="mt-[34px] flex flex-wrap gap-3.5">
              <button onClick={() => scrollTo("#kontak")} className={`${goldButtonClass} px-[26px] py-[13px]`}>{content.common.contactCta}</button>
              <button onClick={() => scrollTo("#karya")} className={outlineButtonClass}><Headphones size={16} />{content.common.listenCta}</button>
            </div>
          </div>
          <div className="relative flex justify-center max-[900px]:-order-1">
            <div className="relative flex aspect-square w-full max-w-[340px] items-center justify-center overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-panel to-panel-2 after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,rgba(198,161,91,0.04)_0_2px,transparent_2px_14px)]">
              <span className="font-display text-8xl text-gold opacity-85">{content.identity.initials}</span>
            </div>
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-gold bg-panel px-[18px] py-[9px] text-[12px] shadow-[0_14px_30px_rgba(0,0,0,0.4)]">
              <span className="relative h-2 w-2 rounded-full bg-patina after:absolute after:-inset-1 after:animate-pulse-ring after:rounded-full after:border after:border-patina" />{content.hero.availability}
            </div>
          </div>
        </div>
      </header>

      {activeTrack && (
        <div className="sticky-layer sticky bottom-0 z-[35] flex items-center gap-[18px] border-t border-line bg-[rgba(13,17,22,0.98)] px-[5vw] py-3">
          <button className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-gold bg-gold-soft font-display text-gold" onClick={() => setIsPlaying((value) => !value)} aria-label={isPlaying ? content.common.pause : content.common.play}>
            {isPlaying ? <Pause size={15} /> : <Play size={15} className="ml-px" />}
          </button>
          <div className="w-[200px] min-w-0">
            <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[13px] text-marble">{activeTrack.title}</div>
            <div className="font-mono text-[9px] uppercase tracking-[0.06em] text-gold">{activeTrack.cat}</div>
          </div>
          <div className="h-[3px] flex-1 cursor-pointer rounded-sm bg-line" onClick={(event) => { const rect = event.currentTarget.getBoundingClientRect(); setProgress((event.clientX - rect.left) / rect.width); }}>
            <div className="h-full rounded-sm bg-gold" style={{ width: `${progress * 100}%` }} />
          </div>
          <Volume2 size={16} className="text-marble-dim" />
        </div>
      )}

      <section className={sectionClass} id="tentang">
        <div className="grid grid-cols-[320px_1fr] items-start gap-14 max-[900px]:grid-cols-1">
          <Reveal>
            <div className="relative">
              <div className="relative flex aspect-[0.85] w-full items-center justify-center overflow-hidden rounded-[18px] border border-line bg-gradient-to-br from-panel to-panel-2">
                <span className="font-display text-[60px] text-gold opacity-85">{content.identity.photoInitials}</span>
              </div>
              <div className="absolute -bottom-[18px] -right-3.5 rounded-[14px] border border-gold bg-panel px-[18px] py-3.5 text-center shadow-[0_14px_30px_rgba(0,0,0,0.4)]">
                <b className="block font-display text-[22px] text-gold">{content.about.experienceValue}</b><span className="text-[10px] text-marble-dim">{content.about.experienceLabel}</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <div className={eyebrowClass}>{content.about.eyebrow}</div>
              <h2 className={titleClass}>{content.about.title}</h2>
              {content.about.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 max-w-[600px] text-[14.5px] leading-[1.8] text-marble-dim">{paragraph}</p>)}
              <div className="mt-7 grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
                {content.about.highlights.map((item) => (
                  <div key={item.title} className={`${panelClass} p-5`}><h4 className="mb-2 font-display text-[15px] font-bold text-gold">{item.title}</h4><p className="text-[12.5px] leading-[1.6] text-marble-dim">{item.description}</p></div>
                ))}
              </div>
              <button className={`${outlineButtonClass} mt-[26px]`}><Download size={16} />{content.common.downloadCv}</button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={sectionClass} id="pengalaman">
        <Reveal><div className={sectionHeadClass}><div className={eyebrowClass}>{content.experienceSection.eyebrow}</div><h2 className={titleClass}>{content.experienceSection.title}</h2></div></Reveal>
        <div className="flex flex-col gap-11 border-l border-line pl-[34px]">
          {content.experienceSection.items.map((experience, index) => (
            <Reveal key={experience.role} delay={index * 100}>
              <div className="relative before:absolute before:left-[-40px] before:top-1 before:h-2.5 before:w-2.5 before:rounded-full before:bg-gold before:shadow-[0_0_0_4px_rgba(198,161,91,0.15)]">
                <div className="flex flex-wrap items-center gap-3"><h3 className="font-display text-[19px] font-bold">{experience.role}</h3>{experience.current && <span className="rounded-full border border-patina px-2.5 py-[3px] text-[10px] text-patina">{content.common.active}</span>}</div>
                <div className="mt-1.5 text-[13px] text-marble-dim">{experience.org}</div>
                <div className="mt-0.5 font-mono text-[11.5px] text-gold">{experience.date}</div>
                <ul className="mb-0 mt-4 list-disc pl-[18px] text-[13.5px] leading-[1.8] text-marble-dim">{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                <div className="mt-4 flex flex-wrap gap-2">{experience.tags.map((tag) => <span key={tag} className={`${pillClass} px-3 py-[5px] text-[10.5px]`}>{tag}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={sectionClass} id="karya">
        <Reveal><div className={sectionHeadClass}><div className={eyebrowClass}>{content.worksSection.eyebrow}</div><h2 className={titleClass}>{content.worksSection.title}</h2><p className={sectionDescriptionClass}>{content.worksSection.description}</p></div></Reveal>
        <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-1">
          {content.worksSection.items.map((work, index) => (
            <Reveal key={work.id} delay={(index % 3) * 100}>
              <div className={`${panelClass} overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:border-gold`}>
                <div className="relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-panel-2 to-[#12161C]">
                  <div className="absolute inset-0" style={patternedBackground} />
                  <span className={`absolute left-3 top-3 z-[1] rounded-full border bg-[rgba(13,17,22,0.75)] px-2.5 py-1 text-[10px] ${work.status === "Rilis" ? "border-patina text-patina" : "border-line text-marble-dim"}`}>{work.status}</span>
                  <span className="absolute bottom-3 right-3 z-[1] font-mono text-[10.5px] text-marble-dim">{work.duration}</span>
                  <button className="z-[1] flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gold bg-[rgba(13,17,22,0.7)] text-gold transition-transform duration-200 hover:scale-110" onClick={() => selectTrack(work)} aria-label={content.common.play}>
                    {activeTrack?.id === work.id && isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                  </button>
                </div>
                <div className="px-[22px] pb-[22px] pt-5">
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-gold">{work.cat}</div><h3 className="mb-2.5 mt-2 font-display text-[18px] font-bold">{work.title}</h3>
                  <p className="mb-3.5 text-[12.5px] leading-[1.6] text-marble-dim">{work.desc}</p><div className="flex flex-wrap gap-2">{work.tags.map((tag) => <span key={tag} className={`${pillClass} px-2.5 py-1 text-[10px]`}>{tag}</span>)}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={sectionClass} id="keahlian">
        <Reveal><div className={sectionHeadClass}><div className={eyebrowClass}>{content.skillsSection.eyebrow}</div><h2 className={titleClass}>{content.skillsSection.title}</h2></div></Reveal>
        <Reveal delay={80}><div className="mb-12 flex flex-wrap gap-2.5">{content.skillsSection.pills.map((skill) => <span key={skill} className={`${pillClass} bg-panel px-4 py-[9px] text-[12.5px] text-marble`}>{skill}</span>)}</div></Reveal>
        <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-1">
          {content.skillsSection.cards.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return <Reveal key={skill.title} delay={index * 120}><div className={`${panelClass} p-7`}><div className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-full border border-patina text-patina"><Icon size={19} /></div><h4 className="mb-2.5 font-display text-[17px] font-bold">{skill.title}</h4><p className="text-[13px] leading-[1.6] text-marble-dim">{skill.desc}</p></div></Reveal>;
          })}
        </div>
      </section>

      <section className={sectionClass} id="testimoni">
        <Reveal><div className={sectionHeadClass}><div className={eyebrowClass}>{content.testimonialsSection.eyebrow}</div><h2 className={titleClass}>{content.testimonialsSection.title}</h2><p className={sectionDescriptionClass}>{content.testimonialsSection.description}</p></div></Reveal>
        <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-1">
          {content.testimonialsSection.items.map((testimonial, index) => (
            <Reveal key={testimonial.title} delay={index * 120}><div className={`${panelClass} flex h-full flex-col gap-3.5 p-[26px]`}><div className="flex items-center justify-between"><div className="flex items-center gap-1.5 text-[13px] font-semibold text-gold"><Star size={14} fill="#C6A15B" stroke="none" />{testimonial.rating.toFixed(1)}</div><div className="text-[10.5px] text-marble-dim">{testimonial.platform}</div></div><h4 className="font-display text-[15px] font-bold">{testimonial.title}</h4><div className="font-mono text-[10.5px] text-marble-dim">{testimonial.date}</div><p className="text-[13px] italic leading-[1.7] text-marble-dim">&ldquo;{testimonial.quote}&rdquo;</p><div className="mt-auto flex flex-wrap gap-2">{testimonial.tags.map((tag) => <span key={tag} className="rounded-full border border-patina px-2.5 py-1 text-[10px] text-patina">{tag}</span>)}</div></div></Reveal>
          ))}
        </div>
      </section>

      <section className={sectionClass} id="kontak">
        <Reveal><div className={sectionHeadClass}><div className={eyebrowClass}>{content.contactSection.eyebrow}</div><h2 className={titleClass}>{content.contactSection.title}</h2><p className={sectionDescriptionClass}>{content.contactSection.description}</p></div></Reveal>
        <div className="grid grid-cols-[1fr_1.2fr] gap-12 max-[900px]:grid-cols-1">
          <Reveal><div className="flex flex-col gap-[22px]">
            {content.contactSection.details.map((detail) => { const Icon = iconMap[detail.icon]; return <div key={detail.label} className="flex items-start gap-4"><div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl border border-line text-gold"><Icon size={18} /></div><div><h5 className="mb-1 font-display text-[14px] font-bold">{detail.label}</h5><p className="text-[13px] text-marble-dim">{detail.value}</p></div></div>; })}
            <div className="mt-2 flex gap-3.5">{content.contactSection.socials.map((social) => { const Icon = iconMap[social.icon]; return <a key={social.label} className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-marble-dim transition duration-200 hover:-translate-y-[3px] hover:border-gold hover:text-gold" href={social.href} aria-label={social.label}><Icon size={16} /></a>; })}</div>
          </div></Reveal>
          <Reveal delay={100}><form className={`${panelClass} flex flex-col gap-4 p-[30px]`} onSubmit={(event) => event.preventDefault()}>
            <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1"><input className="w-full rounded-[10px] border border-line bg-panel-2 px-3.5 py-3 text-[13.5px] text-marble placeholder:text-marble-dim" placeholder={content.contactSection.form.name} /><input type="email" className="w-full rounded-[10px] border border-line bg-panel-2 px-3.5 py-3 text-[13.5px] text-marble placeholder:text-marble-dim" placeholder={content.contactSection.form.email} /></div>
            <input className="w-full rounded-[10px] border border-line bg-panel-2 px-3.5 py-3 text-[13.5px] text-marble placeholder:text-marble-dim" placeholder={content.contactSection.form.subject} />
            <textarea className="min-h-[110px] w-full resize-y rounded-[10px] border border-line bg-panel-2 px-3.5 py-3 text-[13.5px] text-marble placeholder:text-marble-dim" placeholder={content.contactSection.form.message} />
            <button className="flex items-center justify-center gap-2 rounded-full border-0 bg-gold px-[22px] py-[13px] text-[14px] font-semibold text-[#141414] transition-transform duration-200 hover:-translate-y-0.5" type="submit"><Send size={15} />{content.contactSection.form.submit}</button>
          </form></Reveal>
        </div>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-2.5 border-t border-line px-[5vw] py-[30px] text-[12px] text-marble-dim">
        <span>© {new Date().getFullYear()} {content.footer.copyright}</span><span className="font-mono uppercase tracking-[0.06em]">{content.footer.credit}</span>
      </footer>
    </div>
  );
}
