/*// Sample flashcard data structure (will be replaced with your backend data)
let flashcards = [];

// Function to create a flashcard element
function createFlashcard(question, answer) {
    const flashcard = document.createElement('div');
    flashcard.className = 'flashcard';
    
    flashcard.innerHTML = `
        <div class="flashcard-inner">
            <div class="flashcard-front">
                <p>${question}</p>
            </div>
            <div class="flashcard-back">
                <p>${answer}</p>
            </div>
        </div>
    `;
    
    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('flipped');
    });
    
    return flashcard;
}

// Function to handle file upload (placeholder for your backend integration)
document.getElementById('pdfUpload').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
        // Placeholder for your backend PDF processing
        // For now, we'll add some sample flashcards
        flashcards = [
            { question: "What is the capital of France?", answer: "Paris" },
            { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
            { question: "Who wrote Romeo and Juliet?", answer: "William Shakespeare" }
        ];
        
        displayFlashcards();
    }
});

// Function to display flashcards
function displayFlashcards() {
    const container = document.getElementById('flashcardsContainer');
    container.innerHTML = '';
    
    flashcards.forEach(card => {
        const flashcardElement = createFlashcard(card.question, card.answer);
        container.appendChild(flashcardElement);
    });
}

// Add some decorative houses to the background
function addHouses() {
    const houses = 5;
    for (let i = 0; i < houses; i++) {
        const house = document.createElement('div');
        house.className = 'house';
        house.style.left = `${(i * 20) + 5}%`;
        document.querySelector('.town-background').appendChild(house);
    }
}

// Add animated clouds
function addClouds() {
    const clouds = 3;
    for (let i = 0; i < clouds; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.top = `${(i * 15) + 10}%`;
        cloud.style.animationDelay = `${i * 7}s`;
        document.querySelector('.town-background').appendChild(cloud);
    }
}

// Initialize the page
addHouses();
addClouds();*/

document.addEventListener('DOMContentLoaded', () => {
    const uploadBox = document.getElementById('uploadBox');
    const pdfInput = document.getElementById('pdfInput');
    const flashcard = document.getElementById('flashcard');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselContainer = document.getElementById('carouselContainer');

    // Sample questions (to be replaced with backend data)
    const flashcards = [
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
        { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" }
    ];

    let currentCardIndex = 0;

    // Upload functionality
    uploadBox.addEventListener('click', () => {
        pdfInput.click();
    });

    uploadBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadBox.style.transform = 'scale(1.02)';
    });

    uploadBox.addEventListener('dragleave', () => {
        uploadBox.style.transform = 'scale(1)';
    });

    uploadBox.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadBox.style.transform = 'scale(1)';
        const file = e.dataTransfer.files[0];
        if (file && file.type === 'application/pdf') {
            handlePDFUpload(file);
        } else {
            alert('Please upload a PDF file');
        }
    });

    pdfInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handlePDFUpload(file);
        }
    });

    function handlePDFUpload(file) {
        // Here you would typically send the file to your backend
        console.log('PDF uploaded:', file.name);
        // Show success message
        alert('PDF uploaded successfully! Generating flashcards...');
        // Show the carousel container
        carouselContainer.classList.add('visible');
        // Initialize the first card
        updateCard();
    }

    // Flashcard functionality
    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('flipped');
    });

    function updateCard() {
        const currentCard = flashcards[currentCardIndex];
        document.getElementById('questionText').textContent = currentCard.question;
        document.getElementById('answerText').textContent = currentCard.answer;
        flashcard.classList.remove('flipped');
    }

    prevBtn.addEventListener('click', () => {
        currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
        updateCard();
    });

    nextBtn.addEventListener('click', () => {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
        updateCard();
    });
});