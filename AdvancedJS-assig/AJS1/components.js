const restaurantRow = (restaurant) => {
  const {name, address} = restaurant;

  const tr = document.createElement('tr');

  const td1 = document.createElement('td');
  const td2 = document.createElement('td');

  td1.innerText = name;
  td2.innerText = address;

  tr.insertAdjacentElement('beforeend', td1);
  tr.insertAdjacentElement('beforeend', td2);

  return tr;
};

const restaurantModal = (restaurant, todaysMenu) => {
  const {name, address, postalCode, city, phone, company} = restaurant;

  let menu = '';

  todaysMenu.courses.forEach((course) => {
    const {name, diets, price} = course;

    const filteredDiets = diets.filter((diet) => diet !== '*');

    const dietIcons = filteredDiets.map((diet) => {
      switch (diet) {
        case 'G':
          return '🌾&#xfeff;🚫';
        case 'L':
          return '🥛&#xfeff;🚫';
        default:
          return diet;
      }
    });

    menu += `
      <tr>
        <td>${name}</td>
        <td>${dietIcons}</td>
        <td>${price || 'Not provided'}</td>
      </tr>
    `;
  });

  return `
    Restaurant name: ${name}<br />
    Address: ${address}<br />
    Postal code: ${postalCode}<br />
    City: ${city}<br />
    Phone number: ${phone}<br />
    Company: ${company}<br />

    <table>
      ${menu}
    </table>

    <button>Close</button>
  `;
};

export {restaurantRow, restaurantModal};
