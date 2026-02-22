import logoNuvra from "@/assets/logo-nuvra.jpg";
import confirmEmail from "@/assets/confirmation-email.jpg";
import confirmSms from "@/assets/confirmation-sms.jpg";
import FunnelProgress from "@/components/FunnelProgress";

const Step3PreCall = () => {
  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col">
      <FunnelProgress currentStep={3} />

      <div className="flex-1 px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={logoNuvra} alt="Nuvra Automation" className="w-20 h-20 object-contain rounded-lg" />
          </div>

          {/* Headline */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-gradient-gold leading-tight">
              🎉 Félicitations!
              <br />
              Votre Appel Est Presque Confirmé.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Suivez les étapes ci-dessous pour{" "}
              <span className="text-gold font-semibold">confirmer votre rendez-vous</span> et vous préparer à une consultation qui va changer la donne.
            </p>
          </div>

          {/* Confirmation Steps */}
          <div className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-gold text-center">
              Comment Confirmer Votre Rendez-Vous
            </h2>

            {/* Images side by side */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-surface-elevated border border-gold/10 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gold/10">
                  <h3 className="font-semibold text-gold text-center">📧 Option 1 : Par Email</h3>
                </div>
                <div className="p-4 flex justify-center">
                  <img
                    src={confirmEmail}
                    alt="Confirmation par email"
                    className="rounded-lg max-h-[400px] object-contain"
                  />
                </div>
              </div>

              <div className="bg-surface-elevated border border-gold/10 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gold/10">
                  <h3 className="font-semibold text-gold text-center">📱 Option 2 : Par SMS</h3>
                </div>
                <div className="p-4 flex justify-center">
                  <img
                    src={confirmSms}
                    alt="Confirmation par SMS"
                    className="rounded-lg max-h-[400px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pre-call Video */}
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gradient-gold">
                Regardez Cette Vidéo Avant Votre Appel
              </h2>
              <p className="text-muted-foreground">
                Préparez-vous en <span className="text-gold font-semibold">5 minutes</span> pour maximiser les résultats de votre consultation.
              </p>
            </div>

            <div className="border border-gold/20 rounded-2xl overflow-hidden shadow-gold bg-surface-elevated">
              <div className="aspect-video flex items-center justify-center bg-surface relative">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Importez votre vidéo pré-appel ici
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="bg-surface-elevated border border-gold/20 rounded-2xl p-8 space-y-6">
            <h3 className="text-xl font-display font-bold text-gold text-center">
              ✅ Checklist Pré-Appel
            </h3>
            <div className="space-y-4 max-w-md mx-auto">
              {[
                "Confirmez votre rendez-vous par email ou SMS",
                "Regardez la vidéo de préparation ci-dessus",
                "Notez vos 3 plus grands défis actuels",
                "Soyez prêt 5 minutes avant l'heure prévue",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-gold text-lg mt-0.5">✦</span>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-4">
            <p className="text-xl font-display text-gold font-semibold">
              On se voit bientôt! 🤝
            </p>
            <p className="text-muted-foreground text-sm">
              L'équipe Nuvra Automation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3PreCall;
