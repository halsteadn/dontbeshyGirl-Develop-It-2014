$(document).ready(function () {
    //          $(".box").click(function() {
    //              $(this).css("background-color", "blue");
    //              &(this).html("<p>Click!</p>");
    //          });  
    //the same as bind below

    var highlightColor = '#ff00b8';
    $(".box").bind({
        click: function () {
            $(this).addClass("green");
            $(this).html("<h1><em>hoo hee! that tickles</em></h1>");
        },
        mouseenter: function () {
            $(this)
                .css({
                    "background-color": highlightColor,
                    "border-color": "yellow"
                })
                .html("<p>Hello there. Click me!</p>");
        },

        mouseleave: function () {
            $(this).css("background-color", "cyan");
            $(this).css("border-color", "black");
            $(this).html("<p>Bye for now. Come back soon!</p>");
        }

    });

    $("#friends-form").submit(function () {
        var friendName = $("#friend-name").val();
        var friendHair = $("#friend-hair").val();
        myFriendsfromform(friendName, friendHair);
        //        return false;
    });

});

//            console.log(data);


function displayEvents(data) {
    var events = data.results;

    for (var i = 0; i < events.length; i++) {
        $("#myMeetupevents").append("<p>" + events[i].name + "<p/>")
    }
}

$("#MyMeetUp").submit(function () {
    var topic = $("#meetup-topics").val();
    getMeetups(topic);
    return false;

})


function getMeetups(topic) {
    $.ajax({
        url: "https://api.meetup.com/2/open_events",
        data: {
            state: "CO",
            city: "Boulder",
            topic: topic,
            zip: 80302,
            page: 20,
            key: "1177a7113166f11283c3c673d7f962"
        },
        crossdomain: true,
        dataType: "jsonp",
        type: "GET",
        success: function (data) {},
        error: function (data) {
            alert("something went wrong!");
        }
    })
}

function myFriendsfromform(friendName, friendHair) {
    var sentence = "My friend " + friendName + " really has " + friendHair + " hair!";

    $(".my-friends-description").append(sentence).append("<br/>");
}

function myFriends(friendName, friendHair) {
    $(".my-friends-description").html("");

    var friends = [
        {
            homie: 'Kate',
            hair: 'blond'
        },
        {
            homie: 'Peter',
            hair: 'blue'
        },
        {
            homie: 'Ace',
            hair: 'white'
        }
    ];

    for (var i = 0; i < friends.length; i++) {
        var friendName = friends[i].homie;
        var friendHair = friends[i].hair;

//        var sentence = "My friend " + friendName + " has " + friendHair + " haircolor.<br/>";
//                document.body.innerHTML += "<p>"6547 + sentence + "</p>";
//                alert("My friend " + friendName + " has " + friendHair + " haircolor.");
//        $(".my-friends-description").append(sentence);
        $("#first").css("background-color", "orange");

    }
}