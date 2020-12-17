const requestURL = 'data/price.json';

function mainServices() {
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        
        const vehicles = jsonObject['vehicles'];

        let spacer = 0
        for (let i in vehicles) {
            if (vehicles[i].model.length > spacer) {
                spacer = vehicles[i].model.length;
            }
        }

        for (let i in vehicles) {
            let cardItem = document.createElement('div');
            let h4 = document.createElement('h4');
            let div = document.createElement('div');
            let img = document.createElement('img');
            let divImg = document.createElement('div');
            let divOverlayP = document.createElement('div');
            let divOverlay = document.createElement('div');
            let divTxt = document.createElement('div');
            let divBtn = document.createElement('div');
            let a = document.createElement('a');

            cardItem.classList.add('card-item');
            divImg.classList.add('center');
            divOverlayP.classList.add('overlay-parent')
            divOverlay.classList.add('overlay');
            divTxt.classList.add('text');
            divBtn.classList.add('button');

            h4.textContent = vehicles[i].type + "s";
            img.src = "images/" + vehicles[i].defaultImg;
            img.alt = vehicles[i].type;

            divOverlay.textContent = "$" + vehicles[i].model[0].booking[0].full;

            divTxt.innerHTML = "<h5>Models:</h5>";
            for (let ii in vehicles[i].model) {
                divTxt.innerHTML += vehicles[i].model[ii].type + "<br>";
            }

            for (let iii = vehicles[i].model.length; iii < spacer ; iii++) {
                divTxt.innerHTML += "<br>";
            }

            a.href = "reservation.html";
            a.textContent = "Reserve your " + vehicles[i].type + " today!";

            

            divBtn.append(a);  

            divImg.append(divOverlayP);

            divOverlayP.append(img);
            divOverlayP.append(divOverlay);

            div.append(divImg);
            div.append(divTxt);
            div.append(divBtn);


            cardItem.append(h4);
            cardItem.append(div);

            document.getElementById("services").append(cardItem);
        }
        
    });
}