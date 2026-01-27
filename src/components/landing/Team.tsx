import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import memberAndre from "@/assets/equipe/andré.png";
import memberDebora from "@/assets/equipe/Debora.png";
// import memberDebora from "@/assets/equipe/debora.png";
import memberWayner from "@/assets/equipe/wayner.png";
import memberMichel from "@/assets/equipe/michel.png";
import memberRogério from "@/assets/equipe/rogerio.png";
import memberHendrik from "@/assets/equipe/hendrik.png";
import memberJoana from "@/assets/equipe/joana.png";
import memberThyfanny from "@/assets/equipe/tiffany.png";
import memberVinicius from "@/assets/equipe/vinicius.png";
import memberBosco from "@/assets/equipe/bosco.png";
import memberPedro from "@/assets/equipe/pedro.png";
import memberJeferson from "@/assets/equipe/jeferson.png";
// import memberAllan from "@/assets/equipe/allan.png";
import memberEdilayne from "@/assets/equipe/edilayne.png";
import memberRicardo from "@/assets/equipe/ricardo.png";



const devTeam = [
  { "nome": "Allan Cristiano da Silva Santos", "foto": "" },
  { "nome": "Jeferson Oliveira Santos", "foto": memberJeferson },
  { "nome": "Joana dos Santos Raposo", "foto": memberJoana },
  { "nome": "João Bosco Montalvão Neto", "foto": memberBosco },
  { "nome": "Pedro Guilherme de Farias Souza Almeida", "foto": memberPedro },
  { "nome": "Thyfanny da Cruz Silva", "foto": memberThyfanny },
  { "nome": "Vinícius Dias Valença", "foto": memberVinicius },
  { "nome": "Wayner Roran Moraes Rolim", "foto": memberWayner },
];

const consultingTeam = [
  { "nome": "André Britto de Carvalho", "foto": memberAndre },
  { "nome": "Debora Maria Coelho Nascimento", "foto": memberDebora },
  { "nome": "Michel dos Santos Soares", "foto": memberMichel },
  { "nome": "Ricardo José Paiva de Britto Salgueiro", "foto": memberRicardo },
  { "nome": "Rogério Patricío Chagas do Nascimento", "foto": memberRogério },
  { "nome": "Hendrik Teixeira Macedo", "foto": memberHendrik },
  { "nome": "Eric Bernardes Chagas Barros", "foto": "" },
];

const domainTeam = [
    { "nome": "Edilayne Meneses Salgueiro", "foto": memberEdilayne },
  ];

export const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 3);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));

  return (
    <section id="team" className="py-20 lg:py-32">
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

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 p-2 rounded-full bg-card border border-border shadow-sm hover:bg-secondary transition-colors z-10 hidden sm:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 p-2 rounded-full bg-card border border-border shadow-sm hover:bg-secondary transition-colors z-10 hidden sm:flex"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Slides */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {currentSlide === 0 ? (
                <motion.div
                  key="dev"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-heading text-2xl font-bold text-center mb-10 text-foreground">
                    Equipe de Desenvolvimento
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {devTeam.map((member, index) => (
                      <TeamMember key={index} name={member.nome} photoUrl={member.foto} index={index} />
                    ))}
                  </div>
                </motion.div>
              ) : currentSlide === 1 ? (
                <motion.div
                  key="consulting"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-heading text-2xl font-bold text-center mb-10 text-foreground">
                    Consultoria de Domínio
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {consultingTeam.map((member, index) => (
                      <TeamMember key={index} name={member.nome} photoUrl={member.foto} index={index} />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="domain"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-heading text-2xl font-bold text-center mb-10 text-foreground">
                    Equipe de Domínio
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {domainTeam.map((member, index) => (
                      <TeamMember key={index} name={member.nome} photoUrl={member.foto} index={index} />
                    ))}
                  </div>
                </motion.div>
              ) 
              }
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            <button
              onClick={() => setCurrentSlide(0)}
              className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === 0 ? "w-8 bg-primary" : "w-2.5 bg-primary/20 hover:bg-primary/40"
                }`}
              aria-label="Equipe de Desenvolvimento"
            />
            <button
              onClick={() => setCurrentSlide(1)}
              className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === 1 ? "w-8 bg-primary" : "w-2.5 bg-primary/20 hover:bg-primary/40"
                }`}
              aria-label="Consultoria Técnica"
            />
            <button
              onClick={() => setCurrentSlide(2)}
              className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === 2 ? "w-8 bg-primary" : "w-2.5 bg-primary/20 hover:bg-primary/40"
                }`}
              aria-label="Equipe de Domínio"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ name, photoUrl, index }: { name: string; photoUrl: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex flex-col items-center text-center group"
  >
    {/* Moldura para foto */}
    <div className="w-32 h-32 mb-4 rounded-full bg-card border-2 border-primary/10 shadow-card flex items-center justify-center overflow-hidden group-hover:border-primary group-hover:shadow-card-hover transition-all duration-300 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {photoUrl ? (
        <img className="w-full text-muted-foreground/40 group-hover:text-primary transition-colors duration-300" src={photoUrl} alt={name} />
      ) : (
        <User className="w-10 h-10 text-primary" />
      )}
      {/* Adicione a imagem aqui: <img src={photoUrl} alt={name} className="w-full h-full object-cover" /> */}
    </div>
    <h4 className="font-semibold text-foreground text-lg leading-tight">{name}</h4>
  </motion.div>
);
