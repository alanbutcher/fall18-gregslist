import RealEstate from '../../models/realestate.js';

// @ts-ignore
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/houses"
})

let _realestate = []

function handleError(err) {
  throw new Error(err)
}

export default class RealEstateService {
  //HTTP destroy house
  destroyRealEstate(id, showRealEstate) {
    _api.delete(id)
      .then(res => {
      this.getRealEstate(showRealEstate)
      }) 
    .catch(handleError)
  }
  //HTTP add house
  addRealEstate(formData, fnToRunOnSuccess) {
    _api.post('', formData)
      .then(res => {
      this.getRealEstate(fnToRunOnSuccess)
      })
    .catch(handleError)
  }  
  //HTTP get houses
  getRealEstate(fnToRunOnSuccess) {
    _api.get('')
      .then(res => {
        _realestate = res.data.data.map(item => new RealEstate(item))
        fnToRunOnSuccess()
      })
    .catch(handleError)
  }
  
  get realEstate() {
    return _realestate
  }

}
