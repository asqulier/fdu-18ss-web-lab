window.onload = function changeImage(){
    var smallImages = document.getElementById("thumbnails").getElementsByTagName("img");
    var bigImages = document.getElementById("featured").getElementsByTagName("img");
    var imageName = document.getElementById("featured").getElementsByTagName("figcaption");
    var srcs = ["images/medium/5855774224.jpg","images/medium/5856697109.jpg","images/medium/6119130918.jpg","images/medium/8711645510.jpg","images/medium/9504449928.jpg"];

    for (let i=0;i<smallImages.length;i++){
        smallImages[i].onclick = function () {
            bigImages[0].src = srcs[i];
            bigImages[0].title = this.title;
            imageName[0].innerText = this.title;
        }
    }


    document.getElementById("featured").onmouseover = function () {
        startMove(0,80);
    };
    document.getElementById("featured").onmouseout = function () {
        startMove(80,0);
    }
};

function startMove(alpha,itarget){
    let timer = null;
    let speed = 1;
    let imageName1 = document.getElementById("featured").getElementsByTagName("figcaption");
    clearInterval(timer);
    timer = setInterval(
        function () {
            if (alpha<itarget){
                speed = 1;
            }
            else{
                speed = -1;
            }
            if (alpha===itarget){
                clearInterval(timer);
            }
            else {
                alpha = alpha + speed;
                imageName1[0].style.opacity = alpha/100;
                imageName1[0].style.filter = 'alpha(opacity='+alpha+')';
            }
        }, 12.5);
}