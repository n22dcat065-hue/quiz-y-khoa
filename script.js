// Biến toàn cục
let currentMode = ''; // 'topic' hoặc 'all'
let currentTopic = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStarted = false;

// Khởi tạo
document.addEventListener('DOMContentLoaded', function() {
    showSection('mode-selection');
});

// Hiển thị section
function showSection(sectionId) {
    const sections = ['mode-selection', 'topic-selection', 'quiz-section', 'result-section'];
    sections.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Hiển thị màn hình chọn chủ đề
function showTopicSelection() {
    currentMode = 'topic';
    const topicList = document.getElementById('topic-list');
    topicList.innerHTML = '';
    
    for (let topic in questionsData) {
        const btn = document.createElement('button');
        btn.className = 'topic-btn';
        btn.textContent = `${topic} (${questionsData[topic].length} câu)`;
        btn.onclick = () => startQuiz(topic);
        topicList.appendChild(btn);
    }
    
    showSection('topic-selection');
}

// Bắt đầu với tất cả câu hỏi
function startAllQuestions() {
    currentMode = 'all';
    currentTopic = 'Tất cả chủ đề';
    currentQuestions = shuffleArray(getAllQuestions());
    userAnswers = new Array(currentQuestions.length).fill(null);
    currentQuestionIndex = 0;
    quizStarted = true;
    
    showSection('quiz-section');
    displayQuestion();
}

// Bắt đầu trắc nghiệm đầy đủ (tất cả 734 câu)
function startFullQuiz() {
    currentMode = 'full';
    currentTopic = 'Trắc Nghiệm Đầy Đủ (734 câu)';
    currentQuestions = shuffleArray(getAllQuestions()); // Shuffle để random
    userAnswers = new Array(currentQuestions.length).fill(null);
    currentQuestionIndex = 0;
    quizStarted = true;
    
    showSection('quiz-section');
    displayQuestion();
}

// Bắt đầu quiz theo chủ đề
function startQuiz(topic) {
    currentMode = 'topic';
    currentTopic = topic;
    currentQuestions = shuffleArray([...questionsData[topic]]);
    userAnswers = new Array(currentQuestions.length).fill(null);
    currentQuestionIndex = 0;
    quizStarted = true;
    
    showSection('quiz-section');
    displayQuestion();
}

// Hiển thị câu hỏi
function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Cập nhật header
    document.getElementById('current-topic').textContent = `Chủ đề: ${currentTopic}`;
    document.getElementById('question-counter').textContent = 
        `Câu ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    
    // Cập nhật progress bar
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
    
    // Hiển thị câu hỏi
    document.getElementById('question-text').textContent = 
        `Câu ${currentQuestionIndex + 1}: ${question.question}`;
    
    // Hiển thị đáp án
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    
    const isAnswered = userAnswers[currentQuestionIndex] !== null;
    
    question.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
        
        // Nếu đã trả lời, hiển thị kết quả
        if (isAnswered) {
            btn.style.pointerEvents = 'none';
            const userAnswer = userAnswers[currentQuestionIndex];
            
            if (index === userAnswer) {
                if (index === question.correct) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('incorrect');
                }
            }
            
            if (userAnswer !== question.correct && index === question.correct) {
                btn.classList.add('show-correct');
            }
        } else {
            btn.onclick = () => selectAnswer(index);
        }
        
        answersDiv.appendChild(btn);
    });
    
    // Cập nhật nút điều hướng
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        document.getElementById('next-btn').classList.add('hidden');
        document.getElementById('submit-btn').classList.remove('hidden');
    } else {
        document.getElementById('next-btn').classList.remove('hidden');
        document.getElementById('submit-btn').classList.add('hidden');
    }
}

// Chọn đáp án
function selectAnswer(answerIndex) {
    const question = currentQuestions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Cập nhật giao diện với feedback ngay lập tức
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((btn, index) => {
        btn.classList.remove('selected', 'correct', 'incorrect', 'show-correct');
        btn.style.pointerEvents = 'none'; // Vô hiệu hóa click sau khi chọn
        
        if (index === answerIndex) {
            // Đáp án người dùng chọn
            if (index === question.correct) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('incorrect');
            }
        }
        
        // Hiển thị đáp án đúng nếu chọn sai
        if (answerIndex !== question.correct && index === question.correct) {
            btn.classList.add('show-correct');
        }
    });
    
    // Tự động chuyển sang câu tiếp sau 1.5 giây
    setTimeout(() => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            nextQuestion();
        }
    }, 1500);
}

// Câu trước
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Câu tiếp theo
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Nộp bài
function submitQuiz() {
    // Kiểm tra câu hỏi chưa trả lời
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        if (!confirm(`Bạn còn ${unanswered} câu chưa trả lời. Bạn có chắc muốn nộp bài?`)) {
            return;
        }
    }
    
    // Tính điểm
    let correctCount = 0;
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        }
    });
    
    // Hiển thị kết quả
    showResults(correctCount);
}

// Hiển thị kết quả
function showResults(correctCount) {
    const totalQuestions = currentQuestions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    document.getElementById('score-percentage').textContent = percentage + '%';
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('total-count').textContent = totalQuestions;
    
    // Hiển thị review
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.correct;
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        let html = `
            <div class="review-question">
                Câu ${index + 1}: ${question.question}
            </div>
        `;
        
        if (userAnswers[index] !== null) {
            html += `
                <div class="review-answer user">
                    👤 Bạn chọn: ${String.fromCharCode(65 + userAnswers[index])}. ${question.answers[userAnswers[index]]}
                </div>
            `;
        } else {
            html += `<div class="review-answer user">👤 Bạn chưa trả lời</div>`;
        }
        
        html += `
            <div class="review-answer correct-answer">
                ✓ Đáp án đúng: ${String.fromCharCode(65 + question.correct)}. ${question.answers[question.correct]}
            </div>
        `;
        
        reviewItem.innerHTML = html;
        reviewList.appendChild(reviewItem);
    });
    
    showSection('result-section');
    quizStarted = false;
}

// Làm lại bài
function restartQuiz() {
    if (currentMode === 'all') {
        startAllQuestions();
    } else if (currentMode === 'full') {
        startFullQuiz();
    } else {
        startQuiz(currentTopic);
    }
}

// Quay lại màn hình chọn chế độ
function backToModeSelection() {
    if (quizStarted) {
        if (!confirm('Bài làm của bạn sẽ không được lưu. Bạn có chắc muốn thoát?')) {
            return;
        }
    }
    
    currentMode = '';
    currentTopic = '';
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStarted = false;
    
    showSection('mode-selection');
}

// Utility Functions
function getAllQuestions() {
    let allQuestions = [];
    for (let topic in questionsData) {
        allQuestions = allQuestions.concat(questionsData[topic]);
    }
    return allQuestions;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
