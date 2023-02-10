import { Dimensions } from 'react-native';

/* ------------- */
/*    SPACING    */
/* ------------- */
export const SPACING = {
    xxs: 2,
    xs: 5,
    s: 7,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 80,
};

/* ------------- */
/*    COLORS     */
/* ------------- */
export const CHART_COLORS = {
    green: '#71a837',
    orange: '#c84f18',
};

export const COLORS = {
    transparent: 'transparent',
    mainBg: '#252A40',
    gray: '#747A95',
    inputBg: '#3C415A',
    inputFocus: '#72799A',
    offWhite: '#F0F0F0',
    primary: '#4959A7',
    mainText: '#F8F8F8',
    error: '#C16060',
    success: '#6DD097',
};

/* ------------- */
/*   DIMENSIONS  */
/* ------------- */
const { width, height } = Dimensions.get('window');

export const DIMENSIONS = {
    screenWidth: width,
    screenHeight: height,
    containerWidth: width - SPACING.m * 2,
    heroHeight: width / 2,
};

/* ------------- */
/*    RADIUS     */
/* ------------- */
export const BORDER_RADIUS = {
    xs: 4,
    s: 8,
    paper: 10,
    image: 5,
    circle: 99999,
    noBorder: {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
};

/* ------------- */
/*   BOX_SHADOW  */
/* ------------- */
export const BOX_SHADOW = {
    default: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },
};

/* ------------- */
/*     FONT      */
/* ------------- */
export const FONT_FAMILY = {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
};

/* ------------- */
/*   ALIGNMENT   */
/* ------------- */
export const ALIGNMENT = {
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowCenterCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowBottomCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    rowTopBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    rowCenterBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowTopEnd: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
} as Record<string, any>;
