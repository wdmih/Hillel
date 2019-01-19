// Ticket Manager a function that takes an additional argument that controls the direction

const someArr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

function ticketManagerArr(arr, direction) {
  let tickets = arr.slice(0);
  // or let tickets = Array.from(arr)
  let avalTickets = tickets.length;

  return {
    byeTicket: function(quantity) {
      if (avalTickets !== 0 && direction === true) {
        return tickets.splice(0, quantity);
      } else if (avalTickets !== 0 && direction === false) {
        return tickets.splice(-quantity);
      }
    },
    showTickets: function() {
      return tickets;
    }
  };
}

let anotherTicketMan = ticketManagerArr(someArr, true);

console.log(anotherTicketMan.showTickets());
anotherTicketMan.byeTicket(2);
console.log(anotherTicketMan.showTickets());

let anotherTicketMan2 = ticketManagerArr(someArr, false);

console.log(anotherTicketMan2.showTickets());
anotherTicketMan2.byeTicket(1);
console.log(anotherTicketMan2.showTickets());
