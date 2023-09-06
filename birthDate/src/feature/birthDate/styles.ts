import { styled } from '@stitches/react';
import * as Slider from '@radix-ui/react-slider';
import { blackA, orange } from '@radix-ui/colors';

export const SliderRoot = styled(Slider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: 300,
  height: 20,

});

export const SliderTrack = styled(Slider.Track, {
  backgroundColor: `${orange.orange9}`,
  position: 'relative',
  flexGrow: 1,
  borderRadius: `${orange.orange9}`,
  height: 3,
});

export const SliderRange = styled(Slider.Range, {
  position: 'absolute',
  backgroundColor: `${orange.orange9}`,
  borderRadius: '9999px',
  height: '100%',
});

export const SliderThumb = styled(Slider.Thumb, {
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA2}`,
  borderRadius: 10,
  outline: `solid 2px ${blackA.blackA12}`,
});


export const SliderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Centraliza verticalmente na tela inteira
});

export const ValuesList = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const ValueItem = styled('span', {
  marginTop: '0.4rem',
  // padding: '0.4rem 0.6rem',
});