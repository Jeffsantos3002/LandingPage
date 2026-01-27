import { motion } from "framer-motion";
import { User } from "lucide-react";

const devTeam = [
  "Allan Cristiano da Silva Santos",
  "Jeferson Oliveira Santos",
  "Joana dos Santos Raposo",
  "João Bosco Montalvão Neto",
  "Pedro Guilherme de Farias Souza Almeida",
  "Thyfanny da Cruz Silva",
  "Vinícius Dias Valença",
  "Wayner Roran Moraes Rolim",
];

const consultingTeam = [
  "André Britto de Carvalho",
  "Debora Maria Coelho Nascimento",
  "Edilayne Meneses Salgueiro",
  "Michel dos Santos Soares",
  "Ricardo José Paiva de Britto Salgueiro",
  "Rogério Patricío Chagas do Nascimento",
  "Hendrik Teixeira Macedo",
  "Eric Bernardes Chagas Barros",
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
            Nossa <span className="text-gradient">Equipe</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os profissionais que tornam o HipoRepo possível.
          </p>
        </motion.div>

        {/* Development Team */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-bold text-center mb-10 text-foreground"
          >
            Equipe de Desenvolvimento
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {devTeam.map((member, index) => (
              <TeamMember key={index} name={member} index={index} />
            ))}
          </div>
        </div>

        {/* Consulting Team */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-bold text-center mb-10 text-foreground"
          >
            Consultoria Técnica
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingTeam.map((member, index) => (
              <TeamMember key={index} name={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ name, index }: { name: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex flex-col items-center text-center group"
  >
    {/* Moldura para foto */}
    <div className="w-32 h-32 mb-4 rounded-full bg-card border-2 border-primary/10 shadow-card flex items-center justify-center overflow-hidden group-hover:border-primary group-hover:shadow-card-hover transition-all duration-300 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <User className="w-12 h-12 text-muted-foreground/40 group-hover:text-primary transition-colors duration-300" />
      {/* Adicione a imagem aqui: <img src={photoUrl} alt={name} className="w-full h-full object-cover" /> */}
    </div>
    <h4 className="font-semibold text-foreground text-lg leading-tight">{name}</h4>
  </motion.div>
);
