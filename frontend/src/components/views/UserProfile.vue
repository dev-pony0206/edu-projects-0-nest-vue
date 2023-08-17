<template>
  <div>
       <h4 class="text-center mt-20">
        <small>
        <button class="btn btn-success" v-on:click="navigate()"> View All Customers </button>
        </small>
       </h4>
       <div class="col-md-12 form-wrapper">
         <h2> Edit Customer </h2>
         <form id="create-post-form" @submit.prevent="editCustomer">
              <div class="form-group col-md-12">
               <label for="title"> First Name </label>
               <input type="text" id="first_name" v-model="customer.first_name" name="title" class="form-control" placeholder="Enter First name">
              </div>
              <div class="form-group col-md-12">
               <label for="title"> Last Name </label>
               <input type="text" id="last_name" v-model="customer.last_name" name="title" class="form-control" placeholder="Enter Last name">
              </div>
            <div class="form-group col-md-12">
               <label for="title"> Email </label>
               <input type="text" id="email" v-model="customer.email" name="title" class="form-control" placeholder="Enter email">
           </div>
           <div class="form-group col-md-12">
               <label for="title"> Password </label>
               <input type="password" id="password" v-model="customer.password" name="title" class="form-control" placeholder="Enter Password">
           </div>
             <div class="form-group col-md-4 pull-right">
                 <button class="btn btn-success" type="submit"> Edit Customer </button>
             </div>           </form>
       </div>
   </div>
</template>
<script>
import { server } from "../../helper";
import axios from "axios";
import router from "../../router";
export default {
 data() {
   return {
     id: 0,
     customer: {}
   };
 },
 created() {
   this.id = this.$route.params.id;
   this.getCustomer();
 },
 methods: {
   editCustomer() {
     let customerData = {
       first_name: this.customer.first_name,
       last_name: this.customer.last_name,
       email: this.customer.email,
       password: this.customer.password,
     };
     axios
       .put(
         `${server.baseURL}/customer/update?customerID=${this.id}`,
         customerData
       )
       .then(() => {
         router.push({ name: "home" });
       });
   },
   getCustomer() {
     axios
       .get(`${server.baseURL}/customer/customer/${this.id}`)
       .then(data => (this.customer = data.data));
   },
   navigate() {
     router.go(-1);
   }
 }
};
</script>