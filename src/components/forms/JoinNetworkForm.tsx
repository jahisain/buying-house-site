'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function JoinNetworkForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    factoryName: '',
    location: '',
    primaryCategory: 'Knitwear',
    monthlyCapacity: '',
    certifications: '',
    contactName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulated form submission (Phase 4 connects production email API)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-white border border-brand-accent/30 text-center space-y-4 shadow-sm animate-in fade-in">
        <div className="w-12 h-12 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-heading font-bold text-brand-primary">
          Application Received
        </h3>
        <p className="text-sm text-brand-ink/80 max-w-md mx-auto leading-relaxed">
          Thank you for applying to join our vetted factory network. Our sourcing compliance team will review your capabilities and schedule an on-site audit.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              factoryName: '',
              location: '',
              primaryCategory: 'Knitwear',
              monthlyCapacity: '',
              certifications: '',
              contactName: '',
              email: '',
              phone: '',
              message: '',
            });
          }}
          className="text-xs font-semibold text-brand-accent-text hover:underline pt-2"
        >
          Submit another factory profile
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-2xl bg-white border border-brand-primary/10 shadow-sm space-y-5"
    >
      <div className="border-b border-brand-primary/10 pb-4 mb-4">
        <h3 className="text-xl font-heading font-bold text-brand-primary">
          Partner With Us: Factory Application
        </h3>
        <p className="text-xs text-brand-ink/70 mt-1">
          Are you a compliant apparel manufacturer in Bangladesh? Apply to join our international sourcing network.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-brand-primary mb-1">
            Factory / Company Name *
          </label>
          <input
            type="text"
            required
            value={formData.factoryName}
            onChange={(e) => setFormData({ ...formData, factoryName: e.target.value })}
            placeholder="e.g. Apex Apparel Ltd."
            className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-primary mb-1">
            Facility Location in Bangladesh *
          </label>
          <input
            type="text"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="e.g. Gazipur, Narayanganj, Savar"
            className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-brand-primary mb-1">
            Primary Production Category *
          </label>
          <select
            value={formData.primaryCategory}
            onChange={(e) => setFormData({ ...formData, primaryCategory: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors bg-white"
          >
            <option value="Knitwear">Knitwear (T-Shirts, Polos, Fleece)</option>
            <option value="Woven">Woven (Shirts, Chinos, Shorts)</option>
            <option value="Denim">Denim & Jeans</option>
            <option value="Sweaters">Sweaters (3GG–14GG)</option>
            <option value="Outerwear">Outerwear & Jackets</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-primary mb-1">
            Monthly Production Capacity (Pcs) *
          </label>
          <input
            type="text"
            required
            value={formData.monthlyCapacity}
            onChange={(e) => setFormData({ ...formData, monthlyCapacity: e.target.value })}
            placeholder="e.g. 150,000 pcs / month"
            className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-brand-primary mb-1">
          Active Compliance Certifications Held *
        </label>
        <input
          type="text"
          required
          value={formData.certifications}
          onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
          placeholder="e.g. BSCI, SMETA / SEDEX, WRAP, OEKO-TEX 100, GOTS"
          className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-brand-primary mb-1">
            Contact Person Name *
          </label>
          <input
            type="text"
            required
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            placeholder="Managing Director / Marketing"
            className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-primary mb-1">
            Official Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="contact@factory.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-primary mb-1">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+880 17XX XXXXXX"
            className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-brand-primary mb-1">
          Machinery Overview or Additional Details (Optional)
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Briefly describe your production lines, automatic spreading machines, or specialized wash units..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
        />
      </div>

      <div className="pt-2">
        <Button variant="accent" size="lg" fullWidth disabled={loading}>
          {loading ? (
            'Submitting Application...'
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              <span>Submit Factory Application</span>
            </span>
          )}
        </Button>
        <p className="text-[11px] text-brand-ink/60 text-center mt-2">
          Note: We only partner with factories that pass in-person technical and compliance audits.
        </p>
      </div>
    </form>
  );
}
