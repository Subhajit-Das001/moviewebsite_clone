const movieList = document.querySelector('.movie-list');

async function FetchMovie() {
  try {
    const response = await fetch('https://jsonfakery.com/movies/paginated?page=1');
    const data = await response.json();
    console.log(data.data[0]);


    data.data.forEach(movie => {
      const movieItem = document.createElement('div');
      movieItem.className = 'movie-list-item';

      movieItem.innerHTML = `
        <img class="movie-list-item-img" src="${movie.poster_path}" alt="${movie.name}">
        <span class="movie-title">${movie.original_title}</span>
        <p class="movie-descp">${movie.overview}</p>
        <button class="movie-buttom">Watch</button>
      `;

      movieList.appendChild(movieItem);
    });
  } catch (error) {
    console.error('Failed to fetch movies:', error);
  }
}

window.addEventListener("DOMContentLoaded", FetchMovie);
