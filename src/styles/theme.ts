interface ThemeType {
  Brand: string
  Black: {
    100: string
    80: string
    40: string
    20: string
    10: string
    4: string
  },
  White: {
    100: string
    80: string
    40: string
    20: string
    10: string
    4: string
  },
  Background: {
    BG1: string
    BG2: string
    BG3: string
    BG4: string
    BG5: string
  },
}

export const LightTheme: ThemeType = {
  Brand: '#111',
  Black: {
    100: 'rgb(0,0,0)',
    80: 'rgb(0,0,0, 0.8)',
    40: 'rgb(0,0,0, 0.4)',
    20: 'rgb(0,0,0, 0.2)',
    10: 'rgb(0,0,0, 0.1)',
    4: 'rgb(0,0,0, 0.04)'
  },
  White: {
    100: 'rgb(255,255,255)',
    80: 'rgb(255,255,255, 0.8)',
    40: 'rgb(255,255,255, 0.4)',
    20: 'rgb(255,255,255, 0.2)',
    10: 'rgb(255,255,255, 0.1)',
    4: 'rgb(255,255,255, 0.04)'
  },
  Background: {
    BG1: '#FFF',
    BG2: '#F9F9FA',
    BG3: '#E6F1FD',
    BG4: '#EDEEFC',
    BG5: '#FFF'
  }
}

export const DarkTheme: ThemeType = {
  Brand: '#111',
  Black: {
    100: 'rgb(255,255,255)',
    80: 'rgb(255,255,255, 0.8)',
    40: 'rgb(255,255,255, 0.4)',
    20: 'rgb(255,255,255, 0.2)',
    10: 'rgb(255,255,255, 0.15)',
    4: 'rgb(255,255,255, 0.1)'
  },
  White: {
    100: 'rgb(0,0,0)',
    80: 'rgb(0,0,0, 0.8)',
    40: 'rgb(0,0,0, 0.4)',
    20: 'rgb(0,0,0, 0.2)',
    10: 'rgb(0,0,0, 0.1)',
    4: 'rgb(0,0,0, 0.04)'
  },
  Background: {
    BG1: '#2A2A2A',
    BG2: '#FFF',
    BG3: '#E6F1FD',
    BG4: '#EDEEFC',
    BG5: '#E5E5E5'
  }
}