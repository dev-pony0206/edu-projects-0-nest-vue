<template>
  <div class="auth-layout-wrap flex justify-center min-h-screen flex-col bg-cover items-center" style='background-image: url("33.jpg")'>
    <h1 class="text-indigo-900 text-9xl font-display py-10 ">Product Management System</h1>
    <h1 class="text-yellow-400 text-5xl font-display py-3 ">Working With Our Products </h1>
    <div class="container-session-v1 max-w-2xl">
              <div class="grid grid-cols-12">
                  <div class="col-span-12 lg:col-span-6">
                      <div class="p-3  block text-center flex-col bg-white">
                      <img class="w-24" src="download.jpg"/>                       
                         <h1 class="mb-3 text-5xl">Sign In </h1>
                          <form action="">
                              <div class="mb-3">
                                  <label class="text-xs text-gray-600" for="" >Email Address</label>
                                  <input class="w-full px-4 py-1 bg-gray-100 focus:outline-none border border-gray-400 rounded-full" value="" type="email" placeholder="Enter your Email Address">
                              </div>
                              <div class="mb-3">
                                  <label class="text-xs text-gray-600" for="">Password</label>
                                  <input class="w-full px-4 py-1 bg-gray-100 focus:outline-none border border-gray-400 rounded-full" value="" type="password" placeholder="Type your Password">
                              </div>
                              <div class="mb-4">
                                  <input type="button"  class="bg-purple-600  flex items-center justify-center mb-2 hover:bg-indigo-500 text-white w-full font-normal leading-8 rounded-full" @click.prevent="signin" value="Sign in"/>
                                  <input type="button"  class="bg-purple-600 mb-2 text-white  flex items-center justify-center font-normal hover:bg-indigo-500 leading-8 w-full rounded-full"  @click.prevent="createacount" value="Create an account"/>
                              </div>
                              <div class="text-center">
                                <a class="hover:text-purple-500 underline text-gray-600" href="">Forgot Password?</a>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div class="col-span-12 bg-cover lg:col-span-6" style='background-image: url("new.jpg")'>
                      <div class="flex justify-center items-center flex-col h-full px-4 py-2">
                          <input type="button"   class="mb-3 border border-purple-500 w-full rounded-full font-normal leading-10 flex items-center justify-center bg-gray-100 text-purple-500 hover:bg-purple-500 hover:text-white" value="Sign Up with Email"/>
                          <input type="button"   class=" mb-3 border border-red-500 w-full bg-gray-100 rounded-full font-normal leading-10 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white" value="Sign Up with Google"/>
                          <input type="button"   class="border  border-indigo-500 bg-gray-100 w-full flex font-normal leading-10 items-center justify-center rounded-full text-indigo-500 hover:bg-indigo-500 hover:text-white" value="Sign Up with Facebook"/>
                      </div>
                  </div>
              </div>            
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const createacount = () => {
  router.push('/signup')
} ;

const signin = () => {
  router.push('/list')
}
</script>
