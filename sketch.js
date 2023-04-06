const signs = ['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
const astrology_url_root = "https://aztro.sameerkumar.website?sign= <sign> &day= <day>";
var screen;
var buttons = [];
var astrology_data;

function setup() {
  for (let sign of signs) {
    console.log(astrology_url_root + sign.toLowerCase())
    httpGet(astrology_url_root + sign.toLowerCase(), 'json', function(response) {
      console.log(response);
    })
  }
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  if (screen === 0) {
    if (buttons.length === 0) {
      buttons.push({
        x: width * 5 / 16,
        y: height / 3 - height / 8,
        xSize: width * 6 / 16,
        ySize: height / 4,
        text: "Daily Horoscope"
      });
      buttons.push({
        x: width * 5 / 16,
        y: height / 3 + height * 3 / 8,
        xSize: width * 6 / 16,
        ySize: height / 4,
        text: ""
      });
    }
  }
}