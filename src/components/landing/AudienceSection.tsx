import { motion } from "framer-motion";
import { Building, Code2, ShieldCheck } from "lucide-react";

const audiences = [
   {
      "icon": Building, 
      "title": "Gestores & Diretores",
      "description": "Autonomia para gerenciar a estrutura organizacional sem depender da TI",
      "features": [
        "Gestão descentralizada de Setores e Subsetores",
        "Controle hierárquico de Bibliotecas Digitais ",
        "Visão geral quantitativa do acervo (Dashboard de Inventário)"
      ],
      "gradient": "from-primary to-orange-400"
    },
    {
      "icon": Code2,
      "title": "Equipes de TI & Desenvolvedores",
      "description": "Arquitetura desacoplada pronta para integrações complexas",
      "features": [
        "API RESTful documentada (Swagger/OpenAPI)",
        "Interoperabilidade via protocolo OAI-PMH",
        "Esquemas de Metadados personalizáveis via API "
      ],
      "gradient": "from-blue-500 to-cyan-400"
    },
    {
      "icon": ShieldCheck,
      "title": "Compliance & Qualidade",
      "description": "Garanta que apenas documentos padronizados e aprovados sejam publicados",
      "features": [
        "Políticas de Formato de Arquivo (Validação automática de extensão/MIME)",
        "Fluxo de Curadoria: Revisão antes da publicação",
        "Gestão de Embargo para documentos sensíveis"
      ],
      "gradient": "from-emerald-500 to-teal-400"
    }
];

export const AudienceSection = () => {
  return (
    <section id="audience" className="py-20 lg:py-32">
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
            Para Quem é o <span className="text-gradient">HipoRepo</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De equipes técnicas à liderança executiva, o HipoRepo entrega valor para toda a sua organização.
          </p>
        </motion.div>

        {/* Audience cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border overflow-hidden"
            >
              {/* Background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <audience.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-muted-foreground mb-6">{audience.description}</p>

              {/* Features list */}
              <ul className="space-y-3">
                {audience.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${audience.gradient}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
