import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

interface CoffeeOption {
  label: string;
  amount: number;
}

const BuyMeCoffee: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const navigate = useNavigate(); // Initialize navigate hook

  const coffeeOptions: CoffeeOption[] = [
    { label: 'Buy 1 Coffee', amount: 5 },
    { label: 'Buy 3 Coffees', amount: 15 },
    { label: 'Buy 5 Coffees', amount: 25 },
  ];

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
  };

  const handleBuyNow = () => {
    if (selectedAmount !== null) {
      alert(`Thank you for buying ${selectedAmount} dollars worth of coffee!`);
      navigate('/skills'); // Navigate to the Skills page after clicking "Buy Now"
    } else {
      alert('Please select a coffee option.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Buy Me a Coffee</h1>
        <p className="text-gray-600 mb-6 text-center">
          If you'd like to support my work, feel free to buy me a coffee!
        </p>

        <div className="space-y-4 mb-6">
          {coffeeOptions.map((option) => (
            <button
              key={option.amount}
              onClick={() => handleSelectAmount(option.amount)}
              className={`w-full px-4 py-2 text-lg font-medium rounded-lg transition-colors duration-200 ${
                selectedAmount === option.amount
                  ? 'bg-yellow-400 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {option.label} - ${option.amount}
            </button>
          ))}
        </div>

        <button
          onClick={handleBuyNow}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition-colors duration-200"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BuyMeCoffee;
