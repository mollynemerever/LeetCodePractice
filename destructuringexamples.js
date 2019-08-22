//destructuring examples

let office = {
  accounting: { employees: ["Angela", "Kevin", "Oscar"], budget: "$25,000" },
  sales: {
    employees: ["Andy", "Dwight", "Jim", "Phyllis", "Ryan", "Stanley"],
    budget: "$50,000"
  },
  administration: { employees: ["Michael", "Pam"], budget: "$25,000" },
  humanResources: { employees: ["Toby"], budget: null }
};

let { accounting } = office;
//console.log(accounting);

let { sales } = office;
//console.log(sales);
//console.log(sales.employees);

//let { budget } = office;
//console.log(budget);

function totalBudget({ administration: { budget } }) {
  return budget;
}

let { employees, budget } = office.accounting;
//console.log(employees);
//console.log(budget);
//console.log(totalBudget(office));

//destructuring simple Array
// let princesses = ["Ariel", "Aurora", "Belle", "Jasmine", "Rapunzel"];
// let [first, second] = princesses;
// console.log(first); //Ariel
// console.log(second); //Aurora
//
// let princesses = ["Ariel", "Aurora", "Belle", "Jasmine", "Rapunzel"];
// let [mermaid, sleeping, ...remaining] = princesses;
// console.log(mermaid); //Ariel
// console.log(sleeping); //Aurora
// console.log(remaining); //["Belle", "Jasmine", "Rapunzel"]

//let { europe } = hometowns;
// console.log(europe);
// //{ germany: 'Rapunzel', france: 'Belle', norway: 'Elsa' }
//
// let { northAmerica, asia } = hometowns;
// console.log(northAmerica);
// //{ unitedStates: [ 'Pocahontas', 'Tiana' ] }
// console.log(asia);
// //{ china: 'Mulan' }

let hometowns = {
  europe: {
    germany: "Rapunzel",
    france: "Belle",
    norway: "Elsa"
  },
  northAmerica: {
    unitedStates: ["Pocahontas", "Tiana"]
  },
  asia: {
    china: "Mulan"
  }
};

let countryCount = ({ europe, northAmerica, asia }) => {
  console.log(
    `Europe has ${Object.keys(europe).length} countries represented.`
  );
  console.log(
    `North America has ${
      Object.keys(northAmerica).length
    } countries represented.`
  );
  console.log(`Asia has ${Object.keys(asia).length} country represented.`);
};

console.log(countryCount(hometowns));
//Europe has 3 countries represented.
//North America has 1 countries represented.
//Asia has 1 country represented.
