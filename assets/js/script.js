$('.counter').counterUp({
    delay: 10,
    time: 1500
});


$(document).ready(function(){
    $(".registerbox input").click(function(){
       $(".registerbox").css('background', '#385BCE');
       $(".registerbox label").css('color', 'white');
       $(".registerbox span").css('color', 'white');

       $(".loginbox").css('background', '#EEF1F7');
       $(".loginbox label").css('color', '#273044');
       $(".loginbox span").css('color', '#2C75E4');
       $(".loginbox input").css('background', 'white');
    });

    $(".loginbox input").click(function(){
        $(".loginbox").css('background', '#385BCE');
        $(".loginbox label").css('color', 'white');
        $(".loginbox span").css('color', 'white');
 
        $(".registerbox").css('background', '#EEF1F7');
        $(".registerbox label").css('color', '#273044');
        $(".registerbox span").css('color', '#2C75E4');
     });
});

const boxs = document.querySelectorAll(".faq");

// const account = document.querySelectorAll(".accountboxes")
// account.forEach(acc => {
//     acc.addEventListener("click", () => {
//         acc.classList.add("active");
//     });
// });


// const heart = document.querySelector(".wishlistfilter span i")

// heart.addEventListener("click",function(){
//     heart.classList.toggle("fa-solid")
// })

boxs.forEach(box => {
    box.addEventListener("click", () => {
        box.classList.toggle("active");
    })
})



$(document).ready(function () {

    $(".appeal").hide();
    $("#filtershow").hide();

    $(".aboutinfo").click(function () {
        $(".profession").show();
        $(".appeal").hide();

    })

    $(".writeus").click(function () {
        $(".profession").hide();
        $(".appeal").show();
    })

    $(".writeus").click(function () {
        $(".writeus").css('color', '#273044');
        $(".aboutinfo").css('color', 'white');

    });

    $(".aboutinfo").click(function () {
        $(".aboutinfo").css('color', '#273044');
        $(".writeus").css('color', 'white');

    });

    $(".grip").click(function () {
        $(".grip").css('color', '#273044');
        $(".grip").css('background', 'rgb(242,242,242)');
        $(".list").css('color', '#2C75E4');
        $(".list").css('background', 'white');
        $(".coursefiltershow").show();
        $("#filtershow").hide();
    });

    $(".list").click(function () {
        $(".list").css('color', '#273044');
        $(".list").css('background', 'rgb(242,242,242)');
        $(".grip").css('color', '#2C75E4');
        $(".grip").css('background', 'white');
        $("#filtershow").show();
        $(".coursefiltershow").hide();
    });

    $("select").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".individual").not("." + optionValue).hide();
                $(".group").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".individual").hide();
                $(".group").hide();
            }
        });
    }).change();

    $("#submit").click(function () {

        var course = $('#selCourse');
        if (course.val() === '') {
            alert("Please select some product options before adding this product to your cart.");
            $('#selCourse').focus();

            return false;
        }
        else return;

    });
})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

