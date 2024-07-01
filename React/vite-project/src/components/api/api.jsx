import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1); // Cantidad a convertir
  const [fromCurrency, setFromCurrency] = useState("USD"); // Moneda de origen
  const [toCurrency, setToCurrency] = useState("EUR"); // Moneda de destino
  const [exchangeRate, setExchangeRate] = useState(); // Tasa de cambio
  const [convertedAmount, setConvertedAmount] = useState(); // Cantidad convertida
  const [currencies, setCurrencies] = useState([]); // Lista de monedas disponibles

  useEffect(() => {
    // Obtener las tasas de cambio cuando se carga el componente
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/4327b22da111b880dad7c4cd/latest/${fromCurrency}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setExchangeRate(data.conversion_rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency]);

  useEffect(() => {
    // Calcular la cantidad convertida cuando cambian las tasas de cambio o la cantidad
    if (exchangeRate && amount !== undefined && fromCurrency !== toCurrency) {
      const rate = exchangeRate[toCurrency];
      const converted = (amount * rate).toFixed(2);
      setConvertedAmount(converted);
    } else {
      setConvertedAmount(undefined);
    }
  }, [exchangeRate, amount, fromCurrency, toCurrency]);

  useEffect(() => {
    // Obtener la lista de monedas disponibles cuando se carga el componente
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          "https://v6.exchangerate-api.com/v6/YOUR_API_KEY/codes"
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCurrencies(data.supported_codes);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, []);

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setAmount(value);
    }
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
        />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <p>to</p>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <p>=</p>
        <input
          type="text"
          value={convertedAmount || ""}
          readOnly
          placeholder="Converted amount"
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;
