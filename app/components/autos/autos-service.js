import Auto from "../../models/auto.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/cars/"
})

let _autos = []

function handleError(err) {
  throw new Error(err)
}

export default class AutosService {
  //HTTP destroy car
  destroyAuto(id, showAutos) {
    _api.delete(id)
      .then(res => {
      this.getAutos(showAutos)
      })
    .catch(handleError)
  }
  //HTTP add car
  addAuto(formData, fnToRunOnSuccess) {
    //need to send form data to api (SERVER)
    //wait for server to respond
    //when the server reponds
    //handle the response

    _api.post('', formData)
      .then(res => {
      //tell me via a callback
      this.getAutos(fnToRunOnSuccess)  
      })
      .catch(handleError)
  }

  getAutos(fnToRunOnSuccess) {
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }
    _api.get('')
      .then(res => {
        // _autos =[]
        // for (let i = 0; i < res.data.data.length; i++) {
        //   const item = res.data.data[i];
        //   _autos.push(item)
        // }
        // ^^^^ SAME AS ABOVE
        _autos = res.data.data.map(item => new Auto(item))
        fnToRunOnSuccess()
      })
      .catch(handleError)
  }


  // syn call
  get autos() {
    return _autos
  }


}