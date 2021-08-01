<template>
  <div class="kontrak">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createkontrak">Add Kontrak Matakuliah</router-link>
    <table class="table table-striped">
  <thead>
    <tr>
        <th scope="col">ID</th>
      <th scope="col">Nama Produk</th>
      <th scope="col">Keterangan</th>
      <th scope="col">Harga</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data, index) in produk" :key="index">
      <td>{{ data.id }}</td>
      <td>{{ data.nama }}</td>
      <td>{{ data.ket }}</td>
      <td>
        <router-link class="btn btn-success" :to="{name:'Editproduk', params:{id:data.id}}">Edit</router-link>
        <button @click.prevent="produkDelete(data.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
// import Slider from "@/components/Slider.vue";
import { ref, onMounted } from 'vue';

export default {
  
  setup(){
    let produk = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/produk')
      .then(response => {
        produk.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function kontrakDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/kontrak/${id}`)
      .then(()=>{
        let z = this.produk.map(produk => produk.id).indexOf(id);
        this.produk.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      produk,
      produkDelete
    }
  }
};
</script>
