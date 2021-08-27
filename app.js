const imageAction = document.querySelector('.img-action');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
var audio = new Audio('./voice/Tieng-bua-dap-www_tiengdong_com (mp3cut.net).mp3');
var audio_oigioioi = new Audio('./voice/oigioioi.mp3');
var count = 0;

function reset() {
    imageAction.classList.remove('dam')
    img2.classList.remove('none');
    img1.classList.remove('block');
}
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    count++;
    audio.play();
    audio_oigioioi.play();
    imageAction.classList.add('dam')
    img2.classList.add('none');
    img1.classList.add('block');
    setTimeout(reset, 250);
    if (count == 10) {
        alert('Đập thử vài cái chơi thôi ba :v ');
    }
    if (count == 30) {
        alert('Quần què gì đập giữ vậy:v ');
    }
    if (count == 49) {
        alert('Đập người quá 180p gây ảnh hưởng xấu đên súc khỏe :v');
    }
})