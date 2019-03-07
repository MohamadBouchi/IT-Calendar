<template>
    <v-date-picker multiple 
                   full-width
                   landscape 
                   v-model="dates"
                   :reactive="true"
                   type="date"
                   :events="teamEvents"
                    event-color="red lighten-1"
                   @input="setSelectedDates"
                   :allowed-dates="allowedDates"
    ></v-date-picker>
    <!-- <v-date-picker multiple full-width
                   landscape v-model="dates"
                   @input="test"
                   :reactive="true"
                   :picker-date.sync="pickerDate"
                   type="date"
                   min="2019-01-01"
                   max="2019-12-31"
    ></v-date-picker> -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    dates: [],
    arrayEvents: null
  }),
  created() {
    this.$store.dispatch('teamEvent/getTeamEvents')
  },
  computed: {
    ...mapGetters('teamEvent',['getTeamEvents']),
    teamEvents() {
      return this.getTeamEvents
    }
  },
  methods:{
    setSelectedDates(){
      this.$store.dispatch('homeoffice/setSelectedDates', this.dates)
    },
    allowedDates(val) {
        return ![0, 6].includes(new Date(val).getDay()) && !this.getTeamEvents.includes(val)
      }
  }
}
</script>
