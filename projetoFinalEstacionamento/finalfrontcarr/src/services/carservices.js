import { http } from './api'

export default {

  findAll: () => {
  return http.get('cars');
},

  findById: (car) => {
  return http.get(`cars/${ car.id }`, { data: car });
},

  save: (car) => {
  return http.post('cars', car);
},

 delete: (car) => {
  return http.delete(`cars/${car.id}` , {data: car });
},

  update: (car) => { //validar um id
  return http.put('cars', car);
 }

}
