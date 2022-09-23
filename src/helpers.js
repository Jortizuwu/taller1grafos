let data = {
  turno1: {
    totalCarros: 0,
    totalRecaudo: 0
  },
  turno2: {
    totalCarros: 0,
    totalRecaudo: 0
  }
}

const saveTurno = (value, turno) => {
  switch (value) {
    case '1':
      data = {
        ...data,
        [turno]: {
          totalCarros: (data[turno].totalCarros += 1),
          totalRecaudo: (data[turno].totalRecaudo += 1500)
        }
      }
      break
    case '2':
      data = {
        ...data,
        [turno]: {
          totalCarros: (data[turno].totalCarros += 1),
          totalRecaudo: (data[turno].totalRecaudo += 2100)
        }
      }
      break
    case '3':
      data = {
        ...data,
        [turno]: {
          totalCarros: (data[turno].totalCarros += 1),
          totalRecaudo: (data[turno].totalRecaudo += 2700)
        }
      }
      break
    case '0':
      return false
  }
  console.log('information saved')
  return true
}

const msg = (turno) => {
  console.clear()
  console.log('=============================')
  console.log(`--------- ${turno} -----------`)
  console.log(`total de autos ${data[turno].totalCarros}`)
  console.log(`total recaudo ${data[turno].totalRecaudo}`)
  console.log('=============================')
}

const getData = (value, turno) => {
  if (value === '1') {
    msg(turno)
  }
  if (value === '2') {
    msg(turno)
  }
  if (value === '3') {
    console.clear()
    console.log('=============================')
    console.log('------- turno 1 + 2 ---------')
    console.log(
      `total de autos ${data.turno1.totalCarros + data.turno2.totalCarros}`
    )
    console.log(
      `total recaudo ${data.turno1.totalRecaudo + data.turno2.totalRecaudo}`
    )
    console.log('=============================')
  }
}

module.exports = {
  saveTurno,
  getData
}
