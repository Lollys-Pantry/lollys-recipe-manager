/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { RecipeItem } from "../types/data";

function RecipeForm() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [servings, setServings] = useState<number>(1);
  const [prep_time, setPrepTime] = useState<string>("");
  const [cook_time, setCookTime] = useState<string>("");
  const [lollys_pantry, setLollysPantry] = useState<boolean>(false);
  const [sprouty_pie, setSproutyPie] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  
  const onSubmit = async () => {
    const recipeData: RecipeItem = {
      name,
      description,
      servings,
      prep_time,
      cook_time,
      sprouty_pie,
      lollys_pantry,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/recipes",
        { recipe: recipeData }
      );

      // updateRecipeList(response.data);
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    navigate("/")
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register("name", { required: true })}
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        {errors?.title?.type === "required" && <p>This field is required</p>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register("description", { required: false })}
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Servings</Form.Label>
        <Form.Control
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register("servings", { required: false })}
          type="text"
          name="servings"
          onChange={(e) => setServings(parseInt(e.target.value, 10))}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Preparation Time</Form.Label>
        <Form.Control
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register("prep_time", { required: false })}
          type="text"
          name="prepTime"
          onChange={(e) => setPrepTime(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Cooking Time</Form.Label>
        <Form.Control
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register("cook_time", { required: false })}
          type="text"
          name="cookTime"
          onChange={(e) => setCookTime(e.target.value)}
        />
      </Form.Group>

      <Form.Check
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...register("lollys_pantry", { required: false })}
        type="checkbox"
        id="lollysPantry"
        label="Official Lolly's Pantry Recipe"
        onChange={e => setLollysPantry(e.target.checked)}
      />
      
      <Form.Check
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...register("sprouty_pie", { required: false })}
        type="checkbox"
        id="sproutyPie"
        label="Official Sprouty Pie Recipe"
        onChange={e => setSproutyPie(e.target.checked)}
      />

      <br />

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <hr />
    </Form>
  );
}

export default RecipeForm;
