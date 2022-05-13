<template>
  <div class="league">
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
    <perfect-scrollbar>
      <div class="leagueList" v-for="(league,index) in leagueData" :key="index">
        <div class="leagueHead">
          <img :src="league.image">
          <div class="title">
            {{league.type_name}}
            <span>{{league.slug}}</span>
          </div>
        </div>

        <div class="leagueBody" v-for="(child,key) in league.leagueData" :key="key">
          <div class="flexSpace leagueBody__head">
            <div>Prize Pool<br>₹{{child.winning_amount_str}}</div>
            <div style="text-align:right">Entry Fee<br><div style="display:flex;color:green;align-items:center"><div>{{parseInt(child.max_cash_bonus_used)+parseInt(child.max_referral_bonus_used)}}% bonus</div> <div class="leagueBody__entryFee">₹{{child.entry_fees}}</div></div></div>
          </div>
          <div class="leagueBody__body">
            <b-progress variant="warning" height="8px" :value="child.contest_size-child.spot_left" :max="child.contest_size"></b-progress>
            <div class="flexSpace" style="margin-top:5px">
              <div>Only {{child.spot_left}} sports left</div>
              <div>{{child.contest_size}} Teams</div>
            </div>
          </div>
          <div class="leagueBody__footer">
            <div class="flexSpace">
              <div class="flexSpace" style="width:50%">
                  <div><img src="../../assets/images/league/gold_medal.png">1st {{child.top_prize}}</div>
                  <div><img src="../../assets/images/league/group.png">Max Team : {{child.contest_size}}</div>
                  <div><img src="../../assets/images/league/winner_trophy.png">{{child.winners_per}}%</div>
              </div>
              <div><span class="leagueBody__mcJoined">{{multiJoined(child.multi_joined)}}</span> <span class="leagueBody__mcJoined">{{cancelContest(child.cancel_contest)}}</span></div>
            </div>
          </div>
        </div>
      </div>
    </perfect-scrollbar>
    <b-button block variant="primary" @click="createTeam()">Create Team</b-button>
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
  multiJoined(m:any){
    return m==1?'M':'S'
  }
  cancelContest(c:any){
    return c==1?'U':'C'
  }
  createTeam(){
    const id = '2160'
    this.$router.push('/app/create-team/'+id)
  }
}
</script>