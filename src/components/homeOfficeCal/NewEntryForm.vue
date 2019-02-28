<template>
    <v-date-picker multiple full-width
 landscape v-model="dates"></v-date-picker>
</template>

<script>
export default {
    data: () => ({
    dates: [],
    menu: false
  })
}
</script>
