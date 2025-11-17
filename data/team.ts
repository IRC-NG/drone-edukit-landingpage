import { TeamMember } from "@/types";
import { Linkedin, Github, Mail } from "lucide-react";

export const leadership: TeamMember[] = [
  {
    name: "Muhammad Yusril Helmi Setyawan",
    role: "Project Manager",
    badge: "Project Lead",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/profile-picture/profil-pak-yusril.png",
    gradientColors: "from-blue-400 to-cyan-400",
    badgeColors: "from-blue-500 to-cyan-500",
    roleColor: "text-blue-600",
    socialLinks: [
      { icon: Linkedin, platform: "linkedin" },
      { icon: Github, platform: "github" },
      { icon: Mail, platform: "email" }
    ]
  }
];

export const developers: TeamMember[] = [
  {
    name: "Mochammad Fadhail Fijratullah",
    role: "Research And Development",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/profile-picture/profil-fadhail.jpeg",
    gradientColors: "from-green-400 to-emerald-400",
    roleColor: "text-green-600",
    socialLinks: [
      { icon: Linkedin, platform: "linkedin" },
      { icon: Github, platform: "github" }
    ]
  },
  {
    name: "Muhammad Okta Toriq Gunawan",
    role: "Research And Development",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/profile-picture/profil-octa.jpeg",
    gradientColors: "from-orange-400 to-red-400",
    roleColor: "text-orange-600",
    socialLinks: [
      { icon: Linkedin, platform: "linkedin" },
      { icon: Github, platform: "github" }
    ]
  },
  {
    name: "Muhamad Saladin Eka Septian",
    role: "Software Developer",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/profile-picture/profil-eka.jpeg",
    gradientColors: "from-indigo-400 to-purple-400",
    roleColor: "text-indigo-600",
    socialLinks: [
      { icon: Linkedin, platform: "linkedin" },
      { icon: Github, platform: "github" }
    ]
  }
];

// export const advisors: TeamMember[] = [
//   {
//     name: "Prof. Dr. Indra Wijaya",
//     role: "Academic Advisor",
//     description: "Profesor Teknik Elektro ITB, peneliti senior dalam bidang robotika dan sistem cerdas.",
//     image: "/placeholder.svg?height=64&width=64",
//     gradientColors: "from-cyan-400 to-blue-400",
//     roleColor: "text-cyan-600"
//   },
//   {
//     name: "Dr. Lisa Handayani",
//     role: "Industry Advisor",
//     description: "Mantan VP Engineering di startup teknologi, ahli dalam pengembangan produk dan strategi bisnis.",
//     image: "/placeholder.svg?height=64&width=64",
//     gradientColors: "from-pink-400 to-rose-400",
//     roleColor: "text-pink-600"
//   }
// ];
