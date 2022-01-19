<template>
    <div class="course-table">
        <table>
        <tr v-for="course in courses" :key="course.id">
            <td>{{ course.id }}</td>
            <td>{{ course.name }}</td>
            <td>{{ course.sportArt }}</td>
            <td>{{ course.kursStufe }}</td>
            <td>{{ course.vonDatum }}</td>
            <td>{{ course.ort }}</td>
        </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'CourseTable',
  props: ['courses']
}
</script>

<style lang="scss" scoped>

</style>
