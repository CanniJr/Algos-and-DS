const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// Loop using for loop
const countCompanies = () => {
    for(let i = 0; i < companies.length; i++){
        console.log(companies[i])
    }
}


// Loop using forEach
const countCompaniesAgain = () => {
    companies.forEach(company => {
        console.log(company)
    });
}


// //find tech companies
const findTechComp = 
    companies.filter(company => (company.category === 'Technology'))
//qeknf


// find 80s companies
const eightiesCompanies = 
    companies.filter(company => 
        (company.start >= 1980 && company.start < 1990 )
    )
// console.log(eightiesCompanies)



// companies that lasted 10 years or more
const lastedTenYears = 
    companies.filter(company => (company.end - company.start) >= 10)
// console.log(lastedTenYears)

//test
const Calculator = {
    Add: function(n){
        return n + 1
 }}
// console.log(Calculator.Add(9))

// Square root of ages
const agesSquare = ages.map(age => Math.sqrt(age))
// console.log(agesSquare)

// Sort companies by the start year. sort() takes 2 argument, to compare between each data and then sorts them.
// const sortedCompanies = companies.sort((a, b) => {
//     if(a.start > b.start){
//         return 1 
//     }else{
//         return -1
//     }}
// )
const sortedCompanies = companies.sort((company1, company2) => (company1.start > company2.start ? 1 : -1))



// Sort ages from youngest
// const sortAges = ages.sort((age1, age2) => {
//     if(age1 > age2){
//         return 1
//     }else{
//         return - 1
//     }
// })
// or
const sortAges = ages.sort((a,b) => a - b )



//Algorithm Practice
// Write and algorithm that takes an array of numbers as input and calculates the sum of those numbers. Define the Time Complexity of that algorithm and determine what the loewest possible Time Complexity is for this problem.

const nums = [1,5,10,20]
function sumNumber(nums){  // Linear Time Complexity => O(n)
    // nums = [1,2,3] => sumNumber(nums) = 6
    let result = 0;  // 1
    for (num of nums){  // 1
        result += num  // depends on num in the nums array. In this case = 3 => n
    }
    return result // 1
}
console.log(sumNumber(nums))
// T = 1 + 1 + n + 1 || T = 1 + 1 + 1 + n || T = 3 + n || T = 3 + 1*n
// T = 1*n
// T = n => O(n)


const arr = [ -1,3,8,2,9,5 ]
const arr2 = [ 4,1,2,10,5,20 ]
const target = 24
// From the 2 arrays of integers, find the sum of a pair from each array that is closest to the target.




