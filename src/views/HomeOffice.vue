<template lang="pug">
  v-container
    v-layout.mb-4
      v-flex
        DepartmentsSelectList
        DatePicker(@clicked="onClickChild")
        ToolbarBtn
    v-layout
      v-flex
        HomeOfficeCalendar(ref="test")
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
    onClickChild () {
      this.$refs.test.$children[0].$children[0].next()
    }
  }
}
</script>
