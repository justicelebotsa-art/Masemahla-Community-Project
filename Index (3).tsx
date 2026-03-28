import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/masemahla-logo.png";
import photo1 from "@/assets/masemahla-1.jpg";
import photo2 from "@/assets/masemahla-2.jpg";
import anickie from "@/assets/anickie.png";
import moses from "@/assets/moses.png";
import { Phone, Mail, Globe, Users, BookOpen, Heart, Target } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container mx-auto flex items-center justify-between py-3 px-6">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Masemahla Logo" className="h-10 w-10 rounded-full object-cover" />
        <span className="font-display text-lg font-semibold text-foreground">Masemahla</span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-muted-foreground">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#philosophy" className="hover:text-primary transition-colors">Philosophy</a>
        <a href="#vision" className="hover:text-primary transition-colors">Vision</a>
        <Link to="/collaboration" className="hover:text-primary transition-colors">Collaborate</Link>
        <Link to="/donate" className="hover:text-primary transition-colors">Donate</Link>
        <Link to="/sdgs" className="hover:text-primary transition-colors">SDGs</Link>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-up">
      <img src={logo} alt="Masemahla Logo" className="h-24 w-24 mx-auto mb-8 rounded-full object-cover shadow-lg" />
      <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6 text-balance">
        Masemahla Community Development Project
      </h1>
      <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10">
        Empowering individuals through skills development, fostering growth, and building a brighter future for Mamelodi West.
      </p>
      <a
        href="#about"
        className="inline-block bg-primary text-primary-foreground font-body font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
      >
        Learn More
      </a>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto max-w-6xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
        About Us
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Our organization is committed to fostering skills development among community members, particularly focusing on individuals who face vulnerabilities and disabilities.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            All participants receive training in essential skills critical for successful careers, including basic numeracy and literacy, conversational English, CV preparation, interview techniques, workplace etiquette and ethics.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Users, label: "Skills Development" },
            { icon: BookOpen, label: "Literacy & Numeracy" },
            { icon: Heart, label: "Community Support" },
            { icon: Target, label: "Career Readiness" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="bg-card rounded-lg p-6 text-center shadow-sm border border-border">
              <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <span className="font-body text-sm font-semibold text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Philosophy = () => (
  <section id="philosophy" className="py-24 px-6 bg-secondary">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex flex-col gap-4">
          <img
            src={photo1}
            alt="Community members in action"
            className="rounded-xl shadow-lg w-full h-56 object-cover"
          />
          <div className="flex items-center gap-4 bg-card/30 rounded-xl p-4">
            <img
              src={moses}
              alt="Moses Mahlake"
              className="h-20 w-20 rounded-full object-cover shadow-md border-2 border-primary"
            />
            <div>
              <p className="font-display text-base font-semibold text-secondary-foreground">Moses Mahlake</p>
              <p className="font-body text-sm text-secondary-foreground/70">Co-Founder</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-card/30 rounded-xl p-4">
            <img
              src={anickie}
              alt="Anickie Masemola"
              className="h-20 w-20 rounded-full object-cover shadow-md border-2 border-primary"
            />
            <div>
              <p className="font-display text-base font-semibold text-secondary-foreground">Anickie Masemola</p>
              <p className="font-body text-sm text-secondary-foreground/70">Co-Founder</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Our Philosophy
          </h2>
          <div className="w-16 h-1 bg-primary mb-8 rounded-full" />
          <p className="font-body text-lg text-secondary-foreground/85 leading-relaxed mb-6">
            Motivated by a strong philosophy, Moses Mahlake and Anickie Masemola from Mamelodi West Township aim to foster community development.
          </p>
          <p className="font-body text-lg text-secondary-foreground/85 leading-relaxed">
            They have created a vibrant environment focused on learning and growth, establishing programs that equip individuals with skills, confidence, and self-reliance. Their efforts have transformed lives, opened new opportunities, and improved quality of life.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Vision = () => (
  <section id="vision" className="py-24 px-6" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vision for the Future
          </h2>
          <div className="w-16 h-1 bg-primary mb-8 rounded-full" />
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Moses Mahlake and Anickie Masemola are dedicated to achieving a positive economic impact that benefits local communities.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            With a strong commitment to ethical practices and transparency, they aspire to redefine industry standards and invite others to join them in shaping the future of Mamelodi West through innovation, sustainability, and a focus on quality.
          </p>
        </div>
        <div>
          <img
            src={photo2}
            alt="Vision for community growth"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 px-6 bg-foreground">
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
        Get in Touch
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

      <div className="grid sm:grid-cols-3 gap-8">
        {[
          { icon: Phone, label: "+27 72 915 0321", href: "tel:+27729150321" },
          { icon: Phone, label: "+27 72 051 9191", href: "tel:+27720519191" },
          { icon: Globe, label: "masemahlacommunity.co.za", href: "https://www.masemahlacommunity.co.za" },
        ].map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="flex flex-col items-center gap-3 text-primary-foreground/80 hover:text-primary transition-colors"
          >
            <Icon className="h-6 w-6" />
            <span className="font-body text-sm">{label}</span>
          </a>
        ))}
      </div>

      <p className="mt-12 font-body text-primary-foreground/50 text-sm">
        © {new Date().getFullYear()} Masemahla Community Development Project. All rights reserved.
      </p>
    </div>
  </section>
);

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Philosophy />
    <Vision />
    <Contact />
  </div>
);

export default Index;
