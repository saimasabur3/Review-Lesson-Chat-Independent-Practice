var yourName= "Saima";
var friendsName= "Srimon";

$(".received").css("background-color","pink");
$(".sent").css("background-color","darkred");

$(".haha").click(function(){
var friend = $(".friend-input").val();
    $(".received").append("<p>" + friend + "</p>");
});

$(".lol").click(function(){
    $(".sent").show();
    var you = $(".your-input").val();
    $(".sent").append("<p>" + you + "</p>");
});
                        
















//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}