import Job from "../../models/job.js";

let _jobs = []

export default class JobsService {

  addJob(formData) {
    let newJob = new Job(formData)
    _jobs.push(newJob)
    }

  getJobs() {
    return _jobs
  }
}