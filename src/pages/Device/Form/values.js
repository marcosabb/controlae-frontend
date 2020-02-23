export const initialValues = {
  type: '',
  brand: '',

  Televisão: {
    control: {
      power: '',
      info: '',
      menu: '',
      something: '',
      keypad: '',
      return: '',
      up: '',
      down: '',
      left: '',
      right: '',
      ok: '',
      chup: '',
      chdown: '',
      volup: '',
      voldown: '',
      options: '',
      mute: ''
    }
  }
}

export const fields = {
  Televisão: [
    { name: 'power', label: 'Liga/Desliga' },
    { name: 'info', label: 'Liga/Desliga' },
    { name: 'menu', label: 'Menu' },
    { name: 'something', label: 'Liga/Desliga' },
    { name: 'keypad', label: 'Números' },
    { name: 'return', label: 'Retornar' },
    { name: 'up', label: 'Cima' },
    { name: 'down', label: 'Baixo' },
    { name: 'left', label: 'Direita' },
    { name: 'right', label: 'Esquerda' },
    { name: 'ok', label: 'OK' },
    { name: 'chup', label: 'Canal +' },
    { name: 'chdown', label: 'Canal -' },
    { name: 'volup', label: 'Volume +' },
    { name: 'voldown', label: 'Volume -' },
    { name: 'options', label: 'Outros' },
    { name: 'mute', label: 'Mudo' },
    { name: 'zero', label: '0' },
    { name: 'one', label: '1' },
    { name: 'two', label: '2' },
    { name: 'three', label: '3' },
    { name: 'four', label: '4' },
    { name: 'five', label: '5' },
    { name: 'six', label: '6' },
    { name: 'seven', label: '7' },
    { name: 'eight', label: '8' },
    { name: 'nine', label: '9' }
  ]
}
