<template>
  <div>
    <div class="navBar navHeader">
      <img class="user" src="../../assets/images/user.jpg">
      <img class="logo" src="../../assets/images/login/play11_logo.png">
      <b-icon icon="bell-fill" scale="1.8"></b-icon>
    </div>
    <perfect-scrollbar>
      <div class="appBody">
        <match-list></match-list>
      </div>
    </perfect-scrollbar>

  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import MatchList from "@/components/app/MatchList.vue"
@Component({
  components: {
    MatchList
  },
})
export default class Dashboard extends Vue {

}
</script>