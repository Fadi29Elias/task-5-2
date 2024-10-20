     const  convert = document.getElementById('convertButton')





     convert.addEventListener('click', function() {
    const valueInput = document.getElementById('valueInput').value;
    const fromUnit = document.getElementById('In').value;
    const toUnit = document.getElementById('Out').value;
    let result;

   
        const value = parseFloat(valueInput);
        let meters;

   
        switch (fromUnit) {
            case "M":
                meters = value;
                break;
            case "KM":
                meters = value * 1000;
                break;
            case "CM":
                meters = value / 100;
                break;
            case "MILE":
                meters = value * 1609.34;
                break;
            case "Ft":
                meters = value * 0.3048;
                break;
            case "INCH":
                meters = value * 0.0254;
                break;
        }
        switch (toUnit) {
            case "M":
                result = meters;
                break;
            case "KM":
                result = meters / 1000;
                break;
            case "CM":
                result = meters * 100;
                break;
            case "MILE":
                result = meters / 1609.34;
                break;
            case "Ft":
                result = meters / 0.3048;
                break;
            case "INCH":
                result = meters / 0.0254;
                break;
        }
    

    document.getElementById('result').innerText = `Result : ${result} ${toUnit}`;
});
