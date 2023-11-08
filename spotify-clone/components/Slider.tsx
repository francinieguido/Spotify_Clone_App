"use client";

import * as RadixSlider from '@radix-ui/react-slider';

interface SlideProps {
    value?: number;
    onChange?: (value: number) => void;
}

const Slider: React.FC<SlideProps> = ({
    value = 1,
    onChange
}) => {

    //RadixSlider returns an array of values
    const handleChange = (newValue: number[]) => {
        onChange?.(newValue[0]);
    };

    return (
        <RadixSlider.Root
            className="
        relative flex w-full h-10 items-center select-none touch-none"
            defaultValue={[1]} value={[value]} onValueChange={handleChange} max={1}
            step={0.1} aria-label="Volume"
        >
            <RadixSlider.Track
                className="relative bg-neutral-600 grow rounded-full h-[3px]">
                <RadixSlider.Range
                    className="absolute bg-white rounded-full h-full"
                />
            </RadixSlider.Track>
        </RadixSlider.Root>
    );
}

export default Slider;