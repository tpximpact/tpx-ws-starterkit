module.exports = {
  theme: {
    extend: {
      scale: {
        0: '0',
        50: '.5',
        75: '.75',
        90: '.9',
        95: '.95',
        100: '1',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5',
      },
      rotate: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-45': '-45deg',
        '-12': '-12deg',
        '-6': '-6deg',
        '-3': '-3deg',
        '-2': '-2deg',
        '-1': '-1deg',
        0: '0deg',
        1: '1deg',
        2: '2deg',
        3: '3deg',
        6: '6deg',
        12: '12deg',
        45: '45deg',
        90: '90deg',
        180: '180deg',
      },
      translate: (theme) => ({
        ...theme('spacing'),
        ...theme('width'),
      }),
      skew: {
        '-12': '-12deg',
        '-6': '-6deg',
        '-3': '-3deg',
        '-2': '-2deg',
        '-1': '-1deg',
        0: '0deg',
        1: '1deg',
        2: '2deg',
        3: '3deg',
        6: '6deg',
        12: '12deg',
      },
      transformOrigin: {
        center: 'center',
        top: 'top',
        'top-right': 'top right',
        right: 'right',
        'bottom-right': 'bottom right',
        bottom: 'bottom',
        'bottom-left': 'bottom left',
        left: 'left',
        'top-left': 'top left',
      },
    },
  },
};
