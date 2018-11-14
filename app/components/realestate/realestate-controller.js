import RealEstateService from './realestate-service.js';

let _realEstateService = new RealEstateService()

export default class RealEstateController {

  showRealEstate() {
    console.log('nice house');
    let re = _realEstateService.getRealEstate()
    let template = `
    <form onsubmit="app.controllers.realEstateController.addRealEstate(event)">
      <div class="form-group">
        <label for="img">Image:</label>
        <input type="url" name="img" />
      </div>
      <div class="form-group">
        <label for="sqfoot">Sqfoot:</label>
        <input type="number" name="sqfoot" />
      </div>
      <div class="form-group">
        <label for="bedroom">Bedroom:</label>
        <input type="number" name="bedroom" />
      </div>
  <div class="form-group">
    <label for="bathroom">Bathroom:</label>
    <input type="number" name="bathroom" />
  </div>
  <div class="form-group">
    <label for="price">Price:</label>
    <input type="number" name="price" />
  </div>
  <div class="form-group">
    <label for="address">Address:</label>
    <input type="text" name="address" />
  </div>
  <button type="submit">Add Real Estate</button>
</form>
`
    re.forEach(realestate => {
      template += `
       <div class="col card">
          <img src="${realestate.img}">
          <h5>${realestate.sqfoot} - ${realestate.bedroom} - ${realestate.bathroom}</h5>
          <p>Price: ${realestate.price}</p>
          <p>Address: ${realestate.address}</p>
        </div>
      ` 
    });
    document.getElementById('main-content').innerHTML=template
  }
  addRealEstate(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      img: form.img.value,
      sqfoot: form.sqfoot.value,
      bedroom: form.bedroom.value,
      bathroom: form.bathroom.value,
      price: form.price.value, 
      address: form.address.value
    }
    _realEstateService.addRealEstate(formData)
    this.showRealEstate()
    form.reset()
  }

}
{/* <form onsubmit="app.controllers.realEstateController.addRealEstate(event)">
  <div class="form-group">
    <label for="img">Image:</label>
    <input type="url" name="img" />
  </div>
  <div class="form-group">
    <label for="size">Size::</label>
    <input type="number" name="size" />
  </div>
  <div class="form-group">
    <label for="bedroom">Bedroom:</label>
    <input type="number" name="bedroom" />
  </div>
  <div class="form-group">
    <label for="bathroom">Bathroom:</label>
    <input type="number" name="bathroom" />
  </div>
  <div class="form-group">
    <label for="price">Price:</label>
    <input type="number" name="price" />
  </div>
  <div class="form-group">
    <label for="address">Address:</label>
    <input type="text" name="address" />
  </div>
  <button type="submit">Add Real Estate</button>
</form> */}