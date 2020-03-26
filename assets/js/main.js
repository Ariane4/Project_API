var count = 1

fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => {
        console.log(data.data)
        console.log(data.data.memes)
        for (let elt of data.data.memes) {
            document.getElementById("memeSliderContainer").innerHTML += `
            <section>
                <p>1 / <span>${count}</span></p>
                <figure>
                    <img src=${elt.url} alt="">
                </figure>
                <figcaption>
                    <h3>${elt.name}</h3>
                    <a href=${elt.url}>Meme URL</a>
                </figcaption>
            </section>
            `
            count++
        }
    })