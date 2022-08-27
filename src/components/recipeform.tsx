/* eslint-disable react/react-in-jsx-scope */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { IRecipeItem } from "../types/data";

function RecipeForm({updateRecipeList}: { updateRecipeList: (recipe: IRecipeItem) => void; }) {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async () => {
    const recipeData : IRecipeItem = {
      name, description,
      servings: 0,
      prepTime: "",
      cookTime: "",
      sproutyPie: false,
      lollysPantry: false
    }

    try {
      const response = await axios
        .post('http://localhost:3000/api/v1/recipes', {recipe: recipeData})

        updateRecipeList(response.data)
 
    } catch(error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error)
    } 
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("name", {required: true})} 
            type="text"
            name="name"
            onChange={e => setName(e.target.value)}
          />
          {errors?.title?.type === "required" && <p>This field is required</p>}
        </Form.Group> 
        
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("description", {required: false})}
            type="text"
            name="description"
            onChange={e => setDescription(e.target.value)}
          />
        </Form.Group><br />

        <Button variant="primary" type="submit">
          Submit
        </Button><hr />
      </Form>
  )
}

export default RecipeForm;