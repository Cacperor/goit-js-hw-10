import { fetchCountries } from './fetchCountries.js';

const searchBox = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const notification = document.querySelector('.notification');

const debounceFetch = _.debounce(async () => {
  const searchTerm = searchBox.value.trim();

  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  notification.textContent = '';

  if (searchTerm === '') {
    return;
  }

  try {
    const countries = await fetchCountries(searchTerm);

    if (countries.length > 10) {
      Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (countries.length >= 2 && countries.length <= 10) {
      displayCountryList(countries);
    } else if (countries.length === 1) {
      displayCountryInfo(countries[0]);
    } else {
      Notiflix.Notify.info('Oops, there is no country with that name');
    }
  } catch (error) {
    Notiflix.Notify.info(`${error.message}`);
  }
}, 300);

const displayCountryList = (countries) => {
    countryList.innerHTML = '';
  
    countries.forEach((country) => {
      const listItem = document.createElement('li');
      const flagUrl = getFlagUrl(country);
  
      console.log('Country:', country);
      console.log('Flag URL:', flagUrl);
  
      listItem.innerHTML = `
      <img src="${flagUrl}" alt="${country.name.common}" />
      <span>${country.name.common}</span>
    `;
      
      listItem.addEventListener('click', () => displayCountryInfo(country));
      countryList.appendChild(listItem);
    });
  };

  const getFlagUrl = (country) => {
    if (country.flags && country.flags.svg) {
      return country.flags.svg;
    } else if (country.flag && typeof country.flag === 'string') {
      return country.flag;
    }
  
    return '';
  };

  const displayCountryInfo = (country) => {
    const languages = typeof country.languages === 'object'
      ? Object.keys(country.languages).join(', ')
      : 'No information';
  
    const infoHTML = `
      <img src="${getFlagUrl(country)}" alt="${country.name}" />
      <h2>${country.name.common}</h2>
      <p><strong>Capital:</strong> ${country.capital}</p>
      <p><strong>Population:</strong> ${country.population}</p>
      <p><strong>Languages:</strong> ${languages}</p>
    `;
    countryInfo.innerHTML = infoHTML;
  };

searchBox.addEventListener('input', debounceFetch);
