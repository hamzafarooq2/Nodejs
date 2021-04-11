const persons = [
    {Name: 'Hamza', Age: 22},
    {Name: 'Ali', Age: 27},
 ];

function getPersons() {
    setTimeout(() => {
        let output = '';
        persons.forEach((person) => {
            output += `<li>${person.Name}</li>`

        });
        document.body.innerHTML = output;

    }, 1000);
}

function createPerson(person, callback) {  // for problem remove callbacks
    setTimeout(() => {
        persons.push(person);
        callback();      // for problem remove this
    }, 2000);
}

// getPersons();    // for problem add getPersons

createPerson({Name: 'Rehan', Age: 20}, getPersons); // for problem remove getPersons
