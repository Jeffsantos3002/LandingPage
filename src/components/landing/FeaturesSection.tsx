import { motion } from "framer-motion";
import { Lock, FolderTree, Library, FileText, Users, Settings, UserPlus } from "lucide-react";
import ufsLogo from "@/assets/brasao-ufs.png";

const capabilities = [
  {
    icon: Lock,
    title: "Controle de Acesso",
    description: "Autenticação centralizada para controle de acesso seguro ao repositório institucional.",
  },
  {
    icon: FolderTree,
    title: "Setores e Subsetores",
    description: "Gerenciamento completo da estrutura hierárquica da instituição.",
  },
  {
    icon: Library,
    title: "Gestão de Bibliotecas",
    description: "Administração de bibliotecas digitais vinculadas a unidades e setores específicos.",
  },
  {
    icon: FileText,
    title: "Ciclo de Documentos",
    description: "Controle total sobre a submissão, mapeamento e publicação de documentos.",
  },
  {
    icon: Users,
    title: "Usuários e Grupos",
    description: "Gestão de perfis e agrupamentos de usuários com permissões granulares.",
  },
  {
    icon: Settings,
    title: "Metadados e Esquemas",
    description: "Configuração de esquemas de metadados e vocabulários controlados para o acervo.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="differential" className="py-20 lg:py-32 bg-secondary/30">
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
              Gestão Institucional <span className="text-gradient">Completa</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              O HipoRepo oferece ferramentas intuitivas para organizar, centralizar e tornar 
              acessível o conhecimento e a documentação oficial da sua instituição.
            </p>
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