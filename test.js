// // // (async () => {
// // //     const rawdata = await fetch("http://localhost:9090/login", {
// // //         method: 'POST',
// // //         headers: {
// // //             'Content-Type': 'application/json'
// // //         },
// // //         body: JSON.stringify({
// // //             username: 'mohan',
// // //             password: '1214'
// // //         })
// // //     });

// // //     const d = await rawdata.json();
// // //     console.log(d);
// // // })();

// // fetch("http://localhost:9090/login", {
// //     method: "POST",
// //     headers: {
// //         'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify({
// //         "username": "mohan",
// //         "password": "1214"
// //     })
// // }).then(r=>{
// //     return r.json()
// // }).then(d=>console.log(d)
// // )




// const data = new Date();
// const expDate = new Date(data.getTime() + (3 * 60 * 60 * 1000));
// console.log(data.toUTCString());
// console.log(expDate.toUTCString());



const arr = [];
arr.