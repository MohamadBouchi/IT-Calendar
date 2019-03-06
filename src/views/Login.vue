<template lang="pug">
    v-container(fill-height)
        v-layout(align-center justify-center)
            v-flex(class='login-form' class='text-xs-center') 
                .display-1.mb-3 #[v-icon.mr-2(large) work] MyCalendar
                v-card(light)
                    v-card-text
                        .subheading
                            template(v-if='options.isLoggingIn') Log in to your customer portal
                            template(v-else) Crate a new account
                        v-form
                            v-text-field(v-if='!options.isLoggingIn' v-model='user.name' light prepend-icon='person' label='Name')
                            v-text-field(v-model='user.email' light prepend-icon='email' label='Email' type='email')
                            v-text-field(v-model='user.password' light prepend-icon='lock' label='Password' type='password')
                            v-checkbox(v-if='options.isLoggingIn' v-model='options.shouldStayLoggedIn' light label='Stay logged in?' hide-details)
                            v-btn(v-if='options.isLoggingIn' @click.prevent='login({uname:"mohamed",password:"1230123"})' block type='submit') Sign in
                            v-btn(v-else block type='submit' @click.prevent='options.isLoggingIn = true') Sign up
                div(v-if='options.isLoggingIn')
                    | Don't have an account?
                    v-btn(light @click='options.isLoggingIn = false') Sign up
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data: () =>({
    user: {
      // email: 'admin@example.com',
      // password: 'admin',
      // name: 'John Doe',
    },
    options: {
      isLoggingIn: true,
      shouldStayLoggedIn: true,
    },
  }),
  methods: {
      ...mapActions('auth',['login']),
  }
}
</script>


<style scoped>
    .login-form {
        max-width: 500px;
    }
</style>
