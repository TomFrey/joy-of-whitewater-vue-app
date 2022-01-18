<template>
  <div class="kurse">
    <h1>This is Kurse page</h1>

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
import CourseService from '@/services/CourseService.js'

export default {

  data () {
    return {
      courses: []
    }
  },

  // LifeCicleHook created()
  created () {
    CourseService.getCourses()
      .then(response => {
        console.log(response.data)
        this.courses = response.data
      })
      .catch(error => {
        console.log('Da war ein Fehler: ' + error.response)
      })
  }

}
</script>
