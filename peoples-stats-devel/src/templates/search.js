import axios from 'axios';

import Header from './header';

const Search = class {
  constructor() {
    this.el = document.querySelector('#app');
    this.header = new Header(true);
    this.dataResults = [];
  }

  renderItem(item) {
    const {
      gender,
      name: {
        first,
        last
      },
      location: {
        city,
        country
      },
      picture: {
        large
      }
    } = item;

    return `
      <div class="col-2 mb-4">
        <div class="card">
          <img src="${large}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${first} ${last}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${gender}</li>
            <li class="list-group-item">${city}</li>
            <li class="list-group-item">${country}</li>
          </ul>
          <div class="card-body">
            <div class="d-grid gap-2">
              <button type="button" class="btn btn-primary">See</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  render(data) {
    return `
      ${this.header.render()}
      <main id="search" class="container-fluid mt-4">
        <div class="row">
          ${data.map((item) => this.renderItem(item)).join('')}
        </div>
      </main>
    `;
  }

  run() {
    axios.get('https://randomuser.me/api/?results=20')
      .then((response) => {
        this.dataResults = response.data.results;
        this.el.innerHTML = this.render(this.dataResults);
      }).catch((error) => {
        // handle error
        console.log(error);
      });
  }
};

export default Search;
