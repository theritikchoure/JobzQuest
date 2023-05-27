function randHex() {
    return (Math.floor(Math.random() * 56) + 200).toString(16);
}

function randColor() {
    return randHex() + "" + randHex() + "" + randHex();
}

const jobsContentHtml = (job, id) => {
    let tags = '';

    job.tags.forEach(tag => {
        let tagBtn = `<button
        class="bg-transparent mb-2 mr-1 hover:bg-black text-xs text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded-full">
        ${tag}
        </button>`;

        tags += tagBtn;
    })

    let content = `<div class="card shadow py-5 bg-yellow-300 rounded-xl my-5" style='background:#${randColor()}' id=${id}>
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
        </div>
    </div>
    </div>`;

    return content;
} 



window.onload = () => {
    let contentType = localStorage.getItem('content');
    changeContent(contentType === 'null' ? 'jobs' : contentType);
}

const changeContent = (type = 'jobs') => {
    localStorage.setItem('content', type);
    let listings = document.getElementById("listings");
    let loader = document.getElementById("loader");

    loader.classList.toggle('hidden'); // loading starts

    // Remove all other listings before changing content 
    let cards = document.querySelectorAll(".card"); // existing cards
    for (let i = 0; i < cards.length; i++) {
        cards[i].remove();
    }

    if(type === 'jobs') {
        console.log(type)
        let str = '';
        let id = jobsData.length;
    
        jobsData.forEach((job) => {
            str += jobsContentHtml(job, id--);
        })
    
        listings.insertAdjacentHTML( 'beforeend', str );
    } else if(type === 'internships') {
        console.log(type)
        let str = '';
        let id = internshipsData.length;

        internshipsData.forEach((job) => {
            str += jobsContentHtml(job, id--);
        })
    
        listings.insertAdjacentHTML( 'beforeend', str );
    }

    loader.classList.toggle('hidden');
}