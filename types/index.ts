import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface Specification {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
}

export interface Benefit {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  badge?: string;
  description: string;
  image: string;
  gradientColors: string;
  badgeColors?: string;
  roleColor: string;
  socialLinks?: {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    platform: string;
  }[];
}

export interface RoadmapItem {
  year: string;
  quarter: string;
  title: string;
  status: "Berlangsung" | "Mendatang" | "Selesai";
  progress: number;
  description: string;
}
