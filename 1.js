// Challenge 1

// Restrictions
// Dilarang menggunakan built-in function split, slice, splice, includes, find, findIndex, indexOf


// Objectives
// Mampu menyelesaikan masalah yang diberikan. Mengerti konsep dan cara penggunaan looping(termasuk nested loop) dan conditional.


// Directions
// Buatlah sebuah function yang dapat memilih hewan untuk masing-masing Jenisnya. Dimana hewan terpilih adalah hewan dengan nama yang memiliki karakter terpanjang di setiap jenisnya.



// Input berupa array yang berisi data Hewan dan jenisnya yang di wakilkan dengan initial.
// K => Karnivora H => Herbivora O => Omnivora
// Ex: 'Singa:K' ( Nama Hewan : Singa, Jenis : Karnivora )

// Output merupakan sebuah array yang berisi nama hewan dari semua jenis (array dengan 3 data)
// Hewan yang dipilih dari masing - masing jenis adalah hewan yang memiliki nama dengan karakter terpanjang
// Format output adalah sebagai berikut
// EXPECTED OUTPUT :

// ['hewanJenisKarnivora', 'HewanJenisHerbivora', 'hewanJenisomnivora']


// Examples


// function getAnimals(arr) {
//   // Write your code here
// }

// //Test Case 

// console.log(getAnimals(['Singa:K','Kuda:H','Monyet:O']))
// // [ 'Singa','Kuda','Monyet' ]

// console.log(getAnimals(['Macan:K', 'Ayam:O', 'Gajah:H', 'Monyet:O', 'Kerbau:H', 'Musang:O', 'Burung:H', 'Hiu:K']))
// // [ 'Macan', 'Kerbau', 'Monyet' ]

// console.log(getAnimals(['Tikus:O', 'Merpati:H', 'Beruang:O', 'Elang:K', 'Perkutut:H', 'Harimau:K']))
// // [ 'Harimau', 'Perkutut', 'Beruang' ]
// Notes


// Asumsikan setiap jenis akan memiliki minimal 1 Hewan pada input!

// =======================================================================================================

// 1. Ambil karakter terakhir ================================================

// function getAnimals(arr) {
//   const result = ['', '', ''];

//   for (let i = 0; i < arr.length; i++) {
//     const hewan = arr[i];
//     const kategoriHewan = hewan[hewan.length - 1];

//     if (kategoriHewan === 'K' && hewan.length > result[0].length) {
//       result[0] = hewan;
//     }
//     if (kategoriHewan === 'H' && hewan.length > result[1].length) {
//       result[1] = hewan;
//     }
//     if (kategoriHewan === 'O' && hewan.length > result[2].length) {
//       result[2] = hewan;
//     }
//     // console.log(result);
//   }

//   // console.log(result);
  
//   // for (let i = 0; i < result.length; i++) {
//   //   let tmp = '';
    
//   //   for (let j = 0; j < result[i].length - 2; j++) {
//   //     // console.log(result[i][j]);
//   //     tmp += result[i][j];
//   //   }

//   //   // console.log(tmp);
//   //   result[i] = tmp;
//   // }

//   let tmp = '';

//   for (let i = 0; i < result.length; i++) {
    
//     for (let j = 0; j < result[i].length - 2; j++) {
//       // console.log(result[i][j]);
//       tmp += result[i][j];
//     }

//     // console.log(tmp);
//     result[i] = tmp;
//     tmp = '';
//   }

//   return result;
// }

// console.log(getAnimals(['Singa:K','Kuda:H','Monyet:O']))
// [ 'Singa','Kuda','Monyet' ]

console.log(getAnimals(['Macan:K', 'Ayam:O', 'Gajah:H', 'Monyet:O', 'Kerbau:H', 'Musang:O', 'Burung:H', 'Hiu:K']))
// [ 'Macan', 'Kerbau', 'Monyet' ]

// console.log(getAnimals(['Tikus:O', 'Merpati:H', 'Beruang:O', 'Elang:K', 'Perkutut:H', 'Harimau:K']))
// [ 'Harimau', 'Perkutut', 'Beruang' ]

//2. Pake split ==============================================================

function getAnimals(data) {
  const result = [];
  const realResult = [];
  
  for (let i = 0; i < data.length; i++) {
    const hewan = data[i];
    let tampungan = [];
    let tmp = '';
    // console.log(hewan);

    for (let j = 0; j < hewan.length + 1; j++) {
      const huruf = hewan[j];
      if (huruf === ':' || hewan[j] === undefined) {
        tampungan.push(tmp);
        tmp = '';
      } else {
        tmp += huruf;
      }
    }
    // console.log(tampungan);
    result.push(tampungan);
  }

  let karnivora = '';
  let herbivora = '';
  let omnivora = '';

  for (let i = 0; i < result.length; i++) {
    const namaHewan = result[i][0];
    const kategoriHewan = result[i][1];
    
    if (kategoriHewan === 'K' && namaHewan.length > karnivora.length) {
      karnivora = namaHewan;
    }
    if (kategoriHewan === 'H' && namaHewan.length > herbivora.length) {
      herbivora = namaHewan;
    }
    if (kategoriHewan === 'O' && namaHewan.length > omnivora.length) {
      omnivora = namaHewan;
    }
  }

  realResult.push(karnivora, herbivora, omnivora)
  
  return realResult;
}