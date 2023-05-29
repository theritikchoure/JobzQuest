function randHex() {
    return (Math.floor(Math.random() * 56) + 200).toString(16);
}

function randColor() {
    return randHex() + "" + randHex() + "" + randHex();
}

const jobsContentHtml = (job, id) => {
    let contentType = localStorage.getItem('content');

    contentType = contentType === 'internships' ? 'internship' : 'job';

    let tags = '';

    job.tags.forEach(tag => {
        let tagBtn = `<button
        class="bg-transparent mb-2 mr-1 hover:bg-black text-xs text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded-full">
        ${tag}
        </button>`;

        tags += tagBtn;
    })

    let content = `<div class="main-card shadow border border-gray-900 my-5 rounded-lg" id=${contentType}-${id}>
    <div class="card shadow py-5 rounded-t-lg rounded-l-none  border-b-0" style='background:#${randColor()}'>
    <div class="row">
        <div class="column pl-9">
            <h2 class="text-xl font-semibold">${job.role}</h2>
            <p class="text-lg">${job.company}</p>
        </div>
        <div class="column pl-9 lg:pl-0">
            ${tags}
        </div>
        <div class="column column-first flex flex-col items-center justify-center">
            <a href=${job.apply_link}
                target="_blank"
                class="bg-red-400 hover:bg-red-500 shadow text-white font-bold py-2 px-8 rounded cursor-pointer">
                Apply
            </a>
            <p class="text-base mt-2">${job.posted_date}</p>
        </div>
    </div>
    </div>
    <div class="card flex flex-col items-center justify-center shadow py-2 bg-transparent">
        <a rel="noopener noreferrer" href='https://twitter.com/intent/tweet?text=Role%20-%20${job.role}%0ACompany%20-%20${job.company}%0ACheck%20out%20-%20https%3A%2F%2Ftheritikchoure.github.io%2FJobzQuest%2F%23${contentType}-${id}' target="_blank"
            title="Share on twitter" class="flex items-center p-1">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current">
                <path
                    d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z">
                </path>
            </svg>
        </a>
    </div>
    </div>`;

    return content;
}

let cookieModal = document.getElementById('cookie-modal');
let cookieBtn = document.getElementById('cookie-accept');


window.onload = async() => {
    let contentType = localStorage.getItem('content');

    if(location.hash !== '') {
        contentType = location.hash.includes('#internship') ? 'internships' : 'jobs';
    }
    
    await changeContent(contentType);

    let cookieConsent = localStorage.getItem('cookie-accept');
    if (JSON.parse(cookieConsent)) {
        cookieModal.classList.add('hidden');
    }

    if(location.hash !== '') {
        document.getElementById(location.hash.replace('#', '')).scrollIntoView();
        // const myDiv = document.getElementById('myDiv');
        // myDiv.scrollIntoView();
        console.log(document.getElementById(location.hash.replace('#', '')))
    }
}

const changeContent = async (type = 'jobs') => {
    localStorage.setItem('content', type);
    let listings = document.getElementById("listings");
    let listingHeading = document.getElementById("listing-heading");

    let loader = document.getElementById("loader");

    loader.classList.toggle('hidden'); // loading starts

    // Remove all other listings before changing content 
    let cards = document.querySelectorAll(".main-card"); // existing cards
    for (let i = 0; i < cards.length; i++) {
        cards[i].remove();
    }

    if (type === 'internships') {
        console.log(type)
        let str = '';
        let id = internshipsData.length;

        internshipsData.forEach((job) => {
            str += jobsContentHtml(job, id--);
        })

        listings.insertAdjacentHTML('beforeend', str);
        listingHeading.innerText = 'Latest Internships';
    } else {
        console.log(type)
        let str = '';
        let id = jobsData.length;

        jobsData.forEach((job) => {
            str += jobsContentHtml(job, id--);
        })

        listings.insertAdjacentHTML('beforeend', str);
        listingHeading.innerText = 'Latest Jobs';
    }

    loader.classList.toggle('hidden');
}

cookieBtn.onclick = function () {
    localStorage.setItem('cookie-accept', true);
    cookieModal.classList.add('hidden');
}

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}