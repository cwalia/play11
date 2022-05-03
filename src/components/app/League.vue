<template>
  <div>
    <div class="navBar navHeader">
      <b-icon icon="chevron-left" @click="back()"></b-icon>
      <div class="flexSpace leagueTeamHead">
        <img class="user" src="../../assets/images/user.jpg">
          <div>
            DC vs KKR<br>
            22h:25:38s
          </div>
        <img class="user" src="../../assets/images/user.jpg">
      </div>
      <b-icon icon="wallet" scale="1.5"></b-icon>
    </div>
    <div class="leagueList">
      <div class="leagueHead">
        <img :src="leagueData[0].image">
        <div class="title">
          {{leagueData[0].type_name}}
          <span>{{leagueData[0].slug}}</span>
        </div>
      </div>

      <div class="leagueBody">
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
export default class League extends Vue {
  mounted(){
    this.$store.dispatch('match/leagueData')
    console.log(this.$route.params.id)
  }
  back(){
    this.$router.back()
  }
  get leagueData(){
    return this.$store.state.match.leagueData.league
  }
}
</script>