interface FunnelProgressProps {
  currentStep: number;
}

const FunnelProgress = ({ currentStep }: FunnelProgressProps) => {
  const steps = [
    { number: 1, label: "Informations" },
    { number: 2, label: "Présentation" },
    { number: 3, label: "Pré-Appel" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 py-6">
      {steps.map((step, i) => (
        <div key={step.number} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
              currentStep >= step.number
                ? "bg-gradient-gold text-primary-foreground shadow-gold"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            {step.number}
          </div>
          <span
            className={`text-xs hidden sm:inline ${
              currentStep >= step.number ? "text-gold" : "text-muted-foreground"
            }`}
          >
            {step.label}
          </span>
          {i < steps.length - 1 && (
            <div
              className={`w-12 h-0.5 transition-all duration-300 ${
                currentStep > step.number ? "bg-gradient-gold" : "bg-secondary"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FunnelProgress;
