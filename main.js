let playerHandSum = 0;
let dealerHandSum = 0;
let playerHand = [];
let dealerHand = [];


$(() => {
  console.log("Ready");
let wins = 0
$('#wins').html(wins)
 

  $(".buttons").hide()
  $("#gameboard").hide()
  $('#winid').hide()

  var cardArray = [{
      suit: "hearts",
      name: "2",
      value: 2,
      image: './images/2_of_hearts.png'
    },
    {
      suit: "hearts",
      name: "3",
      value: 3,
      image: './images/3_of_hearts.png'
    },
    {
      suit: "hearts",
      name: "4",
      value: 4,
      image: './images/4_of_hearts.png'
    },
    {
      suit: "hearts",
      name: "5",
      value: 5,
      image: "./images/5_of_hearts.png"
    },
    {
      suit: "hearts",
      name: "6",
      value: 6,
      image: "./images/6_of_hearts.png"
    },
    {
      suit: "hearts",
      name: "7",
      value: 7,
      image: "./images/7_of_hearts.png"
    },
    {
      suit: "hearts",
      name: "8",
      value: 8,
      image: "./images/8_of_hearts.png"
    },
    {
      suit: "hearts",
      name: "9",
      value: 9,
      image: "./images/9_of_hearts.png"
    },
    {
      suit: "hearts",
      name: "10",
      value: 10,
      image: "./images/10_of_hearts.png"
    },
    {
      suit: "hearts",
      name: "Jack",
      value: 10,
      image: "./images/jack_of_hearts.png"
    },
    {
      suit: "hearts",
      name: "Queen",
      value: 10,
      image: "./images/queen_of_hearts.png"
    },
    {
      suit: "hearts",
      name: "King",
      value: 10,
      image: "./images/king_of_hearts.png"
    },
    {
      suit: "hearts",
      name: "Ace",
      value: 11,
      image: "./images/ace_of_hearts.png"
    },
    {
      suit: "clubs",
      name: "2",
      value: 2,
      image: "./images/2_of_clubs.png"
    },
    {
      suit: "clubs",
      name: "3",
      value: 3,
      image: "./images/3_of_clubs.png"
    },
    {
      suit: "clubs",
      name: "4",
      value: 4,
      image: "./images/4_of_clubs.png"
    },
    {
      suit: "clubs",
      name: "5",
      value: 5,
      image: "./images/5_of_clubs.png"
    },
    {
      suit: "clubs",
      name: "6",
      value: 6,
      image: "./images/6_of_clubs.png"
    },
    {
      suit: "clubs",
      name: "7",
      value: 7,
      image: "./images/7_of_clubs.png"
    },
    {
      suit: "clubs",
      name: "8",
      value: 8,
      image: "./images/8_of_clubs.png"
    },
    {
      suit: "clubs",
      name: "9",
      value: 9,
      image: "./images/9_of_clubs.png"
    },
    {
      suit: "clubs",
      name: "10",
      value: 10,
      image: "./images/10_of_clubs.png"
    },
    {
      suit: "clubs",
      name: "Jack",
      value: 10,
      image: './images/jack_of_clubs.png'
    },
    {
      suit: "clubs",
      name: "Queen",
      value: 10,
      image: "./images/queen_of_clubs.png"
    },
    {
      suit: "clubs",
      name: "King",
      value: 10,
      image: "./images/king_of_clubs.png"
    },
    {
      suit: "clubs",
      name: "Ace",
      value: 11,
      image: "./images/ace_of_clubs.png"
    },
    {
      suit: "spades",
      name: "2",
      value: 2,
      image: "./images/2_of_spades.png"
    },
    {
      suit: "spades",
      name: "3",
      value: 3,
      image: "./images/3_of_spades.png"
    },
    {
      suit: "spades",
      name: "4",
      value: 4,
      image: "./images/4_of_spades.png"
    },
    {
      suit: "spades",
      name: "5",
      value: 5,
      image: "./images/5_of_spades.png"
    },
    {
      suit: "spades",
      name: "6",
      value: 6,
      image: "./images/6_of_spades.png"
    },
    {
      suit: "spades",
      name: "7",
      value: 7,
      image: "./images/7_of_spades.png"
    },
    {
      suit: "spades",
      name: "8",
      value: 8,
      image: "./images/8_of_spades.png"
    },
    {
      suit: "spades",
      name: "9",
      value: 9,
      image: "./images/9_of_spades.png"
    },
    {
      suit: "spades",
      name: "10",
      value: 10,
      image: "./images/10_of_spades.png"
    },
    {
      suit: "spades",
      name: "Jack",
      value: 10,
      image: "./images/jack_of_spades.png"
    },
    {
      suit: "spades",
      name: "Queen",
      value: 10,
      image: "./images/queen_of_spades.png"
    },
    {
      suit: "spades",
      name: "King",
      value: 10,
      image: "./images/king_of_spades.png"
    },
    {
      suit: "spades",
      name: "Ace",
      value: 11,
      image: "./images/ace_of_spades.png"
    },
    {
      suit: "diamonds",
      name: "2",
      value: 2,
      image: "./images/2_of_diamonds.png"
    },
    {
      suit: "diamonds",
      name: "3",
      value: 3,
      image: "./images/3_of_diamonds.png"
    },
    {
      suit: "diamonds",
      name: "4",
      value: 4,
      image: "./images/4_of_diamonds.png"
    },
    {
      suit: "diamonds",
      name: "5",
      value: 5,
      image: "./images/5_of_diamonds.png"
    },
    {
      suit: "diamonds",
      name: "6",
      value: 6,
      image: "./images/6_of_diamonds.png"
    },
    {
      suit: "diamonds",
      name: "7",
      value: 7,
      image: "./images/7_of_diamonds.png"
    },
    {
      suit: "diamonds",
      name: "8",
      value: 8,
      image: "./images/8_of_diamonds.png"
    },
    {
      suit: "diamonds",
      name: "9",
      value: 9,
      image: "./images/9_of_diamonds.png"
    },
    {
      suit: "diamonds",
      name: "10",
      value: 10,
      image: "./images/10_of_diamonds.png"
    },
    {
      suit: "diamonds",
      name: "Jack",
      value: 10,
      image: "./images/jack_of_diamonds.png"
    },
    {
      suit: "diamonds",
      name: "Queen",
      value: 10,
      image: "./images/queen_of_diamonds.png"
    },
    {
      suit: "diamonds",
      name: "King",
      value: 10,
      image: "./images/king_of_diamonds.png"
    },
    {
      suit: "diamonds",
      name: "Ace",
      value: 11,
      image: "./images/ace_of_diamonds.png"
    }
  ];

  $(".startbtn").on("click", () => {
    $("#startbtn").hide();
    $(".buttons").show();
    $("#redeal").hide();
    $("#winid").show()
    $("#directions").hide()
  });

  $("#deal").on("click", function () {
    $("#deal").hide()
    $("#redeal").show()
    $("#gameboard").show()

    let randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
    playerHand.push(randomCard);
    $("#player").append(`
      <img class="card" src="${randomCard.image}"/>
    `)
    randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
    playerHand.push(randomCard);
    $("#player").append(`
      <img class="card" src="${randomCard.image}"/>
    `)
    randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
    dealerHand.push(randomCard);
    $("#dealer").append(`
      <img class="card" src="${randomCard.image}"/>
    `)
    randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
    dealerHand.push(randomCard);
    $("#dealer").append(`
      <img class="backofcard" src="./images/back_of_card.png"/>
    `)
    for (i = 0; i < dealerHand.length; i++) {
      dealerHandSum += dealerHand[i].value;
    }
    console.log("dealer hand", dealerHand);
    console.log("dealer sum", dealerHandSum);

    for (i = 0; i < playerHand.length; i++) {
      playerHandSum += playerHand[i].value;
    }

    console.log("player hand", playerHand);
    console.log("player sum", playerHandSum);

    if (playerHandSum === 21) {
      $("#hit").hide()
      $("#stand").hide()
      wins++
      swal({
        title: "Blackjack!",
        text: "You got 21!",
        icon: "success",
        button: "Awww yeah!"
      });
    }
    if (dealerHandSum === 21) {
      $("#hit").hide()
      $("#stand").hide()
      swal({
        title: "You lose.",
        text: "The dealer's cards equaled 21.",
        icon: "error"
      });
    }


  });

  $("#hit").on("click", function () {
      let randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
      playerHand.push(randomCard)
      $("#player").append(`
      <img class="card" src="${randomCard.image}"/>
    `)
      playerHandSum += randomCard.value


      randomCard = cardArray[Math.floor(Math.random() * cardArray.length)]
      if (dealerHandSum <= 17) {
        dealerHand.push(randomCard);
        $("#dealer").append(`
      <img class="card" src="${randomCard.image}"/>
    `)
        dealerHandSum += randomCard.value
      }
      console.log(dealerHand)
      console.log("Dealer sum", dealerHandSum);
      console.log(playerHand);
      console.log("Player sum", playerHandSum);

      if (playerHandSum > 21) {
        $("#hit").hide()
        $("#stand").hide()
        swal({
          title: "You bust!",
          text: "Your cards went over 21.",
          icon: "error"
        });
      }
      if (playerHandSum === 21) {
        $("#hit").hide()
        $("#stand").hide()
        wins++
        swal({
          title: "Blackjack!",
          text: "You got 21!",
          icon: "success",
          button: "Awww yeah!"
        });
      }
      if (dealerHandSum > 21) {
        $("#hit").hide()
        $("#stand").hide()
        wins++
        swal({
          title: "Dealer bust!",
          text: "The dealer went over 21. You win!",
          icon: "success"
        });
      }
      if (dealerHandSum === 21) {
        $("#hit").hide()
        $("#stand").hide()
        swal({
          title: "You lose.",
          text: "The dealer's cards equaled 21.",
          icon: "error"
        });
      }
    })


    $("#stand").on("click", function () {
      console.log("starting stand")
      if (dealerHandSum <= 17){
        randomCard = cardArray[Math.floor(Math.random() * cardArray.length)]
        dealerHand.push(randomCard)
        $("#dealer").append(`
      <img class="card" src="${randomCard.image}"/>
    `)
        dealerHandSum += randomCard.value
      }
      if (dealerHandSum <= 17){
        randomCard = cardArray[Math.floor(Math.random() * cardArray.length)]
        dealerHand.push(randomCard)
        $("#dealer").append(`
      <img class="card" src="${randomCard.image}"/>
    `)
      }
      console.log("dealer hand", dealerHand)
      console.log("dealer sum", dealerHandSum);

      if (dealerHandSum > playerHandSum && dealerHandSum <= 21) {
        $("#hit").hide()
        $("#stand").hide()
        console.log("dealer win")
        swal({
          title: "You Lose",
          text: "The dealer was closer to 21.",
          icon: "error"
        });
      } else if (dealerHandSum < playerHandSum && playerHandSum < 21) {
        $("#hit").hide()
        $("#stand").hide()
        wins++
        console.log("player win")
        swal({
          title: "You Win!",
          text: "You scored higher than the dealer",
          icon: "success"
      
        });
      } else if (dealerHandSum === playerHandSum) {
        $("#hit").hide()
        $("#stand").hide()
        swal({
          title: "It's a tie!",
          text: "You and the dealer have the same score.",
          icon: "success"
      
        });
        
      }
      console.log("ending stand")
    })
  

      $('#redeal').on("click", function () {
        $('#dealer').empty()
        $('#player').empty()
        $("#hit").show()
        $("#stand").show()
        playerHandSum = 0;
        dealerHandSum = 0;
        playerHand = [];
        dealerHand = [];
        console.log("player hand", playerHand)
        console.log("player hand sum", playerHandSum)
        let randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
        playerHand.push(randomCard);
        $("#player").append(`
        <img class="card" src="${randomCard.image}"/>
      `)
        randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
        playerHand.push(randomCard);
        $("#player").append(`
        <img class="card" src="${randomCard.image}"/>
      `)
        randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
        dealerHand.push(randomCard);
        $("#dealer").append(`
        <img class="card" src="${randomCard.image}"/>
      `)
        randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
        dealerHand.push(randomCard);
        $("#dealer").append(`
        <img class="card" src="./images/back_of_card.png"/>
      `)
        for (i = 0; i < dealerHand.length; i++) {
          dealerHandSum += dealerHand[i].value;
        }
        console.log("dealer hand", dealerHand);
        console.log("dealer sum", dealerHandSum);

        for (i = 0; i < playerHand.length; i++) {
          playerHandSum += playerHand[i].value;
        }

        console.log("player hand", playerHand);
        console.log("player sum", playerHandSum);
        
        if (playerHandSum > 21) {
          $("#hit").hide()
          $("#stand").hide()
          swal({
            title: "You bust!",
            text: "Your cards went over 21.",
            icon: "error"
          });
        }
        if (playerHandSum === 21) {
          $("#hit").hide()
          $("#stand").hide()
          wins++
          swal({
            title: "Blackjack!",
            text: "You got 21!",
            icon: "success",
            button: "Awww yeah!"
          });
        }
        if (dealerHandSum > 21) {
          $("#hit").hide()
          $("#stand").hide()
          wins++
          swal({
            title: "Dealer bust!",
            text: "The dealer went over 21. You win!",
            icon: "success"
          });
        }
        if (dealerHandSum === 21) {
          $("#hit").hide()
          $("#stand").hide()
          swal({
            title: "You lose.",
            text: "The dealer's cards equaled 21.",
            icon: "error"
          });
        }
      })
    });
  
