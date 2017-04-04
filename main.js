const request = require('request');

var report = {
  instagram: false,
  twitter: false,
  itevents: false
};


function check() {
  // Статус пухограма
  request.get('https://rss.caaat.pro/instagram.rss', function(err, response) {
    report.instagram = false;
    if (err) {
      console.log(err);
      return;
    }
    if (response.statusCode == 200) {
      report.instagram = true;
    }
  });

  // Статус Твитопуха
  request.get('https://rss.caaat.pro/twitter.rss', function(err, response) {
    report.twitter = false;
    if (err) {
      console.log(err);
      return;
    }
    if (response.statusCode == 200) {
      report.twitter = true;
    }
  });

  // Статус Твитопуха
  request.get('https://rss.caaat.pro/itevents.rss', function(err, response) {
    report.itevents = false;
    if (err) {
      console.log(err);
      return;
    }
    if (response.statusCode == 200) {
      report.itevents = true;
    }
  });
}

check();
console.log(report);
