import { motion } from "framer-motion";
import { X, Check, FolderTree, Shield, Plug, FileCheck } from "lucide-react";

const problems = [
  {
    icon: FolderTree,
    problem: "Drives genéricos não refletem a hierarquia da minha organização.",
    solution: "Suporte nativo para Departamentos, Subdepartamentos e Bibliotecas que espelham seu organograma real.",
  },
  {
    icon: Shield,
    problem: "Não há controle sobre o que é publicado.",
    solution: "Governança através de papéis definidos: Editores de Conteúdo enviam, Curadores revisam e aprovam—garantindo a conformidade.",
  },
  {
    icon: Plug,
    problem: "Sistemas desconectados que não se integram.",
    solution: "API RESTful totalmente documentada (Swagger) e suporte OAI-PMH para coleta automatizada de dados.",
  },
  {
    icon: FileCheck,
    problem: "Arquivos não padronizados e fora de conformidade.",
    solution: "Políticas de Formato de Arquivo validam e rejeitam arquivos fora dos padrões definidos (ex: apenas PDF/A).",
  },
];

export const ProblemsSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-secondary/30">
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
            Do <span className="text-gradient">Caos</span> ao Controle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como o HipoRepo transforma desafios de gerenciamento de documentos em soluções otimizadas.
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Problem */}
              <div className="mb-6">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-destructive" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-destructive mb-1 block">
                      O Problema
                    </span>
                    <p className="text-foreground font-medium">{item.problem}</p>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="pl-0 pt-4 border-t border-border">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 block">
                      Solução HipoRepo
                    </span>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
