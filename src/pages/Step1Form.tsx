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

      <div className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="w-full max-w-lg space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={logoNuvra} alt="Nuvra Automation" className="w-32 h-32 object-contain rounded-xl" />
          </div>

          {/* Headline */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-gradient-gold leading-tight">
              Découvrez Comment Un Entrepreneur
              <br />
              a Récupéré 400 000$+ en Temps & Argent
            </h1>
            <p className="text-muted-foreground text-base">
              Entrez vos informations pour accéder à la <span className="text-gold font-semibold">vidéo exclusive</span> qui révèle la méthode exacte — et comment l'appliquer à votre entreprise.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nom complet *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-gold/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Adresse email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jean@entreprise.com"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-gold/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Numéro de téléphone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (514) 555-0123"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-gold/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                />
              </div>
            </div>

            {/* Consent checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.acceptSms}
                  onChange={(e) => setFormData({ ...formData, acceptSms: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-gold/30 bg-surface accent-gold"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  J'accepte de recevoir des <span className="text-gold">messages texte (SMS)</span> de Nuvra Automation concernant mes demandes et offres.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.acceptEmail}
                  onChange={(e) => setFormData({ ...formData, acceptEmail: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-gold/30 bg-surface accent-gold"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  J'accepte de recevoir des <span className="text-gold">communications par email</span> de Nuvra Automation.
                </span>
              </label>
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-gradient-gold text-primary-foreground font-bold text-lg tracking-wide hover:opacity-90 transition-all animate-pulse-gold"
            >
              🚀 ACCÉDER À LA PRÉSENTATION GRATUITE
            </button>

            <p className="text-center text-xs text-muted-foreground">
              🔒 Vos informations sont protégées et ne seront jamais partagées.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step1Form;
