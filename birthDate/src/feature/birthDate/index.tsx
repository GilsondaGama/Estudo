import * as Slider from '@radix-ui/react-slider';
import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';

export const SliderBirthDate = () => (
  <form>
    <SliderRoot defaultValue={[1, 28]} step={15}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb aria-label="Volume" />
    </SliderRoot>
  </form>
);

const SliderRoot = styled(Slider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: 200,
  height: 20,
});

const SliderTrack = styled(Slider.Track, {
  backgroundColor: blackA.blackA10,
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',
  height: 3,
});

const SliderRange = styled(Slider.Range, {
  position: 'absolute',
  backgroundColor: 'orange',
  borderRadius: '9999px',
  height: '100%',
});

const SliderThumb = styled(Slider.Thumb, {
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  borderRadius: 10,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { outline: 'none', boxShadow: `0 0 0 5px ${blackA.blackA8}` },
});
