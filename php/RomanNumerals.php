<?php

// A php object oriented approch to building a roman numeral converter
class RomanNumerals
{

    public function toNumeral($input)
    {

        $output = "";

        $output .= $this->thousands($input);

        $output .= $this->hundreds($input);

        $output .= $this->tens($input);

        $output .= $this->singles($input);

        return $output;
    
        //From here the things to focus on would be reducing repetition and potentially removing any if statements
    }

    public function thousands(int $input) {

        $input %= 10000;

        $timesThousand = floor($input / 1000);

        return $this->numeralProcessor($timesThousand, "M", "?", "?");

    }

    public function hundreds(int $input) {

        $input %= 1000;

        $timesHundred = floor($input / 100);

        return $this->numeralProcessor($timesHundred,"C","D","M");

    }

    public function tens(int $input) {

        $input %= 100;

        $timesTen = floor($input / 10);

        return $this->numeralProcessor($timesTen,"X","L","C");

    }

    public function singles(int $input) {

        $input %= 10;

        return $this->numeralProcessor($input, "I", "V", "X");

    }

    public function numeralProcessor(int $input,string $symbol1,string $symbol5,string $symbol10) {

        $output = "";

        if ($input == 9) {

            $output .= $symbol1 . $symbol10;

        } else if ($input == 4) {

            $output .= $symbol1 . $symbol5;

        } else {

            if ($input>= 5) {

                $output .= $symbol5;

            }
    
            $input %= 5;
    
            for ($i=0; $i < $input; $i+=1) { 

                $output .= $symbol1;

            }

        }

        return $output;

    }

}