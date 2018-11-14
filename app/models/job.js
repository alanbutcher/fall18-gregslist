export default class Job {
  constructor(data) {
    if (!data._id || !data.company || !data.jobTitle || !data.hours || !data.hasOwnProperty('rate')) {
      throw new Error("Invalid Job Creation")
    }
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    // this.salary = data.salary
    // this.qualifications = data.qualifications
    // this.img = data.img
  }
}