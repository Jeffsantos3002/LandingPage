import { motion } from "framer-motion";
import { FileCode, Scale, LifeBuoy, LogIn } from "lucide-react";
import logo from "@/assets/hiporepo-logo.png";
import dcompLogo from "@/assets/dcomp-logo.png";
import ufsLogo from "@/assets/logotipo-ufs.png";
import stiLogo from "@/assets/sti.png";
const footerLinks = [
  { icon: FileCode, label: "Documentação da API", href: "#" },
  { icon: Scale, label: "Termos de Uso", href: "#" },
  { icon: LifeBuoy, label: "Contato de Suporte", href: "#" },
  { icon: LogIn, label: "Aplicação Cliente", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="HipoRepo" className="h-12 w-12" />
              <span className="font-heading font-bold text-2xl text-background">HipoRepo</span>
            </div>
            <p className="text-background/70 max-w-md mb-6">
              A solução definitiva para o caos de documentos em grandes instituições.
              Organização hierárquica encontra controle centralizado.
            </p>
            <div className="flex items-center gap-4">
              <img src={ufsLogo} alt="UFS" className="w-24 " />
               <img src={stiLogo} alt="STI" className="w-44" />
              <img src={dcompLogo} alt="DCOMP" className="w-24" />
            </div>
          </div>


          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-background">Entre em Contato</h4>
            <p className="text-background/70 mb-4 ">
              Pronto para organizar seus documentos institucionais?
            </p>
            <div className="flex flex-col gap-2 ">
              <p className="text-background/70 ">
                Nosso contato
              </p>

              <a
                href="mailto:edilayne@dcomp.ufs.br"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-hero rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity w-fit"
              >
                edilayne@dcomp.ufs.br
              </a>
            </div>

          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} HipoRepo. Todos os direitos reservados.
          </p>

        </motion.div>
      </div>
    </footer>
  );
};
