import { motion } from "framer-motion";
import MotionReveal from "./MotionReveal";
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const socials = [
  {
    name: "Email",
    icon: MdEmail,
    href: "mailto:bazamayuba@yahoo.com",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/2348105909343",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/ayuba-bazam-0a9b31113/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/omniballerr?igsh=MWRuNXprNTBmZDRibA%3D%3D&utm_source=qr",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/share/1855Qfr5qm/?mibextid=wwXIfr",
  },
  {
    name: "X",
    icon: FaXTwitter,
    href: "https://x.com/omniballer?s=11",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#070707] py-32 text-white"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <MotionReveal>
          <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Get In Touch
          </span>

          <h2 className="mt-8 text-5xl font-black lg:text-6xl">
            Let's build something meaningful.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Whether it's programme management, peacebuilding, governance,
            consulting or partnerships, I'd be glad to connect.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.2}>
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-3xl transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                  aria-label={social.name}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}