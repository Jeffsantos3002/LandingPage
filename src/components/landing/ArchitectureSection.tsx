import { motion } from "framer-motion";
import { Monitor, Server, Database, Lock, FileCode, Globe } from "lucide-react";
import ufsLogo from "@/assets/brasao-ufs.png";

const capabilities = [
  {
    icon: Monitor,
    title: "Interface Web Moderna",
    description: "Frontend Next.js responsivo acessível por qualquer navegador",
  },
  {
    icon: Server,
    title: "Backend Robusto",
    description: "Backend NestJS containerizado com Docker para fácil implantação",
  },
  {
    icon: Database,
    title: "Banco de Dados PostgreSQL",
    description: "Armazenamento de dados confiável com capacidades avançadas de consulta",
  },
  {
    icon: FileCode,
    title: "Metadados Personalizados",
    description: "Esquemas configuráveis e vocabulários controlados",
  },
  {
    icon: Globe,
    title: "Suporte OAI-PMH",
    description: "Protocolo padrão para coleta de metadados e interoperabilidade",
  },
  {
    icon: Lock,
    title: "Segurança Empresarial",
    description: "Controle de acesso baseado em função e registro de auditoria",
  },
];

export const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Arquitetura de Nível <span className="text-gradient">Empresarial</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Construído com tecnologias modernas e padrões comprovados, o HipoRepo oferece o desempenho,
              segurança e escalabilidade que grandes instituições exigem.
            </p>

            {/* Partnership badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border shadow-card"
            >
              <img src={ufsLogo} alt="Logo UFS" className="h-16 w-auto" />
              <div>
                <p className="text-sm text-muted-foreground">Desenvolvido em parceria com a</p>
                <p className="font-semibold text-foreground">Universidade Federal de Sergipe (UFS)</p>
                <p className="text-sm text-muted-foreground">Departamento de Ciência da Computação (DCOMP)</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - capabilities grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-card p-5 rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <cap.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{cap.title}</h4>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
