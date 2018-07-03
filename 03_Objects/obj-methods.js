let restaurant = {
    name: "Chuck's Hop Shop",
    guestCapacity: 200,
    guests: 0, 
    // method
    checkAvailability: function(partySize) {
        if (this.guestCapacity - this.guests >= partySize)
            return true;
        return false;
    },
    seatParty: function(partySize) {
        if (this.guestCapacity - this.guests >= partySize) {
            this.guests += partySize;
            console.log(`Welcome to the restaurant, you ${partySize}`)
        } else
            console.log(`I'm sorry, we are full at the moment.`)

    },
    removeParty: function(partySize) {
        this.guests -= partySize;
        console.log(`Bye! Have fun you, ${partySize}`);
    }
};

restaurant.seatParty(208);
restaurant.seatParty(196);
console.log(restaurant.checkAvailability(5));
restaurant.removeParty(10);
console.log(restaurant.checkAvailability(5));