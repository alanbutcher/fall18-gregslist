import JobsService from "./jobs-service.js";

let _jobsService = new JobsService()

export default class JobsController {

  showJobs() {
    console.log('They took er jerbs!')
    let jobs = _jobsService.getJobs() // jobs are in job service, in the get Jobs funtion
    let template = `
      <form onsubmit="app.controllers.jobsController.addJob(event)">
      <div class="form-group">
        <label for="jobTitle">Job Title:</label>
        <input type="text" name="jobTitle" />
      </div>
      <div class="form-group">
        <label for="salary">Salary:</label>
        <input type="number" name="salary" />
      </div>
      <div class="form-group">
        <label for="qualifications">Qualifications:</label>
        <textarea type="text" name="qualifictions"></textarea>
      </div>
      <div class="form-group">
        <label for="img">Image:</label>
        <input type="url" name="img" />
      </div>
      <button type="submit">Add Auto</button>
    </form>
    `
    jobs.forEach(job => {
      template += `
         <div class="col card">
          <img src="${job.img}">
          <h5>${job.jobTitle} - ${job.salary}</h5>
          <p>Qualifications: ${job.qualifications}</p>
        </div>
      `
    })
    document.getElementById('main-content').innerHTML = template
  }

  addJob(event) {
    event.preventDefault(); //prevents the page from reloading
    let form = event.target // the element that triggers the event
    let formData = {
      jobTitle: form.jobTitle.value,
      salary: form.salary.value,
      qualifications: form.value,
      img: form.img.value
    }
    _jobsService.addJob(formData)
    this.showJobs()
    form.reset()
  }

}