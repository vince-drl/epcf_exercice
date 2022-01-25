import HomePage from './templates/home-page';
import Dashboard from './templates/dashboard';
import Search from './templates/search';

import './index.scss';

const Controller = class {
  routes() {
    const urlPath = window.location.pathname.split('/');

    if (urlPath[1] === 'dashboard') {
      const dashboard = new Dashboard();

      dashboard.run();

      return;
    }

    if (urlPath[1] === 'search') {
      const search = new Search();

      search.run();

      return;
    }

    if (!urlPath[1]) {
      const homePage = new HomePage();

      homePage.run();
    }
  }

  run() {
    this.routes();
  }
};

const controller = new Controller();

controller.run();
