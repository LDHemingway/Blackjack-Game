
$(() => {
  console.log("Ready")

  $(document).ready(function () {
    $('.collapsible').collapsible();
  });

  $('.buttons').hide();

  let playerHandSum = 0
  let dealerHandSum = 0
  let playerHand = []
  let dealerHand = []

  var cardArray = [{
    suit: 'hearts',
    name: '2',
    value: 2,
    image: "images/2_of_hearts.png"
  }, {
    suit: 'hearts',
    name: '3',
    value: 3,
    image: "images/3_of_hearts.png"
  }, {
    suit: 'hearts',
    name: '4',
    value: 4,
    image: "images/4_of_hearts.png"
  }, {
    suit: 'hearts',
    name: '5',
    value: 5,
    image: "images/5_of_hearts.png"
  }, {
    suit: 'hearts',
    name: '6',
    value: 6,
    image: "images/6_of_hearts.png"
  }, {
    suit: 'hearts',
    name: '7',
    value: 7,
    image: "images/7_of_hearts.png"
  }, {
    suit: 'hearts',
    name: '8',
    value: 8,
    image: "images/8_of_hearts.png"
  }, {
    suit: 'hearts',
    name: '9',
    value: 9,
    image: "images/9_of_hearts.png"
  }, {
    suit: 'hearts',
    name: '10',
    value: 10,
    image: "images/10_of_hearts.png"
  }, {
    suit: 'hearts',
    name: 'Jack',
    value: 10,
    image: "images/jack_of_hearts.png"
  }, {
    suit: 'hearts',
    name: 'Queen',
    value: 10,
    image: "images/queen_of_hearts.png"
  }, {
    suit: 'hearts',
    name: 'King',
    value: 10,
    image: "images/king_of_hearts.png"
  }, {
    suit: 'hearts',
    name: 'Ace',
    value: 11,
    image: "images/ace_of_hearts.png"
  }, {
    suit: 'clubs',
    name: '2',
    value: 2,
    image: "images/2_of_clubs.png"
  }, {
    suit: 'clubs',
    name: '3',
    value: 3,
    image: "images/3_of_clubs.png"
  }, {
    suit: 'clubs',
    name: '4',
    value: 4,
    image: "images/4_of_clubs.png"
  }, {
    suit: 'clubs',
    name: '5',
    value: 5,
    image: "images/5_of_clubs.png"
  }, {
    suit: 'clubs',
    name: '6',
    value: 6,
    image: "images/6_of_clubs.png"
  }, {
    suit: 'clubs',
    name: '7',
    value: 7,
    image: "images/7_of_clubs.png"
  }, {
    suit: 'clubs',
    name: '8',
    value: 8,
    image: "images/8_of_clubs.png"
  }, {
    suit: 'clubs',
    name: '9',
    value: 9,
    image: "images/9_of_clubs.png"
  }, {
    suit: 'clubs',
    name: '10',
    value: 10,
    image: "images/10_of_clubs.png"
  }, {
    suit: 'clubs',
    name: 'Jack',
    value: 10,
    image: "images/jack_of_clubs.png"
  }, {
    suit: 'clubs',
    name: 'Queen',
    value: 10,
    image: "images/queen_of_clubs.png"
  }, {
    suit: 'clubs',
    name: 'King',
    value: 10,
    image: "images/king_of_clubs.png"
  }, {
    suit: 'clubs',
    name: 'Ace',
    value: 11,
    image: "images/ace_of_clubs.png"
  }, {
    suit: 'spades',
    name: '2',
    value: 2,
    image: "images/2_of_spades.png"
  }, {
    suit: 'spades',
    name: '3',
    value: 3,
    image: "images/3_of_spades.png"
  }, {
    suit: 'spades',
    name: '4',
    value: 4,
    image: "images/4_of_spades.png"
  }, {
    suit: 'spades',
    name: '5',
    value: 5,
    image: "images/5_of_spades.png"
  }, {
    suit: 'spades',
    name: '6',
    value: 6,
    image: "images/6_of_spades.png"
  }, {
    suit: 'spades',
    name: '7',
    value: 7,
    image: "images/7_of_spades.png"
  }, {
    suit: 'spades',
    name: '8',
    value: 8,
    image: "images/8_of_spades.png"
  }, {
    suit: 'spades',
    name: '9',
    value: 9,
    image: "images/9_of_spades.png"
  }, {
    suit: 'spades',
    name: '10',
    value: 10,
    image: "images/10_of_spades.png"
  }, {
    suit: 'spades',
    name: 'Jack',
    value: 10,
    image: "images/jack_of_spades.png"
  }, {
    suit: 'spades',
    name: 'Queen',
    value: 10,
    image: "images/queen_of_spades.png"
  }, {
    suit: 'spades',
    name: 'King',
    value: 10,
    image: "images/king_of_spades.png"
  }, {
    suit: 'spades',
    name: 'Ace',
    value: 11,
    image: "images/ace_of_spades.png"
  }, {
    suit: 'diamonds',
    name: '2',
    value: 2,
    image: "images/2_of_diamonds.png"
  }, {
    suit: 'diamonds',
    name: '3',
    value: 3,
    image: "images/3_of_diamonds.png"
  }, {
    suit: 'diamonds',
    name: '4',
    value: 4,
    image: "images/4_of_diamonds.png"
  }, {
    suit: 'diamonds',
    name: '5',
    value: 5,
    image: "images/5_of_diamonds.png"
  }, {
    suit: 'diamonds',
    name: '6',
    value: 6,
    image: "images/6_of_diamonds.png"
  }, {
    suit: 'diamonds',
    name: '7',
    value: 7,
    image: "images/7_of_diamonds.png"
  }, {
    suit: 'diamonds',
    name: '8',
    value: 8,
    image: "images/8_of_diamonds.png"
  }, {
    suit: 'diamonds',
    name: '9',
    value: 9,
    image: "images/9_of_diamonds.png"
  }, {
    suit: 'diamonds',
    name: '10',
    value: 10,
    image: "images/10_of_diamonds.png"
  }, {
    suit: 'diamonds',
    name: 'Jack',
    value: 10,
    image: "images/jack_of_diamonds.png"
  }, {
    suit: 'diamonds',
    name: 'Queen',
    value: 10,
    image: "images/queen_of_diamonds.png"
  }, {
    suit: 'diamonds',
    name: 'King',
    value: 10,
    image: "images/king_of_diamonds.png"
  }, {
    suit: 'diamonds',
    name: 'Ace',
    value: 11,
    image: "images/ace_of_diamonds.png"
  }]


  $('.startbtn').on('click', () => {
    $('#startbtn').hide()
    $('.buttons').show()
  });


  $(".deal").on("click", function () {
    $(".deal").hide()
    $()
    let randomCard = cardArray[Math.floor(Math.random() * cardArray.length)]
    playerHand.push(randomCard)
    randomCard = cardArray[Math.floor(Math.random() * cardArray.length)]
    playerHand.push(randomCard)
    randomCard = cardArray[Math.floor(Math.random() * cardArray.length)]
    dealerHand.push(randomCard)
    randomCard = cardArray[Math.floor(Math.random() * cardArray.length)]
    dealerHand.push(randomCard)
    console.log("dealer hand", dealerHand)
    let dealerSum = 0
    for (i = 0; i < dealerHand.length; i++) {
      dealerSum = dealerSum + dealerHand[i].value
    } console.log("dealer sum", dealerSum)

    let playerSum = 0
    for (i = 0; i < playerHand.length; i++) {
      playerSum = playerSum + playerHand[i].value
    }
    dealerHandSum = dealerSum;
    console.log("player hand", playerHand)
    console.log("player sum", playerSum)
  });


  $(".hit").on("click", function () {
    let randomCard = cardArray[Math.floor(Math.random() * cardArray.length)]
    playerHand.push(randomCard)
    let dealerSum = 0
    for (i = 0; i < dealerHand.length; i++) {
      dealerSum = dealerSum + dealerHand[i].value
    }
    console.log("Dealer sum", dealerSum)

    let playerSum = 0
    for (i = 0; i < playerHand.length; i++) {
      playerSum = playerSum + playerHand[i].value
    }
    console.log("Player sum", playerSum)

    if (dealerHandSum <= 17) {
      dealerHand.push(randomCard);  
    }

    dealerHandSum = dealerSum
    playerHandSum = playerSum

    if (playerHandSum > 21) {
      swal({
        title: "You bust!",
        text: "Your cards went over 21.",
        icon: "error",
      });
    }
    else if (playerHandSum === 21) {
      swal({
        title: "Blackjack!",
        text: "You got 21!",
        icon: "success",
        button: "Awww yeah!"
      });
    }
    dealerHand.push(randomCard)
    if (dealerHandSum > 21) {
      swal({
        title: "Dealer bust!",
        text: "The dealer went over 21. You win!",
        icon: "success",
      });
    }
    else if (dealerHandSum === 21) {
      swal({
        title: "You lose.",
        text: "The dealer's cards equaled 21.",
        icon: "error",
      });
    }
  

  $(".stand").on("click", function () {
    for (i = 0; i < dealerHand.length; i++) {
      dealerSum = dealerSum + dealerHand[i].value
      console.log("dealer sum", dealerSum)
    }
    dealerHandSum = dealerSum

    if (dealerHandSum <= 17) {
      dealerHand.push(randomCard)
    }
    else if (dealerHandSum > playerHand && dealerHandSum <= 21) {
      swal({
        title: "You Lose",
        text: "The dealer was closer to 21.",
        icon: "error",
      });
    }
    else if (dealerHandSum < playerHandSum && playerHandSum < 21) {
      swal({
        title: "You Win!",
        text: "You scored higher than the dealer",
        icon: "success",
      });
    }
  })

})

})