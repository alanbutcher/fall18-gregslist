import RealEstateService from './realestate-service.js';

let _realEstateService = new RealEstateService()

export default class RealEstateController {

    //show all on load
  constructor() {
    _realEstateService.getRealEstate(this.showRealEstate)
  }

  showRealEstate() {
    let house = _realEstateService.realEstate
    let template = `
    <form onsubmit="app.controllers.realEstateController.addRealEstate(event)">
      <div class="form-group">
        <label for="imgUrl">Image:</label>
        <input type="url" name="imgUrl" />
      </div>
      <div class="form-group">
        <label for="bedrooms">Bedrooms:</label>
        <input type="number" name="bedrooms" />
      </div>
      <div class="form-group">
        <label for="bathrooms">Bathrooms:</label>
        <input type="number" name="bathrooms" />
      </div>
      <div class="form-group">
        <label for="levels">Levels:</label>
        <input type="number" name="levels" />
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input type="number" name="tear" />
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" name="price" />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea type="text" name="description"></textarea>
      </div>
    <button type="submit">Add Real Estate</button>
  </form>
`
    house.forEach(realestate => {
      template += `
         <div class="col-sm-4 my-1 card">
          <div class="">
            <img class="card-img-top" src="${realestate.imgUrl}">
            <div class="card-body">
              <h5 class="card-title">${realestate.bedrooms} - ${realestate.bathrooms} ${realestate.levels} - ${realestate.year}</h5>
              <div class="card-text">
                <p>Price: ${realestate.price}</p>
                <p>${realestate.description}</p>
                <div>
                  <i class="fa fa-fw fa-trash action muted" onclick="app.controllers.realEstateController.destroyRealEstate('${realestate._id}')"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ` 
    })
    document.getElementById('main-content').innerHTML=template
  }

  addRealEstate(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      imgUrl: form.imgUrl.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      levels: form.levels.value,
      year: form.year.value,
      price: form.price.value, 
      description: form.description.value
      
    }
    _realEstateService.addRealEstate(formData, this.showRealEstate)
    form.reset()
  }

  destroyRealEstate(id) {
    _realEstateService.destroyRealEstate(id, this.showRealEstate)
  }

}
