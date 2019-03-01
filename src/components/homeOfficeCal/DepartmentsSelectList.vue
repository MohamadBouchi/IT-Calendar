<template>
    <v-select
        :items="departments"
        label="Department"
    ></v-select>
</template>

<script>
export default {
    data: () => ({
      departments: ['ALL', 'DWH', 'Support', 'WWS']
    })
}
</script>
