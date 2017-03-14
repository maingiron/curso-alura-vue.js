<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of arrayFotos"><img :src="foto.url" :alt="foto.titulo"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        titulo: 'Alurapic',
        arrayFotos: [
          {
            url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwV4kVzT5McBdGSgqlVeRzubrNH_mOrrkKseDOGFURq20HmsrelEfMU7It',
            titulo: 'Cachorro'
          },
          {
            url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwV4kVzT5McBdGSgqlVeRzubrNH_mOrrkKseDOGFURq20HmsrelEfMU7It',
            titulo: 'Cachorro'
          }
        ]
      }
    }
  }
</script>

<style>

</style>
