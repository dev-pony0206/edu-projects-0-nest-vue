import { defineStore } from "pinia";
import router from '../router';
import axios from "axios";

export const useMainStore = defineStore("main", {
  state: () => ({
    /* User */
    userName:null,
    userEmail: null,
    userAvatar: null,

    // /* Field focus with ctrl+k (to register only once) */
    // isFieldFocusRegistered: false,

  }),
  actions: {
    setUser(payload) {
      if (payload.name) {
        this.userName = payload.name;
      }
      if (payload.email) {
        this.userEmail = payload.email;
      }
      if (payload.avatar) {
        this.userAvatar = payload.avatar;
      }
    },

    fetch(info) {
      axios
        .get("",)
        .then((res) => {
          if (res.data && res.data.data) {
            this[info] = res.data.data;
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    // fetchCustomers() {
    //   axios
    //     .get(`${server.baseURL}/customer/customers`)
    //     .then(data => (this.customers = data.data));
    // },
    deleteUser(id) {
      axios
        .delete("",id)
        .then(res => {
          console.log(res);
          window.location.reload();
        });
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/login');
  }
  },
});
