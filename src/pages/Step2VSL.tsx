import { useNavigate } from "react-router-dom";
import logoNuvra from "@/assets/logo-nuvra.jpg";
import FunnelProgress from "@/components/FunnelProgress";

const Step2VSL = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col">
      <FunnelProgress currentStep={2} />

      <div className="flex-1 px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={logoNuvra} alt="Nuvra Automation" className="w-20 h-20 object-contain rounded-lg" />
          </div>

          {/* Headline */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-gradient-gold leading-tight">
              Comment On a Aidé Un Entrepreneur
              <br />
              à Récupérer 400 000$+ en Temps & Argent
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez la méthode exacte qui a permis de{" "}
              <span className="text-gold font-semibold">colmater les fuites invisibles</span> dans son entreprise
              — et comment vous pouvez faire la même chose grâce à l'automatisation.
            </p>
          </div>

          {/* VSL Video Section */}
          <div className="relative">
            <div className="border border-gold/20 rounded-2xl overflow-hidden shadow-gold bg-surface-elevated">
              <div className="aspect-video flex items-center justify-center bg-surface relative">
                {/* Replace this div with your video embed */}
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Importez votre vidéo VSL ici
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Remplacez ce bloc par un iframe ou un composant vidéo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "⏱️", title: "Gain de Temps", desc: "Éliminez les tâches répétitives qui vous coûtent des heures chaque semaine" },
              { icon: "💰", title: "Réduction des Coûts", desc: "Identifiez les processus qui drainent votre budget sans résultats" },
              { icon: "📈", title: "Croissance Accélérée", desc: "Focalisez-vous sur ce qui génère vraiment du revenu" },
            ].map((item) => (
              <div key={item.title} className="bg-surface-elevated border border-gold/10 rounded-xl p-6 text-center space-y-3">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-display font-semibold text-gold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Booking Section */}
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gradient-gold">
                Prêt à Transformer Votre Entreprise?
              </h2>
              <p className="text-muted-foreground">
                Réservez votre consultation stratégique <span className="text-gold font-semibold">gratuite</span> avec un expert Nuvra.
              </p>
            </div>

            {/* Calendar Embed Placeholder */}
            <div className="border border-gold/20 rounded-2xl overflow-hidden shadow-gold bg-surface-elevated">
              <iframe
                src="https://link.nuvra-automation.com/widget/booking/E2JoXVad4BTyyvImgI1O"
                className="w-full min-h-[600px] border-0"
                title="Réserver une consultation"
                allowFullScreen
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => navigate("/pre-appel")}
              className="px-12 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-bold text-lg tracking-wide hover:opacity-90 transition-all animate-pulse-gold"
            >
              ✅ J'AI RÉSERVÉ MON APPEL → ÉTAPE SUIVANTE
            </button>
          </div>
        </div>
      </div>

      <footer className="px-4 py-6 border-t border-gold/10">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="text-xs text-muted-foreground">
            Copyright © 2025 Nuvra-Automation inc. All rights reserved. By accessing this site, you agree to our Terms of Use and Privacy Policy.
          </p>
          <p className="text-[10px] text-muted-foreground/60 leading-relaxed">
            DISCLAIMER: The information and services provided on this site do not guarantee results or financial success. Individual outcomes depend on various factors, including effort, skill, and market conditions. Past performance does not guarantee future results. Results shown in testimonials and examples are exceptional and not typical. By submitting your information, you consent to receive communications, including SMS and emails, regarding our programs and services. Message and data rates may apply. Opt-out at any time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Step2VSL;
