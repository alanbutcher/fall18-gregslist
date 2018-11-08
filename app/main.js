import AutosController from "./components/autos/autos-controller.js";
import RealEstateController from './components/realestate/realestate-controller.js';
import JobsController from "./components/jobs/jobs-controller.js";

class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController(),
      realEstateController: new RealEstateController(),
      jobsController: new JobsController()
    }
  }
}


window.app = new App()
