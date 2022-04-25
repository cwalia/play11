<template>
  <div class="login">
    <div>
        <img class="logo" src="../../assets/images/login/play11_logo.png">
    </div>
    <b-input-group>
        <template #prepend>
            <b-input-group-text ><b-icon icon="telephone-fill" /></b-input-group-text>
        </template>
        <b-form-input type="number"></b-form-input>
    </b-input-group>
    <b-button block variant="dark">Login</b-button>
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
    Don't have an account? <sapn class="register">Register</sapn>


  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Login extends Vue {
}
</script>