
const FontSizes = {
  xxs: 10,
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 38,
} as const;

const FontFamilies = {
  DMSerReg: 'DMSerifText-Regular',
  DMSerIta: 'DMSerifText-Italic',
  InterReg: 'Inter-Regular',
  InterIta: 'Inter-Italic',
} as const;

const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
  full: 9999,
} as const;

const ImageSizes = {
  xs: {
    width: 23,
    height: 35,
    borderRadius: 3,
  },
  sm: {
    width: 41,
    height: 62,
    borderRadius: 3,
  },
  md: {
    width: 80,
    height: 121,
    borderRadius: 6,
  },
}

const BaseColors = {

  //--- Light colors ---//
  // Base colors
  lightTan: '#F7F5F2',
  midTan: '#F0ECE6',
  darkerTan: '#EEE9E2',
  sectionDividerTan: '#DBD3C6',
  lightGrey: '#BFBFBF',
  midGrey: '#919191',
  black: '#000000',

  // Accent colors
  lightGold: '#D4B483',
  midGold: '#C8A96E',
  deepGold: '#9A6B3A',
  lightBlue: '#6A8ADF',
  midBlue: '#2A5A8C',
  deepBlue: '#1A3A5C',
  lightRed: '#C05A5A',
  midRed: '#7A3030',
  deepRed: '#5A1A1A',
  lightGreen: '#6ABF8A',
  midGreen: '#4A7A5A',
  deepGreen: '#2A5A3A',

  // Action colors
  actionRed: '#E05A5A',
  lightPink: '#FDE8E8',

  //--- Dark colors ---//
} as const;

export const Theme = {
  light: {
    // Base colors
    background: BaseColors.lightTan,
    sectionDivider: BaseColors.sectionDividerTan,
    // Object styles
    card: {
      fill: BaseColors.midTan,
      borderRadius: BorderRadius.lg,
    },
    header: {
      color: BaseColors.black,
      font: FontFamilies.DMSerIta,
      fontSize: FontSizes.xxl,
    },
    subheader: {
      color: BaseColors.black,
      font: FontFamilies.DMSerReg,
      fontSize: FontSizes.xl,
    },
    book: {
      title: {
        color: BaseColors.black,
        font: FontFamilies.DMSerReg,
        fontSize: FontSizes.md,
      },
      author: {
        color: BaseColors.midGrey,
        font: FontFamilies.InterReg,
        fontSize: FontSizes.sm,
      },
      cover: {
        height: ImageSizes.md.height,
        width: ImageSizes.md.width,
        borderRadius: ImageSizes.md.borderRadius,
      },
      progress: {
        color: BaseColors.midGrey,
        font: FontFamilies.DMSerIta,
        fontSize: FontSizes.xxs,
      },
    },
    stats: {
      number: {
        color: BaseColors.black,
        font: FontFamilies.DMSerReg,
        fontSize: FontSizes.xxl,
      },
      phrase: {
        color: BaseColors.black,
        font: FontFamilies.DMSerIta,
        fontSize: FontSizes.lg,
      },
      subtext: {
        color: BaseColors.midGrey,
        font: FontFamilies.InterReg,
        fontSize: FontSizes.xs,
      }
    },
    primaryButton: {
      fill: BaseColors.midGold,
      color: BaseColors.lightTan,
      borderColor: BaseColors.midGold,
      font: FontFamilies.InterReg,
      fontSize: FontSizes.sm,
    },
    secondaryButton: {
      fill: 'transparent',
      color: BaseColors.midGold,
      borderColor: BaseColors.midGold,
      font: FontFamilies.InterReg,
      fontSize: FontSizes.sm,
    },
    tertiaryButton: {
      fill: 'transparent',
      color: BaseColors.midGold,
      borderColor: 'transparent',
      font: FontFamilies.InterReg,
      fontSize: FontSizes.sm,
    },
    tanButton: {
      fill: BaseColors.darkerTan,
      color: BaseColors.midGrey,
      font: FontFamilies.InterReg,
      fontSize: FontSizes.md,
      borderRadius: BorderRadius.full,
    },
    accentOne: {
      light: BaseColors.lightGold,
      mid: BaseColors.midGold,
      deep: BaseColors.deepGold,
    },
    accentTwo: {
      light: BaseColors.lightBlue,
      mid: BaseColors.midBlue,
      deep: BaseColors.deepBlue,
    },
    accentThree: {
      light: BaseColors.lightRed,
      mid: BaseColors.midRed,
      deep: BaseColors.deepRed,
    },
    accentFour: {
      light: BaseColors.lightGreen,
      mid: BaseColors.midGreen,
      deep: BaseColors.deepGreen,
    },
    actionRed: BaseColors.actionRed,
    lightActionRed: BaseColors.lightPink,

  },
  dark: {
    // Base colors
    background: BaseColors.lightTan,
    sectionDivider: BaseColors.sectionDividerTan,

    // Object styles
    card: {
      fill: BaseColors.midTan,
      borderRadius: BorderRadius.lg,
    },
    header: {
      color: BaseColors.black,
      font: FontFamilies.DMSerIta,
      fontSize: FontSizes.xxl,
    },
    subheader: {
      color: BaseColors.black,
      font: FontFamilies.DMSerReg,
      fontSize: FontSizes.xl,
    },
    book: {
      title: {
        color: BaseColors.black,
        font: FontFamilies.DMSerReg,
        fontSize: FontSizes.md,
      },
      author: {
        color: BaseColors.midGrey,
        font: FontFamilies.InterReg,
        fontSize: FontSizes.sm,
      },
      cover: {
        height: ImageSizes.md.height,
        width: ImageSizes.md.width,
        borderRadius: ImageSizes.md.borderRadius,
      },
      progress: {
        color: BaseColors.midGrey,
        font: FontFamilies.DMSerIta,
        fontSize: FontSizes.xxs,
      },
    },
    stats: {
      number: {
        color: BaseColors.black,
        font: FontFamilies.DMSerReg,
        fontSize: FontSizes.xxl,
      },
      phrase: {
        color: BaseColors.black,
        font: FontFamilies.DMSerIta,
        fontSize: FontSizes.lg,
      },
      subtext: {
        color: BaseColors.midGrey,
        font: FontFamilies.InterReg,
        fontSize: FontSizes.xs,
      }
    },
    primaryButton: {
      fill: BaseColors.midGold,
      color: BaseColors.lightTan,
      borderColor: BaseColors.midGold,
      font: FontFamilies.InterReg,
      fontSize: FontSizes.sm,
    },
    secondaryButton: {
      fill: 'transparent',
      color: BaseColors.midGold,
      borderColor: BaseColors.midGold,
      font: FontFamilies.InterReg,
      fontSize: FontSizes.sm,
    },
    tertiaryButton: {
      fill: 'transparent',
      color: BaseColors.midGold,
      borderColor: 'transparent',
      font: FontFamilies.InterReg,
      fontSize: FontSizes.sm,
    },
    tanButton: {
      fill: BaseColors.darkerTan,
      color: BaseColors.midGrey,
      font: FontFamilies.InterReg,
      fontSize: FontSizes.md,
      borderRadius: BorderRadius.full,
    },
    accentOne: {
      light: BaseColors.lightGold,
      mid: BaseColors.midGold,
      deep: BaseColors.deepGold,
    },
    accentTwo: {
      light: BaseColors.lightBlue,
      mid: BaseColors.midBlue,
      deep: BaseColors.deepBlue,
    },
    accentThree: {
      light: BaseColors.lightRed,
      mid: BaseColors.midRed,
      deep: BaseColors.deepRed,
    },
    accentFour: {
      light: BaseColors.lightGreen,
      mid: BaseColors.midGreen,
      deep: BaseColors.deepGreen,
    },
    actionRed: BaseColors.actionRed,
    lightActionRed: BaseColors.lightPink,
  },
}

export type AppTheme = typeof Theme.light;
