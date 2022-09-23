const inquirer = require('inquirer')
require('colors')

const selectoption = () => {
  console.log('=========================='.green)
  console.log('  Seleccione una opción'.white)
  console.log('==========================\n'.green)
}

const inquirerMenu = async (questions) => {
  selectoption()
  const { opcion } = await inquirer.prompt(questions)
  return opcion
}

const pausa = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.green} para continuar`
    }
  ]

  console.log('\n')
  await inquirer.prompt(question)
}

module.exports = {
  inquirerMenu,
  pausa
}
