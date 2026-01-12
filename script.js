document.getElementById('sem1').addEventListener('click', function() {
    showSubjects(1);
});

document.getElementById('sem2').addEventListener('click', function() {
    showSubjects(2);
});

document.getElementById('sem3').addEventListener('click', function() {
    showSubjects(3);
});

document.getElementById('sem4').addEventListener('click', function() {
    showSubjects(4);
});

document.getElementById('sem5').addEventListener('click', function() {
    showSubjects(5);
});

function showSubjects(sem) {
    const subjectsContainer = document.getElementById('subjectsContainer');
    subjectsContainer.innerHTML = '';

    const sem1Subjects = [
        { name: 'Engineering Graphics', credits: 4 },
        { name: 'Matrix and Calculus', credits: 4 },
        { name: 'Physics for Information Science', credits: 3 },
        { name: 'Engineering Fundamentals Laboratory', credits: 1 },
        { name: 'Physics Laboratory', credits: 1 },
        { name: 'Heritage of Tamil', credits: 1 },
        { name: 'Problem Solving and C programming Laboratory', credits: 1 },
        { name: 'English for Technical Communication', credits: 2 },
        { name: 'Problem Solving and C programming', credits: 3 },
    ];

    const sem2Subjects = [
        { name: 'Digital Electronics', credits: 3 },
        { name: 'Applied Chemistry for Engineers', credits: 3 },
        { name: 'Applied Chemistry Laboratory', credits: 1 },
        { name: 'Communication Skills for Professionals (Integrated Course)', credits: 1.5 },
        { name: 'Tamils and Technology', credits: 1 },
        { name: 'Programming Fundamentals using Python', credits: 3 },
        { name: 'Programming Fundamentals using Python Laboratory', credits: 1.5 },
        { name: 'Differential Equations and Complex Analysis', credits: 4 },
    ];
    const sem3Subjects = [
        { name: 'Database system Design', credits: 3 },
        { name: 'Data Structures Laboratory', credits: 1 },
        { name: 'Principles of Operating Systems', credits: 3 },
        { name: 'Data Structures', credits: 3 },
        { name: 'Object Oriented Programming using C++ Laboratory', credits: 1 },
        { name: 'Computer Organization', credits: 3 },
        { name: 'Object Oriented Programming using C++', credits: 3 },
        { name: 'Database system Design Laboratory', credits: 1 },
        { name: 'Probability: Queueing Theory and Numerical Methods', credits: 4},
    ];

    const sem4Subjects = [
        { name: 'Transforms and Discrete Mathematics', credits: 4 },
        { name: 'Microprocessors and Microcontrollers', credits: 3 },
        { name: 'Computer Networks Laboratory', credits: 1 },
        { name: 'R Programming', credits: 1 },
        { name: 'Microprocessors and Microcontrollers Laboratory', credits: 1 },
        { name: 'Java Programming Laboratory', credits: 1 },
        { name: 'Computer Networks', credits: 3 },
        { name: 'Algorithm Analysis', credits: 3 },
        { name: 'Java Programming', credits: 3},
        { name: 'Software Engineering Methodology', credits: 3},
    ];

    const sem5Subjects = [
        { name: 'Software Testing and Automation', credits: 3 },
        { name: 'Reasoning and Aptitude', credits: 1 },
        { name: 'Universal Human Values - II', credits: 3 },
        { name: 'Mongo DB', credits: 1 },
        { name: 'Mobile Applications Design and Development Laboratory', credits: 1 },
        { name: 'Graphics and Multimedia Laboratory', credits: 1 },
        { name: 'Creative Thinking and Innovation', credits: 1 },
        { name: 'Theory of Computation', credits: 4 },
        { name: 'Mobile Applications Design and Development', credits: 3},
        { name: 'Graphics and Multimedia', credits: 3},
        { name: 'OPEN ELECTIVE', credits: 3},
        { name: 'Soft Skills Laboratory', credits: 1},
    ];
  
    let subjects, totalCredits;
    if (sem === 1) {
        subjects = sem1Subjects;
        totalCredits = 20;
    } else if (sem === 2) {
        subjects = sem2Subjects;
        totalCredits = 18;
    } else if (sem === 3) {
        subjects = sem3Subjects;
        totalCredits = 22;
    } else if (sem === 4) {
        subjects = sem4Subjects;
        totalCredits = 23;
    } else if (sem === 5) {
        subjects = sem5Subjects;
        totalCredits = 25;
    }

    subjects.forEach((subject, index) => {
        const subjectDiv = document.createElement('div');
        subjectDiv.classList.add('subject');
        subjectDiv.innerHTML = `
            <label for="subject${index}">${subject.name} - Credits: ${subject.credits}</label>
            <input type="text" id="subject${index}" data-credits="${subject.credits}" required>
        `;
        subjectsContainer.appendChild(subjectDiv);
    });

    document.getElementById('gradeForm').classList.remove('hidden');
    document.getElementById('calculateGPA').classList.remove('hidden');
    document.getElementById('calculateCGPA').classList.remove('hidden');

    document.getElementById('calculateGPA').onclick = function() {
        calculateGPA(totalCredits);
    };
}

function calculateGPA(totalCredits) {
    const gradePoints = {
        'O': 10,
        'A+': 9,
        'A': 8,
        'B+': 7,
        'B': 6,
        'C': 5,
        'U': 0,
        'SA': 0,
        'W': 0
    };

    let totalPoints = 0;

    const inputs = document.querySelectorAll('#subjectsContainer input');
    inputs.forEach(input => {
        const grade = input.value.toUpperCase();
        const credits = parseFloat(input.dataset.credits);
        if (grade in gradePoints) {
            totalPoints += gradePoints[grade] * credits;
        } else {
            alert('Invalid grade entered! Please enter a valid grade (O, A+, A, B+, B, C, U, SA, W).');
            return;
        }
    });

    const gpa = totalPoints / totalCredits;
    document.getElementById('gpaResult').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
    document.getElementById('gpaResult').classList.remove('hidden');
}

document.getElementById('calculateCGPA').addEventListener('click', function() {
    const cgpaInputs = document.getElementById('cgpaInputs');
    if (cgpaInputs.classList.contains('hidden')) {
        cgpaInputs.classList.remove('hidden');
    } else {
        cgpaInputs.classList.add('hidden');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const semButtons = document.querySelectorAll("#sem1, #sem2, #sem3", "#sem4");
    const cgpaButton = document.getElementById("calculateCGPA");

    cgpaButton.classList.remove("hidden");
});

document.getElementById("submitCGPA").addEventListener("click", () => {
    const gpa1 = parseFloat(document.getElementById("gpa1").value);
    const gpa2 = parseFloat(document.getElementById("gpa2").value);
    const gpa3 = parseFloat(document.getElementById("gpa3").value);
    const gpa4 = parseFloat(document.getElementById("gpa4").value);
    const gpa5 = parseFloat(document.getElementById("gpa5").value);
    const cgpaResult = document.getElementById("cgpaResult");

    const credits = [20, 18, 22, 23, 25];
    const gpas = [gpa1, gpa2, gpa3, gpa4, gpa5];

    let totalPoints = 0;
    let totalCredits = 0;
    let filledCount = 0;

    for (let i = 0; i < 5; i++) {
        if (!isNaN(gpas[i])) {
            if (gpas[i] < 0 || gpas[i] > 10) {
                alert("Please enter valid GPAs between 0 and 10 only.");
                return;
            }
            totalPoints += gpas[i] * credits[i];
            totalCredits += credits[i];
            filledCount++;
        }
    }

    if (filledCount < 2) {
        alert("Please enter at least two GPA values to calculate CGPA.");
        return;
    }

    const cgpa = totalPoints / totalCredits;

    cgpaResult.textContent = `Your CGPA is: ${cgpa.toFixed(3)}`;
    cgpaResult.classList.remove("hidden");
});

// Show update modal on every visit
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('updateModal');
    if (!overlay) return;

    const closeButton = overlay.querySelector('.modal-close');

    const showModal = () => {
        overlay.classList.remove('hidden');
        // lock scroll when modal is open
        document.body.style.overflow = 'hidden';
    };

    const hideModal = () => {
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    };

    // open immediately on visit
    showModal();

    // close on X (ensure reliable delegation)
    if (closeButton) {
        closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            hideModal();
        });
    }

    // close when clicking outside modal content
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) hideModal();
    });

    // close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
            hideModal();
        }
    });
});




