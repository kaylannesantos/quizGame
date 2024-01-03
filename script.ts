import prompt from 'prompt-sync';
const input = prompt();

type Question = {
    questao: string;
    perguntas: string[];
    resposta: string;
};

const questoes: Question [] = [
{
    questao: 'Qual o resultado da operação: 2 + 2 ?',
    perguntas: ['6', '4', '22'],
    resposta: '4',
},
{
    questao: 'Qual a pior linguagem de programação?',
    perguntas: ['Javascript', 'Java', 'html'],
    resposta: 'Java',
},
];

function quizGame(): void {
    let pontuacao = 0;

    for (let i = 0; i < questoes.length; i++) {
        let question = questoes[i];

        console.log(question.questao);
        question.perguntas.forEach((choice, index) => {
            console.log(`${index + 1}. ${choice}`);
        });

        const answerIndex = parseInt(input('Escolha sua resposta (1-3): '));
        if (question.perguntas[answerIndex - 1] == question.resposta) {
            console.log('Resposta correta!');
            pontuacao++;
        } else {
            console.log('Resposta incorreta!');
        }
    }
    console.log(`Você fez ${pontuacao} ponto(s).`);
}
 
quizGame();