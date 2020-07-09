// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// KATA 0
const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
// const greenEyes2 = users.filter(function (user) {
//     return user.eyeColor === "green"
// })
printKata(0, greenEyes1)   // If you don't have this function already, see the "Set up" section above.


// KATA 1
const usersActive = users.filter(user => user.isActive === true)
printKata(1, usersActive)

// KATA 2
const emailAddresses = users.map(user => user.email)
printKata(2, emailAddresses)

// KATA 3
const containsOvation = users.some(user => user.company)
printKata(3, containsOvation)

// KATA 4
const firstOver38 = users.find(user => user.age > 38)
printKata(4, firstOver38)

// KATA 5
const activeOver38 = users
    .filter(user => user.isActive === true)
    .find(user => user.age > 38)
printKata(5, activeOver38)

// KATA 6
const balanceFromZenco = users
    .filter(user => user.company === 'ZENCO')
    .map(user => user.balance)
printKata(6, balanceFromZenco)

// KATA 7
const ageOfFugiat = users
    .filter(user => user.tags.includes('fugiat'))
    .map(user => user.age)
printKata(7, ageOfFugiat)