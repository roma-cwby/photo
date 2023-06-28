import i1 from './img/gallery/1.jpg';
import i2 from './img/gallery/2.jpg';
import i3 from './img/gallery/3.jpg';
import i4 from './img/gallery/4.jpg';
import i5 from './img/gallery/5.jpg';
import i6 from './img/gallery/6.jpg';
import i7 from './img/gallery/7.jpg';
import i8 from './img/gallery/8.jpg';
import i9 from './img/gallery/9.jpg';
import i10 from './img/gallery/10.jpg';
import i11 from './img/gallery/11.jpg';
import i12 from './img/gallery/12.jpg';
import i13 from './img/gallery/13.jpg';
import i14 from './img/gallery/14.jpg';
import i15 from './img/gallery/15.jpg';
import i16 from './img/gallery/16.jpg';
import i17 from './img/gallery/17.jpg';
import i18 from './img/gallery/18.jpg';
import i19 from './img/gallery/19.jpg';
import i20 from './img/gallery/20.jpg';
import i21 from './img/gallery/21.jpg';
import i22 from './img/gallery/22.jpg';
import i23 from './img/gallery/23.jpg';
import i24 from './img/gallery/24.jpg';
import i25 from './img/gallery/25.jpg';
import i26 from './img/gallery/26.jpg';
import i30 from './img/gallery/30.jpg';
import i31 from './img/gallery/31.jpg';
import i32 from './img/gallery/32.jpg';
import i33 from './img/gallery/33.jpg';
import i34 from './img/gallery/34.jpg';
import i35 from './img/gallery/35.jpg';
import i36 from './img/gallery/36.jpg';
import i37 from './img/gallery/37.jpg';

import getRandomHexColor from './helpers/randomColor';

export const imgs = [
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10,
  i11,
  i12,
  i13,
  i14,
  i15,
  i16,
  i17,
  i18,
  i19,
  i20,
  i21,
  i22,
  i23,
  i24,
  i25,
  i26,
  i30,
  i31,
  i32,
  i33,
  i34,
  i35,
  i36,
  i37,
];

// export const instaImages = [
//   { name: 'Oksana', data: [i1, i3] },
//   { name: 'NeOksana', data: [i2, i4, i5, i6, i7, i8, i11] },
//   { name: 'NeOksana2', data: [i12, i13, i14, i15] },
//   { name: 'NeOksana3', data: [i18, i19, i20, i22, i23] },
//   { name: 'NeOksana', data: [i9, i10] },
//   { name: 'NeOksana3', data: [i21, i24, i25, i26] },
//   { name: 'Oksana', data: [i30, i31, i32, i33, i34, i35, i36, i37] },
//   { name: 'NeOksana2', data: [i16, i17] },
// ];

export const instaImages = [
  {
    name: 'Oksana',
    color: getRandomHexColor(),
    data: [i1, i3, i30, i31, i32, i33, i34, i35, i36, i37],
  },
  { name: 'NeOksana', color: getRandomHexColor(), data: [i2, i4, i5, i6, i7, i8, i11, i9, i10] },
  { name: 'NeOksana2', color: getRandomHexColor(), data: [i12, i13, i14, i15, i16, i17] },
  {
    name: 'NeOksana3',
    color: getRandomHexColor(),
    data: [i18, i19, i20, i22, i23, i21, i24, i25, i26],
  },
];
