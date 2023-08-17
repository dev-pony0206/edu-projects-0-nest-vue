import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore("main", {
  state: () => ({
    /* User */
    userFirstName: null,
    userLastName:null,
    userEmail: null,
    userAvatar: null,

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

  }),
  actions: {
    setUser(payload) {
      if (payload.firstName) {
        this.userFirstName = payload.firstName;
      }
      if (payload.lastName) {
        this.userLastName = payload.lastName;
      }
      if (payload.email) {
        this.userEmail = payload.email;
      }
      if (payload.avatar) {
        this.userAvatar = payload.avatar;
      }
    },

    fetch(profile) {
      axios
        .get("")
        .then((res) => {
          if (res.data && res.data.data) {
            this[profile] = r.data.data;
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    fetch(productList) {
      axios
        .get("")
        .then((res) => {
          if (res.data && res.data.data) {
            this[productList] = r.data.data;
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
});
