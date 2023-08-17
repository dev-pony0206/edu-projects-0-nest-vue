import { defineStore } from "pinia";
import { darkModeKey } from "@/config";

export const useStyleStore = defineStore("style", {
  state: () => ({
      /* Styles */
      aside: "bg-gray-800",
      asideScrollbars: "aside-scrollbars-gray",
      asideBrand: "bg-gray-900 text-white",
      asideMenuItem: "text-gray-300 hover:text-white",
      asideMenuItemActive: "font-bold text-white",
      asideMenuDropdown: "bg-gray-700/50",
      navBarItemLabel: "text-black",
      navBarItemLabelHover: "hover:text-blue-500",
      navBarItemLabelActiveColor: "text-blue-600",
      overlay: "from-gray-700 via-gray-900 to-gray-700",

    /* Dark mode */
    darkMode: false,
  }),
  actions: {
    setDarkMode(payload = null) {
      this.darkMode = payload !== null ? payload : !this.darkMode;

      if (typeof localStorage !== "undefined") {
        localStorage.setItem(darkModeKey, this.darkMode ? "1" : "0");
      }

      if (typeof document !== "undefined") {
        document.body.classList[this.darkMode ? "add" : "remove"](
          "dark-scrollbars"
        );

        document.documentElement.classList[this.darkMode ? "add" : "remove"](
          "dark-scrollbars-compat"
        );
      }
    },
  },
});
