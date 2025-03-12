document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let score = 0;
    const answers = {
        "question-1": "a", // Resposta correta para a pergunta 1
        "question-2": "b", // Resposta correta para a pergunta 2
        "question-3": "b", // Resposta correta para a pergunta 3
        "question-4": "b", // Resposta correta para a pergunta 4
        "question-5": "b", // Resposta correta para a pergunta 5
        "question-6": "c", // Resposta correta para a pergunta 6
        "question-7": "b", // Resposta correta para a pergunta 7
        "question-8": "c", // Resposta correta para a pergunta 8
        "question-9": "a", // Resposta correta para a pergunta 9
        "question-10": "b", // Resposta correta para a pergunta 10
        "question-11": "b", // Resposta correta para a pergunta 11
        "question-12": "a", // Resposta correta para a pergunta 12
        "question-13": "c", // Resposta correta para a pergunta 13
        "question-14": "a", // Resposta correta para a pergunta 14
        "question-15": "b", // Resposta correta para a pergunta 15
        "question-16": "a", // Resposta correta para a pergunta 16
        "question-17": "c", // Resposta correta para a pergunta 17
        "question-18": "b", // Resposta correta para a pergunta 18
        "question-19": "a", // Resposta correta para a pergunta 19
        "question-20": "b", // Resposta correta para a pergunta 20
    };

    // Limpar qualquer estilo anterior
    document.querySelectorAll('label').forEach(label => label.classList.remove('wrong-answer', 'correct-answer'));
    document.querySelectorAll('.explanation').forEach(explanation => explanation.classList.add('hidden'));

    // Verifica as respostas
    for (const question in answers) {
        const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
            // Exibe a explicação ao lado de cada pergunta correta
            document.getElementById(`explanation-${question.slice(-1)}`).classList.remove('hidden');
            selectedAnswer.parentElement.classList.add('correct-answer');
        } else {
            const incorrectAnswer = document.querySelector(`input[name=${question}]:checked`);
            if (incorrectAnswer) {
                incorrectAnswer.parentElement.classList.add('wrong-answer');
            }
        }
    }

    // Exibe o resultado
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('correct-answers').textContent = score;

    // Exibe o resumo das respostas corretas
    if (score === 20) {
        document.getElementById('explanation-summary').innerHTML = `
            <h3>Como suas respostas ajudam a melhorar seu home office:</h3>
            <p>Parabéns! Você fez ótimas escolhas para um home office sustentável. A seguir, veja como suas respostas contribuem para o ambiente de trabalho remoto:</p>
            <ul>
                <li><strong>Economia de energia:</strong> Desligar aparelhos e optar por lâmpadas eficientes pode reduzir a pegada de carbono do seu home office.</li>
                <li><strong>Redução de papel:</strong> Usar documentos digitais não só economiza papel, mas também melhora a eficiência e organização no seu ambiente de trabalho.</li>
            </ul>
        `;
    } else {
        document.getElementById('explanation-summary').innerHTML = `
            <h3>Como suas respostas podem ser melhoradas:</h3>
            <p>Você tem algumas áreas para melhorar, mas está no caminho certo! A seguir, veja como suas respostas contribuem para o ambiente de trabalho remoto:</p>
            <ul>
                <li><strong>Economia de energia:</strong> Desligar aparelhos e optar por lâmpadas eficientes pode reduzir a pegada de carbono do seu home office.</li>
                <li><strong>Redução de papel:</strong> Usar documentos digitais não só economiza papel, mas também melhora a eficiência e organização no seu ambiente de trabalho.</li>
            </ul>
        `;
    }
});

function restartQuiz() {
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('quiz-form').reset();

    // Ocultar explicações ao reiniciar
    document.querySelectorAll('.explanation').forEach(function(explanation) {
        explanation.classList.add('hidden');
    });

    // Limpar estilos de respostas
    document.querySelectorAll('label').forEach(label => label.classList.remove('wrong-answer', 'correct-answer'));
}
