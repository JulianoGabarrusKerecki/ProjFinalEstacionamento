<template>
  <div id="app">


    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Cadastros de carros</a>


      </div>
    </nav>

    <img alt="Vue logo" src="./assets/DALE.png">

    <!-- SAVE-->
    <!-- SAVE -->
    <form @submit.prevent="saveAndUpdateCar">

      <div>

        <input type="text" v-model='car.name1' placeholder="Digite o nome do carro">
      </div>
      <div>
        <input type="text" v-model='car.placa1' placeholder="Digite a letras da Placa do carro">
      </div>
      <div>
        <input type="text" v-model='car.numeroPlaca' placeholder="Digite os numeros da placa do carro">
      </div>
      <div>
        <input type="text" v-model='car.time1' placeholder="Digite o horario de entrada">
      </div>
      <div>
        <input type="text" v-model='car.code1' placeholder="Digite os numeros de registro ">
      </div>
      <div>
        <button  class="waves-effect wabes-light btn-small">Salvar</button>

       <button v-show="car.id" @click="cancelUpdate" class="waves-effect wabes-light btn-small">Cancelar</button>
    </div>
    </form>
    <!-- SAVE-->
    <!-- SAVE -->




    <!-- FINBYID -->
    <!-- FINBYID -->

    <form @submit.prevent="findById">
      <div>
        <input type="text" v-model='car.id' placeholder="Digite o codigo do carro">
      </div>
        <button class="waves-effect wabes-light btn-small">Procurar</button>
    </form>
    <div v-show="findCar.id">

      <h1>Carro encontrado</h1>
      <p>
        Codigo: {{findCar.id}} <br>
        Nome do carro: {{findCar.name1}} <br>
        Letras da placa: {{findCar.placa1}} <br>
        Numero da Placa: {{findCar.numeroPlaca}} <br>
        Hora de entrada: {{findCar.time1}} <br>
        Codigo de Segurança: {{findCar.code1}} <br>
      </p>
    </div>

    <!-- FINBYID -->
    <!-- FINBYID -->


<!-- FINBYID -->
<!-- FINDALL -->
    <p>Quantidade de carros: {{cars.length}}</p>
    <table v-show="cars.length > 0">
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Name</th>
          <th>Placa</th>
          <th>Numero da placa</th>
          <th>Time</th>
          <th>Code de segurança</th>
          <th>Excluir</th>
          <th>Alterar</th>
        </tr>
      </thead>
        <tfoot>
          <tr>
            <th>Codigo</th>
            <th>Name</th>
            <th>Placa</th>
            <th>Numero da placa</th>
            <th>Time</th>
            <th>Code de segurança</th>
            <th>Excluir</th>
            <th>Alterar</th>
          </tr>
        </tfoot>
        <tbody>
          <tr v-for="car in cars" :key="car.id">
            <td>{{car.id}}</td>
            <td>{{car.name1}}</td>
            <td>{{car.placa1}}</td>
            <td>{{car.numeroPlaca}}</td>
            <td>{{car.time1}}</td>
            <td>{{car.code1}}</td>
            <td>
              <button type="button" @click="deleteCar(car)" class="waves-effect waves-light btn-small">Excluir</button>
           </td>
           <td>
              <button type="button" @click="updateCar(car)" class="waves-effect waves-light btn-small">Alterar</button>
          </td>
        </tr>
     </tbody>
    </table>
    <!-- FINDALL -->
    <!-- FINDALL -->

        <About message=" Juliano Gabarrus Kerecki"/>





  </div>
</template>





<script>
import CarServices from './services/carservices'
import About from './components/About.vue'

export default {
  data() {
      return {
        car : {
          id: '',
          name1:'',
          placa1:'',
          numeroPlaca:'',
          time1:'',
          code1:''
        },
        findCar : {
          id: '',
          name1:'',
          placa1:'',
          numeroPlaca:'',
          time1:'',
          code1:''
        },
        cars: []
      }
  },
  name: 'App',
  components: {
    About
  },
  mounted() {
  this.listCars();

  },
  methods:{
    listCars() {
      CarServices.findAll().then(response  => {
          this.cars = response.data;
      });
    },
    saveAndUpdateCar() {

      if( !this.car.id) {
        //salvar
        CarServices.save(this.car).then(response => {
          this.listCars();
          this.car = {};
            alert("Carro adicionado com sucesso!");
          //....
          return response;
        });
      }  else {

        CarServices.update(this.car).then(response => {
          this.listCars();
          this.car = {};
            alert("Carro adicionado com sucesso!");
          return response;
        });
      }
    },
    deleteCar(car) {
      if(confirm("Deseja excluir o carro")){
        CarServices.delete(car).then(response =>{
          this.listCars();
          alert("Carro excluido com sucesso!");
          return response;
        });
      }
    },
    findById() {
      //console.log(`id: ${this.client.id}`);
      CarServices.findById(this.car).then(response => {
        this.findCar = response.data;
      });
    },
    updateCar(car) {
        this.car = car;
    },
    cancelUpdate(){
      this.car = {};
      alert("Alteração cancelada")
    }
  }
}
</script>

<style>
h1{
  font-size: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
