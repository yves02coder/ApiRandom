const array = ['paris', 'lyon', 'montreal', 'bordeaux'];
const array1 = ['paris',33, ['montreal', 'bordeaux'],true];
for (var i = 0; i < array1.length; i++){
    console.log(array[i]);
}
array.sort();
console.log(array1);
//********************************** */
const input = document.getElementById('input');
const video = document.getElementById('video');
let link = "";

input.addEventListener('input', (event) => {
    changeLink(event.target.value) ;
    if (link) {
        video.innerHTML = `<iframe width="634" height="357" src=${link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
   
});
const changeLink = (linkToChange) => {
    let embed = linkToChange.replace('watch?v=', "embed/");
    link = embed.split('&')[0];
}
//https://www.youtube.com/embed/M5QY2_8704o
//https://www.youtube.com/watch?v=M5QY2_8704o