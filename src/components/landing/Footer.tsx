import { motion } from "framer-motion";
import { FileCode, Scale, LifeBuoy, LogIn } from "lucide-react";
import logo from "@/assets/hiporepo-logo.png";

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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
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
            <p className="text-sm text-background/50">
              Desenvolvido em parceria com a Universidade Federal de Sergipe (UFS) e o Departamento de Computação (DCOMP).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-background">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-background">Entre em Contato</h4>
            <p className="text-background/70 mb-4">
              Pronto para organizar seus documentos institucionais?
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-hero rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Contatar Vendas
            </a>
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
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-background/50 hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-background/50 hover:text-primary transition-colors">
              Política de Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
