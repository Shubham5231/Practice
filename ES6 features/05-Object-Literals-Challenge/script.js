function person(address) {
  const { city, state } = address;
  const newAddress = {
    city,
    state,
    country: 'India',
  };

  console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
}

person({ city: 'Pune', state: 'Maharashtra' });
