// Challenge 2

// Restrictions
// Mengikuti aturan umum saat briefing
// Objectives
// Mampu menyelesaikan masalah yang diberikan Mengerti konsep dan cara penggunaan conditional Mengerti konsep dan cara penggunaan looping Mengerti konsep dan cara penggunaan nested loop Mengerti konsep dan cara penggunaan modular function Mengerti konsep dan cara penggunaan operator pembanding === atau !==
// Direction
// Buatlah program dimana dapat memberi rekomendasi Film apa saja yang bisa ditonton dengan genre-genre yang dipilih user!

// Release 1 - filterMovie
// Function filterMovie merupakan fungsi untuk mencari film apa saya yang bisa ditonton user dari genre yang dipilih Function filterMovie memiliki 1 parameter input yaitu: genres berupa array single dimensi yang berisi genre-genre yang dipilih oleh user. Function filterMovie memiliki output berupa array multi dimensi yang berisi film apa saja yang bisa ditonton berdasarkan index 0 dari variable movies. Jika tidak ada movie yang bisa ditonton, maka kembalikan array kosong [] Contoh:
//   function filterMovie(genres) {
//     let movies = [
//       ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
//       ["Action", "Mad Max", "The Batman", "Josh Wick"],
//       ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
//       ["Comedy", "Safety Last", "The Trip"]
//     ];
//     // write your code here
//   }

//   console.log(filterMovie([ "Action", "Drama", "Comedy" ]));
//   /*
//   [
//     ["Action", "Mad Max", "The Batman", "Josh Wick"],
//     ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
//     ["Comedy", "Safety Last", "The Trip"]
//   ]
//   */

//   console.log(filterMovie([ "Scifi", "Musical" ]));
//   // []
// Release 2 - usersCanWatch
// Function usersCanWatch merupakan main function yang akan memanggil fungsi lain di dalam nya yang berfungsi untuk menampilkan list user dengan film apa saja yang bisa ditonton Function usersCanWatch memiliki 1 parameter input yaitu: users berupa object yang berisi informasi detail dari user. object tersebut memiliki 3 property bertype string, yaitu name, cinema dan movies. Function usersCanWatch memiliki output berupa array multi dimensi yang berisi film apa saja yang bisa ditonton. Jika hasil dari function filterMovie berupa array kosong yang artinya tidak ada film yang bisa ditonton, maka kembalikan "Movie not found" Jika parameter input users berupa invalid atau falsy, maka kembalikan "Invalid Data!" Contoh:
//   function usersCanWatch(users) {
//     // write your code here
//   }

//   console.log(usersCanWatch({
//       name: "Bari",
//       cinema: "XIV",
//       menu: "Action;Drama;Comedy"
//     })
//   );
//   /*
//   [
//     ["Action", "Mad Max", "The Batman", "Josh Wick"],
//     ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
//     ["Comedy", "Safety Last", "The Trip"]
//   ]
//   */

//   console.log(usersCanWatch({
//       name: "Rizka",
//       cinema: "Cinepolos",
//       menu: "Scifi;Musical"
//     })
//   );
//   // "Movie not found"

//   console.log(usersCanWatch());
//   // "Invalid Data!"
// Ikuti Release-Release diatas sehingga dapat membuat program ini berjalan dengan sesuai yang diinginkan!

// ===========================================================================================================

function filterMovie(genres) {
    let movies = [
      ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
      ["Action", "Mad Max", "The Batman", "Josh Wick"],
      ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
      ["Comedy", "Safety Last", "The Trip"]
    ];
  
    // console.log(genres);
    let tmp = '';
    const moviePilihanUser = [];
    
    for (let i = 0; i < genres.length + 1; i++) {
      const huruf = genres[i];
      // console.log(huruf);
      // console.log("==================================================");
      if (huruf === ';' || huruf === undefined) {
        moviePilihanUser.push(tmp);
        tmp = '';
      } else {
        tmp += huruf;
      }
    }
  
    // console.log(moviePilihanUser);
    const result = [];
  
    for (let i = 0; i < moviePilihanUser.length; i++) {
      const genreMovie = moviePilihanUser[i];
      // console.log(genreMovie);
      for (let j = 0; j < movies.length; j++) {
        if (genreMovie === movies[j][0]) {
          result.push(movies[j]);
        }
      }
    }
    
    return result;
  }
  
  function usersCanWatch(users) {
    if (!users) {
      return 'Invalid Data!';
    }
  
    const hasilFilterMovie = filterMovie(users['menu']);
    // console.log(hasilFilterMovie);
  
    if (hasilFilterMovie.length === 0) {
      return 'Movie not found';
    }
  
    return hasilFilterMovie;
  }
  
  console.log(usersCanWatch({
      name: "Bari",
      cinema: "XIV",
      menu: "Action;Drama;Comedy"
    })
  );
  /*
  [
    ["Action", "Mad Max", "The Batman", "Josh Wick"],
    ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
    ["Comedy", "Safety Last", "The Trip"]
  ]
  */
  
  console.log(usersCanWatch({
      name: "Rizka",
      cinema: "Cinepolos",
      menu: "Scifi;Musical"
    })
  );
  // "Movie not found"
  
  console.log(usersCanWatch());
  // "Invalid Data!"