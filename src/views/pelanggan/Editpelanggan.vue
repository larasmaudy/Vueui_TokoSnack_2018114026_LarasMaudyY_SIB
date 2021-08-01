<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Data Pelanggan</h5>
     <form class="row g-3" @submit.prevent="update">
  
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Pelanggan</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pelanggan.nmp" />
      <div class="alert alert-danger" v-if="validation.nmp">
        {{ validation.nmp[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Total Pesanan</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pelanggan.total_pesan" />
      <div class="alert alert-danger" v-if="validation.total_pesan">
        {{ validation.total_pesan[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Alamat</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pelanggan.alamat" />
      <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
      </div>
  </div>
   <div class="col-md-6">
    <label for="inputEmail4" class="form-label">No Tlp</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pelanggan.notlp" />
      <div class="alert alert-danger" v-if="validation.notlp">
        {{ validation.notlp[0] }}
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

    const pelanggans = reactive({
      nmp: '',
      total_pesan: '',
      alamat: '',
      notlp: ''
    })

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/pelanggan/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.mahasiswa_id)

        pelanggan.nmp = response.data.data.nmp
        pelanggan.total_pesan = response.data.data.total_pesan
        pelanggan.alamat = response.data.data.alamat
        pelanggan.notlp = response.data.data.notlp
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function update(){
      let nmp = pelanggan.nmp
      let total_pesan = pelanggan.total_pesan
      let alamat = pelanggan.alamat
      let notlp = pelanggan.notlp

      axios.put(`http://127.0.0.1:8000/api/pelanggan/${route.params.id}`, {
        nmp: nmp,
        total_pesan: total_pesan,
        alamat: alamat,
        notlp: notlp

      .then(() => {
        router.push({
          name:'pelanggan'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      pelanggans,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>
