export default class RealEstate {
  constructor(data) {
    if (!data.img || !data.sqfoot || !data.bedroom || !data.bathroom || !data.price || !data.address) {
      throw new Error('Must include all fields.')
    }
    this.img = data.img
    this.sqfoot = data.sqfoot
    this.bedroom = data.bedroom
    this.bathroom = data.bathroom
    this.price = data.price
    this.address = data.address
  }
}
