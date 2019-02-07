import MonetaryFormatter from "../helper/MonetaryFormatter";

const formatter = new MonetaryFormatter();

Vue.filter("currency", function(price)
{
    if (price === "N / A")
    {
        return price;
    }
    var number = price;

    if (typeof price !== "undefined")
    {
        var splittedPrice = price.toString().split(".");

        if (!splittedPrice[1])
        {
            number = splittedPrice[0];
        }
        else if (splittedPrice[1].length > 2)
        {
            number = splittedPrice.join(".") + "1";
        }
    }

    return formatter.format(parseFloat(number).toFixed(2), App.activeCurrency);
});
