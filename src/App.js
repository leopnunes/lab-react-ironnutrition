import './App.css'
import foods from './foods.json'
import { useState } from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [allFoods, setAllFoods] = useState(foods)


  return (    
    <div className="App">

      <h1>Add Food Entry</h1>
              {allFoods.map((food) => {
                  return (
                    <div>
                    <FoodBox food={food} />
                    <AddFoodForm food={food} />
                    </div>
                  )

              })}
            <h1>Food List</h1>

    </div>
  )
}

export default App;
