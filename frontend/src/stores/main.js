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

    fetch(info) {
      axios
        .get("")
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
    // deleteCustomer(id) {
    //   axios
    //     .delete(`${server.baseURL}/customer/delete?customerID=${id}`)
    //     .then(data => {
    //       console.log(data);
    //       window.location.reload();
    //     });
    // }
  },
});
