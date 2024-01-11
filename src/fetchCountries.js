const fetchCountries = async (name) => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await response.json();
  
      if (response.ok) {
        return data; 
      } else {
        throw new Error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error fetching countries:', error.message);
      throw new Error(error.message);
    }
  };
  
  export { fetchCountries };