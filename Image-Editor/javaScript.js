

let height = 0;
let width = 0;

let height_box = document.getElementById('height-box');
let width_box = document.getElementById('width-box');
//let image = document.querySelector('.image-to-edit');
let fileupload = document.getElementById('fileupload');
let canvas = document.getElementById('canvas');



// document.getElementById("can").getContext("2d").drawImage('imagetest.png', 0, 0);

// window.onload = function() {
// let can = document.getElementById("canvas");
// let context = can.getContext("2d");
// let templ = document.getElementById('templ');
// context.drawImage(URL.createObjectURL('./imagetest.png'),0,0);
// }

// fileupload.addEventListener('change',function(event) {
//         console.log(image);
//         image.src = URL.createObjectURL(event.target.files[0]);
//         image.onload = function(){   
//             height = image.clientHeight;
//             width = image.clientWidth;
//             height_box.value = height;
//             width_box.value = width;
//         }
//     })

// fileupload.addEventListener('change',function(event) {
//     let file = event.target.files[0];
//     if(!file || file.type.indexOf('image/') !== 0) return;
//     let reader = new FileReader();
//     let img = new Image();
//     reader.readAsDataURL(file);
//     reader.onload = evt => {
//       img.onload = () => {
//         canvas.height = height_box.value = img.height;
//         canvas.width = width_box.value = img.width;
//         let canvasContext = canvas.getContext("2d");
//         canvasContext.drawImage(img, 0 ,0, img.width, img.height);
//       }
//       img.src = evt.target.result;
//     }
//     reader.onerror = evt => {
//       console.error(evt);
//     }
// })





