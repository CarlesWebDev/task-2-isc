import {
  SiPhp, SiLaravel, SiSpring, SiNodedotjs, SiExpress, SiPython, SiNextdotjs,
  SiMysql, SiPostgresql, SiMongodb, SiSupabase,
  SiJavascript, SiTypescript, SiReact, SiVuedotjs, SiVite, SiTailwindcss, SiBootstrap,
  SiMui, SiShadcnui, SiAntdesign, SiDaisyui,
  SiFlutter,
  SiGit, SiGithub, SiGitlab, SiDocker, SiPostman, SiFigma, SiNpm, SiIntellijidea,
  SiNetlify, SiVercel,
  SiGnubash, SiNeovim,
  SiLinux, SiLinuxmint, SiArchlinux, SiUbuntu, SiEndeavouros 
} from "react-icons/si";
import { FaJava, FaHtml5, FaCss3Alt, FaWindows, FaLinux } from "react-icons/fa"; 
import { TbBrandReactNative } from "react-icons/tb";
import { VscTerminalPowershell, VscVscode } from "react-icons/vsc";

export const skills = [
  {
    category: "Backend",
    items: [
      { name: "PHP", icon: <SiPhp /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Spring", icon: <SiSpring /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Vue", icon: <SiVuedotjs /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ]
  },
  {
    category: "UI Libraries",
    items: [
      { name: "Material UI", icon: <SiMui /> },
      { name: "Shadcn UI", icon: <SiShadcnui /> },
      { name: "Ant Design", icon: <SiAntdesign /> },
      { name: "DaisyUI", icon: <SiDaisyui /> },
    ]
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", icon: <TbBrandReactNative /> },
      { name: "Flutter", icon: <SiFlutter /> },
    ]
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "NPM", icon: <SiNpm /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
    ]
  },
  {
    category: "Hosting",
    items: [
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Vercel", icon: <SiVercel /> },
    ]
  },
  {
    category: "Terminal & Shell",
    items: [
      { name: "Bash", icon: <SiGnubash /> },
      { name: "PowerShell", icon: <VscTerminalPowershell /> },
      { name: "Neovim", icon: <SiNeovim /> },
    ]
  },
  {
    category: "Operating Systems",
    items: [
      { name: "Windows", icon: <FaWindows /> }, 
      { name: "Linux", icon: <SiLinux /> },
      { name: "Linux Mint", icon: <SiLinuxmint /> },
      { name: "Garuda Linux", icon: <FaLinux /> },
      { name: "Arch Linux", icon: <SiArchlinux /> },
      { name: "Ubuntu", icon: <SiUbuntu /> },
      { name: "EndeavourOS", icon: <SiEndeavouros /> },
    ]
  }
];