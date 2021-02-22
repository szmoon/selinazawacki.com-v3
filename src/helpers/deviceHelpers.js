// export function getWindowSize() {
//   const width = window.innerWidth;

//   if (width <= 543) {
//     return 'xsmall';
//   } else if (width <= 767) {
//     return 'small';
//   } else if (width <= 992) {
//     return 'medium';
//   } else if (width <= 1200) {
//     return 'large';
//   } else {
//     return 'xlarge';
//   }
// }

export const windowSizes = {
  xsmall: 543,
  small: 767,
  medium: 992,
  large: 1200
};

export function isMobileDevice() {
  const width = window.innerWidth;

  if (width <= windowSizes.xsmall) {
    return true;
  }
  return false;
}
