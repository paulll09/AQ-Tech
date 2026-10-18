import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { MenuToggleIcon } from "./ui/menu-toggle-icon";
import { useScroll } from "./ui/use-scroll";
import { cn } from "../lib/utils";

const links = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Portafolio", href: "/#portfolio" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

function AQTechLogo() {
  return (
    <a href="/" className="flex items-center">
      <img
        src="/logo.svg"
        alt="AQ Tech"
        className="h-11 w-auto object-contain"
        style={{ filter: "brightness(1.1)" }}
      />
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center",
        "transition-[padding] duration-300 ease-out",
        scrolled && !open ? "py-3" : "py-0"
      )}
    >
      <nav
        className={cn(
          "w-full flex items-center justify-between",
          "transition-[max-width,padding,height,border-radius,box-shadow] duration-300 ease-out",
          scrolled && !open
            ? "max-w-5xl mx-6 rounded-2xl border border-slate-700/40 px-5 h-12 shadow-xl shadow-black/40"
            : "max-w-7xl px-6 h-16"
        )}
        style={{
          background: scrolled && !open
            ? "rgba(10, 22, 40, 0.88)"
            : open
            ? "rgba(2, 11, 24, 0.98)"
            : "rgba(0, 0, 0, 0)",
          backdropFilter: scrolled && !open ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled && !open ? "blur(20px) saturate(180%)" : "none",
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, max-width 0.3s ease, padding 0.3s ease, height 0.3s ease, border-radius 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <AQTechLogo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-slate-400 hover:text-white text-sm"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a href="/#contacto" className="cta-btn cta-primary" style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}>
            <span className="cta-text">Iniciar Proyecto</span>
            <span className="cta-icon-wrap" aria-hidden="true">
              <span className="icon-out">
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="icon-in">
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </span>
            <span className="cta-shine" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Abrir menú"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 md:hidden transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ background: "rgba(2, 11, 24, 0.98)", backdropFilter: "blur(20px)" }}
      >
        <div
          className={cn(
            "flex flex-col justify-between h-full p-6 transition-all duration-300",
            open ? "translate-y-0" : "-translate-y-4"
          )}
        >
          <div className="flex flex-col gap-2 pt-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center px-4 py-4 text-lg font-semibold text-slate-300 hover:text-white rounded-xl hover:bg-white/5 transition-all border-b border-slate-800/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pb-8">
            <a
              href="/#contacto"
              onClick={closeMenu}
              className="cta-btn cta-primary w-full justify-center"
              style={{ fontSize: "1rem" }}
            >
              <span className="cta-text">Iniciar Proyecto</span>
              <span className="cta-icon-wrap" aria-hidden="true">
                <span className="icon-out">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="icon-in">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </span>
              <span className="cta-shine" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
