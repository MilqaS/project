
// // 3. с помощью метода/методов взять все поля a и b и последовательно поместить их в массив
// // пример: [2,1,5,12,95,7];

// // const arr = [
// //      {a:2, b:1},
// //      {a:5, b: 12},
// //      {a: 95, b: 7}
// // ];

// // const result = arr.reduce((acc,obj)=> {
// //     acc.push(obj.a, obj.b);
// //     return acc;
// // },[]);
// // console.log(result);

// // // или 
// // const result = arr.reduce(acc, {a,b})=>[...acc, a,b], []);
// // console.lolog(result);

// // 4. с помощью метода/методов массива пробежать по массиву persons и каждую секунду выводить сообщения из массива tech
// // пример
// // 'John can HTML'
// // 'John can CSS'
// // 'John can JS'
// // 'David can DIG'
// // 'David can BUILD'
// // 'David can RUN'
// // ...
// // 'Gregory can JAVA'
// // 'Gregory can NGINX'
// // 'Gregory can PYTHON'

// let person = {
//     name: 'John',
//     age: 23,
//     isProgrammer: true,
//     tech: ['HTML', 'CSS', 'JS']
// };

// let person2 = {
//     name: 'David',
//     age: 34,
//     isProgrammer: false,
//     tech: ['DIG', 'BUILD', 'RUN']
// };

// let person3 = {
//     name: 'Peter',
//     age: 41,
//     isProgrammer: false,
//     tech: ['JUMP', 'SPEAK', 'READ']
// };

// let person4 = {
//     name: 'Gregory',
//     age: 54,
//     isProgrammer: true,
//     tech: ['JAVA', 'NGINX', 'PYTHON']
// };


// let pesons = [person, person2, person3,person4];

// const getCounter = () =>{
//     let time = 0;
//     return () => {
//         time += 1000;
//         return time
//     };
// };

// const nextTime = getCounter();

// persons.forEach((pr) => {
//     pr.tech.forEach((techName) => {
//         setTimeout(() => {
//             console.log(`${pr.name} can ${techName}`);
//         },nexTime())
//     })    
// })

// // тоже самое но с деструктуризацией объекта
// persons.forEach(({tech,name}) => {
//     tech.forEach((techName) => {
//         setTimeout(() => {
//             console.log(`${name} can ${techName}`);
//         },nexTime())
//     })    
// })

let person = {
    name: 'John',
    age: 23,
    isProgrammer: true,
    tech: ['HTML', 'CSS', 'JS']
};

