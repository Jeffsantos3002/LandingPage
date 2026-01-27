import { motion } from "framer-motion";

export const PitchSection = () => {
  return (
    <section id="pitch" className="py-20 lg:py-32">
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
            Veja o <span className="text-gradient">HipoRepo</span> em Ação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Assista ao vídeo e descubra como nossa plataforma simplifica a gestão documental da sua instituição.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border bg-card"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/-IBp55aGN3o?si=pivPPB1oENMtiWLU"
            title="Apresentação HipoRepo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
         
        </motion.div>
      </div>
    </section>
  );
};
