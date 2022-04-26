<template>
  <div>
    <footer>
        <div class="footerNavItem" :class="{'selectedFNav' : selected==nav.title }" v-for="nav in footerNav" :key="nav.title">
            <b-icon :icon="nav.icon" scale="1.5" />
            <div class="name">{{nav.title}}</div>
        </div>
    </footer>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Footer extends Vue {
    footerNav = [
        {title:'Home',icon:'house-door-fill'},
        {title:'My Matches',icon:'stars'},
        {title:'Leaderboard',icon:'reception4'},
        {title:'My Account',icon:'person-circle'},
    ]
    selected = 'Home'

}
</script>