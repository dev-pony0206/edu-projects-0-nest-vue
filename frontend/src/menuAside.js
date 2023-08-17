import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock
} from "@mdi/js";

export default [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
  {
    to: "/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    to: "/login",
    label: "Login",
    icon: mdiLock,
  },
  {
    href: "https://github.com/ChristoperCarter0206/edu-projects-0-nest-vue",
    label: "GitHub",
    icon: mdiGithub,
    target: "_blank",
  }
];
