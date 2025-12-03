import React from 'react';
import { Layers, Printer, Lightbulb, MonitorPlay, Zap, ShieldCheck, Eye } from 'lucide-react';
import { ServiceItem, WhyChooseItem } from './types';

export const COMPANY_NAME = "Gowtham Digitals";
export const TAGLINE = "Comprehensive Publicity Works";

export const HERO_HEADLINE = "MASTERING THE ART OF PUBLICITY";
export const HERO_SUBHEAD = "Gowtham Digitals delivers industrial-strength Flex, Vinyl, and LED solutions designed to command attention and elevate your brand authority.";

export const SERVICES: ServiceItem[] = [
  {
    title: "Large Format Printing",
    description: "High-definition printing on durable media for maximum outdoor visibility.",
    features: ["Flex Printing", "Vinyl Printing", "Premium Star Flex", "Eco Solvent Print"],
    icon: <Printer className="w-8 h-8 text-gold-500" />
  },
  {
    title: "Signage Solutions",
    description: "Illuminated and structural signage that defines your physical presence.",
    features: ["Front Light Board", "Back Light Board", "LED Name Boards", "Large-scale Hoardings", "Stand Boards"],
    icon: <Lightbulb className="w-8 h-8 text-gold-500" />
  },
  {
    title: "Specialty Media & Finishing",
    description: "Custom textures and protective layers for a professional finish.",
    features: ["One Way Vision", "Foam Board Printing", "Lamination Services"],
    icon: <Layers className="w-8 h-8 text-gold-500" />
  },
  {
    title: "Display Systems",
    description: "Portable and impactful display units for events and promotions.",
    features: ["Roll-up Standees", "Promotional Displays"],
    icon: <MonitorPlay className="w-8 h-8 text-gold-500" />
  }
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    title: "Industrial Grade Quality",
    description: "We strictly use premium media and UV-resistant inks to ensure your branding withstands the elements without fading.",
    icon: <ShieldCheck className="w-10 h-10 text-gold-500" />
  },
  {
    title: "End-to-End Execution",
    description: "From the initial design concept to the final on-site installation, we handle the entire lifecycle of your publicity needs.",
    icon: <Zap className="w-10 h-10 text-gold-500" />
  },
  {
    title: "Maximum Visual Impact",
    description: "Our high-tech Eco Solvent printers deliver razor-sharp details and vibrant colors that guarantee your message is seen.",
    icon: <Eye className="w-10 h-10 text-gold-500" />
  }
];

export const CONTACT_CTA = "Ready to Amplify Your Brand Authority?";
export const CONTACT_SUB = "Get a precise quote for your next branding campaign.";
