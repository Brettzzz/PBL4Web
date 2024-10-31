function updateGradeScale() {
    const gradingScale = document.getElementById("grading-scale").value;
}

function calculateGPA() {
    const gradingScale = document.getElementById("grading-scale").value;
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 1; i <= 12; i++) {
        const courseCredits = parseInt(document.getElementsByName(`credits${i}`)[0].value) || 0;
        const courseGrade = parseFloat(document.getElementsByName(`grade${i}`)[0].value) || 0;

        if (courseCredits > 0) {
            let points;

            if (gradingScale === "5.0") {
                if (courseGrade >= 90) points = 5.0;
                else if (courseGrade >= 80) points = 4.5;
                else if (courseGrade >= 70) points = 4.0;
                else if (courseGrade >= 60) points = 3.0;
                else points = 0.0;
            } else {
                points = (courseGrade / 20) - 1;
                if (points < 0) points = 0;
                if (points > 4) points = 4;
            }

            totalPoints += points * courseCredits;
            totalCredits += courseCredits;
        }
    }

    const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    document.getElementById("gpa-result").innerText = `GPA: ${gpa}`;
}