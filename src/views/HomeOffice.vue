<template lang="pug">
  v-container
    v-layout.mb-4
      v-flex
        DepartmentsSelectList
        DatePicker(ref="datePicker")
        ToolbarBtn(@resetDatePicker="resetDatePicker")
    v-layout
      v-flex
        HomeOfficeCalendar
</template>

<script>

import HomeOfficeCalendar from '@/components/homeOfficeCal/HomeOfficeCalendar'
import DatePicker from '@/components/homeOfficeCal/DatePicker'
import DepartmentsSelectList from '@/components/homeOfficeCal/DepartmentsSelectList'
import ToolbarBtn from '@/components/homeOfficeCal/ToolbarBtn'

export default {
  components: {
    HomeOfficeCalendar,
    ToolbarBtn,
    DepartmentsSelectList,
    DatePicker
  },
  methods: {
    resetDatePicker () {
      // this.$refs.datePicker.$children[0].$children[0].next()
      this.$refs.datePicker.dates = []
    }
  }
}
</script>
