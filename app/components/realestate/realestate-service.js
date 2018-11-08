import RealEstate from '../../models/realestate.js';

let _realestate = []

export default class RealEstateService {

  addRealEstate(formData) {
    let newEstate = new RealEstate(formData)
    _realestate.push(newEstate)
  }  
  
  getRealEstate() {
    return _realestate
  }

}
