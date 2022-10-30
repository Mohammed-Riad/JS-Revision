
// Q1

// function zero(num)
// {
//     if(num <= 0)
//     {
//         console.log("True")
//     }else
//     {
//         console.log("False")
//     }
// }

// let num =parseInt(prompt("Please enter num "));
// zero(num)




// Q3

// function evod(num)
// {
//     num++;
//     console.log(num)
// }


// let num =parseInt(prompt("Please enter num "));
// evod(num)





// Q4

// function evod(num)
// {
//     if(num % 2 == 0 )
//     {
//         console.log("even")
//     }else
//     {
//         console.log("odd")
//     }
// }


// let num =parseInt(prompt("Please enter num "));
// evod(num)




// Q5

// function swap(name1,name2)
// {
//     let name;
//     name=name1;
//     name1=name2;
//     name2=name;
//     console.log('name1 =',name1 ," " ,'name2 =',name2  )
// }

// let name1 =prompt("Please enter name1 ");
// let name2 =prompt("Please enter name2 ");
// swap(name1,name2)


// Q6

// function array(arr)
// {
//    for(let i =0 ; i < arr.length;i++)
//    {
//     console.log(arr[i])
//    }
// }

// arr= ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"]
// array(arr)




// Q7

// function array(arr)
// {
//     arr.forEach((elments)=>
//     {
//         console.log(elments);
//     });
// }

// arr= ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"]
// array(arr)


// Q10

// function Series(arr) 
// {
//     let moves = arr.filter((mov) => {
//         if (mov.rating === 5.0) {
//         return (mov.title)
//        }
//       });
//       console.log(moves)
// }



// let newSeries = [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//         "bookmark": []
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 5.0,
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 5.0,
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }
//          ]

         
//          Series(newSeries)





// Q11

// function Series(newSeries) 
// {
    
//     let max_str = newSeries[0].length;
//     let ans = newSeries[0];
//     for (let i = 1; i < newSeries.length; i++) {
//         const maxi = newSeries[i].length;
//         if (maxi > max_str) {
//             ans = newSeries[i];
//             max_str = maxi;
//         }
//     }
//     console.log(ans) ;
// }



// let newSeries = [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//         "bookmark": []
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 5.0,
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 5.0,
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }
//          ]

         
//          Series(newSeries)




// Q9

// function Series(newSeries) 
// {
    
//     let Series = newSeries.map((sweetItem) => {
//         return sweetItem });
//         console.log(Series)
// }



// let newSeries = [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//         "bookmark": []
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 5.0,
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 5.0,
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }
//          ]

         
//          Series(newSeries)




// Q12

// function red(pokemon)
// {
   
//         const names = pokemon.reduce((acc,value) => {
//             console.log(value.version.name);
//         },0);
    
//         console.log(names);

// }

// let pokemonData =[
//     {
//       "game_index": 76,
//       "version": {
//         "name": "red",
//         "url": "https://pokeapi.co/api/v2/version/1/"
//       }
//     },
//     {
//       "game_index": 76,
//       "version": {
//         "name": "blue",
//         "url": "https://pokeapi.co/api/v2/version/2/"
//       }
//     },
//     {
//       "game_index": 76,
//       "version": {
//         "name": "yellow",
//         "url": "https://pokeapi.co/api/v2/version/3/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "gold",
//         "url": "https://pokeapi.co/api/v2/version/4/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "silver",
//         "url": "https://pokeapi.co/api/v2/version/5/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "crystal",
//         "url": "https://pokeapi.co/api/v2/version/6/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "ruby",
//         "url": "https://pokeapi.co/api/v2/version/7/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "sapphire",
//         "url": "https://pokeapi.co/api/v2/version/8/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "emerald",
//         "url": "https://pokeapi.co/api/v2/version/9/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "firered",
//         "url": "https://pokeapi.co/api/v2/version/10/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "leafgreen",
//         "url": "https://pokeapi.co/api/v2/version/11/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "diamond",
//         "url": "https://pokeapi.co/api/v2/version/12/"
//       }}]

//       red(pokemonData)



// q14

// console.log("Hi Coach ! Rawan");
// console.log("undefined");
// console.log("Zarqa");