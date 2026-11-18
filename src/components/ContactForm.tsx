import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'hybrid',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [progressLog, setProgressLog] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const simulateLogs = () => {
    setProgressLog([]);
    const formattedPacket = `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.projectType}\n\n${formData.message}`;
    const logs = [
      'Establishing outbound tunnel to kian.kitech.info...',
      'Formatting encrypted payload for kianrasti@gmail.com...',
      'Copying formatted message packet to clipboard...',
      'Opening default mail client dispatch...',
      'Message packet ready for transmission!',
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setProgressLog((prev) => [...prev, log]);
        if (index === logs.length - 1) {
          navigator.clipboard?.writeText(formattedPacket).catch(() => {});
          const subject = encodeURIComponent(`[kian.kitech.info] ${formData.projectType} inquiry from ${formData.name}`);
          const body = encodeURIComponent(formattedPacket);
          window.location.href = `mailto:kianrasti@gmail.com?subject=${subject}&body=${body}`;
          setStatus('success');
        }
      }, (index + 1) * 450);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please populate all required console vectors.');
      return;
    }

    setStatus('sending');
    simulateLogs();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-void-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg bg-surface-high border border-text-muted rounded-lg shadow-2xl overflow-hidden text-text-primary z-10"
          >
            {/* Header */}
            <div className="bg-surface-medium border-b border-text-muted/40 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <span className="font-mono text-xs text-text-secondary tracking-widest uppercase">
                  INBOUND_ENVELOPE_PROPOSAL
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-text-muted hover:text-primary transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content area */}
            <div className="p-6">
              {status === 'idle' && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <label className="font-mono text-xs uppercase tracking-widest text-text-muted">
                      Your Identity / Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Elena Rostova"
                      className="w-full bg-void-black text-text-primary border border-text-muted/40 rounded px-4 py-3 font-sans text-sm outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all placeholder:text-text-muted/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-xs uppercase tracking-widest text-text-muted">
                      Secure Outbox Email *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. elena@company.com"
                      className="w-full bg-void-black text-text-primary border border-text-muted/40 rounded px-4 py-3 font-sans text-sm outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all placeholder:text-text-muted/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-xs uppercase tracking-widest text-text-muted">
                      Project Classification
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-void-black text-text-primary border border-text-muted/40 rounded px-4 py-3 font-mono text-xs outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all cursor-pointer"
                    >
                      <option value="software">01_FULL_STACK_SOFTWARE</option>
                      <option value="hardware">02_CUSTOM_HARDWARE_SYSTEMS</option>
                      <option value="hybrid">03_HYBRID_VIBE_COGNITIVE</option>
                      <option value="consulting">04_GENERAL_CONSULTING</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-xs uppercase tracking-widest text-text-muted">
                      The Challenge / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Let's build something impossible. Detail the specifications..."
                      className="w-full bg-void-black text-text-primary border border-text-muted/40 rounded px-4 py-3 font-sans text-sm outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all placeholder:text-text-muted/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-container text-on-primary-container font-mono text-xs uppercase tracking-widest py-4 rounded font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Send size={14} /> TRANSMIT PACKET
                  </button>
                </form>
              )}

              {status === 'sending' && (
                <div className="flex flex-col py-8 items-stretch font-mono text-xs text-text-secondary">
                  <div className="flex items-center gap-3 mb-6 justify-center">
                    <Loader2 size={18} className="animate-spin text-primary-container" />
                    <span className="tracking-widest uppercase font-bold text-primary">
                      SENDING PAYLOAD MESSAGE...
                    </span>
                  </div>

                  <div className="bg-void-black border border-text-muted/40 rounded p-4 space-y-2 h-44 overflow-y-auto select-none">
                    {progressLog.map((log, index) => (
                      <div key={index} className="flex gap-2 text-[11px] leading-relaxed">
                        <span className="text-status-success">✓</span>
                        <span className="text-text-secondary">{log}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col py-8 items-center text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-status-success/15 flex items-center justify-center text-status-success">
                    <CheckCircle2 size={36} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-headline-sm text-lg text-text-primary uppercase tracking-widest font-bold">
                      TRANSMISSION RECEIVED
                    </h3>
                    <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
                      Your engineering request packet has bypassed standard firewalls and landed safely in Kian's workspace inbox. Expected response within 24 operational hours.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', projectType: 'hybrid', message: '' });
                      onClose();
                    }}
                    className="border border-text-muted px-8 py-3 rounded font-mono text-xs uppercase tracking-widest hover:border-primary transition-colors cursor-pointer"
                  >
                    DISMISS CONSOLE
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
