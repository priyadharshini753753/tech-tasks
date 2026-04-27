const API_KEY = "d087fa8d";

async function searchMovie() {
  const query = document.getElementById("searchInput").value;

  if (!query) return;

  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  const data = await res.json();

  displayMovies(data.Search);
}

function displayMovies(movies) {
  const container = document.getElementById("movies");
  container.innerHTML = "";

  if (!movies) {
    container.innerHTML = "<p>No results found</p>";
    return;
  }

  movies.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie");

    div.innerHTML = `
      <img src="${movie.Poster}" />
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    `;

    container.appendChild(div);
  });
}