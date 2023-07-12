////////////////////////////////
// Easy Going
////////////////////////////////
for(i=1; i<21; i++) {
    console.log(`Easy Going answered ${i}`);
}

////////////////////////////////
// Get Even
////////////////////////////////
for(i=0; i<=200; i+=2){
    console.log(`Get Even answered ${i}`);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for(i=0; i<=100; i++){
if (i%3==0 &&i%5==0 ){
    console.log('FizzBuzz');
}else if(i%3==0){
    console.log('Fizz');
}else if(i%5==0){
    console.log('Buzz');
}else{
    console.log(i);
}
}


////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee.splice(3,1,50001);
wolfy.splice(4,1,"Gotham City");
dart.splice(4,0,'Hawkins');
wolfy.splice(0,1,"Gameboy")
console.log(wolfy);
console.log(sharky);
console.log(plantee);
console.log(porgee);
console.log(dart);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

let ninjaTurtles =['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for(i=0; i<ninjaTurtles.length; i++){
    ninjaTurtles[i]=ninjaTurtles[i].toUpperCase();

   
}

console.log(ninjaTurtles);

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.splice(8,1));
favMovies.sort();
console.log(favMovies);
favMovies.pop();
console.log(favMovies);
favMovies.push('Guardians of the Galaxy');
console.log(favMovies);
favMovies.reverse();
console.log(favMovies);
favMovies.shift();
console.log(favMovies);
favMovies.unshift('Guardians of the Galaxy'); //inserts an element back to the first position of the array 
console.log(favMovies); 


console.log(favMovies.indexOf('Django Unchained'));
console.log(favMovies.splice(14,1));
console.log(favMovies.slice( favMovies.length/2));
var newFavMovies=favMovies.slice( favMovies.length/2)
console.log(newFavMovies);
//fast and furious returns a -1.
console.log(newFavMovies.indexOf('fast and furious')); 




////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];


                    
whereIsWaldo.splice(1,1)
// console.log(whereIsWaldo);
//!need help
whereIsWaldo[1][2]='Noone'
console.log(whereIsWaldo);


////////////////////////////////
//  Excited Kitten
////////////////////////////////

let kitten="Love me, pet me! HSSSSSSS!"
let kittenEven=[`${i} ...human....why you taking pictures of me?`,
`${i} ...the catnip made me do it?`,
`${i} ...why does the red dots aways get away`]

for (i=1; i<=20; i++)
{if ((i+1)%2==0) {
console.log(`${i} ${kitten}`);
}else if
    (i%2===0){
        const random= Math.floor(Math.random()*kittenEven.length);
       console.log(kittenEven[random]);
    
    }
}


////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
console.log(Math.floor(nums.length/2));
console.log(nums[12]);



