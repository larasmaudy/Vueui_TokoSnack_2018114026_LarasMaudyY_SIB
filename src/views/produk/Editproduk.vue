<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Kontrak Matakuliah</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Produk</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="kontrak.nama" />
      <div class="alert alert-danger" v-if="validation.nama">
        {{ validation.nama[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Keterangan</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="kontrak.ket" />
      <div class="alert alert-danger" v-if="validation.ket">
        {{ validation.ket[0] }}
      </div>
  </div>
   <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Harga</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="kontrak.harga" />
      <div class="alert alert-danger" v-if="validation.harga">
        {{ validation.harga[0] }}
      </div>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Edit</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const produk = reactive({
      nama: '',
      ket: '',
      harga: ''
    })

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/produk/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama)

        kontraks.nama = response.data.data.nama
        kontraks.ket = response.data.data.ket
        kontraks.harga = response.data.data.harga
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function update(){
      let nama = produk.nama
      let ket = produk.ket
      let harga = produk.harga

      axios.put(`http://127.0.0.1:8000/api/produk/${route.params.id}`, {
        nama: nama,
        ket: ket,
        harga: harga
      })
      .then(() => {
        router.push({
          name:'produk'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      produks,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>
