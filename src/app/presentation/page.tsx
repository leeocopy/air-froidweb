"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP, gsap } from "@/lib/gsap";
import { MapPin, CheckCircle, Leaf, ShieldCheck, Award, Zap, Users } from "lucide-react";

const TEAM_MEMBERS = [
  { name: "Youssef Alaoui", role: "Directeur Général", image: "/images/assets/adrien-olichon-3-GSjNOsO8Q-unsplash.jpg" },
  { name: "Sarah Bennani", role: "Ingénieur HVAC", image: "/images/assets/tom-rumble-N5q6uTHdtME-unsplash.jpg" },
  { name: "Karim Tazi", role: "Chef de Projets", image: "/images/assets/illia-horokhovsky-SJnak9YYFWU-unsplash.jpg" },
];

const CERTIFICATIONS = [
  { title: "Partenaire Daikin", icon: Award },
  { title: "Qualité ISO 9001", icon: ShieldCheck },
  { title: "RGE Solaire", icon: Zap },
  { title: "Garantie 10 ans", icon: CheckCircle },
];

const PHILOSOPHY_VALUES = [
  { title: "Engagement Écologique", icon: Leaf, desc: "Nous privilégions les technologies vertes et les pompes à chaleur basse consommation." },
  { title: "Proximité Client", icon: Users, desc: "Un accompagnement sur-mesure de la conception à la maintenance de vos équipements." },
  { title: "Innovation Constante", icon: Zap, desc: "Veille technologique continue pour vous offrir les solutions climatiques de demain." },
];

export default function QuiSommesNousPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 2.1 Intro Animation
    gsap.fromTo(".about-header > *",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
    gsap.fromTo(".about-content", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".about-content", start: "top 80%" } });
    gsap.fromTo(".about-image", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".about-image", start: "top 80%" } });

    // 2.2 Showroom Animation
    gsap.fromTo(".showroom-text > *", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: ".showroom-section", start: "top 70%" } });
    gsap.fromTo(".showroom-img", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: ".showroom-section", start: "top 70%" } });

    // 2.3 Team Animation
    gsap.fromTo(".team-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: ".team-section", start: "top 75%" } });

    // 2.4 Certifications Animation
    gsap.fromTo(".cert-card", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".cert-section", start: "top 80%" } });

    // 2.5 Philosophy Animation
    gsap.fromTo(".philo-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: ".philo-section", start: "top 75%" } });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-white min-h-screen pt-32 pb-0 flex flex-col overflow-hidden">
      
      {/* 2.1 QUI SOMMES-NOUS */}
      <section className="w-full max-w-[1920px] mx-auto px-4 md:px-12 xl:px-24 mb-32 mt-8">
        <div className="about-header text-center max-w-4xl mx-auto mb-20">
          <span className="font-nevan text-sm tracking-[0.2em] text-[#AF1818] uppercase mb-4 block">— 2.1 NOTRE HISTOIRE —</span>
          <h1 className="font-nevan text-5xl md:text-6xl text-gray-900 uppercase tracking-wider mb-6 leading-tight">
            L'excellence climatique <br/> <span className="text-[#32A5DE]">au Maroc</span>
          </h1>
          <p className="font-montserrat text-gray-600 text-lg md:text-xl leading-relaxed">
            AIR FROID EXPERT est votre partenaire de confiance pour toutes vos installations de climatisation, de ventilation, d'énergie solaire et d'équipements de cuisine professionnelle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="about-image relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/assets/nikita-fursenko-BKGVpFYmbnM-unsplash.jpg" alt="Notre équipe au travail" fill className="object-cover" />
          </div>
          <div className="about-content flex flex-col justify-center">
            <h2 className="font-nevan text-4xl text-gray-900 uppercase tracking-wider mb-6">Une expertise de pointe</h2>
            <div className="font-montserrat text-gray-600 space-y-6 text-lg">
              <p>Depuis plusieurs années, notre mission est d'allier performance énergétique et confort absolu. Nous accompagnons les particuliers comme les professionnels dans la conception, l'installation et la maintenance de systèmes thermiques haut de gamme.</p>
            </div>
            <div className="mt-12 flex gap-12">
              <div><span className="block font-nevan text-5xl text-[#32A5DE] mb-2">15+</span><span className="font-montserrat font-bold text-sm uppercase tracking-wider text-gray-900">Années d'expertise</span></div>
              <div><span className="block font-nevan text-5xl text-[#AF1818] mb-2">500+</span><span className="font-montserrat font-bold text-sm uppercase tracking-wider text-gray-900">Projets réalisés</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.2 NOTRE SHOWROOM */}
      <section className="showroom-section w-full bg-gray-50 py-32">
        <div className="max-w-[1920px] mx-auto px-4 md:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="showroom-text order-2 lg:order-1">
              <span className="font-nevan text-sm tracking-[0.2em] text-[#32A5DE] uppercase mb-4 block">— 2.2 IMMERSION —</span>
              <h2 className="font-nevan text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mb-6">Notre Showroom</h2>
              <p className="font-montserrat text-gray-600 text-lg mb-8 leading-relaxed">
                Plongez dans l'univers d'Air Froid Expert. Venez découvrir et tester en conditions réelles nos équipements de climatisation dernière génération et nos installations pour cuisines professionnelles. Nos experts vous y attendent pour une démonstration personnalisée.
              </p>
              <div className="flex items-center gap-4 text-gray-900 font-montserrat font-semibold bg-white p-4 rounded-xl border border-gray-100 shadow-sm w-fit">
                <MapPin className="text-[#AF1818]" size={24} />
                <span>Zone Industrielle, Marrakech, Maroc</span>
              </div>
            </div>
            <div className="showroom-img order-1 lg:order-2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/assets/adrien-olichon-3-GSjNOsO8Q-unsplash.jpg" alt="Notre Showroom" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 2.3 NOTRE ÉQUIPE */}
      <section className="team-section w-full max-w-[1920px] mx-auto px-4 md:px-12 xl:px-24 py-32">
        <div className="text-center mb-16">
          <span className="font-nevan text-sm tracking-[0.2em] text-[#AF1818] uppercase mb-4 block">— 2.3 L'HUMAIN AVANT TOUT —</span>
          <h2 className="font-nevan text-4xl md:text-5xl text-gray-900 uppercase tracking-wider">Notre Équipe</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="team-card group flex flex-col items-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white group-hover:border-[#32A5DE] transition-colors duration-300">
                <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-nevan text-2xl text-gray-900 uppercase">{member.name}</h3>
              <p className="font-montserrat text-[#AF1818] font-medium mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2.4 NOS CERTIFICATIONS */}
      <section className="cert-section w-full bg-[#1E293B] py-24">
        <div className="max-w-[1920px] mx-auto px-4 md:px-12 xl:px-24 text-center">
          <span className="font-nevan text-sm tracking-[0.2em] text-white/50 uppercase mb-4 block">— 2.4 GAGE DE QUALITÉ —</span>
          <h2 className="font-nevan text-4xl md:text-5xl text-white uppercase tracking-wider mb-16">Nos Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {CERTIFICATIONS.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <div key={i} className="cert-card bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors flex flex-col items-center justify-center">
                  <Icon size={48} className="text-[#32A5DE] mb-4" />
                  <h3 className="font-montserrat font-bold text-white text-lg">{cert.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2.5 NOTRE PHILOSOPHIE */}
      <section className="philo-section w-full max-w-[1920px] mx-auto px-4 md:px-12 xl:px-24 py-32 mb-16">
        <div className="text-center mb-16">
          <span className="font-nevan text-sm tracking-[0.2em] text-[#AF1818] uppercase mb-4 block">— 2.5 NOS VALEURS —</span>
          <h2 className="font-nevan text-4xl md:text-5xl text-gray-900 uppercase tracking-wider">Notre Philosophie</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHY_VALUES.map((val, i) => {
            const Icon = val.icon;
            return (
              <div key={i} className="philo-card bg-white border border-gray-100 shadow-xl rounded-3xl p-10 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                  <Icon size={32} className="text-[#AF1818]" />
                </div>
                <h3 className="font-nevan text-2xl text-gray-900 uppercase mb-4">{val.title}</h3>
                <p className="font-montserrat text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
