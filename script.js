// Define the zodiac signs and their corresponding months
const zodiacSigns = {
    January: ["♑", "Capricorn"],
    February: ["♒", "Aquarius"],
    March: ["♓", "Pisces"],
    April: ["♈", "Aries"],
    May: ["♉", "Taurus"],
    June: ["♊", "Gemini"],
    July: ["♋", "Cancer"],
    August: ["♌", "Leo"],
    September: ["♍", "Virgo"],
    October: ["♎", "Libra"],
    November: ["♏", "Scorpio"],
    December: ["♐", "Sagittarius"],
};

// List of possible fortunes
const fortunes = [
    "You will have a day filled with unexpected surprises!",
    "A great opportunity will present itself soon.",
    "Your hard work will pay off in the near future.",
    "An old friend will reenter your life.",
    "You'll make an important decision that will change your path.",
    "A long-awaited wish will finally come true.",
    "Your creativity will lead you to success.",
    "A period of personal growth is on the horizon.",
    "You'll discover a hidden talent you never knew you had.",
    "Love and happiness are just around the corner.",
];

// Function to get a random fortune
function getRandomFortune() {
    return fortunes[Math.floor(Math.random() * fortunes.length)];
}

// Function to generate horoscope
function generateHoroscope() {
    const birthMonth = document.getElementById("birthMonth").value;
    const resultDiv = document.getElementById("result");

    if (zodiacSigns[birthMonth]) {
        const [symbol, sign] = zodiacSigns[birthMonth];
        const fortune = getRandomFortune();
        resultDiv.innerHTML = `<h2>${symbol} ${sign}</h2><p>${fortune}</p>`;
    } else {
        resultDiv.innerHTML = "<p>Please enter a valid month.</p>";
    }
}
