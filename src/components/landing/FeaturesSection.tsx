import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, FolderTree, Library, FileText, Users, Settings, UserPlus, Code2, ChevronLeft, ChevronRight } from "lucide-react";
import logo from "@/assets/hiporepo-logo.png";
import bibliotecas from "@/assets/funcionalidades/bibliotecas.png";
import documento from "@/assets/funcionalidades/documento.png";
import grupos from "@/assets/funcionalidades/grupos.png";
import login from "@/assets/funcionalidades/login.png";
import setores from "@/assets/funcionalidades/setores.png";
import api from "@/assets/funcionalidades/api.png";
const capabilities = [
  {
    icon: Lock,
    title: "Controle de Acesso",
    description: "Autenticação centralizada para controle de acesso seguro ao repositório institucional",
    image: login
  },
  {
    icon: FolderTree,
    title: "Setores e Subsetores",
    description: "Gerenciamento completo da estrutura hierárquica da instituição",
    image: setores
  },
  {
    icon: Library,
    title: "Gestão de Bibliotecas",
    description: "Administração de bibliotecas digitais vinculadas a setores específicos",
    image: bibliotecas
  },
  {
    icon: FileText,
    title: "Ciclo de Documentos",
    description: "Controle total sobre a submissão, mapeamento e publicação de documentos",
    image: documento
  },
  {
    icon: Users,
    title: "Usuários e Grupos",
    description: "Gestão de perfis e agrupamentos de usuários com permissões granulares",
    image: grupos
  },
  {
    icon: Code2,
    title: "Api",
    description: "Possibilidade de integração com outras ferramentas e sistemas através da APIs RESTful",
    image: api
  }
];

export const FeaturesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % capabilities.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? capabilities.length - 1 : prev - 1));

  return (
    <section id="features" className="py-12 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 items-center">
          <div className="flex flex-col justify-center text-center items-center">
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                O HipoRepo oferece ferramentas intuitivas para organizar, centralizar e tornar
                acessível o conhecimento e a documentação oficial da sua instituição.
              </p>
            </motion.div>
           
          </div>

          {/* Right - capabilities carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative container mx-auto px-4 sm:px-6 lg:px-8 w-6/12"
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-2 rounded-full bg-card border border-border shadow-sm hover:bg-secondary transition-colors z-10 hidden sm:flex"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-2 rounded-full bg-card border border-border shadow-sm hover:bg-secondary transition-colors z-10 hidden sm:flex"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Slides */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="bg-card rounded-2xl border border-border shadow-card h-9/10 overflow-hidden">
                    {/* Image Placeholder */}
                    <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-primary/5 to-secondary/50 flex items-start justify-center border-b border-border overflow-hidden">
                      <img className="w-full h-full object-cover object-top" src={capabilities[currentSlide].image} alt={capabilities[currentSlide].title} />
                    </div>
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center flex-row md:items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          {(() => {
                            const Icon = capabilities[currentSlide].icon;
                            return <Icon className="w-6 h-6 text-primary" />;
                          })()}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{capabilities[currentSlide].title}</h3>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{capabilities[currentSlide].description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {capabilities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-6 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                    }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};