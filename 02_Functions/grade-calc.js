const calcGrade = function(score, maxScore) {
    const percent = score / maxScore * 100;
    let letterGrade = '';

    if (percent === 100) {
        letterGrade = 'a perfect score!';
    } else if (percent >= 90) {
        letterGrade = 'an A!';
    } else if (percent >= 80) {
        letterGrade = 'a B!';
    } else if (percent >= 70) {
        letterGrade = 'a C';
    } else if (percent >= 60) {
        letterGrade = 'a D';
    } else {
        letterGrade = 'an F';
    }
    return `${score}/${maxScore} -> You got ${letterGrade} (${percent }%)`;
}


console.log(calcGrade(100,100));
console.log(calcGrade(45,50));
console.log(calcGrade(81, 100));
console.log(calcGrade(79, 100));
console.log(calcGrade(64, 100));
console.log(calcGrade(55, 100));
