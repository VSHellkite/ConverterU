
const swapButton = document.getElementById("swapButton");
swapButton.addEventListener("click", swapUnits);

function swapUnits() {
  const fromUnit = document.getElementById("fromUnit");
  const toUnit = document.getElementById("toUnit");
  const tempText = fromUnit.textContent;
  fromUnit.textContent = toUnit.textContent;
  toUnit.textContent = tempText;

  const currentOption = determineSwapOption();
  return currentOption === "Imperial to Metric";
}

function determineSwapOption() {
  const fromUnit = document.getElementById("fromUnit").textContent;
  const toUnit = document.getElementById("toUnit").textContent;
  return (fromUnit === "Imperial" && toUnit === "Metric") ? 1 : 0;
}

// Assuming the button element has an id of "mainButton"
const mainButton = document.getElementById("mainButton");
mainButton.addEventListener("click", handleConversion);

function handleConversion() {
  const input = document.getElementById("input").value;
  const swapOption = determineSwapOption();

  if (input.trim() !== "") {
    if (swapOption === "Imperial to Metric") {
      processInputAndOutput(input);
    } else if (swapOption === "Metric to Imperial") {
      processInputAndOutput1(input);
    }
  }
}
var metricUnits = ["mm", "cm", "m", "km", "g", "kg", "mg", "l", "ml", "µm", "nm", "pm", "fm", "am", "hm"];
var imperialUnits = ["in", "ft", "yd", "mi", "oz", "lb", "gal", "pound", "stone", "thou", "mil", "furlong", "league", "hundredweight", "ton"];
var units = [metricUnits, imperialUnits];

     var conversionRate = {
        "mm": { targetUnit: "in", rate: 0.0393701 },
        "cm": { targetUnit: "in", rate: 0.393701 },
        "m": { targetUnit: "yd", rate: 1.09361 },
        "km": { targetUnit: "mi", rate: 0.621371 },
        "g": { targetUnit: "oz", rate: 0.035274 },
        "kg": { targetUnit: "pound", rate: 2.20462 },
        "mg": { targetUnit: "oz", rate: 0.000035274 },
        "l": { targetUnit: "gal", rate: 0.264172 },
        "ml": { targetUnit: "gal", rate: 0.000264172 },
        "in": { targetUnit: "cm", rate: 2.54 },
        "ft": { targetUnit: "cm", rate: 30.48 },
        "yd": { targetUnit: "cm", rate: 91.44 },
        "mi": { targetUnit: "km", rate: 1.60934 },
        "oz": { targetUnit: "g", rate: 28.3495 },
        "lb": { targetUnit: "kg", rate: 0.453592 },
        "gal": { targetUnit: "l", rate: 3.78541 },
        "pound": { targetUnit: "kg", rate: 0.453592 },
        "stone": { targetUnit: "kg", rate: 6.35029 },
        "µm": { targetUnit: "in", rate: 3.93701e-5 },
        "nm": { targetUnit: "in", rate: 3.93701e-8 },
        "pm": { targetUnit: "in", rate: 3.93701e-11 },
        "fm": { targetUnit: "in", rate: 3.93701e-14 },
        "am": { targetUnit: "in", rate: 3.93701e-17 },
        "hm": { targetUnit: "in", rate: 3.93701e-2 },
        "thou": { targetUnit: "cm", rate: 0.0254 },
        "mil": { targetUnit: "cm", rate: 0.0000254 },
        "furlong": { targetUnit: "km", rate: 0.201168 },
        "league": { targetUnit: "km", rate: 4.82803 },
        "hundredweight": { targetUnit: "kg", rate: 50.8023 },
        "ton": { targetUnit: "kg", rate: 907.185 },
        }

        function convert(value, separator, unit, ending) {
            var targetUnit = conversionRate[unit].targetUnit;
            var rate = conversionRate[unit].rate;
            var result = value * rate;
            return result + separator + targetUnit;
        }

function convertUnits() {
    var convetrsionUnits = [];
    var swapOption = determineSwapOption();
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var regex = /([0-9\.]+)(\s*)([a-zA-Z]+?)(s\b|\b)/g;
    var result = input.replace(regex, function(match, value, separator, unit, ending) {
        if (units[swapOption].indexOf(unit) > -1) {
            return "<span class='highlight'>" + convert(value, separator, unit, ending) + "</span>";
        } else {
            return match;
        }
    });
    output.innerHTML = result;
}
        function listsupportedUnits() {
            var swapOption = determineSwapOption().selectedIndex;
            var unitlist = document.getElementById("unitlist");
            var result = "Supported units:";
            for (var i = 0; i < units[mode].length; i++) {
                result += units[mode][i] + "&nbsp;";
            }
            unitlist.innerHTML = result;
        }