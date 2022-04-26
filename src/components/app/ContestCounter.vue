<template>
  <div>
    {{ status }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import moment from "moment";
@Component({
  components: {},
})
export default class ContestCounter extends Vue {
  @Prop() startTime:any;
  @Prop() endTime:any;
  @Prop() matchStatus:any;
  status = "-- : -- : --";
  get startDate() {
    return moment(this.startTime);
  }
  get endDate() {
    return moment(this.endTime);
  }
  get isMatchStarted() {
    let matchStatus = moment().isSameOrAfter(this.startDate);
    return matchStatus;
  }
  get isMatchFinished() {
    let matchStatus = moment().isSameOrAfter(this.endDate);
    return matchStatus;
  }

  matchStartCounter () {
    let end = moment(this.startTime)
    setInterval(() => {
      let duration = moment.duration(end.diff(moment()), 'milliseconds')
      let hours = Math.floor(duration.asHours())
      let mins = Math.floor(duration.asMinutes()) - hours * 60
      this.status = hours + 'h : ' + mins + 'm : ' + duration.seconds() + 's'
    }, 1000)
  }

  created () {
    if(this.matchStatus!='UPCOMING'){
      this.status = '<span class="label label-danger">'+this.matchStatus+'</span>'
    }else{
      this.matchStartCounter()
    }
  }
}
</script>
