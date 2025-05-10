import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [restro, setRestro] = useState<any>([]);
  const [price, setPrice] = useState<any>();
  const [isVeg, setIsVeg] = useState(false);  
  const [isNonVeg, setIsNonVeg] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  
  useEffect(() => {
    const savedRestro = localStorage.getItem('restro');
    if(savedRestro){
      setRestro(JSON.parse(savedRestro));
    }
  }, []);

  const handleInputValue = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleClickEvent = () => {
    setRestro((prev: any) => {

      const newRestaurant = {
        id: prev.length + 1,
        name: inputValue,
        price: price,
        isVeg: isVeg,
        isNonVeg: isNonVeg,
        isVegan: isVegan,
      };
      
      const updatedRestaurants = [...prev, newRestaurant];

      localStorage.setItem('restro', JSON.stringify(updatedRestaurants));

      return updatedRestaurants;
      // return [
      //   ...prev,
      //   {
      //     id: prev.length + 1,
      //     name: inputValue,
      //     price: price,
      //     isVeg: isVeg,
      //     isNonVeg: isNonVeg,
      //     isVegan: isVegan,
      //   },
      // ];
    });
    setInputValue("");
    setPrice("");
    setIsVeg(false);
    setIsNonVeg(false);
    setIsVegan(false);
  };

  const resetHandler = () => {
    setRestro((prev: any) => (prev = []));
    localStorage.removeItem('restro');
  };

  const handlePrice = (e: any) => {
    setPrice(e.target.value);
  };

  const handleVeg = () => {
    setIsVeg(!isVeg);
  };

  const handleNonVeg = () => {
    setIsNonVeg(!isNonVeg);
  };

  const handleVegan = () => {
    setIsVegan(!isVegan);
  };

  return (
    <div className="App min-h-screen bg-gray-100 py-4 px-4 sm:py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add dishes to the menu</h1>
          
          {/* Form Section */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputValue}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter restaurant name"
              />
              <input 
                type="number" 
                value={price} 
                onChange={handlePrice}
                className="w-full sm:w-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Price"
              />
            </div>

            {/* Food Type Checkboxes */}
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <label className="inline-flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  onChange={handleVeg}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">Veg</span>
              </label>
              <label className="inline-flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  onChange={handleNonVeg}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">Non-Veg</span>
              </label>
              <label className="inline-flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  onChange={handleVegan}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">Vegan</span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
              <button 
                onClick={handleClickEvent}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                Add Dishes
              </button>
              <button 
                onClick={resetHandler}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                Reset Dishes
              </button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          {restro.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Veg</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Non-Veg</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vegan</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {restro.map((data: any) => (
                    <tr key={data.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{data.id}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{data.name}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">₹{data.price}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${data.isVeg ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {data.isVeg ? "Yes" : "No"}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${data.isNonVeg ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                          {data.isNonVeg ? "Yes" : "No"}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${data.isVegan ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {data.isVegan ? "Yes" : "No"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg py-8">No Dishes added yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
