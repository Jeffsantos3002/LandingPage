import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Monitor, Code2, Building } from "lucide-react";

const plans = [
  {
    icon: Monitor,
    name: "Plano de Interface",
    subtitle: "SaaS",
    price: "Consulte Vendas",
    description: "Acesso total à interface visual e ao painel de administração",
    features: [
      "Acesso completo à interface web",
      "Painel de administração e análises",
      "Gerenciamento organizacional",
      "Gerenciamento de papéis de usuário",
      "Suporte padrão",
    ],
    cta: "Comece Agora",
    featured: false,
  },
  {
    icon: Code2,
    name: "Plano de API",
    subtitle: "Integração",
    price: "Baseado no uso",
    description: "Acesso apenas à API para integrações personalizadas",
    features: [
      "Acesso total à API RESTful",
      "Documentação Swagger",
      "Suporte para integração com ERP",
      "Criação de interface personalizada",
      "Suporte ao desenvolvedor",
    ],
    cta: "Ver Docs da API",
    featured: true,
  },
  {
    icon: Building,
    name: "Enterprise",
    subtitle: "On-Premise / Nuvem Privada",
    price: "Personalizado",
    description: "Flexibilidade total de implantação com suporte de consultoria",
    features: [
      "On-premise ou nuvem privada",
      "Consultoria de migração de dados",
      "Personalização de metadados",
      "Equipe de suporte dedicada",
      "Garantias de SLA",
    ],
    cta: "Consulte Vendas",
    featured: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Preços Simples e <span className="text-gradient">Transparentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano que se adapta às necessidades da sua organização. Escale conforme você cresce.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.featured
                  ? "bg-foreground text-background shadow-2xl scale-105 border-0"
                  : "bg-card border border-border shadow-card hover:shadow-card-hover"
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-hero rounded-full">
                  <span className="text-sm font-semibold text-primary-foreground">Mais Popular</span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                plan.featured ? "bg-primary" : "bg-primary/10"
              }`}>
                <plan.icon className={`w-7 h-7 ${plan.featured ? "text-primary-foreground" : "text-primary"}`} />
              </div>

              {/* Plan info */}
              <div className="mb-6">
                <h3 className={`font-heading text-xl font-bold mb-1 ${plan.featured ? "text-background" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.featured ? "text-background/70" : "text-muted-foreground"}`}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-3xl font-bold ${plan.featured ? "text-background" : "text-foreground"}`}>
                  {plan.price}
                </span>
              </div>

              {/* Description */}
              <p className={`mb-6 ${plan.featured ? "text-background/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.featured ? "bg-primary" : "bg-primary/10"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.featured ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <span className={`text-sm ${plan.featured ? "text-background/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.featured ? "hero" : "outline"}
                size="lg"
                className={`w-full ${plan.featured ? "bg-primary hover:bg-primary/90" : ""}`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
