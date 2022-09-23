const { saveTurno, getData } = require('./helpers')
const { pausa, inquirerMenu } = require('./inquirer')
const questions = require('./questions')

const turno = async (turno) => {
  let opt3 = ''
  do {
    console.clear()
    console.log(turno)
    opt3 = await inquirerMenu(questions.question3)
    if (opt3 === '1') {
      const typecar = await inquirerMenu(questions.question4)
      saveTurno(typecar, turno)
    }
  } while (opt3 !== '0')
}

const main = async () => {
  let opt = ''
  let opt2 = ''
  do {
    console.clear()
    opt = await inquirerMenu(questions.question1)
    switch (opt) {
      case '1': {
        console.clear()
        opt2 = await inquirerMenu(questions.question2)
        if (opt2 === '1') {
          await turno('turno1')
        }
        if (opt2 === '2') {
          await turno('turno2')
        }
        break
      }
      case '2': {
        const reca = await inquirerMenu(questions.question5)
        if (reca === '1') {
          getData('1', 'turno1')
        }
        if (reca === '2') {
          getData('2', 'turno2')
        }
        if (reca === '3') {
          getData('3')
        }

        break
      }
    }
    await pausa()
  } while (opt !== '0')
}

main()
