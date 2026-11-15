import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroHand from "@/assets/hero-hand.jpg";
import {
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LumierePage,
  head: () => ({
    meta: [
      { title: "Natalia Νυχάδικο — Ποδολογικές Υπηρεσίες & Nail Salon στην Αθήνα" },
      {
        name: "description",
        content:
          "Natalia Νυχάδικο, Pithias 55, Αθήνα. Εξειδίκευση σε ποδολογικές υπηρεσίες — pedicure, ονυχομυκητίαση, κάλοι, ονυχοκρυπτώσεις — καθώς και manicure & nail art. 4.7★ / 62 κριτικές.",
      },
      { property: "og:title", content: "Natalia Νυχάδικο — Ποδολογικές Υπηρεσίες στην Αθήνα" },
      {
        property: "og:description",
        content: "Εξειδίκευση σε ποδολογικές υπηρεσίες · Pithias 55, Αθήνα · 21 0866 2976 · Online κρατήσεις 24/7.",
      },

      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});



const BUSINESS = {
  name: "Natalia Νυχάδικο",
  address: "Pithias 55, Athina 113 64",
  mapsUrl: "https://www.google.com/maps/place/Pithias+55,+Athina+113+64",
  phone: "21 0866 2976",
  phoneTel: "+302108662976",
  instagram: "https://www.instagram.com/nporseva/",
  facebook: "https://www.facebook.com/profile.php?id=100063954436413",
  booking: "https://natalianailsalon.setmore.com/natalia",
  hours: [
    { day: "Δευτέρα", time: "Κλειστά" },
    { day: "Τρίτη", time: "9:00 - 21:00" },
    { day: "Τετάρτη", time: "9:00 - 21:00" },
    { day: "Πέμπτη", time: "9:00 - 21:00" },
    { day: "Παρασκευή", time: "9:00 - 21:00" },
    { day: "Σάββατο", time: "9:00 - 20:00" },
    { day: "Κυριακή", time: "Κλειστά" },
  ],
};

const reviews = [
  {
    name: "Κλαουντια Δεμπελη",
    stars: 5,
    text: "Είμαι πολύ ευχαριστημένη με τη δουλειά τους! 🌸 Άριστη εξυπηρέτηση, σχολαστική δουλειά και πολύ όμορφο αποτέλεσμα στα νύχια. Ο χώρος είναι καθαρός και το προσωπικό ευγενικό και επαγγελματικό. Σίγουρα θα ξαναπάω και το συνιστώ ανεπιφύλακτα! ✨",
  },
  {
    name: "Maria Louiza Stergiou",
    stars: 5,
    text: "Υπέροχο μέρος, καθαρό και πολύ φροντισμένο. Η κ. Ναταλία είναι εξαιρετική επαγγελματίας, με μεγάλη εμπειρία και προσοχή στη λεπτομέρεια. Όλες οι κοπέλες είναι άριστες και η δουλειά τους άψογη. Το μασάζ της κ. Αφροδίτης είναι μοναδικό, χαλαρωτικό και απολαυστικό!!!",
  },
  {
    name: "Χριστίνα Γούλα",
    stars: 5,
    text: "Επισκέπτομαι το χώρο εδώ και ένα χρόνο. Δεν ξέρω αν υπάρχουν λέξεις για τη θαυμάσια δουλειά. Τα νύχια μου είναι εύθραυστα και κόβονται κάθετα. Όπου κι αν πήγα, μέσα σε μια βδομάδα το πολύ έσπαγαν. Τώρα το μανικιούρ κρατάει ένα μήνα και είμαι περήφανη για τα χέρια μου. Ευχαριστώ πολύ Ναταλία και όλες τις κοπέλες για το απίστευτο περιβάλλον που με κάνει να νιώθω σαν να είναι φίλες μου.",
  },
];


function LumierePage() {
  return (
    <div className="font-body bg-pearl text-ink">
      <Nav />
      <Hero />
      <Ribbon />
      <About />
      <Stats />
      <Booking />
      <Gallery />
      <Reviews />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* -------------------- NAV -------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Αρχική" },
    
    { href: "#booking", label: "Κρατήσεις" },
    { href: "#contact", label: "Επικοινωνία" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-rose-gold/70 transition-shadow ${
        scrolled ? "shadow-[0_10px_30px_-15px_rgba(183,110,121,0.35)]" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-3 items-center gap-4">
        <a
          href="#home"
          className="font-display italic text-2xl md:text-3xl text-rose-gold tracking-tight truncate"
        >
          Natalia Νυχάδικο
        </a>
        <nav className="hidden md:flex items-center justify-center gap-10 text-[13px] font-medium tracking-[0.18em] uppercase text-ink/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-rose-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex justify-end">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-rose-gold text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-rose-gold/90 transition-all hover:-translate-y-0.5 shadow-[0_10px_25px_-10px_rgba(183,110,121,0.6)]"
          >
            Κλείστε Ραντεβού
          </a>
        </div>
        <button
          className="md:hidden justify-self-end p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-rose-gold/40 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.18em] text-ink/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-rose-gold text-white px-6 py-3 text-sm font-medium"
          >
            Κλείστε Ραντεβού
          </a>
        </div>
      )}
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section
      id="home"
      className="relative bg-ink text-white flex items-center min-h-[calc(100vh-5rem)] px-8 md:px-16 lg:px-24 py-20 lg:py-0 overflow-hidden"
    >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-60 lg:opacity-70"
          style={{ backgroundImage: `url(${heroHand})` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30"
        />
        <div aria-hidden className="pointer-events-none absolute top-10 right-10 w-40 h-40 rounded-full bg-rose-gold/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute bottom-16 left-10 w-56 h-56 rounded-full bg-rose-gold/10 blur-3xl" />
        <div className="relative max-w-xl">
          <p className="text-rose-gold text-xs md:text-[13px] uppercase tracking-[0.32em] font-medium">
            Ποδολογικές Υπηρεσίες · Nail Studio · Αθήνα
          </p>
          <div className="mt-5 h-[2px] w-[60px] bg-rose-gold" />
          <h1 className="mt-8 font-display font-light leading-[1.05] text-[56px] md:text-[72px] lg:text-[80px] tracking-tight">
            Η{" "}
            <span className="relative inline-block lumiere-underline">Τέχνη</span>
            <br />
            στα Νύχια
            <br />
            σας
          </h1>
          <p className="mt-6 inline-flex items-center rounded-full border border-rose-gold/60 bg-rose-gold/10 px-5 py-2 text-sm text-rose-gold">
            🦶 Εξειδίκευση στις ποδολογικές υπηρεσίες
          </p>
          <p className="mt-6 text-white/60 text-base md:text-[17px] leading-relaxed max-w-md">
            Το νυχάδικό μας εστιάζει κυρίως στις ποδολογικές υπηρεσίες — φροντίδα και περιποίηση
            νυχιών ποδιών. Κάθε λεπτομέρεια μετράει.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-rose-gold text-white px-7 py-3.5 text-sm font-medium hover:-translate-y-1 hover:bg-rose-gold/90 transition-all shadow-[0_15px_30px_-12px_rgba(183,110,121,0.7)]"
            >
              Κλείστε Ραντεβού <ArrowRight size={16} />
            </a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "500+", l: "Πελάτισσες" },
              { n: "4.7★", l: "Google" },
              { n: "24/7", l: "Online" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-rose-gold">{s.n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}

/* -------------------- RIBBON -------------------- */
function Ribbon() {
  const text =
    "ΠΟΔΟΛΟΓΙΚΕΣ ΥΠΗΡΕΣΙΕΣ · PEDICURE · ΦΡΟΝΤΙΔΑ ΝΥΧΙΩΝ ΠΟΔΙΩΝ · MANICURE · ΗΜΙΜΟΝΙΜΟ · NAIL ART · NATALIA ΝΥΧΑΔΙΚΟ · ΑΘΗΝΑ · ";
  return (
    <section className="bg-ink py-8 overflow-hidden border-y border-rose-gold/20">
      <div className="flex whitespace-nowrap lumiere-marquee-track">
        <div className="font-display italic text-rose-gold text-4xl md:text-5xl tracking-wide px-4">
          {text.repeat(6)}
        </div>
        <div
          aria-hidden
          className="font-display italic text-rose-gold text-4xl md:text-5xl tracking-wide px-4"
        >
          {text.repeat(6)}
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-xs uppercase tracking-[0.3em] font-medium ${
        dark ? "text-ink" : "text-rose-gold"
      }`}
    >
      {children}
    </p>
  );
}

function RoseLine({ center = false }: { center?: boolean }) {
  return <div className={`mt-5 h-[2px] w-[60px] bg-rose-gold ${center ? "mx-auto" : ""}`} />;
}

function About() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div>
          <SectionLabel>Το Studio μας · Ποδολογικές Υπηρεσίες</SectionLabel>
          <RoseLine />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl leading-[1.1]">
            Εξειδικευμένοι στις Ποδολογικές Υπηρεσίες
          </h2>
          <p className="mt-8 text-ink/70 text-base leading-[1.8] max-w-lg">
            Στο Natalia Νυχάδικο εστιάζουμε κυρίως στις ποδολογικές υπηρεσίες: ολοκληρωμένη
            περιποίηση και φροντίδα των νυχιών των ποδιών, pedicure και θεραπείες με προσοχή στη
            λεπτομέρεια. Παράλληλα προσφέρουμε manicure, ημιμόνιμο και nail art, πάντα με premium
            προϊόντα και τεχνικές.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "🦶 Ποδολογικές Υπηρεσίες",
              "💅 Premium Προϊόντα",
              "👩‍🎨 Πιστοποιημένες Τεχνίτριες",
              "✨ Μοναδικά Σχέδια",
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-rose-gold text-rose-gold bg-white px-5 py-2 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-10 space-y-3 text-sm">
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-ink/70 hover:text-rose-gold transition-colors"
            >
              <MapPin size={16} className="text-rose-gold shrink-0" />
              {BUSINESS.address}
            </a>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="flex items-center gap-3 text-ink/70 hover:text-rose-gold transition-colors"
            >
              <Phone size={16} className="text-rose-gold shrink-0" />
              {BUSINESS.phone}
            </a>
            <div className="flex gap-3 pt-2">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-2 rounded-full border border-rose-gold text-rose-gold px-5 py-2 hover:bg-rose-gold hover:text-white transition-all"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center gap-2 rounded-full border border-rose-gold text-rose-gold px-5 py-2 hover:bg-rose-gold hover:text-white transition-all"
              >
                <Facebook size={16} /> Facebook
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


/* -------------------- STATS -------------------- */
function Stats() {
  const items = [
    { n: "500+", l: "Ευχαριστημένες Πελάτισσες" },
    { n: "4.7★", l: "Βαθμολογία Google" },
    { n: "62", l: "Κριτικές Google" },
    { n: "24/7", l: "Online Κράτηση" },
  ];
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-12">
        {items.map((s, i) => (
          <div
            key={s.l}
            className={`text-center px-6 ${
              i > 0 ? "lg:border-l lg:border-rose-gold/40" : ""
            }`}
          >
            <div className="font-display text-rose-gold text-6xl md:text-7xl leading-none">
              {s.n}
            </div>
            <div className="mt-4 text-white text-[11px] uppercase tracking-[0.25em]">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


/* -------------------- BOOKING -------------------- */
function Booking() {
  return (
    <section id="booking" className="bg-blush py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <SectionLabel dark>Κράτηση Ραντεβού</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">
            Κλείστε το Ραντεβού σας
          </h2>
          <p className="mt-4 text-ink/70">
            Ποδολογικές υπηρεσίες, pedicure, manicure & nail art — online 24/7, χωρίς τηλεφώνημα
          </p>
        </div>

        <div className="mt-10 bg-white rounded-2xl overflow-hidden shadow-[0_25px_60px_-25px_rgba(183,110,121,0.35)]">
          <iframe
            src={BUSINESS.booking}
            title="Setmore Online Booking"
            className="w-full h-[520px] md:h-[600px]"
            frameBorder="0"
            allow="fullscreen"
            loading="lazy"
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-full border border-rose-gold text-rose-gold bg-white px-7 py-3.5 text-sm font-medium hover:bg-rose-gold hover:text-white transition-all"
          >
            <Phone size={16} /> {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}


/* -------------------- GALLERY -------------------- */
function Gallery() {
  const slides = [
    { src: "/images/nail-1.png", alt: "Nail art με μαργαρίτες σε κίτρινο γαλλικό" },
    { src: "/images/nail-2.png", alt: "Chrome nail art σε nude βάση" },
    { src: "/images/nail-3.png", alt: "Μπλε νύχια με σχέδια κινουμένων σχεδίων" },
    { src: "/images/nail-4.png", alt: "Κλασικό γαλλικό manicure" },
    { src: "/images/nail-5.png", alt: "Μπλε νύχια με πεταλούδες" },
  ];
  const [idx, setIdx] = useState(0);
  const go = (d: number) => setIdx((i) => (i + d + slides.length) % slides.length);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>Δείγματα Εργασιών</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl">
            Η Τέχνη μας Μιλά Μόνη της
          </h2>
        </div>

        <div className="mt-14 mx-auto max-w-2xl">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-rose-gold bg-blush">
            {slides.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Προηγούμενη φωτογραφία"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-rose-gold flex items-center justify-center shadow-lg hover:bg-white transition"
            >
              <ArrowRight size={18} className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Επόμενη φωτογραφία"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-rose-gold flex items-center justify-center shadow-lg hover:bg-white transition"
            >
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="mt-6 flex justify-center gap-2.5">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Φωτογραφία ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-7 bg-rose-gold" : "w-2 bg-rose-gold/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* -------------------- REVIEWS -------------------- */
function GoogleLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.2-.4-4.7H24v9h11.9c-.5 2.8-2.1 5.1-4.4 6.7v5.5h7.1c4.2-3.8 6.5-9.5 6.5-16.5z" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.6-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.7-3.9-12.4-9.1H4.3v5.7C8 41.3 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.6 28.2c-.5-1.3-.7-2.7-.7-4.2s.3-2.9.7-4.2v-5.7H4.3C2.8 17 2 20.4 2 24s.8 7 2.3 9.9l7.3-5.7z" />
      <path fill="#EA4335" d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.1 29.9 2 24 2 15.4 2 8 6.7 4.3 14.1l7.3 5.7c1.7-5.2 6.6-9.1 12.4-9.1z" />
    </svg>
  );
}

function Stars({ value = 5, size = 16 }: { value?: number; size?: number }) {
  return (
    <div className="flex gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <Star size={size} className="absolute inset-0 text-gold/30" fill="currentColor" strokeWidth={0} />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star size={size} fill="currentColor" strokeWidth={0} />
            </span>
          </span>
        );
      })}
    </div>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>Κριτικές</SectionLabel>
          <RoseLine center />
          <h2 className="mt-8 font-display font-light text-4xl md:text-5xl text-white">
            Τι Λένε οι Πελάτισσές μας
          </h2>
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-rose-gold/40 bg-white/5 px-6 py-4">
            <GoogleLogo className="w-7 h-7" />
            <span className="font-display text-4xl text-white leading-none">4.7</span>
            <Stars value={4.7} size={20} />
            <span className="rounded-full bg-rose-gold text-white text-[11px] uppercase tracking-[0.2em] px-4 py-1.5">
              62 κριτικές στο Google
            </span>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative rounded-2xl p-10 pt-14"
              style={{ background: "#1a1a1a" }}
            >
              <span className="absolute top-4 left-8 font-display text-rose-gold text-[80px] leading-none">
                “
              </span>
              <GoogleLogo className="absolute top-8 right-8 w-5 h-5" />
              <Stars value={r.stars} />
              <p className="mt-5 text-white text-base leading-[1.8]">{r.text}</p>
              <div className="mt-6 text-rose-gold text-[11px] uppercase tracking-[0.25em]">
                {r.name}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=Natalia+νυχάδικο+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white text-ink px-7 py-3.5 text-sm font-medium hover:-translate-y-0.5 transition-all shadow-[0_15px_35px_-15px_rgba(255,255,255,0.4)]"
          >
            <GoogleLogo className="w-4 h-4" />
            Δες όλες τις κριτικές στο Google
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}


/* -------------------- FINAL CTA -------------------- */
function FinalCTA() {
  return (
    <section
      className="py-28 lg:py-36 text-center text-white"
      style={{
        background:
          "linear-gradient(135deg, #B76E79 0%, #d08a95 50%, #B76E79 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.05]">
          Έτοιμες για Τέλεια Νύχια;
        </h2>
        <div className="mt-6 h-[2px] w-[60px] bg-white mx-auto" />
        <p className="mt-6 text-white/90 text-lg">
          Εξειδίκευση στις ποδολογικές υπηρεσίες — κλείστε ραντεβού online 24/7
        </p>
        <a
          href="#booking"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white text-rose-gold px-8 py-4 text-sm font-medium hover:scale-[1.03] hover:bg-white/95 transition-all shadow-[0_20px_45px_-15px_rgba(0,0,0,0.35)]"
        >
          Κλείστε Ραντεβού Τώρα <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-display italic text-rose-gold text-3xl">Natalia Νυχάδικο</div>
            <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-sm">
              Nail studio στην Αθήνα με εξειδίκευση στις ποδολογικές υπηρεσίες — φροντίδα νυχιών
              ποδιών, pedicure, manicure & nail art.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-rose-gold flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-rose-gold flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-rose-gold">Ωράριο</div>
            <div className="mt-5 h-px w-10 bg-rose-gold" />
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              {BUSINESS.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className={h.time === "Κλειστά" ? "text-white/40" : "text-rose-gold"}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-rose-gold">Επικοινωνία</div>
            <div className="mt-5 h-px w-10 bg-rose-gold" />
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-rose-gold transition-colors"
                >
                  <MapPin size={16} className="text-rose-gold mt-0.5 shrink-0" />
                  {BUSINESS.address}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="flex items-center gap-3 hover:text-rose-gold transition-colors"
                >
                  <Phone size={16} className="text-rose-gold shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
            </ul>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-rose-gold text-rose-gold px-4 py-2 text-xs uppercase tracking-[0.2em] hover:bg-rose-gold hover:text-white transition-all"
            >
              Οδηγίες <ArrowRight size={14} />
            </a>
          </div>
        </div>
        <div className="mt-14 rounded-2xl overflow-hidden border border-rose-gold/40 shadow-[0_25px_60px_-30px_rgba(183,110,121,0.6)]">
          <iframe
            title="Natalia Νυχάδικο — Pithias 55, Αθήνα"
            src="https://www.google.com/maps?q=Pithias+55,+Athina+113+64&output=embed"
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="mt-16 h-px bg-rose-gold/40" />
        <p className="mt-6 text-center text-xs text-white/40">
          © 2026 Natalia Νυχάδικο. All rights reserved.
        </p>
      </div>
    </footer>

  );
}
