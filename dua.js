function filterMovie(genres) {
    let movies = [
      ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
      ["Action", "Mad Max", "The Batman", "Josh Wick"],
      ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
      ["Comedy", "Safety Last", "The Trip"]
    ];
    // write your code here
    let result=[]
    for (let i = 0; i < genres.length; i++) {
    for (let j = 0; j < movies.length; j++) {
        if(genres[i] === movies[j][0]){
            result.push(movies[j])
        }
    }
    }
    return result
  }
//   console.log(filterMovie([ "Action", "Drama", "Comedy" ]));
   /*
  [
    ["Action", "Mad Max", "The Batman", "Josh Wick"],
    ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
    ["Comedy", "Safety Last", "The Trip"]
  ]
  */
//  console.log("filterMovie=================================================");

  function usersCanWatch(users) {
    // write your code here
    if (!users) {
        return "Invalid Data!";
    }
    let split=[]
    let tmp = ""
    let menus = users["menu"]   
     for (let k = 0; k < menus.length+1; k++) {
    //    console.log(menus[k]);
        if( menus[k]=== ";" || !menus[k] ){
            split.push(tmp)
            tmp=""
        }
        else{
            tmp+=menus[k]
        }

    }
    // console.log(split)
    
    let filter = filterMovie(split)
    if(!filter.length){
        return "Movie not found"
    }
    return filter
  }
  console.log("========================")
  console.log(usersCanWatch({
    name: "Bari",
    cinema: "XIV",
    menu: "Action;Drama;Comedy"
  })
);
console.log("========================")
console.log(usersCanWatch({
    name: "Rizka",
    cinema: "Cinepolos",
    menu: "Scifi;Musical"
  })
);
// "Movie not found"
console.log("========================")
console.log(usersCanWatch());
// "Invalid Data!"