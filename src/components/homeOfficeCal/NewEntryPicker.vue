<template>
    <v-date-picker multiple 
                   full-width
                   landscape 
                   v-model="dates"
                   :reactive="true"
                   type="date"
                   :events="arrayEvents"
                    event-color="red lighten-1"
                   @input="setDatepickerDates"
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
export default {
  data: () => ({
    dates: [],
    arrayEvents: null,
    pickerDate: null
  }),
  mounted () {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30)
      const d = new Date()
      d.setDate(day)
      return d.toISOString().substr(0, 10)
    })
  },
  computed: {
    datepickerDates() {
      return this.$store.state.datepickerDates
    }
  },
  methods:{
    setDatepickerDates(){
      this.$store.dispatch('setDatepickerDates', this.dates)
    }
  },
  // watch: {
  //   pickerDate () {
  //     this.$emit('clicked')
  //   }
  // }
}
</script>
