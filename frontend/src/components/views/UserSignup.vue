<template>
    <div class="auth-layout-wrap flex justify-center min-h-screen flex-col bg-cover items-center" style='background-image: url("33.jpg")'>
        <h1 class="text-indigo-900 text-9xl font-display py-10 ">Product Management System</h1>
        <h1 class="text-yellow-400 text-5xl font-display py-3 ">Working With Our Products </h1>
          <div class="container-session-v1 max-w-2xl">
                  <div class="grid grid-cols-12">
                      <div class="col-span-12 bg-cover lg:col-span-6" style='background-image: url("new.jpg")'>
                          <div class="block justify-center items-center flex-col h-full px-4 py-2 lg:flex">
                            <img class="w-48" src="3.jpg"/>                       
                            <input type="button"   class="mb-3 border border-purple-500 w-full rounded-full font-normal leading-10 flex items-center justify-center bg-gray-100 text-purple-500 hover:bg-purple-500 hover:text-white" value="Sign Up with Email"/>
                          <input type="button"   class=" mb-3 border border-red-500 w-full bg-gray-100 rounded-full font-normal leading-10 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white" value="Sign Up with Google"/>
                          <input type="button"   class="border  border-indigo-500 bg-gray-100 w-full flex font-normal leading-10 items-center justify-center rounded-full text-indigo-500 hover:bg-indigo-500 hover:text-white" value="Sign Up with Facebook"/>
                          </div>
                      </div>
                      <div class="col-span-12 lg:col-span-6">
                          <div class="p-3 bg-white">
                              <h1 class="mb-3 text-5xl">Sign Up </h1>
                              <form action="">
                                  <div class="mb-3">
                                      <label class="text-base text-gray-600" for="">Your Name</label>
                                      <input class="w-full px-4 py-1 border border-gray focus:outline-none rounded-full" type="text" placeholder="Enter your Name">
                                  </div>
                                  <div class="mb-3">
                                      <label class="text-base text-gray-600" for="">Email Address</label>
                                      <input class="w-full px-4 py-1 border border-gray focus:outline-none rounded-full" type="email" placeholder="Enter your Email">
                                  </div>
                                  <div class="mb-3">
                                      <label class="text-base text-gray-600" for="">Password</label>
                                      <input class="w-full px-4 py-1 border border-gray focus:outline-none rounded-full" type="password" placeholder="Type your Password">
                                  </div>
                                  <div class="mb-3">
                                      <label class="text-base text-gray-600" for="">Retype Password</label>
                                      <input class="w-full px-4 py-1 border border-gray focus:outline-none rounded-full" type="password" placeholder="Confirm your Password">
                                  </div>
                                  <input type="button"  class="bg-purple-600  flex items-center justify-center mb-2 hover:bg-indigo-500 text-white w-full font-normal leading-8 rounded-full" value="Sign up" @click.prevent="signup"/>
                              </form>
                              
                          </div>
                      </div>
                  </div>
          </div>
      </div>
  </template>

  <script setup>
  import { useRouter } from "vue-router";

  const router = useRouter();

  const signup = () => {
    router.push('/')
  } 
  </script>