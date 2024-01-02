import prompt from 'prompt-sync';
const input = prompt();

type Question = {
    question: string;
    choices: string[];
    answer: string;
};

const questions: Question [] = [
{
    question: 'Qual o resultado da operação: 2 + 2 ?',
    choices: ['6', '4', '22'],
    answer: '4',
},
{
    question: 'Qual a pior linguagem de programação?',
    choices: ['Javascript', 'Java', 'html'],
    answer: 'Java',
},
];

function quizGame(): void {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        let question = questions[i];

        console.log(question.question);
        question.choices.forEach((choice, index) => {
            console.log(`${index + 1}. ${choice}`);
        });

        const answerIndex = parseInt(input('Escolha sua resposta (1-3): '));
        if (question.choices[answerIndex - 1] == question.answer) {
            console.log('Resposta correta!');
            score++;
        } else {
            console.log('Resposta incorreta!');
        }
    }
    console.log(`Você fez ${score} ponto(s).`);
}

quizGame();