// Задание 1
const numbers = {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
        keyin4: 4,
        keyin5: 5,
        keyin6: 6,
        keyin7: 7,
    }
    // Два варианта
    // 1 вариант
    // for (const key in numbers) {
    //     if (numbers[key] >= 3) {
    //         console.log(numbers[key]);

//     }
// }
// 2 вариант
// const myarr = Object.values(numbers);
// for (let i = 0; i < myarr.length; i++) {
//     if (myarr[i] >= 3) {
//         console.log(myarr[i]);
//     }
// }

// Задание 2
// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [{
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {
//             userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };

// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);
// Задание 3

// const products = [{
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },


// ];
// products.forEach((item) => {
//     item.price = item.price * 0.85;
// });

// console.log(products);
// Задание 4
// const products = [{
//         id: 3,
//         price: 127,
//         photos: [
//             "1.jpg",
//             "2.jpg",
//         ],
//     },
//     {
//         id: 5,
//         price: 499,
//         photos: [],
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: [
//             "3.jpg",
//         ],
//     },
// ]
// const productsPhoto = products.filter(getImage => getImage.photos.length != 0)

// const productsPrice = products.sort((a, b) => a.price - b.price);

// console.log(productsPrice);
// console.log(productsPhoto);
// Задание 5
// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// const dayTranslate = [];
// en.forEach((key, i) => dayTranslate[key] = ru[i]);
// console.log(dayTranslate);