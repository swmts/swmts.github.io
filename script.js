const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace this during deployment
const BASE_URL = 'https://api.themoviedb.org/3';
const CONTENT_ELEMENT = document.getElementById('content');

// Function to fetch API formats from JSON
const fetchApiFormats = async () => {
    const response = await fetch('apiFormats.json');
    const data = await response.json();
    return data;
};

const fetchLatestContent = async (type) => {
    const response = await fetch(`${BASE_URL}/${type}/latest?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    return data;
};

const renderContent = async () => {
    const [apiFormats, movieData, tvData] = await Promise.all([
        fetchApiFormats(),
        fetchLatestContent('movie'),
        fetchLatestContent('tv')
    ]);

    // Create card for movie
    const movieCard = createContentCard(movieData, apiFormats.movie, 'movie');
    CONTENT_ELEMENT.appendChild(movieCard);

    // Create card for TV Series
    const tvCard = createContentCard(tvData, apiFormats.tv, 'tv');
    CONTENT_ELEMENT.appendChild(tvCard);
};

const createContentCard = (data, apiFormats, type) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${data.title || data.name}</h3>
        <p>Release Date: ${data.release_date || data.first_air_date}</p>
        <div class="api-links">
            ${apiFormats.map(format => `
                <a href="${format.url.replace('%tmdbid%', data.id)}">Watch on ${format.title}</a>
            `).join('')}
        </div>
    `;
    return card;
};

// Execute the render function
renderContent();
