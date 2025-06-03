const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-results");
const showmorebtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage() {
    keyword = searchbox.value.trim();
    if (!keyword) return;

    const url = `https://your-own-api.com/api/search?query=${encodeURIComponent(keyword)}&page=${page}&per_page=12`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (page === 1) {
            searchresult.innerHTML = "";
        }

        const results = data.results;

        results.forEach((image) => {
            const img = document.createElement("img");
            img.src = image.urls.small;
            img.alt = image.alt_description || "Image";

            const imageLink = document.createElement("a");
            imageLink.href = image.links.html;
            imageLink.target = "_blank";
            imageLink.appendChild(img);

            searchresult.appendChild(imageLink);
        });

        if (data.total_pages > page) {
            showmorebtn.style.display = "block";
        } else {
            showmorebtn.style.display = "none";
        }

    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});

showmorebtn.addEventListener("click", () => {
    page++;
    searchImage();
});
