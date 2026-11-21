'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  UploadCloud,
  FileCheck,
  AlertCircle,
  CheckCircle2,
  Send,
  X,
  Mail,
} from 'lucide-react';
import { brand } from '@/config/brand';
import { Button } from '@/components/ui/Button';
import { Turnstile } from '@/components/forms/Turnstile';
import { MAX_FILE_SIZE_BYTES } from '@/lib/rfq-schema';

const AVAILABLE_CATEGORIES = [
  { id: 'knit', label: 'Knitwear (T-shirts, polos, hoodies, activewear)' },
  { id: 'woven', label: 'Woven (Shirts, chinos, trousers, shorts)' },
  { id: 'denim', label: 'Denim & Jeans (Washes, jackets, finishes)' },
  { id: 'sweaters', label: 'Sweaters (3GG–14GG, pullovers, cardigans)' },
  { id: 'outerwear', label: 'Outerwear (Puffers, parkas, rain shells)' },
];

function RfqFormInner() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category')?.toLowerCase();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    categories: [] as string[],
    styleDescription: '',
    estimatedQuantity: '',
    targetPrice: '',
    targetDeliveryDate: '',
    message: '',
    website_url_hp: '', // honeypot
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize selected category from query string if valid
  useEffect(() => {
    if (initialCategory) {
      const match = AVAILABLE_CATEGORIES.find(
        (c) => c.id === initialCategory || c.label.toLowerCase().includes(initialCategory)
      );
      if (match) {
        setFormData((prev) => ({
          ...prev,
          categories: Array.from(new Set([...prev.categories, match.id])),
        }));
      }
    }
  }, [initialCategory]);

  const handleCategoryToggle = (catId: string) => {
    setFormData((prev) => {
      const exists = prev.categories.includes(catId);
      const updated = exists
        ? prev.categories.filter((c) => c !== catId)
        : [...prev.categories, catId];
      return { ...prev, categories: updated };
    });
    if (errors.categories) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.categories;
        return next;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setFileError(
        `File is ${(file.size / 1024 / 1024).toFixed(1)} MB. Attachments through this form are capped at 4 MB. Please email larger tech packs directly to ${brand.email.rfq}.`
      );
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setFileError(null);
    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const validateClient = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.company.trim()) newErrors.company = 'Please enter your company / brand';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone or WhatsApp';
    if (!formData.country.trim()) newErrors.country = 'Please enter your country';
    if (formData.categories.length === 0) {
      newErrors.categories = 'Please select at least one garment category';
    }
    if (!formData.styleDescription.trim()) {
      newErrors.styleDescription = 'Please describe your style or construction requirements';
    }
    if (!formData.estimatedQuantity.trim()) {
      newErrors.estimatedQuantity = 'Please specify your target quantity';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateClient()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('company', formData.company);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('country', formData.country);
      formData.categories.forEach((cat) => data.append('categories', cat));
      data.append('styleDescription', formData.styleDescription);
      data.append('estimatedQuantity', formData.estimatedQuantity);
      if (formData.targetPrice) data.append('targetPrice', formData.targetPrice);
      if (formData.targetDeliveryDate) data.append('targetDeliveryDate', formData.targetDeliveryDate);
      if (formData.message) data.append('message', formData.message);
      data.append('website_url_hp', formData.website_url_hp);
      if (turnstileToken) data.append('turnstileToken', turnstileToken);
      if (selectedFile) data.append('file', selectedFile);

      // Demo mode: simulate a successful submission without hitting a backend.
      // GitHub Pages is static hosting, so there is no /api/rfq endpoint here.
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An unexpected error occurred';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="p-8 sm:p-12 rounded-2xl bg-white border border-brand-accent/30 shadow-md text-center space-y-5 animate-in fade-in">
        <div className="w-16 h-16 rounded-full bg-brand-accent/15 text-brand-accent flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary">
          RFQ Successfully Received
        </h3>
        <p className="text-sm sm:text-base text-brand-ink/80 max-w-lg mx-auto font-body leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. A confirmation email has been dispatched to <strong>{formData.email}</strong>. Our Dhaka merchandising team is analyzing your tech pack specifications and will follow up with factory options and costing within 24 business hours.
        </p>

        <div className="pt-4 border-t border-brand-primary/10 max-w-sm mx-auto space-y-2">
          <p className="text-xs text-brand-ink/60">
            Need urgent feedback on your tech pack? Reach us directly:
          </p>
          <a
            href={`mailto:${brand.email.rfq}`}
            className="text-sm font-semibold text-brand-accent-text hover:underline block"
          >
            {brand.email.rfq}
          </a>
        </div>

        <div className="pt-4">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setSubmitSuccess(false);
              setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                country: '',
                categories: [],
                styleDescription: '',
                estimatedQuantity: '',
                targetPrice: '',
                targetDeliveryDate: '',
                message: '',
                website_url_hp: '',
              });
              setSelectedFile(null);
              setTurnstileToken('');
            }}
          >
            Submit Another RFQ
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-10 rounded-2xl bg-white border border-brand-primary/10 shadow-sm space-y-7"
    >
      {/* Honeypot field - visually hidden from human users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url_hp">Leave this field blank</label>
        <input
          id="website_url_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website_url_hp}
          onChange={(e) => setFormData({ ...formData, website_url_hp: e.target.value })}
        />
      </div>

      {submitError && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3 text-sm leading-relaxed"
        >
          <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
          <div>
            <strong>Submission Error:</strong> {submitError}
          </div>
        </div>
      )}

      {/* Section 1: Contact Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-heading font-bold text-brand-primary pb-2 border-b border-brand-primary/10">
          1. Your Details & Buying Office
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-brand-primary mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              aria-invalid={Boolean(errors.name)}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Full name"
              className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
            />
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-primary mb-1">
              Company / Brand Name *
            </label>
            <input
              type="text"
              required
              aria-invalid={Boolean(errors.company)}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Nordic Apparel Ltd."
              className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
            />
            {errors.company && <p className="text-xs text-red-600 mt-1">{errors.company}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-brand-primary mb-1">
              Business Email *
            </label>
            <input
              type="email"
              required
              aria-invalid={Boolean(errors.email)}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="buyer@brand.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-primary mb-1">
              Phone / WhatsApp *
            </label>
            <input
              type="tel"
              required
              aria-invalid={Boolean(errors.phone)}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+44 20 XXXX XXXX"
              className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-primary mb-1">
              Destination Country *
            </label>
            <input
              type="text"
              required
              aria-invalid={Boolean(errors.country)}
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              placeholder="e.g. United Kingdom, Germany, USA"
              className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
            />
            {errors.country && <p className="text-xs text-red-600 mt-1">{errors.country}</p>}
          </div>
        </div>
      </div>

      {/* Section 2: Product Categories Multi-Select */}
      <div className="space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-brand-primary/10">
          <h3 className="text-lg font-heading font-bold text-brand-primary">
            2. Product Categories *
          </h3>
          <span className="text-xs text-brand-ink/60">Select all that apply</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {AVAILABLE_CATEGORIES.map((cat) => {
            const isChecked = formData.categories.includes(cat.id);
            return (
              <label
                key={cat.id}
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  isChecked
                    ? 'border-brand-accent bg-brand-accent/5 ring-1 ring-brand-accent'
                    : 'border-brand-primary/10 hover:border-brand-primary/30 bg-brand-surface/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCategoryToggle(cat.id)}
                  className="mt-1 h-4 w-4 rounded border-brand-primary/20 text-brand-accent focus:ring-brand-accent"
                />
                <span className="text-xs sm:text-sm text-brand-ink leading-relaxed font-medium">
                  {cat.label}
                </span>
              </label>
            );
          })}
        </div>
        {errors.categories && (
          <p className="text-xs text-red-600 mt-1">{errors.categories}</p>
        )}
      </div>

      {/* Section 3: Style Specs, Quantities & Dates */}
      <div className="space-y-4">
        <h3 className="text-lg font-heading font-bold text-brand-primary pb-2 border-b border-brand-primary/10">
          3. Order Specifications
        </h3>

        <div>
          <label className="block text-xs font-semibold text-brand-primary mb-1">
            Style Description & Fabric Details *
          </label>
          <textarea
            rows={3}
            required
            aria-invalid={Boolean(errors.styleDescription)}
            value={formData.styleDescription}
            onChange={(e) => setFormData({ ...formData, styleDescription: e.target.value })}
            placeholder="e.g. 100% organic cotton 220 GSM crewneck t-shirts with water-based chest print and custom woven care labels..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors font-body"
          />
          {errors.styleDescription && (
            <p className="text-xs text-red-600 mt-1">{errors.styleDescription}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-brand-primary mb-1">
              Estimated Total Quantity *
            </label>
            <input
              type="text"
              required
              aria-invalid={Boolean(errors.estimatedQuantity)}
              value={formData.estimatedQuantity}
              onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
              placeholder="e.g. 2,500 pcs (500/color)"
              className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
            />
            {errors.estimatedQuantity && (
              <p className="text-xs text-red-600 mt-1">{errors.estimatedQuantity}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-primary mb-1">
              Target Price / FOB (Optional)
            </label>
            <input
              type="text"
              value={formData.targetPrice}
              onChange={(e) => setFormData({ ...formData, targetPrice: e.target.value })}
              placeholder="e.g. $4.50 - $5.20 / pc FOB"
              className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-primary mb-1">
              Target Delivery Date (Optional)
            </label>
            <input
              type="text"
              value={formData.targetDeliveryDate}
              onChange={(e) => setFormData({ ...formData, targetDeliveryDate: e.target.value })}
              placeholder="e.g. Late August 2026 / Q3"
              className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-primary mb-1">
            Additional Message / Testing Standards (Optional)
          </label>
          <textarea
            rows={2}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Any specific test requirements (OEKO-TEX, shrinkage limits), packaging requirements, or questions..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-brand-primary/15 text-sm text-brand-ink focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors font-body"
          />
        </div>
      </div>

      {/* Section 4: File Attachment & 4MB Limit */}
      <div className="space-y-3">
        <h3 className="text-lg font-heading font-bold text-brand-primary pb-2 border-b border-brand-primary/10">
          4. Attach Tech Pack or Artwork (Max 4 MB)
        </h3>

        {fileError && (
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
              <div>
                <strong>File Size Notice:</strong> {fileError}
              </div>
            </div>
            <div className="pl-7">
              <a
                href={`mailto:${brand.email.rfq}?subject=${encodeURIComponent(
                  `Tech Pack Attachment - ${formData.company || 'Buyer RFQ'}`
                )}`}
                className="inline-flex items-center gap-1.5 font-semibold text-brand-primary hover:underline text-xs"
              >
                <Mail className="w-3.5 h-3.5 text-brand-accent" />
                <span>Click here to email your large tech pack directly to {brand.email.rfq}</span>
              </a>
            </div>
          </div>
        )}

        {selectedFile ? (
          <div className="p-4 rounded-xl bg-brand-surface border border-brand-accent/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileCheck className="w-5 h-5 text-brand-accent" />
              <div>
                <span className="text-sm font-semibold text-brand-primary block truncate max-w-xs sm:max-w-md">
                  {selectedFile.name}
                </span>
                <span className="text-xs text-brand-ink/60">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="p-1 text-brand-ink/60 hover:text-red-600 rounded"
              aria-label="Remove attachment"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-brand-primary/20 hover:border-brand-accent rounded-xl p-6 text-center cursor-pointer transition-colors bg-brand-surface/30"
          >
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.zip,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx"
              className="hidden"
            />
            <UploadCloud className="w-8 h-8 text-brand-accent mx-auto mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-brand-primary">
              Click to browse or drag tech pack here
            </p>
            <p className="text-[11px] text-brand-ink/60 mt-1">
              Accepted formats: PDF, ZIP, Excel, Word, Images (Max total size: 4 MB)
            </p>
          </div>
        )}
      </div>

      {/* Cloudflare Turnstile */}
      <div className="pt-2">
        <Turnstile
          onVerify={(token) => setTurnstileToken(token)}
          onError={() => setSubmitError('Turnstile challenge failed. Please refresh.')}
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="accent"
          size="lg"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            'Transmitting RFQ & Specifications...'
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              <span>Submit Request for Quote (RFQ)</span>
            </span>
          )}
        </Button>
        <p className="text-xs text-brand-ink/60 text-center mt-2.5">
          By submitting, your design specifications are protected under strict commercial confidentiality.
        </p>
      </div>
    </form>
  );
}

export function RfqForm() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center rounded-2xl bg-white border border-brand-primary/10">
          <p className="text-sm text-brand-ink/60 animate-pulse">Loading RFQ Form...</p>
        </div>
      }
    >
      <RfqFormInner />
    </Suspense>
  );
}
