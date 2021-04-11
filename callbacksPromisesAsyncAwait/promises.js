// Used when we use fetch API or Axios, the Mongoose library for DB for nodejs uses promises.

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

function createPerson(person) {  
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            persons.push(person);   
            
           const error = false;
           if(!error){
               resolve(console.log('Resolved'));
           } else {
               reject('Error: Something went wrong.');
           }
        }, 2000);

    });
   
}

// createPerson({ Name: 'Talha', Age: '32' })
// .then(getPersons)
// .catch(err => console.log(err));

//------------------------

// Promise.all

// const promise1 =  Promise.resolve('Hello Hamza');
// const promise2 =  10;
// const promise3 =  new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Chill Pill')
// });

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));