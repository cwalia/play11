<template>
  <div>
    <div class="navBar navHeader">
      <img class="user" src="../../assets/images/user.jpg">
      <img class="logo" src="../../assets/images/login/play11_logo.png">
      <b-icon icon="bell-fill" scale="1.5"></b-icon>
    </div>

    <b-carousel :interval="4000" controls indicators background="#ababab" img-width="1024" img-height="280" style="text-shadow: 1px 1px 2px #333;">
      <template v-if="matchData && matchData.banners && matchData.banners[0]">
        <b-carousel-slide :img-src="matchData.banners[0].name"></b-carousel-slide>
      </template>
    </b-carousel> 

    <perfect-scrollbar>
      <div class="appBody">
        <match-list></match-list>
      </div>
    </perfect-scrollbar>

    <footer-nav></footer-nav>

  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import MatchList from "@/components/app/MatchList.vue"
import FooterNav from "@/components/common/Footer.vue"
@Component({
  components: {
    MatchList,FooterNav
  },
})
export default class Dashboard extends Vue {
  mounted(){
    this.$store.dispatch('matchList/matchList')
  }
  get matchData(){
    return this.$store.state.matchList.matchData
  }
}
</script>