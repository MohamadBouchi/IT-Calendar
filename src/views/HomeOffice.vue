<template lang="pug">
  v-container
    v-layout.mb-4
      v-flex
        DepartmentsSelectList
        NewEntryPicker(@clicked="onClickChild")
        ToolbarBtn
    v-layout
      v-flex
        HomeOfficeCalendar(ref="test")
</template>

<script>

import HomeOfficeCalendar from '@/components/homeOfficeCal/HomeOfficeCalendar'
import NewEntryPicker from '@/components/homeOfficeCal/NewEntryPicker'
import DepartmentsSelectList from '@/components/homeOfficeCal/DepartmentsSelectList'
import ToolbarBtn from '@/components/homeOfficeCal/ToolbarBtn'

export default {
  components: {
    HomeOfficeCalendar,
    ToolbarBtn,
    DepartmentsSelectList,
    NewEntryPicker
  },
  methods: {
    onClickChild () {
      this.$refs.test.$children[0].$children[0].next()
    }
  }
}
</script>
