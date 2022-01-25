import Header from './header';
import peoplesRanking from '../data/peoples-ranking';
import peoplesCountDatabase from '../data/peoples-count-database';

const Dashboard = class {
  constructor() {
    this.el = document.querySelector('#app');
    this.header = new Header(true);
  }

  renderWidgetPeoplesCount() {
    const { count } = peoplesCountDatabase;

    return `
      <!-- Peoples count -->
      <div class="row border rounded bg-dark text-light shadow-sm pt-2 pe-2 ps-2 pb-2">
        <div class="col-2 pt-3">
          <img width="50" src="https://cdn-icons.flaticon.com/png/512/3211/premium/3211296.png?token=exp=1642514711~hmac=34ea7fe27cb2e55238b5f99f3ff62920">
        </div>
        <div class="col-10 ps-5">
          <h4>Peoples in database</h4>
          <span class="h1">${count}</span>
        </div>
      </div>
    `;
  }

  renderWidgetPeoplesRankingItem(order, item) {
    const { flag, name, peoplesCount } = item;

    return `
      <tr>
        <th scope="row">${order}</th>
        <td>
          <img width="20" src="${flag}" alt="${name}">
        </td>
        <td>${name}</td>
        <td>${peoplesCount}</td>
      </tr>
    `;
  }

  renderWidgetPeoplesRanking() {
    return `
      <div class="row border rounded bg-dark text-light shadow-sm pt-2 pe-2 ps-2 pb-2">
        <h4>Peoples Ranking by countries</h4>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Flag</th>
              <th scope="col">Country</th>
              <th scope="col">Peoples</th>
            </tr>
          </thead>
          <tbody>
            ${peoplesRanking.map((item, index) => this.renderWidgetPeoplesRankingItem((index + 1), item)).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  renderWidgetPeoplesChartPie() {
    return `
      <div id="donuts" class="row border rounded bg-dark text-light shadow-sm pt-2 pe-2 ps-2 pb-2"></div>
    `;
  }

  render() {
    return `
      ${this.header.render()}
      <main id="dashboard" class="container">
        <div class="row mt-5">
          <div class="col-1"></div>
          <!-- Content -->
          <div class="col-10">
            <div class="row">
              <!-- Content left -->
              <div class="col-6">
                ${this.renderWidgetPeoplesCount()}
                <!-- ${this.renderWidgetPeoplesChartPie()} -->
              </div>
              <!-- Content right -->
              <div class="col-6 ">
                ${this.renderWidgetPeoplesRanking()}
              </div>
            </div>
          </div>
          <div class="col-1"></div>
        </div>
      </main>
    </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Dashboard;
