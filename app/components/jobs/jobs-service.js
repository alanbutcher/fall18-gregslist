import Job from "../../models/job.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/jobs"
})

let _jobs = []

function handleError(err) {
  throw new Error(err)
}

export default class JobsService {

  //HTTP destroy job
  destroyJob(id, showJobs) {
    _api.delete(id)
      .then(res => {
      this.getJobs(showJobs)
      })
    .catch(handleError)
  }

  //HTTP add jobs
  addJob(formData, fnToRunOnSuccess) {
    _api.post('', formData)
      .then(res => {
      this.getJobs(fnToRunOnSuccess)
      })
    .catch(handleError)
  }

  //HTTP get jobs
  getJobs(fnToRunOnSuccess) {
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }
    _api.get('')
      .then(res => {
        _jobs = res.data.data.map(item => new Job(item))
        fnToRunOnSuccess()
      })
    .catch(handleError)
  }

  get jobs() {
    return _jobs
  }
}