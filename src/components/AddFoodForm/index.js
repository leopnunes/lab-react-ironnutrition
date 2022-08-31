import { useState } from 'react'

function AddFoodForm() {
    function handleChange(e) {
        setForm({...form,[e.target.name]: e.target.value })
    }
    const [form, setForm] = useState (
        {
        name: "",
        image: "",
        calories: "",
        servings: ""
    }
    )
    console.log(form)
    return (
        <form>
            <label>Name</label>
           <input value={form.name} name="name" type="text" onChange={handleChange} />
           <label>image</label>
           <input value={form.image} name="image" type="text" onChange={handleChange} />
           <label>Calories</label>
           <input value={form.calories} name="calories" type="text" onChange={handleChange} />
           <label>Servings</label>
           <input value={form.servings} name="servings" type="text" onChange={handleChange} />
        </form>
    )
}
export default AddFoodForm;
