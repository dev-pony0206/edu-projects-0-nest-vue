<template>
  <div class="auth-layout-wrap flex justify-center min-h-screen flex-col bg-cover items-center" style="background-image: url(../../assets/images/photo-wide-4.jpg)">
        <div class="container-session-v1 max-w-2xl">
            <BaseCard noPadding class="overflow-hidden">
              <div class="grid grid-cols-12">
                  <div class="col-span-12 lg:col-span-6">
                      <div class="p-5">
                      <img class="w-48" src="../../assets/images/sq-17.jpg"/>                       
                         <h1 class="mb-3 text-lg">Sign In </h1>
                          <form action="">
                              <div class="mb-3">
                                  <label class="text-xs text-gray-600" for="">Email Address</label>
                                  <input class="w-full px-4 py-1 bg-gray-100 focus:outline-none border border-gray-400 rounded-full" value="ui-lib@gmail.com" type="email" placeholder="">
                              </div>
                              <div class="mb-3">
                                  <label class="text-xs text-gray-600" for="">Password</label>
                                  <input class="w-full px-4 py-1 bg-gray-100 focus:outline-none border border-gray-400 rounded-full" value="askjhdgahsgd" type="password" placeholder="">
                              </div>
                              <div class="mb-4">
      
                                  <BaseBtn block class="bg-purple-500 mb-2 text-white  rounded-full">Sign In</BaseBtn>
                                  <BaseBtn block class="bg-purple-500 mb-2 text-white  rounded-full">Create an account</BaseBtn>
                              </div>
                              <div class="text-center">
                                <a class="hover:text-purple-500 underline text-gray-600" href="#">Forgot Password?</a>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div class="col-span-12 bg-cover lg:col-span-6" style="background-image: url(../../assets/images/photo-long-3.jpg)">
                      <div class="flex justify-center items-center flex-col h-full px-4 py-2">
                          <BaseBtn block rounded class="mb-3 border border-purple-500 bg-gray-100 text-purple-500 hover:bg-purple-500 hover:text-white">
                            <i class="i-Mail-with-At-Sign align-middle mr-2"></i>Sign Up with Email
                          </BaseBtn>
                          <BaseBtn block rounded class=" mb-3 border border-red-500 bg-gray-100 text-red-500 hover:bg-red-500 hover:text-white">
                            <i class="i-Google-Plus align-middle mr-2"></i>Sign Up with Google
                          </BaseBtn>
                          <BaseBtn block rounded class="border border-indigo-500 bg-gray-100 text-indigo-500 hover:bg-indigo-500 hover:text-white">
                            <i class="i-Facebook-2 align-middle mr-2"></i>Sign Up with facebook
                          </BaseBtn>
                          
                          
                          
                      </div>
                  </div>
              </div>
            </BaseCard>
            
        </div>
    </div>
</template>
