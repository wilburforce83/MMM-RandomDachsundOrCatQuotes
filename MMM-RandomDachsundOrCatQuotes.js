Module.register("MMM-RandomDachsundOrCatQuotes", {
    // Define module defaults
    defaults: {
      category: "both", // Default to random quote from both cats and dachsund
      refreshRateHours: 1 // Default refresh rate: 1 hour
    },
  
    // Define start method
    start: function() {
      this.loadQuotes();
      this.scheduleUpdate();
    },
  
    // Method to load quotes from JSON file
    loadQuotes: function() {
      var self = this;
      this.sendSocketNotification("LOAD_QUOTES", { config: this.config });
    },
  
    // Method to schedule periodic updates
    scheduleUpdate: function() {
      var self = this;
      setInterval(function() {
        self.loadQuotes();
      }, this.config.refreshRateHours * 60 * 60 * 1000); // Convert hours to milliseconds
    },
  
    // Override socket notification received method
    socketNotificationReceived: function(notification, payload) {
      if (notification === "QUOTES_LOADED") {
        this.processQuotes(payload.quotes);
      }
    },
  
    // Method to process loaded quotes
    processQuotes: function(quotes) {
      var category = this.config.category;
      var selectedQuotes = [];
  
      if (category === "cats") {
        selectedQuotes = quotes.cats;
      } else if (category === "dachsund") {
        selectedQuotes = quotes.dachsund;
      } else {
        // Random quote from both cats and dachsund
        selectedQuotes = quotes.cats.concat(quotes.dachsund);
      }
  
      // Select a random quote
      var randomQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
  
      // Display the quote
      this.updateDom(2000); // Update the module with a fade effect
      this.sendNotification("SHOW_ALERT", {
        message: randomQuote,
        timer: 5000
      });
    }
  });
  