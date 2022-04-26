<template>
  <div>
    <div class="matchList" v-for="item in matchData.list" :key="item.id">
      <div class="headList flexSpace">
        <div>
          <b-icon icon="bell" />
          {{item.team1}} v/s {{item.team2}}
        </div>
        <div class="status">Lineups Out</div>
      </div>

      <div class="bodyList flexSpace">
        <div class="teamName flexSpace">
          <img class="teamLogo" :src="item.team1_logo" style="margin-right:5px">
          {{item.team1_short_name}}
        </div>
        <contest-counter></contest-counter>
        <div class="teamName flexSpace">
          {{item.team2_short_name}}
          <img class="teamLogo" :src="item.team2_logo" style="margin-left:5px">
        </div>

      </div>

      <div class="footerList">PLAY MORE, WIN MORE!</div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import ContestCounter from "@/components/app/ContestCounter.vue"
@Component({
  components: {ContestCounter},
})
export default class MatchList extends Vue {
    mounted(){
        this.$store.dispatch('matchList/matchList')
    }
    get matchData(){
      return this.$store.state.matchList.matchData
    }
}
</script>