var GRAY_ICON = 'https://hyperdev.com';

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: GRAY_ICON,
      text: 'Help Desk Ticket',
      callback: function(t) {
        return t.popup({
          title: 'Ticket Manager',
          url: './ticket-popup.html',
          height: 180
        });
      }
    }];
  },

  'card-badges': function(t, options) {
    return t.get('card', 'shared', 'ticket')
    .then(function(ticket) {
      if (ticket && ticket.status === 'open') {
        return [{
          text: 'Ticket: OPEN',
          color: 'red'
        }];
      }
      return [];
    });
  },

  'board-buttons': function(t, options) {
    return [{
      icon: GRAY_ICON,
      text: 'Open Tickets Dashboard',
      callback: function(t) {
        return t.modal({
          title: 'All Active Help Desk Tickets',
          url: './board-dashboard.html',
          fullscreen: false,
          height: 500
        });
      }
    }];
  }
});
