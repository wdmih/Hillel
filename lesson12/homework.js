//const showButton = document.getElementById('show-button');
const filterInput = document.getElementById('filter-coctails');
const listElement = document.getElementById('cocktail-list');
const filterChecks = document.getElementById('filter-checks');

class Cocktail {
    constructor (name, ingredients, isAlcohol, type) {
        this.name = name; // instance property
        this.ingredients = ingredients;
        this.isAlcohol = isAlcohol;
        this.type = type;
    }
    getPrice() { // methods of prototype
        return this.ingredients.reduce(function (sum, ingredient) {
            return sum+ingredient.price
        }, 0)
    }
}

class CocktailsList {
    constructor () {
        this.list = []; // model
        this.filteredList = []; // view model

        this.filters = { // view model
          isAlcohol: false,
          isNonAlcohol: false,
          isLong: false,
          isShot: false,
          cocktailValue: ''
        }
    }

    setFilterValue (value, type) {
        this.filters[type] = value;
    }

    add (cocktail) {
        this.list.push(cocktail)
    }

    getAll () {
        return this.list;
    }

    applyFilters() {
        // this.filteredList = this.list.filter(item => {
        //     return item.isAlcohol === this.filters.isAlcohol
        //      && (item.type === 'long' && this.filters.isLong || item.type === 'shot' && !this.filters.isLong  )
        //      && (this.filters.cocktailValue === '' || item.name.indexOf(this.filters.cocktailValue) === 0 )
        // });
        this.filteredList = this.list.filter(item => {
          return (this.filters.isAlcohol ? item.isAlcohol === true : true)
          && (this.filters.isNonAlcohol ? item.isAlcohol === false : true)
          && (this.filters.cocktailValue === '' || item.name.indexOf(this.filters.cocktailValue) === 0)
        });
    }


    render() {
        this.applyFilters(); // change this.list
        let fragment = document.createDocumentFragment();

        this.filteredList.forEach(function (item) {
            let cocktailItem = document.createElement('div');
            cocktailItem.className = 'content-item';

            let cocktailName = document.createElement('h4');
            cocktailName.innerText = item.name;
            cocktailItem.appendChild(cocktailName);

            let cocktailPrice = document.createElement('p');
            cocktailPrice.innerText = `${item.getPrice()}$`;
            cocktailItem.appendChild(cocktailPrice)

            let cocktailBuy = document.createElement('button');
            cocktailBuy.setAttribute("type", "button");
            cocktailBuy.innerText = 'buy';
            cocktailItem.appendChild(cocktailBuy);

            fragment.appendChild(cocktailItem);
        })
        return fragment;
    }
}

let list = new CocktailsList();
list.add(new Cocktail('margarita', [{name: 'tequila', price: 52},{name: 'lime', price: 12} ], true, 'long'))
list.add(new Cocktail('old fashioned', [{name: 'wiskey', price: 74},{name: 'bitter', price: 31} ], true, 'shot'))
list.add(new Cocktail('negroni', [{name: 'wiskey', price: 69},{name: 'bitter', price: 28} ], true, 'long'))
list.add(new Cocktail('mojito', [{name: 'wiskey', price: 38},{name: 'bitter', price: 18} ], false, 'long'))

// const showList = function () {
//     listElement.innerHTML = '';
//     listElement.appendChild(list.render())
// }
//showButton.addEventListener('click', showList);

listElement.appendChild(list.render())

//////////// EVENTS ////////////////////
function filterHandler (e) {
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    list.setFilterValue(value, e.target.name);
    listElement.innerHTML = '';
    listElement.appendChild(list.render())
}
filterInput.addEventListener('input', filterHandler);
filterChecks.addEventListener('change', filterHandler);
