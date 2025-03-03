async function getJoke() {
  try {
    document.getElementById('joke').classList = '';
    document.querySelector('#ans').classList=''
      const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
      const data = await response.json();
      
      
      document.getElementById('joke').innerHTML = `${data.setup}`; 
      document.getElementById('joke').classList = 'joke';
      document.querySelector('#ans').textContent=`${data.punchline}`
      document.querySelector('#ans').classList='joke'
      
      
      
  } catch (error) {
      console.error('Error fetching joke:', error);
      document.getElementById('joke').innerHTML = "Failed to load joke. Try again!";
  }
}

