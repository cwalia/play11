<template>
  <div>
    <div class="matchList" v-for="item in matchData.list" :key="item.id" @click="openMatch(item.id)">
      <div class="headList flexSpace">
        <div>
          <b-icon icon="bell" />
          {{item.series}}
        </div>
        <div class="status">Lineups Out</div>
      </div>

      <div class="bodyList flexSpace">
        <div class="teamName flexSpace">
          <img class="teamLogo" :src="item.team1_logo" style="margin-right:5px">
          {{item.team1_short_name}}
        </div>
        <contest-counter :start-time="item.start_dt" :end-time="item.end_dt" :match-status="item.status"></contest-counter>
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
    get matchData(){
      return this.$store.state.matchList.matchData
    }
    openMatch(id:any){
      this.$router.push('app/league/'+id)
    }
}
</script>