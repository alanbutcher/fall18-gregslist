export default class Job {
  constructor(data) {
    // if (!data.jobTitle || !data.salary || !data.qualifications || !data.img) {
    //   throw new Error("Invalid Job Creation")
    // }

    this.jobTitle = data.jobTitle
    this.salary = data.salary
    this.qualifications = data.qualifications
    this.img = data.img
  }
}