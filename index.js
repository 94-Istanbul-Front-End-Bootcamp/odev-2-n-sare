let data = [];

const fetchData = () => {
    //verinin çekildiği yer
    fetch("data.json")
        .then(response => {
            return response.json();
        })
        .then(responseData => {
            //json'dan okunan verinin data array'ine atanması
            data = responseData

            //veri geldikten sonra filtreleme butonu görünür olsun
            let filterClass = document.querySelector("#filterClass");
            let list = document.querySelector(".list");
            list.setAttribute("style", "");
            filterClass.setAttribute("style", "");


            //verinin html içerisinde listelendiği fonksiyon
            listData(responseData);
        })
        .catch(err => {
            //hata yönetimi
            alert("Amanın! Bir hata oluştu!");
        })
}

//verinin ul tag'i içerisinde listelenmesini sağlayan fonksiyon
const listData = (data) => {
    
    let list = document.querySelector(".people");
    list.innerHTML= data.map(element => {
        
        return `
        <tr>
            <td>${element.email}</td>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.city}</td>
            <td>${element.number}</td>
        </tr>
        `;
    })
}

//verinin filtrelenmesini sağlayan fonksiyon
//TODO
const filterData = () => {
    var inputVal = document.getElementById("fname").value;

    if (document.querySelector('#notMinor:checked') !== null && document.querySelector('#true:checked') !== null && inputVal !== "") {

        let filteredData = data.filter(element => { return element.isActive === true && element.age >= 18 && element.name[0].toLowerCase() === inputVal.toLowerCase() });

        listData(filteredData);
    }
}