// A simple word mapping from English to Tamil (for demo purposes)
const translationDict = {
    "hello": "வணக்கம்",
    "how": "எப்படி",
    "are": "உங்கள்",
    "you": "நீங்கள்",
    "thank": "நன்றி",
    "good": "சிறந்த",
    "morning": "காலை",
    "night": "ராத்திரி"
};

// Function to convert English text to Tamil
function convertToTamil() {
    const englishText = document.getElementById('englishText').value.trim().toLowerCase();
    let tamilText = "";

    // Split the input text into words and try to translate each word
    const words = englishText.split(' ');
    
    words.forEach(word => {
        if (translationDict[word]) {
            tamilText += translationDict[word] + " ";
        } else {
            tamilText += word + " ";  // If no translation, return the word as it is
        }
    });

    // Display the translated Tamil text
    document.getElementById('tamilText').value = tamilText.trim();
}
