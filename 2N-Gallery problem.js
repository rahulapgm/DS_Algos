/*

A long art gallery has 2N rooms. 
The gallery is laid out as N rows of 2 rooms side-by-side.
Doors connect all adjacent rooms (north-south and east-west, but not diagonally).
The curator has been told that he must close off k of the rooms due to staffing cuts. Since visitors must enter using either room at one end of the gallery, 
proceed through the gallery, and exit from either room at the other end, he must not close off any two rooms that would block passage through the museum.
That is, any two rooms in the same row, or two rooms that touch diagonally in adjacent rows. 
Furthermore, he has determined how much value each room has to the general public, 
and now he wants to close off those k rooms that leave the most value available to the public, without blocking passage through the museum.

*/





let line = readline();
let inputArr = line.split(" ");

const n = inputArr[0];
let k = inputArr[1];

inputArr = [];

for(let i = 0; i < n; i++){
    line = readline();
    const arr = line.split(" ");
    
    let a = parseInt(arr[0]);
    let b = parseInt(arr[1]);
    
    inputArr.push([a,b]);
}

let dpArr = []

for(let i = 0; i < n; i++){
    let temp1 = []
    for(let j = 0; j < k+1; j++){
        let temp2 = [ -1, -1, -1]
        temp1.push(temp2)
    }
    dpArr.push(temp1);
}
dpArr[0][0][0] = inputArr[0][0] + inputArr[0][1]
if (k > 0) {
    dpArr[0][1][1] = inputArr[0][1];
    dpArr[0][1][2] = inputArr[0][0];
}
print(`dppArr[0][0] : ${dpArr[0][0]}`)

for (let i=1; i<n; i++) {
    for (let j=0; j<=i+1 && j<=k; j++) {
        print("**********************")
        print(`i - ${i}`)
        print(`j - ${j}`)
        print(`inputArr[${i}] : ${inputArr[i]}`)
        if (Math.max(...dpArr[i-1][j]) >= 0) {
            print("first")
            dpArr[i][j][0] = inputArr[i][0] + inputArr[i][1] + Math.max(...dpArr[i-1][j]);
            print(`dpArr[${i}][${j}] : ${dpArr[i][j]}`)
        }
        if (j > 0 && Math.max(dpArr[i-1][j-1][1], dpArr[i-1][j-1][0]) >= 0) {
            print("second")
            dpArr[i][j][1] = inputArr[i][1] + Math.max(dpArr[i-1][j-1][1], dpArr[i-1][j-1][0]);
            print(`dpArr[${i}][${j}] : ${dpArr[i][j]}`)
        }
        if (j > 0 && Math.max(dpArr[i-1][j-1][2], dpArr[i-1][j-1][0]) >= 0) {
            print("third")
            dpArr[i][j][2] = inputArr[i][0] + Math.max(dpArr[i-1][j-1][2], dpArr[i-1][j-1][0]);
            print(`dpArr[${i}][${j}] : ${dpArr[i][j]}`)
        }
        
        print("**********************")
    }
}

print(Math.max(...dpArr[n-1][k]));

 print("**********************")
 
for(let i = 0; i < n; i++){
    for(let j = 0; j < k+1; j++){
        print(dpArr[i][j])
    }
    print("**********************")
}

