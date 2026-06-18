import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const profile = useSelector((state) => state.portfolioData.profile);
  const formRef = useRef();

  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  // 1. LA FONCTION CORRIGÉE
const sendEmail = (e) => {
  e.preventDefault();
  setIsSending(true);

  const SERVICE_ID = "service_aayu3w4";   
  const TEMPLATE_ID = "template_mkpws9i"; 
  const PUBLIC_KEY = "V40U4XNnKliKoxrjH";     

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
    .then(() => {
      setFormStatus('success');
      
      // Sécurité anti-crash : On vérifie TOUJOURS que formRef.current existe avant de reset
      if (formRef.current) {
        formRef.current.reset();
      }
    })
    .catch((error) => {
      console.error("Détails de l'erreur :", error);
      setFormStatus('error');
    })
    .finally(() => {
      setIsSending(false);
      setTimeout(() => setFormStatus(null), 4000);
    });
};

 
  return (
    <section id="contact" className="theme-section w-full py-16 text-left">
      
      {/* 1. Titre de la section avec la puce violette exacte */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-2.5 h-2.5 rounded-full theme-accent-bg shadow-[0_0_10px_var(--accent-glow)]" />
        <h2 className="text-xl font-bold tracking-wide">Me contacter</h2>
      </div>

      {/* 2. Grille principale alignée horizontalement (1 colonne sur mobile, 3 colonnes sur PC) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full mt-6">
        
        {/* COLONNE 1 : Textes d'introduction */}
        <div className="flex flex-col space-y-2">
          <p className="theme-soft-text text-sm leading-relaxed md:text-base">
            Vous avez un projet en tête ou souhaitez collaborer ?
          </p>
          <p className="theme-muted text-sm md:text-base">
            N'hésitez pas à me contacter !
          </p>
        </div>

        {/* COLONNE 2 : Les coordonnées exactes de la maquette (Style Glassmorphism épuré) */}
        <div className="flex flex-col space-y-3 w-full">
          {/* Email */}
          <div className="theme-card flex items-center gap-4 rounded-xl p-4">
            <FiMail className="text-purple-400 text-lg flex-shrink-0" />
            <span className="text-sm theme-soft-text">{profile.socials.email}</span>
          </div>

          {/* Téléphone */}
          <div className="theme-card flex items-center gap-4 rounded-xl p-4">
            <FiPhone className="text-purple-400 text-lg flex-shrink-0" />
            <span className="text-sm theme-soft-text">{profile.socials.phone}</span>
          </div>

          {/* Localisation */}
          <div className="theme-card flex items-center gap-4 rounded-xl p-4">
            <FiMapPin className="text-purple-400 text-lg flex-shrink-0" />
            <span className="text-sm theme-soft-text">{profile.socials.location}</span>
          </div>
        </div>

        {/* COLONNE 3 : Le mini-formulaire ultra-discret intégré au design */}
        <div className="w-full">
          <form 
            ref={formRef} 
            onSubmit={sendEmail}
            className="theme-card flex w-full flex-col space-y-3 rounded-xl p-5"
          >
            {/* Input Email discret */}
            <input 
              type="email" 
              name="email" 
              required
              placeholder="Votre adresse email"
              className="theme-input w-full rounded-lg px-3 py-2 text-xs outline-none transition-colors focus:border-[var(--accent)]"
            />

            {/* Textarea Message compact */}
            <textarea 
              name="message" 
              rows="3" 
              required
              placeholder="Votre message..."
              className="theme-input w-full resize-none rounded-lg px-3 py-2 text-xs outline-none transition-colors focus:border-[var(--accent)]"
            ></textarea>

            {/* Petit bouton d'envoi élégant */}
           <button
              type="submit"
              disabled={isSending}
              className="theme-accent-bg theme-accent-bg-hover flex min-w-[100px] items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-medium text-white transition-all duration-300 self-end disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Envoi en cours..." : "Envoyer"}
              {!isSending && <FiSend className="text-xs" />}
            </button>

            {/* Status Feedback (Placé à l'extérieur du bouton pour éviter les conflits) */}
            <div className="min-h-[18px] mt-1 text-center">
              {formStatus === 'success' && (
                <span className="text-emerald-400 text-[11px] block animate-fadeIn">✓ Message envoyé avec succès !</span>
              )}
              {formStatus === 'error' && (
                <span className="text-rose-400 text-[11px] block animate-fadeIn">✕ Erreur lors de l'envoi, réessayez.</span>
              )}
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}