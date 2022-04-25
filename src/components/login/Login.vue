<template>
  <div>
    <div v-if="!otp" class="login textCenter">
      <div>
          <img class="logo" src="../../assets/images/login/play11_logo.png">
      </div>
      <b-input-group>
          <template #prepend>
              <b-input-group-text ><b-icon icon="telephone-fill" /></b-input-group-text>
          </template>
          <b-form-input type="number" v-model="mobileNumber"></b-form-input>
      </b-input-group>

      <b-button block variant="primary" @click="login()" :disabled="mobileNumber.length!=10">Login</b-button>
      <hr>
      <b-button block variant="light">
          <img src="../../assets/images/login/google_icon.png">
          Continue with Google
      </b-button>
      <b-button block variant="light">
          <img src="../../assets/images/login/facebook_icon.png">
          Continue with Facebook
      </b-button>
      <hr>
      Don't have an account? <span class="registerText" @click="register()">Register</span>
    </div>

    <div v-else>
      <div class="navBar">
        <b-icon icon="chevron-left" @click="editPhoneNo()"></b-icon>
        OTP
      </div>
      <div class="login otp">
        <div class="marginBottom">We have sent verification code to your mobile number</div>
        <div style="display:flex">
          +91-{{mobileNumber}} 
          <div class="registerText editButton" @click="editPhoneNo()">
                <b-icon icon="pencil-square"></b-icon>
          </div>
        </div>


        <div class="otpDiv">
          <v-otp-input ref="otpInput" input-classes="otp-input" separator=" " :num-inputs="4" :should-auto-focus="true" :is-input-num="true" @on-complete="handleOnComplete" @on-change="handleOnChange"/>
        </div>
        <div class="marginBottom">Didn't receive the code? <span v-if="countDown>0">{{countDown}}s</span> <button class="registerText textBtn" :disabled="countDown>0">Resend Code</button></div>

        <b-button block variant="primary" @click="submitOtp()" :disabled="otpValue.length!=4">Submit</b-button>
      </div>

    </div>


  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Login extends Vue {
  otp = false
  countDown = 0
  mobileNumber = ''
  otpValue = ''

  login(){
    this.otp = true
    this.countDown = 30
    this.otpValue = ''
    this.countDownTimer()
  }
  editPhoneNo(){
    this.otp = false

  }
  countDownTimer() {
    if(this.countDown > 0) {
      setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
      }, 1000)
    }
  }
  register(){
    this.$router.push('/register')
  }
  handleOnChange(value:any){
    this.otpValue = value
  }
  handleOnComplete(value:any) {
    this.otpValue = value
  }
}
</script>