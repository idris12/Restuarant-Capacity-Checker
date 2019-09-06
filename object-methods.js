let restuarant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    
    // Assigns number of people seated to guestCount
    seatedParty: function(numOfparty){
        this.guestCount = numOfparty
    },
    // Substracts number of people leaving from guest count
    removedParty: function(numOfPartyRemoved){
        this.guestCount = this.guestCount - numOfPartyRemoved
    },

    // Checks if people who want to seat are greater than guest count and returns a boolean
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    }
}


// Adds 72 to guest count
restuarant.seatedParty(72)

// Checks to see if there avaliability
console.log( restuarant.checkAvailability(4))

// subtracts 5 from guest count
restuarant.removedParty(5)

// Checks to see if there avaliability
console.log( restuarant.checkAvailability(4))






 
