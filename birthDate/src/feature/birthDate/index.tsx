import { useState } from "react";
import { SliderRange, SliderThumb, SliderTrack, SliderRoot, SliderContainer, ValuesList, ValueItem } from "./styles"


export function SliderBirthDate() {
  const valuesArray = [1, 3, 5, 10, 13, 15, 25, 28]
  const birthDateUser = 3  

  const [sliderValue, setSliderValue] = useState(1);

  return (
    <SliderContainer>

      <form>
        <SliderRoot
          className="SliderRoot"
          min={0}
          max={7}
          step={1}
          defaultValue={[birthDateUser]}
        >

        <SliderTrack className="SliderTrack">
          <SliderRange className="SliderRange" />
        </SliderTrack>
        <SliderThumb className="SliderThumb" aria-label="Volume" />

        </SliderRoot>

        <ValuesList >
          {valuesArray.map((value, index) => (
            <ValueItem>
                <span key={index}>{("00" + value).slice(-2)}</span>
            </ValueItem>
          ))}
        </ValuesList>

      </form>
    </SliderContainer>
  )
}
