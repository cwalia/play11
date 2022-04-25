<template>
  <div>
    <div class="navBar">
      <b-icon icon="chevron-left" @click="login()"></b-icon>
      Register
    </div>
    <div class="login register">
      <b-form-input  class="marginBottom" v-model="acc.name" placeholder="Full Name"></b-form-input>
      <b-form-input  class="marginBottom" v-model="acc.email" placeholder="Email Id"></b-form-input>
      <b-form-input  class="marginBottom" v-model="acc.mobile" placeholder="Mobile Number"></b-form-input>
      <b-form-input  class="marginBottom" v-model="acc.refCode" placeholder="Referral Code (Optional)"></b-form-input>
      <b-form-checkbox v-model="acceptTerm" class="marginBottom" >
        I accept the terms and use
      </b-form-checkbox>
      <b-button block variant="primary" @click="register()" :disabled="!acc.name">Register</b-button>
      <hr>
      <b-button block variant="primary" @click="login()" >Login</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Register extends Vue {
    acc = {
        name:'',
        email:'',
        mobile:'',
        refCode:''
    }
    acceptTerm = false
    login(){
      this.$router.push('/')
    }
}
</script>
