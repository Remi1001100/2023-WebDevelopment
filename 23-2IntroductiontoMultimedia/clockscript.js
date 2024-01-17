$(document).ready(function () {
    setInterval(function () {
        var milliseconds = new Date().getMilliseconds();
        var seconds = new Date().getSeconds();
        var sdegree = seconds * 6 + milliseconds * 0.006;
        var srotate = "rotate(" + sdegree + "deg)";

        $("#sec").css({"transform": srotate});

        
        var minutes = new Date().getMinutes();
        var mdegree = minutes * 6;
        var mrotate = "rotate(" + mdegree + "deg)";

        $("#min").css({"transform": mrotate});

        var hours = new Date().getHours();
        var hdegree = hours * 30 + (minutes/2);
        var hrotate = "rotate(" + hdegree + "deg)";

        $("#hour").css({"transform": hrotate});
    }, 100);
    
});


setInterval(function () {
    var wyear = new Date().getFullYear();
    var wmonth = new Date().getMonth() + 1;
    var wday = new Date().getDate();

    var whours = new Date().getHours();
    var wminutes = new Date().getMinutes();
    var wseconds = new Date().getSeconds();

    document.getElementById("clock_digital").innerHTML = wday + "-" + wmonth + "-" + wyear + "<br>" + whours + ":" + wminutes + ":" + wseconds;

}, 10)


