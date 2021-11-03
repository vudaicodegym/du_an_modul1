let count = 1;
function autoImage(){
    count+=1;
    if (count > 5){
        count=1
    }
    document.getElementById('auto').src ='ahduan/anh2/img'+  count + '.jpg';
}
function run(){
    setInterval(autoImage, 1500)
}
run()
function buy(){
    alert('demo thôi chưa bán đâu :))')
    alert('cảm ơn đã quan tâm!')
}
// let count = 1;
// function autoImage(){
//     count+=1;
//     if (count > 5){
//         count=1
//     }
//     document.getElementById('auto').src ='ahduan/anh2/img'+  count + '.jpg';
// }
// function run(){
//     setInterval(autoImage, 1000)
// }
// run()