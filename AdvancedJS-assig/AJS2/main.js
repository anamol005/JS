import {restaurantRow, restaurantModal} from './components.js';
import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';

const getRestaurants = async () => {
  try {
    const restaurants = await fetchData(baseUrl + '/restaurants');

    const table = document.querySelector('table');

    const showRestaurants = (restaurantsToShow) => {
      table.innerHTML = `
        <tr>
          <th>Name</th>
          <th>Address</th>
        </tr>
      `;

      const rows = restaurantsToShow.map((restaurant) =>
        restaurantRow(restaurant)
      );

      rows.forEach((row, index) => {
        row.addEventListener('click', async () => {
          try {
            document
              .querySelectorAll('.highlight')
              .forEach((element) => element.classList.remove('highlight'));

            row.classList.add('highlight');

            const restaurant = restaurantsToShow[index];

            const todaysMenu = await fetchData(
              `${baseUrl}/restaurants/daily/${restaurant._id}/en`
            );

            const dialog = document.querySelector('dialog');

            dialog.innerHTML = restaurantModal(restaurant, todaysMenu);

            dialog.querySelector('button').addEventListener('click', () => {
              dialog.close();
            });

            dialog.show();
          } catch (error) {
            console.error(error.message);
          }
        });

        table.insertAdjacentElement('beforeend', row);
      });
    };

    restaurants.sort((a, b) => a.name.localeCompare(b.name));

    showRestaurants(restaurants);

    document.querySelector('#sodexo').addEventListener('click', () => {
      const filteredRestaurants = restaurants.filter(
        (restaurant) => restaurant.company === 'Sodexo'
      );

      showRestaurants(filteredRestaurants);
    });

    document.querySelector('#compass').addEventListener('click', () => {
      const filteredRestaurants = restaurants.filter(
        (restaurant) => restaurant.company === 'Compass Group'
      );

      showRestaurants(filteredRestaurants);
    });

    document.querySelector('#all').addEventListener('click', () => {
      showRestaurants(restaurants);
    });
  } catch (error) {
    console.error(error.message);
  }
};

getRestaurants();
