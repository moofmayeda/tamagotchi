var Tamagotchi = {
  initialize: function(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },
  isPlaying: function() {
    this.activityLevel += 1;
    if (Math.random() >= .5) {
      this.foodLevel -= 1;
    } else {
      this.sleepLevel -= 1;
    }
  },
  isSleeping: function() {
    this.sleepLevel += 1;
    if (Math.random() >= .5) {
      this.foodLevel -= 1;
    } else {
      this.activityLevel -= 1;
    }
  },
  isEating: function() {
    this.foodLevel += 1;
    if (Math.random() >= .5) {
      this.sleepLevel -= 1;
    } else {
      this.activityLevel -= 1;
    }
  },
  isAlive: function() {
      if(this.foodLevel > 0 && this.sleepLevel > 0 && this.activityLevel > 0) {
      return true;
    } else {
      return false;
    }
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var myPet = Object.create(Tamagotchi);
    var nameInput = $("input").val();
    myPet.initialize(nameInput);
    $("#pet-name").text(myPet.name);
    $(".life-story").show();
    $("#play").click(function(event) {
      myPet.isPlaying();
      $("ul").append("<li>"+myPet.name+" is romping in the yard.</li>");
      if (!myPet.isAlive()) {
        alert("Your pet is dead.");
      }
    });
    $("#sleep").click(function(event) {
      myPet.isSleeping();
      $("ul").append("<li>"+myPet.name+" is sleeping soundly.</li>");
      if (!myPet.isAlive()) {
        alert("Your pet is dead.");
      }
    });
    $("#feed").click(function(event) {
      myPet.isEating();
      $("ul").append("<li>"+myPet.name+" is eating treats.</li>");
      if (!myPet.isAlive()) {
        alert("Your pet is dead.");
      }
    });
  });
});
