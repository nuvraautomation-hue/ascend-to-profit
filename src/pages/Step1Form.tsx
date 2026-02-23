import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoNuvra from "@/assets/logo-nuvra.jpg";
import FunnelProgress from "@/components/FunnelProgress";

const Step1Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    acceptSms: false,
    acceptEmail: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;
    navigate("/presentation");
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col">
      <FunnelProgress currentStep={1} />

      <div className="flex-1 flex flex-col items-center justify-start px-3 sm:px-4 pt-4 sm:pt-8 pb-4">
        <div className="w-full max-w-lg space-y-4 sm:space-y-6 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={logoNuvra} alt="Nuvra Automation" className="w-20 h-20 sm:w-32 sm:h-32 object-contain rounded-xl" />
          </div>

          {/* Headline */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-4xl font-display font-bold text-gradient-gold leading-tight">
              Les 5 Indicateurs Qui Ont Permis à Un Entrepreneur de Récupérer 400 000$+/An
              <br />
              <span className="text-foreground">— Et de Reprendre le Contrôle de Son Temps, Sa Vie & Sa Famille</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Entrez vos informations pour accéder à la <span className="text-gold font-semibold">vidéo exclusive</span> qui dévoile ces 5 leviers — et comment les activer dans votre entreprise dès aujourd'hui.
            </p>
          </div>

          {/* Embedded Form */}
          <div className="relative">
            <iframe
              src="https://link.nuvra-automation.com/widget/form/rOtfWDqF9u0J6sVGXbTo?notrack=true"
              className="w-full"
              style={{ height: '900px', border: 'none' }}
              title="Formulaire Nuvra"
              allow="clipboard-write"
              scrolling="no"
            />
          </div>
          <p className="text-center text-xs text-muted-foreground">
            🔒 Vos informations sont protégées et ne seront jamais partagées.
          </p>
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

export default Step1Form;
