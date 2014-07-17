describe("Tamagotchi", function() {
  describe("initialize", function() {
    it("sets the name and a few other properties", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.name.should.equal("lil dragon");
      myPet.foodLevel.should.equal(10);
      myPet.sleepLevel.should.equal(10);
      myPet.activityLevel.should.equal(10);
    });
  });

  describe("isPlaying", function() {
    it("increases the amount of activity the Tamogatchi has by 1 and decreases sleep or activity randomly", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.isPlaying();
      myPet.foodLevel.should.equal(9);
      myPet.sleepLevel.should.equal(10);
      myPet.activityLevel.should.equal(11);
    });
  });

  // describe("isRestless", function() {
  //   it("Tamagotchi tells you when its restless", function() {
  //     var myPet = Object.create(Tamagotchi);
  //     myPet.initialize("lil dragon");
  //     myPet.activityLevel = 3;
  //     myPet.isRestless.should.equal(true);
  //   });
  // });

  describe("isSleeping", function() {
    it("increases the amount of sleep the Tamogatchi has by 1 and decreases food and activity randomly", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.isSleeping();
      myPet.foodLevel.should.equal(10);
      myPet.sleepLevel.should.equal(11);
      myPet.activityLevel.should.equal(9);
    });
  });

  describe("isEating", function() {
    it("increases the amount of food the Tamogatchi has by 1 and decreases sleep and activity randomly", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.isEating();
      myPet.foodLevel.should.equal(11);
      myPet.sleepLevel.should.equal(10);
      myPet.activityLevel.should.equal(9);
    });
  });

  describe("isAlive", function() {
    it("is alive if food, activity, and sleep levels are all above 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.isAlive().should.equal(true);
    });

    it("is dead if the food level is 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.foodLevel = 0;
      myPet.isAlive().should.equal(false);
    });
  });
});
