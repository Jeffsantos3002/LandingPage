import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Building2, FolderTree } from "lucide-react";
import logo from "@/assets/hiporepo-logo.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 gradient-hero-subtle overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6"
            >
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                Desenvolvido com UFS & DCOMP
              </span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="text-gradient">Controle Hierárquico</span>
              <br />
              para Documentos Institucionais
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed gap-1">
              O HipoRepo vai além de drives genéricos, espelhando o organograma real da sua instituição  
              <strong className="text-foreground ml-1"> Setores</strong>,{" "}
              <strong className="text-foreground">Subsetores</strong>, e{" "}
              <strong className="text-foreground">Bibliotecas</strong> com controle granular de permissões e fluxos de governança.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                Comece Agora
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Code2 className="w-5 h-5" />
                Documentação da API
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "100%", label: "API RESTful" },
                { value: "OAI-PMH", label: "Interoperável" },
                // { value: "Docker", label: "Pronto" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main mascot */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center"
              >
                <img
                  src={logo}
                  alt="Mascote HipoRepo"
                  className="w-64 h-64 lg:w-80 lg:h-80 drop-shadow-2xl"
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-4 right-4 lg:top-8 lg:right-16 bg-card shadow-card rounded-xl p-4 border border-border"
              >
                <FolderTree className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 left-4 lg:bottom-16 lg:left-8 bg-card shadow-card rounded-xl p-4 border border-border"
              >
                <Code2 className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute bottom-4 right-8 lg:bottom-8 lg:right-8 bg-primary/10 rounded-xl px-4 py-2"
              >
                <span className="text-sm font-semibold text-primary">API-First</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
