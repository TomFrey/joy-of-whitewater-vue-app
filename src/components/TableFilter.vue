<template>
    <div class="course-filter">
        <div class="course-filter__item">
            <label for="from">Datum von</label>
            <input id="from" type="text" v-model="fromDate" placeholder="01.01.2020">
        </div>
        <div class="course-filter__item">
            <label for="to">Datum bis</label>
            <input id="to" type="text" v-model="toDate" placeholder="31.12.2020">
        </div>
    </div>
    <div class="course-filter">
        <div class="course-filter__item">
            <label for="level">Kursstufe</label>
            <select id="level" v-model="wwLevel">
                <option></option>
                <option>B</option>
                <option>F</option>
                <option>K</option>
                <option>alle</option>
            </select>
        </div>
        <div class="course-filter__item">
            <label for="sport">Sportart</label>
            <input id="sport" type="text" v-model="sportKind" placeholder="Kajak, Kanadier ...">
        </div>
        <div class="course-filter__item">
            <label for="typ">Kurstyp</label>
            <input id="typ" type="text" v-model="courseType" placeholder="Kanukurs, Paddelreise ...">
        </div>
        <div class="course-filter__item">
            <label for="name">Kursname</label>
            <input id="name" type="text" v-model="courseName" placeholder="Kajak Aufbaukurs">
        </div>
        <p>kursStufe: {{ wwLevel }}</p>
    </div>
    <div>
        <button @click='changeFilter()'>Filter</button>
    </div>
</template>

<script>
export default {
  name: 'TableFilter',
  emits: ['filterChanged'],

  data () {
    return {
      wwLevel: '',
      sportKind: '',
      courseType: '',
      courseName: '',
      fromDate: '',
      toDate: ''
    }
  },
  methods: {
    changeFilter () {
      console.log('changeFilter...')
      this.$emit('filterChanged', this.wwLevel)
    }
  }
//   computed: {
//     wwLevel: {
//       get () {
//         return this.wwLevel
//       },
//       set (value) {
//         this.$emit('update:wwLevel', value)
//       }
//     }
//   }
}
</script>

<style lang="scss" scoped>
    .course-filter{
        display: flex;
        background-color: aqua;
        margin-bottom: 16px;

        .course-filter__item{
            display: flex;
            flex-flow: column;
            align-items: flex-start;
            margin-right: 16px;
        }
    }
</style>
