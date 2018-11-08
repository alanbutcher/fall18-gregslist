import AutosController from "./components/autos/autos-controller.js";
import RealEstateController from './components/realestate/realestate-controller.js';

class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController(),
      realEstateController: new RealEstateController()
      // JobsController
    }
  }
}


window.app = new App()
