/// //////////////////////////
/// TO PROTO
/// //////////////////////////
let buttonsProto = {
  registerEvent: function(type, callback) {
    this.events.push({
      id: Date.now(),
      type: type,
      callback: callback
    });
  },
  getEvents: function() {
    return this.events;
  },
  clearEvents: function() {
    this.events = [];
  },
  getEvenstByType: function(type) {
    return this.events.filter(function(event) {
      return event.type === type;
    });
  }
};

function CreateButton(label, width, height) {
  return Object.create(buttonsProto, {
    label: {
      value: label,
      writable: true,
      configurable: true,
      enumerable: true
    },
    width: {
      value: width,
      writable: true,
      configurable: true,
      enumerable: true
    },
    height: {
      value: height,
      writable: true,
      configurable: true,
      enumerable: true
    },
    events: {
      value: [],
      writable: true,
      configurable: true,
      enumerable: true
    }
  });
}

let btn1 = new CreateButton('test', 50, 50);
btn1.registerEvent('click', () => {});
console.log(btn1.getEvenstByType('click'));
