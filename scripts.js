// Answer key for exercises with detailed solutions
const exerciseData = {
    // Arithmetic Sequence Exercises
    'arithmetic_problem1': {
        correct: 'A',
        solution: 'Áp dụng công thức: a_n = a_1 + (n-1)d<br>' +
                 'Thay số: u_8 = 5 + (8-1)3 = 5 + 21 = 26'
    },
    'arithmetic_problem2': {
        correct: 'B',
        solution: 'Áp dụng công thức: a_n = a_1 + (n-1)d<br>' +
                 '19 = 4 + (6-1)d<br>' +
                 '19 = 4 + 5d<br>' +
                 '15 = 5d<br>' +
                 'd = 3'
    },
    'arithmetic_problem3': {
        correct: 'C',
        solution: 'Đây là cấp số cộng với:<br>' +
                 'a_1 = 10 (triệu đồng)<br>' +
                 'd = 2 (triệu đồng)<br>' +
                 'n = 12 (tháng)<br>' +
                 'Áp dụng công thức tổng: S_n = (n/2)[2a_1 + (n-1)d]<br>' +
                 'S_12 = (12/2)[2(10) + (12-1)2]<br>' +
                 '= 6[20 + 22] = 6(42) = 154 (triệu đồng)'
    },

    // Geometric Sequence Exercises
    'geometric_problem1': {
        correct: 'A',
        solution: 'Áp dụng công thức: a_n = a_1 \\cdot q^{n-1}<br>' +
                 'Thay số: u_5 = 3 \\cdot 2^4 = 3 \\cdot 16 = 48'
    },
    'geometric_problem2': {
        correct: 'B',
        solution: 'Đây là cấp số nhân với:<br>' +
                 'a_1 = 50 (triệu đồng)<br>' +
                 'q = 1.1 (tăng 10% mỗi năm)<br>' +
                 'n = 3 (năm)<br>' +
                 'Áp dụng công thức: a_n = a_1 \\cdot q^{n-1}<br>' +
                 'a_3 = 50 \\cdot (1.1)^3 = 50 \\cdot 1.331 = 66.55 (triệu đồng)'
    },
    'geometric_problem3': {
        correct: 'C',
        solution: 'Độ cao các lần nảy:<br>' +
                 'h_1 = 100m<br>' +
                 'h_2 = 80m<br>' +
                 'h_3 = 64m<br>' +
                 'h_4 = 51.2m<br>' +
                 'Tổng quãng đường = (h_1 + h_2 + h_3 + h_4) × 2 (lên + xuống)<br>' +
                 '= (100 + 80 + 64 + 51.2) × 2<br>' +
                 '= 295.2 × 2 = 361.4m'
    },

    // Special Sequences Exercises
    'fibonacci_problem1': {
        correct: 'B',
        solution: 'Dãy Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21<br>' +
                 'Số hạng thứ 8 là 21'
    },
    'fibonacci_problem2': {
        correct: 'B',
        solution: '6 số Fibonacci đầu tiên: 1, 1, 2, 3, 5, 8<br>' +
                 'Tổng = 1 + 1 + 2 + 3 + 5 + 8 = 20'
    },
    'fibonacci_problem3': {
        correct: 'A',
        solution: 'Dãy Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55<br>' +
                 'Tỉ số = 55/34 ≈ 1.618<br>' +
                 'Đây chính là tỉ lệ vàng φ'
    },

    // Example Problems
    'arithmetic_example': {
        correct: 'B',
        solution: 'Áp dụng công thức: a_n = a_1 + (n-1)d<br>' +
                 'Thay số: u_5 = 2 + (5-1)3 = 2 + 12 = 15'
    },
    'geometric_example1': {
        correct: 'A',
        solution: 'Dân số sau n năm = 2 * (1.015)^10<br>' +
                 '= 2 * 1.16 ≈ 2.32 triệu người'
    },
    'geometric_example2': {
        correct: 'A',
        solution: 'Giá trị ô tô sau 5 năm = 800 * (0.85)^5<br>' +
                 '= 800 * 0.44 ≈ 350.8 triệu đồng'
    },
    'geometric_example3': {
        correct: 'C',
        solution: 'Số vi khuẩn sau 20 phút = 2^20<br>' +
                 '= 1,048,576 vi khuẩn'
    },
    'geometric_example4': {
        correct: 'A',
        solution: 'Giá trị máy ủi sau 5 năm = 3 * (0.8)^5<br>' +
                 '= 3 * 0.33 ≈ 0.98 tỉ đồng'
    },
    'geometric_example5': {
        correct: 'C',
        solution: 'Nhiệt độ sau 6 giờ = 20 * (0.8)^6<br>' +
                 '= 20 * 0.131 ≈ 2.62°C'
    },
    'geometric_example6': {
        correct: 'D',
        solution: 'Tổng quãng đường = 100 * (1 - 0.8^10)/(1 - 0.8)<br>' +
                 '≈ 412.71m'
    },
    'geometric_example7': {
        correct: 'B',
        solution: 'Tổng lương = 300 * (1.1^5 - 1)/(1.1 - 1)<br>' +
                 '≈ 1,830.2 triệu đồng'
    },
    'geometric_example8': {
        correct: 'A',
        solution: 'Số tiền sau 10 năm = 100 * (1.08)^10<br>' +
                 '≈ 215.89 triệu đồng'
    },
    'geometric_example9': {
        correct: 'C',
        solution: 'Diện tích tầng trên cùng = 400 * (0.5)^9<br>' +
                 '≈ 0.390625m²'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Download and YouTube link animations
    const downloadLinks = document.querySelectorAll('[download], [target="_blank"]');
    downloadLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const icon = link.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) translateX(-2px)';
                icon.style.transition = 'all 0.3s ease';
            }
        });
        
        link.addEventListener('mouseleave', () => {
            const icon = link.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) translateX(0)';
            }
        });
    });

    // Initialize exercise tracking
    let completedExercises = new Set();
    let totalExercises = Object.keys(exerciseData).length;
    
    // Update progress function
    function updateProgress() {
        const progressPercentage = (completedExercises.size / totalExercises) * 100;
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            bar.style.width = `${progressPercentage}%`;
        });
    }

    // Handle answer checking
    window.checkAnswer = function(answerId) {
        const selectedAnswer = document.querySelector(`input[name="${answerId}"]:checked`);
        const resultDiv = document.getElementById(`result-${answerId}`);
        const solutionDiv = document.getElementById(`solution-${answerId}`);
        
        if (!selectedAnswer) {
            resultDiv.innerHTML = '<p class="text-red-500 mt-2">Vui lòng chọn một đáp án!</p>';
            return;
        }

        // Add loading animation
        resultDiv.innerHTML = '<div class="loading-spinner mx-auto mt-4"></div>';

        // Simulate checking delay
        setTimeout(() => {
            const isCorrect = selectedAnswer.value === exerciseData[answerId].correct;
            
            // Determine background color based on problem type
            let bgColor = 'blue-50';
            let textColor = 'blue-800';
            if (answerId.includes('geometric')) {
                bgColor = 'orange-50';
                textColor = 'yellow-800';
            } else if (answerId.includes('fibonacci')) {
                bgColor = 'purple-50';
                textColor = 'purple-800';
            }

            if (isCorrect) {
                resultDiv.innerHTML = `
                    <div class="correct-answer mt-4 p-3 rounded-lg">
                        <p class="text-green-800"><i class="fas fa-check-circle mr-2"></i>Chính xác!</p>
                    </div>
                `;
                
                // Show detailed solution
                solutionDiv.innerHTML = `
                    <div class="mt-4 p-4 bg-${bgColor} rounded-lg solution-explanation">
                        <h4 class="font-bold text-${textColor} mb-2">Giải thích:</h4>
                        <p class="text-gray-700">${exerciseData[answerId].solution}</p>
                    </div>
                `;

                // Mark exercise as completed
                completedExercises.add(answerId);
                updateProgress();

                // Add completion animation
                const exerciseCard = resultDiv.closest('.exercise');
                exerciseCard.classList.add('completed');
                
                // Animate solution appearance
                const solution = solutionDiv.querySelector('.solution-explanation');
                solution.style.opacity = '0';
                solution.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    solution.style.transition = 'all 0.5s ease';
                    solution.style.opacity = '1';
                    solution.style.transform = 'translateY(0)';
                }, 100);
            } else {
                resultDiv.innerHTML = `
                    <div class="wrong-answer mt-4 p-3 rounded-lg">
                        <p class="text-red-800"><i class="fas fa-times-circle mr-2"></i>Chưa chính xác. Hãy thử lại!</p>
                        <p class="text-gray-600 mt-2">Hãy xem lại bài giảng và thử lại.</p>
                    </div>
                `;
            }
        }, 1000);
    };

    // Add hover effects to exercise cards
    const exerciseCards = document.querySelectorAll('.exercise-card');
    exerciseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
            card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '';
        });
    });

    // Add radio button animation
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            const label = radio.parentElement;
            label.style.transform = 'scale(1.05)';
            setTimeout(() => {
                label.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Initialize filters
    const filters = document.querySelectorAll('select');
    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            const exercises = document.querySelectorAll('.exercise');
            exercises.forEach(exercise => {
                exercise.style.opacity = '0';
                setTimeout(() => {
                    exercise.style.opacity = '1';
                }, 300);
            });
        });
    });

    // Initialize progress
    updateProgress();
});

// Login Modal Functions
function showLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.add('hidden');
}

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically make an API call to authenticate
    console.log('Login attempt:', { email, password });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
