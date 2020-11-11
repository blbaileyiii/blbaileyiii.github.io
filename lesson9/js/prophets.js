const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++ ) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let dOB = document.createElement('p');
            let pOB = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            dOB.textContent = "Date of Birth: " + prophets[i].birthdate;
            pOB.textContent = "Place of Birth: " + prophets[i].birthplace;
            img.src = prophets[i].imageurl;
            img.alt = prophets[i].name + ' ' + prophets[i].lastname + " - " + prophets[i].order;

            card.appendChild(h2);
            card.appendChild(dOB);
            card.appendChild(pOB);
            card.appendChild(img)

            document.querySelector('div.cards').appendChild(card);
        }
    });

/* Fonts from Google Fonts - more at https://fonts.google.com */
WebFont.load({google: {families: ["Cinzel", "Raleway"]}});
