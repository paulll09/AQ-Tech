import { useState, useEffect } from "react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  projectType: string;
  message: string;
}

const projectTypes = [
  "Sitio Web / Landing Page",
  "Tienda Online (E-Commerce)",
  "Sistema de Gestión a Medida",
  "Integración / Automatización",
  "Sistema Gastronómico",
  "Otro",
];

const fieldBase =
  "w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#475569] outline-none transition-all duration-200 border bg-[rgba(2,11,24,0.6)]";
const fieldNormal =
  "border-[#1A3461] hover:border-[#2563EB]/50 focus:border-[#22D3EE]/60 focus:bg-[rgba(2,11,24,0.9)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.06)]";
const fieldError =
  "border-red-500/50 bg-red-500/5 focus:border-red-500/60 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.06)]";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[0.8rem] font-medium text-slate-300 mb-2">
      {children}
    </label>
  );
}

function ErrorMsg({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 shrink-0">
      <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3.5a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3A.75.75 0 018 4.5zm0 6.5a.75.75 0 110-1.5.75.75 0 010 1.5z"/>
    </svg>
    {msg}
  </p>;
}

function Skeleton() {
  return (
    <div className="space-y-5 animate-pulse">
      <div className="grid grid-cols-2 gap-4">
        <div className="h-12 rounded-xl bg-[rgba(26,52,97,0.4)]" />
        <div className="h-12 rounded-xl bg-[rgba(26,52,97,0.4)]" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-12 rounded-xl bg-[rgba(26,52,97,0.4)]" />
        <div className="h-12 rounded-xl bg-[rgba(26,52,97,0.4)]" />
      </div>
      <div className="h-32 rounded-xl bg-[rgba(26,52,97,0.4)]" />
      <div className="h-12 w-40 rounded-xl bg-[rgba(26,52,97,0.4)]" />
    </div>
  );
}

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [state, setState] = useState<FormState>("idle");
  const [data, setData] = useState<FormData>({
    name: "", email: "", whatsapp: "", projectType: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <Skeleton />;

  function validate() {
    const e: Partial<FormData> = {};
    if (!data.name.trim())       e.name = "El nombre es requerido";
    if (!data.email.trim())      e.email = "El email es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Email inválido";
    if (!data.projectType)       e.projectType = "Seleccioná un tipo de proyecto";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setState("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "0dfa294a-7bdd-41e4-aa2b-c02a280f919b",
          subject: `Nuevo contacto de ${data.name} — AQ Tech`,
          name: data.name,
          email: data.email,
          whatsapp: data.whatsapp || "No proporcionado",
          tipo_de_proyecto: data.projectType,
          mensaje: data.message || "Sin mensaje adicional",
        }),
      });

      const json = await res.json();
      setState(json.success ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setData(p => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) setErrors(p => ({ ...p, [name]: undefined }));
  }

  const cls = (f: keyof FormData) => `${fieldBase} ${errors[f] ? fieldError : fieldNormal}`;

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2"
          style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}
        >
          <svg className="w-7 h-7 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-white">Mensaje enviado</h3>
        <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
          Recibimos tu consulta. Te respondemos en menos de 24 horas.
        </p>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2"
          style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)" }}
        >
          <svg className="w-7 h-7 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-white">Algo salió mal</h3>
        <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
          No pudimos enviar tu mensaje. Escribinos por WhatsApp o intentá de nuevo.
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-sm font-medium text-[#22D3EE] hover:underline mt-1"
        >
          Intentar de nuevo
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>

      <p className="text-sm font-semibold text-white mb-5">Contanos sobre tu proyecto</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <Label>Nombre <span className="text-[#22D3EE]">*</span></Label>
          <input type="text" name="name" value={data.name} onChange={handleChange}
            placeholder="Tu nombre" className={cls("name")} />
          <ErrorMsg msg={errors.name} />
        </div>
        <div>
          <Label>Email <span className="text-[#22D3EE]">*</span></Label>
          <input type="email" name="email" value={data.email} onChange={handleChange}
            placeholder="tu@email.com" className={cls("email")} />
          <ErrorMsg msg={errors.email} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <Label>WhatsApp <span className="text-slate-600 font-normal text-xs">(opcional)</span></Label>
          <input type="tel" name="whatsapp" value={data.whatsapp} onChange={handleChange}
            placeholder="+54 9 ..." className={cls("whatsapp")} />
        </div>
        <div>
          <Label>Tipo de proyecto <span className="text-[#22D3EE]">*</span></Label>
          <select name="projectType" value={data.projectType} onChange={handleChange}
            className={`${cls("projectType")} cursor-pointer`}>
            <option value="" disabled>Seleccioná una opción</option>
            {projectTypes.map(t => (
              <option key={t} value={t} className="bg-[#0A1628]">{t}</option>
            ))}
          </select>
          <ErrorMsg msg={errors.projectType} />
        </div>
      </div>

      <div className="mb-6">
        <Label>Tu proyecto <span className="text-slate-600 font-normal text-xs">(opcional)</span></Label>
        <textarea name="message" value={data.message} onChange={handleChange} rows={4}
          placeholder="Ej: tengo un gimnasio y necesito una web..."
          className={`${cls("message")} resize-none`} />
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          disabled={state === "loading"}
          className="cta-submit-btn"
        >
          {state === "loading" ? (
            <span className="flex items-center gap-2.5">
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enviando...
            </span>
          ) : (
            <>
              <span className="cta-submit-text">Enviar consulta</span>
              <span className="cta-submit-icon" aria-hidden="true">
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
              <span className="cta-submit-shine" aria-hidden="true" />
            </>
          )}
        </button>

        <style>{`
          .cta-submit-btn {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 0.625rem;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            font-weight: 700;
            font-size: 0.9375rem;
            background: #ffffff;
            color: #020B18;
            border: none;
            cursor: pointer;
            overflow: hidden;
            box-shadow: 0 4px 24px -4px rgba(255,255,255,0.15);
            transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s;
          }
          .cta-submit-btn:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 8px 40px -4px rgba(255,255,255,0.25); }
          .cta-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
          .cta-submit-text { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1); }
          .cta-submit-btn:hover:not(:disabled) .cta-submit-text { transform: translateX(2px); }
          .cta-submit-icon { position: relative; width: 1rem; height: 1rem; overflow: hidden; flex-shrink: 0; }
          .icon-out, .icon-in { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), opacity 0.3s; }
          .icon-out { transform: translateY(0); opacity: 1; }
          .icon-in  { transform: translateY(120%); opacity: 0; }
          .cta-submit-btn:hover:not(:disabled) .icon-out { transform: translateY(-120%); opacity: 0; }
          .cta-submit-btn:hover:not(:disabled) .icon-in  { transform: translateY(0);     opacity: 1; }
          .cta-submit-shine { position: absolute; inset: 0; border-radius: inherit; pointer-events: none; }
          .cta-submit-shine::after { content: ""; position: absolute; top: 0; left: -100%; width: 60%; height: 100%; background: linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent); transform: skewX(-12deg); transition: left 0.6s ease; }
          .cta-submit-btn:hover:not(:disabled) .cta-submit-shine::after { left: 160%; }
        `}</style>

        <p className="text-xs text-slate-600 text-right">
          Tu info es privada y no se comparte.
        </p>
      </div>

    </form>
  );
}
