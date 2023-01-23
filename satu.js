function getAnimals(arr) {
    // Write your code here
    let result=[]
    let hasilSplit = []
    let tampung = []
    let tmp = ""
    for (let i = 0; i < arr.length; i++) {
        tampung = []
        tmp = ""
        // console.log(arr[i]);
        for (let j = 0; j < arr[i].length + 1; j++) {
            //  console.log(arr[i][j]);
            if (arr[i][j] === ":" || !arr[i][j] ) {
                tampung.push(tmp)
                tmp = ""
            }
            else {
                tmp += arr[i][j]
            }
        }
        hasilSplit.push(tampung)
    }
    let karnivora = '';
    let herbivora = '';
    let omnivora = '';
    for (let k = 0; k < hasilSplit.length; k++) {
        // console.log(hasilSplit[k]);
        if(hasilSplit[k][1] === "K" && hasilSplit[k][0].length > karnivora.length){
            karnivora = hasilSplit[k][0]
        }
        else if(hasilSplit[k][1] === "H" && hasilSplit[k][0].length > herbivora.length){
            herbivora = hasilSplit[k][0]
        }
        else if(hasilSplit[k][1] === "O" && hasilSplit[k][0].length > herbivora.length){
            omnivora = hasilSplit[k][0]
        }
    }
    result.push(karnivora, herbivora, omnivora)
    return result
}
  console.log(getAnimals(['Singa:K','Kuda:H','Monyet:O']))
// [ 'Singa','Kuda','Monyet' ]
console.log("=========================================");
console.log(getAnimals(['Macan:K', 'Ayam:O', 'Gajah:H', 'Monyet:O', 'Kerbau:H', 'Musang:O', 'Burung:H', 'Hiu:K']))
// [ 'Macan', 'Kerbau', 'Monyet' ]

console.log(getAnimals(['Tikus:O', 'Merpati:H', 'Beruang:O', 'Elang:K', 'Perkutut:H', 'Harimau:K']))
// [ 'Harimau', 'Perkutut', 'Beruang' ]