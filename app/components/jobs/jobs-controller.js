import JobsService from "./jobs-service.js";

let _jobsService = new JobsService()

export default class JobsController {

  //show all jobs on load
  constructor() {
    _jobsService.getJobs(this.showJobs)
  }

  showJobs() {
    let jobs = _jobsService.jobs 
    let template = `
      <form onsubmit="app.controllers.jobsController.addJob(event)">
        <div class="form-group">
          <label for="company">Company:</label>
          <input type="text" name="company" />
        </div>
        <div class="form-group">
          <label for="jobTitle">Job Title:</label>
          <input type="text" name="jobTitle" />
        </div>
        <div class="form-group">
          <label for="hours">Hours:</label>
          <input type="number" name="hours" />
        </div>
        <div class="form-group">
          <label for="rate">Rate:</label>
          <input type="number" name="rate" />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea type="text" name="description"></textarea>
        </div>
        <button type="submit">Add Job</button>
      </form>
    `
    jobs.forEach(job => {
      template += `
         <div class="col-sm-4 my-1 card">
           <div class="">
            <div class="card-body">
              <h5 class="card-title">${job.company} - ${job.jobTitle} ${job.hours}</h5>
              <div class="card-text">
                <p>Rate:${job.rate}</p>
                <p>${job.description}</p>
                <div>
                  <i class="fa fa-fw fa-trash action muted" onclick="app.controllers.jobsController.destroyJob('${job._id}')"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    })
    document.getElementById('main-content').innerHTML = template
  }

  addJob(event) {
    event.preventDefault(); //prevents the page from reloading
    let form = event.target // the element that triggers the event
    let formData = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
      
    }
    _jobsService.addJob(formData, this.showJobs)
    form.reset()
  }
  destroyJob(id) {
    _jobsService.destroyJob(id, this.showJobs)
  }
}