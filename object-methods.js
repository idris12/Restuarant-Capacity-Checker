let restuarant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    
    
    seatedParty: function(numOfparty){
        this.guestCount = numOfparty
    },

    removedParty: function(numOfPartyRemoved){
        this.guestCount = this.guestCount - numOfPartyRemoved
    },

    
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    }
}

// seatParty
// RemovedParty

restuarant.seatedParty(72)
console.log( restuarant.checkAvailability(4))
console.log(restuarant)
restuarant.removedParty(5)
console.log( restuarant.checkAvailability(4))
console.log(restuarant)




// console.log( restuarant.checkAvailability(60))
 