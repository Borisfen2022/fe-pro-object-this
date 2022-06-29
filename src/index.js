export const hotel = {
  quantityOfPlaces: 30,
  priceByPlace: 20,
  bankAccount: 0,
  guests: {},
  getLength: function () {
    return Object.keys(this.guests).length;
  },
  getActualFreePlace: function () {
    return this.quantityOfPlaces - this.getLength();
  },
  paidPerPlace: function () {
    return (this.bankAccount += this.priceByPlace);
  },
  checkInGuest: function (firstName, lastName, money) {
    if (!this.getActualFreePlace()) {
      return 'Sorry, we have not free spaces';
    } else if (money < this.priceByPlace) {
      return 'Sorry, you have not enough money';
    } else {
      this.paidPerPlace();
      const newUser = { firstName, lastName, money: money - this.priceByPlace };
      const index = this.getLength();
      this.guests[index] = newUser;
      return newUser;
    }
  },
};
