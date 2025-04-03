/*
    Title: Web Calculator
    Brief description of the program: Easy web calculator for basic calculations

    Name of the author: Kevin Pham
    Date of creation 03.04.2025
    Datum of last edit: 03.04.2025
*/

document.getElementById("Add")?.addEventListener("click", () => calculate("+"));
document.getElementById("Sub")?.addEventListener("click", () => calculate("-"));
document.getElementById("Mult")?.addEventListener("click", () => calculate("*"));
document.getElementById("Divide")?.addEventListener("click", () => calculate("/"));

function calculate(operation: "+" | "-" | "*" | "/"): void 
{
    const num1Input = document.getElementById("num1") as HTMLInputElement | null;
    const num2Input = document.getElementById("num2") as HTMLInputElement | null;
    const resultElement = document.getElementById("result") as HTMLElement | null;

    if (!num1Input || !num2Input || !resultElement) 
    {
        console.error("HTMLElement not found!");
    }

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    let result: string | number = 0;

    if (isNaN(num1) || isNaN(num2)) 
    {
        result = "Please enter valid numbers!";
    } 
    else 
    {
        switch (operation) 
        {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/": result = num2 !== 0 ? num1 / num2 : "Can't divide by zero!"; break;
        }
    }

    resultElement.textContent = String(result);
}

