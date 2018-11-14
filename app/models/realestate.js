export default class RealEstate {
  constructor(data) {
    // if (!data.img || !data.sqfoot || !data.bedroom || !data.bathroom || !data.price || !data.address) {
    //   throw new Error('Must include all fields.')
    // }
    this._id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }
}
