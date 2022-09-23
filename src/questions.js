require('colors')

const questions = {
  question1: [
    {
      type: 'list',
      name: 'opcion',
      message: '¿Qué desea hacer?',
      choices: [
        {
          value: '1',
          name: `${'1.'.blue} llenar turnos`
        },
        {
          value: '2',
          name: `${'2.'.green} Listar recaudos por turnos`
        },
        {
          value: '0',
          name: `${'0.'.green} Salir`
        }
      ]
    }
  ],
  question2: [
    {
      type: 'list',
      name: 'opcion',
      message: 'seleccione un turno',
      choices: [
        {
          value: '1',
          name: `${'1.'.green} presione 1 para el turno 1`
        },
        {
          value: '2',
          name: `${'2.'.green} presione 2 para el turno 2`
        },
        {
          value: '0',
          name: `${'0.'.green} Salir`
        }
      ]
    }
  ],
  question3: [
    {
      type: 'list',
      name: 'opcion',
      message: 'seleccione una categoria',
      choices: [
        {
          value: '1',
          name: `${'1.'.green} registrar auto`
        },
        {
          value: '0',
          name: `${'0.'.green} Salir`
        }
      ]
    }
  ],
  question4: [
    {
      type: 'list',
      name: 'opcion',
      message: 'seleccione una categoria',
      choices: [
        {
          value: '1',
          name: `${'1.'.green} Automóvil y buses categoría A valor 1500`
        },
        {
          value: '2',
          name: `${'2.'.green} Camiones y grúas Categoría B valor 2100`
        },
        {
          value: '3',
          name: `${'3.'.green} Tractocamiones categoría C valor 2700`
        },
        {
          value: '0',
          name: `${'0.'.green} Salir`
        }
      ]
    }
  ],
  question5: [
    {
      type: 'list',
      name: 'opcion',
      message: 'seleccione un turno',
      choices: [
        {
          value: '1',
          name: `${'1.'.green} presione 1 para el turno 1`
        },
        {
          value: '2',
          name: `${'2.'.green} presione 2 para el turno 2`
        },
        {
          value: '3',
          name: `${'3.'.green} presione 3 para el recaudo total`
        },
        {
          value: '0',
          name: `${'0.'.green} Salir`
        }
      ]
    }
  ]
}

console.log(questions)

module.exports = questions
