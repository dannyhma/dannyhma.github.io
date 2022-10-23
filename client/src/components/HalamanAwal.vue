<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <p>
      <button @click='tampilkanMhs'>
        Tampilkan Data Mahasiswa
      </button>
    </p>

    <p v-if=tampil>
      <table class="center">
        <caption>Daftar Mahasiswa Universitas Terbuka</caption>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Nilai</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dataMhs in dataMhsList" :key="dataMhs.id">
            <td>{{dataMhs.no}}</td>
            <td class="left">{{dataMhs.nama}}</td>
            <td>{{dataMhs.kelas}}</td>
            <td>{{dataMhs.nilai}}</td>
          </tr>
        </tbody>
      </table>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HalamanAwal',
  data(){
    return{
      tampil: false,
      dataMhsList: []
    }
  },

  props: {
    msg: String
  },

  methods: {
    tampilkanMhs(){
      let AxiosInstance = axios.create();
      let requestData;

      AxiosInstance.get('http://localhost:4000/mhs')
      .then(
        response => {
          requestData = response.data;

          this.dataMhsList = requestData;
          this.tampil = true;
        }).catch(error => {
          console.log(error.message);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 10px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* style */
.center {
  margin: auto;
}
table {
  border-collapse: collapse;
  width: 20%;
  line-height: 30px;
}
table tbody td.left {
  text-align: left;
}
tbody tr:nth-child(odd) {
  background-color: rgba(156, 189, 245, 0.24);
}
caption {
  margin-bottom: 15px;
  font: normal bold 16px helvetica, arial, sans-serif;;
}
thead {
  background-color: #4c74af;
  color: white;
}
button {
  background-color: #4c74af; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
