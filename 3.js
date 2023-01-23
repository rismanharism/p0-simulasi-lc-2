// Challenge 3

// Restriction
// Hanya boleh menggunakan built-in function yang diperbolehkan di README
// Objectives
// Mampu menyelesaikan sebuah permasalahan dengan membuat kode Javascript. Dapat mengakses data pada array, array multi dimensi dan Object. Mampu menggunakan dan menggabungkan modular function yang disediakan. Mampu menggunakan looping(termasuk nested loop). Mampu melakukan perbandingan dua data. Mampu membuat object baru dari hasil proses yang dilakukan
// Direction
// List Point yang di dapat tiap belanja di Betamart:
// | No | Item | Point/item |
// | --- | ----------------- | ----- |
// | 1 | Moonlight | 120 |
// | 2 | Goldqueen | 550 |
// | 3 | Beras Parist | 1200 |
// | 4 | Minyak Fatma | 2500 |

// List Hadiah yang disediakan, dapat ditukar dengan tiket yang di dapat:

// | No | Point | Hadiah |
// | --- | ------ | --------------------------------------------------------- |
// | 1 | 2000 | Voucher 10k, Sticker, dan Penggaris |
// | 2 | 5000 | Voucher 25k, Kinderboy, Tissue dan Piring |
// | 3 | 10000 | Payung dan Panci |

// Release 1 - getPoints
// Function getPoints merupakan fungsi untuk menghitung total point yang didapat oleh pembeli dari history belanjaan yang dibeli. Function getPoints memiliki 1 parameter input yaitu: belanjaan berupa Array berisi list belanjaan yang telah dibeli. Function getPoints memiliki output berupa object yang memiliki dua buah properti: totalPoint -> Jumlah point yang didapatkan oleh pembeli. belanjaanReport -> Sebuah object yang akan menghitung jumlah pembelanjaan yang sudah dilakukan oleh pembeli.
// Example

// function getPoints(history) {
//   let itemPoint = {
//     'Moonlight': 120,
//     'Goldqueen': 550,
//     'Beras Parist': 1200,
//     'Minyak Fatma': 2500
//   }
//   // write your code here
// }

// const history = [
//   'Minyak Fatma',
//   'Moonlight',
//   'Beras Parist',
//   'Minyak Fatma',
//   'Goldqueen',
//   'Beras Parist',
//   'Moonlight',
//   'Moonlight',
//   'Moonlight',
//   'Minyak Fatma',
//   'Goldqueen',
//   'Goldqueen',
//   'Minyak Fatma',
//   'Beras Parist',
//   'Beras Parist',
//   'Moonlight',
//   'Moonlight',
//   'Minyak Fatma',
//   'Minyak Fatma'
// ]

// console.log(getPoints(history))
// /**
// {
//   totalPoint: 22170,
//   belanjaanReport: { 'Minyak Fatma': 6, Moonlight: 6, 'Beras Parist': 4, Goldqueen: 3 }
// }
// */
// Release 2 - getPrizes
// Function getPrizes merupakan fungsi untuk mencari hadiah apa saja yang didapatkan oleh pembeli, beserta mencari sisa tiket yang ada. Function getPrizes memiliki 1 parameter input yaitu: point berupa number yang berisi total point yang didapat oleh pembeli. Function getPrizes memiliki output berupa array yang berisi kumpulan hadiah yang dapat ditukarkan oleh pembeli Untuk mencari list hadiah yang ingin didapatkan PRIORITASKAN HARGA TERMURAH DAHULU Setiap hadiah hanya bisa diambil 1 kali
// Example

// function getPrizes(point) {
//   let listPrize = [
//     [2000, 'Voucher 10k', 'Sticker', 'Penggaris' ],
//     [5000, 'Voucher 25k', 'Kinderboy', 'Tissue', 'Piring'],
//     [10000, 'Payung', 'Panci']
//   ]
//   // write your code here
// }

// console.log(getPrizes(22000)) // [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy', 'Tissue' ]
// Release 3 - betamart
// Function betamart merupakan main function yang akan memanggil dua fungsi yang sudah kita buat sebelumnya. Function ini akan menampilkan hadiah apa saja yang didapat oleh pembeli berdasarkan point yang didapatkan setelah belanja. Function betamart memiliki 1 parameter input object dengan properties: pembeli => berupa yang berisi nama pembeli. histories => list belanjaan pembeli Function betamart memiliki output berupa object yang memiliki properties: pembeli => nama pembeli. belanjaanReport => merupakan sebuah object yang akan mengembalikan report belanjaan pembeli. prizes => merupakan sebuah array yang akan menampilkan hadiah-hadiah yang didapatkan pembeli. Jika parameter input pembeli adalah falsy, maka tampilkan pesan Tidak ada pembeli yang belanja Hanya terdapat 4 item yang bisa mendapatkan point yaitu: Moonlight, Goldqueen, Beras Parist, Minyak Fatma.
// Example

// function betamart(pembeli) {
//   // write your code here
// }

// console.log(
//   betamart({
//     name: 'Ilham',
//     histories: [
//       'Moonlight',
//       'Goldqueen',
//       'Beras Parist',
//       'Moonlight',
//       'Goldqueen',
//       'Beras Parist',
//       'Minyak Fatma',
//       'Minyak Fatma',
//       'Minyak Fatma',
//       'Moonlight',
//       'Goldqueen',
//       'Goldqueen',
//       'Moonlight',
//       'Beras Parist',
//       'Beras Parist',
//       'Minyak Fatma',
//       'Minyak Fatma',
//       'Moonlight',
//       'Moonlight'
//     ]
//   })
// )
// ./**
// {
//   name: 'Ilham',
//   belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
//   prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
// }
// */

// ==============================================================================================================

function getPoints(history) {
    let itemPoint = {
      'Moonlight': 120,
      'Goldqueen': 550,
      'Beras Parist': 1200,
      'Minyak Fatma': 2500
    }
    
    // console.log(history);
  
    const result = {
      totalPoint: 0,
      belanjaanReport: {}
    }
  
    for (let i = 0; i < history.length; i++) {
      const listBelanjaan = history[i];
      for (const key in itemPoint) {
        if (listBelanjaan === key) { //key = key dari object
          result['totalPoint'] += itemPoint[key]; //itemPoint[key] = value (point)
  
          if (result['belanjaanReport'][listBelanjaan] === undefined) {
            result['belanjaanReport'][listBelanjaan] = 0;
          }
          result['belanjaanReport'][listBelanjaan]++;
        }
      }
    }
  
    // console.log(result);
  
    return result;
  }
  
  /**
  {
    totalPoint: 22170,
    belanjaanReport: { 'Minyak Fatma': 6, Moonlight: 6, 'Beras Parist': 4, Goldqueen: 3 }
  }
  */
  
  function getPrizes(point) {
    let listPrize = [
      [2000, 'Voucher 10k', 'Sticker', 'Penggaris' ],
      [5000, 'Voucher 25k', 'Kinderboy', 'Tissue', 'Piring'],
      [10000, 'Payung', 'Panci']
    ]
    // console.log(point);
    const result = [];
  
    for (let i = 0; i < listPrize.length; i++) {
      let hargaBarang = listPrize[i][0];
      for (let j = 1; j < listPrize[i].length; j++) {
        if (point >= hargaBarang) {
          result.push(listPrize[i][j]);
          point -= hargaBarang;
        }
      }
    }
  
    return result;
  }

  function betamart(pembeli) {
    const hasilBelanja = getPoints(pembeli.histories);
    const hadiahDidapatkan = getPrizes(hasilBelanja['totalPoint']);
    const result = {};
  
    // console.log(pembeli);
    // console.log(hadiahDidapatkan);
    result['name'] = pembeli['name'];
    result['belanjaanReport'] = hasilBelanja['belanjaanReport'];
    result['prizes'] = hadiahDidapatkan;
    
    return result;
  }
  
  console.log(
    betamart({
      name: 'Ilham',
      histories: [
        'Moonlight',
        'Goldqueen',
        'Beras Parist',
        'Moonlight',
        'Goldqueen',
        'Beras Parist',
        'Minyak Fatma',
        'Minyak Fatma',
        'Minyak Fatma',
        'Moonlight',
        'Goldqueen',
        'Goldqueen',
        'Moonlight',
        'Beras Parist',
        'Beras Parist',
        'Minyak Fatma',
        'Minyak Fatma',
        'Moonlight',
        'Moonlight'
      ]
    })
  )
  
  /**
  {
    name: 'Ilham',
    belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
    prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
  }
  */