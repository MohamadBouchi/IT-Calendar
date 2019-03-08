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
                   :picker-date.sync="pickerDate"
    ></v-date-picker>
</template>

<script>
import { mapGetters } from 'vuex'
import { bus } from '../../main';
export default {
  data: () => ({
    dates: [],
    pickerDate:null,
    arrayEvents: null,
    date: null
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
  },
  watch: {
    pickerDate(val) {
      this.$emit('setStartDate', val)
      bus.$emit('setStartDate', val)
    }
  }
}
</script>
