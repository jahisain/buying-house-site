import { z } from 'zod';

export const MAX_FILE_SIZE_BYTES = 4 * 1024 * 1024; // 4 MB limit
export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/zip',
  'application/x-zip-compressed',
  'image/jpeg',
  'image/png',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

export const rfqFormSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  company: z.string().min(2, 'Please enter your company or brand name'),
  email: z.string().email('Please enter a valid business email address'),
  phone: z.string().min(6, 'Please enter a valid phone or WhatsApp number'),
  country: z.string().min(2, 'Please enter your country'),
  categories: z
    .array(z.string())
    .min(1, 'Please select at least one product category'),
  styleDescription: z
    .string()
    .min(5, 'Please provide a brief style or product description'),
  estimatedQuantity: z
    .string()
    .min(1, 'Please specify your estimated quantity (e.g. 1,500 pcs)'),
  targetPrice: z.string().optional(),
  targetDeliveryDate: z.string().optional(),
  message: z.string().optional(),
  // Honeypot field (must be left empty by legitimate users)
  website_url_hp: z.string().max(0, 'Bot detected').optional(),
  // Cloudflare Turnstile token
  turnstileToken: z.string().optional(),
});

export type RfqFormData = z.infer<typeof rfqFormSchema>;
