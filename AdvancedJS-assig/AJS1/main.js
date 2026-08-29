import {restaurantRow, restaurantModal} from './components.js';
import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';

const getRestaurants = async () => {
  try {
    const restaurants = await fetchData(baseUrl + '/restaurants');

    console.log('restaurants', restaurants);

    const table = document.querySelector('table');

    restaurants.sort((a, b) => a.name.localeCompare(b.name));

    restaurants.forEach((restaurant) => {
      const row = restaurantRow(restaurant);

      row.addEventListener('click', async () => {
        document
          .querySelectorAll('.highlight')
          .forEach((element) => element.classList.remove('highlight'));

        row.classList.add('highlight');

        const todaysMenu = await fetchData(
          `${baseUrl}/restaurants/daily/${restaurant._id}/en`
        );

        console.log(todaysMenu);

        const dialog = document.querySelector('dialog');

        dialog.innerHTML = restaurantModal(restaurant, todaysMenu);

        dialog.querySelector('button').addEventListener('click', () => {
          dialog.close();
        });

        dialog.show();
      });

      table.insertAdjacentElement('beforeend', row);
    });
  } catch (error) {
    console.error(error.message);
  }
};

getRestaurants();
