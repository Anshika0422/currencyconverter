import { useId } from "react";
import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    amountDisable = false,
    currencyDisable = false,
    currencyOptions = [],
    selectCurrency = "usd",
    className = ""
}) {

    const amountInputId = useId()

    return(
        <div className={`bg-white p-2 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor="AmountInputId" className="text-black/40 mb-2 inline-block">
                {label}
                </label>
                <input
                id={amountInputId}
                className="outline-none bg-transparent w-full p-1.5"
                type="number"
                placeholder="Amount"
                disabled={amountDisable}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                ></input>
                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                 className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                 value={selectCurrency}
                 disabled={currencyDisable}
                 onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                 >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                    </select></div>
        </div>
    )
}

export default InputBox;