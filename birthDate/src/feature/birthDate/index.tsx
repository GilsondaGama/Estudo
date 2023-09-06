import { useState } from "react"
import { SliderRange, SliderThumb, SliderTrack, SliderRoot, SliderContainer, ValuesList, ValueItem } from "./styles"


export function SliderBirthDate() {
  // const birthDateUser = 4 
  const valuesArray = [1, 3, 5, 10, 13, 15, 25, 28]

  const [value, setValue] = useState([0]);

  const handleValueChange = (value: number[]) => {
    setValue([valuesArray[value[0]]]);
  };

  console.log(value)
  return (
    <SliderContainer>

      <form>
        <SliderRoot
          className="SliderRoot"
          min={0}
          max={valuesArray.length - 1}
          step={1}
          onValueChange={handleValueChange}
        >

        <SliderTrack className="SliderTrack">
          <SliderRange className="SliderRange" />
        </SliderTrack>
        <SliderThumb className="SliderThumb" aria-label="Volume">
          {/* {value} */}
        </SliderThumb>

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
