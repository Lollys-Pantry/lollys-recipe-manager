/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { RecipeItem } from "../types/data";

function RecipeForm(props: {
  defaults: RecipeItem;
  doSubmit: (recipe: RecipeItem) => Promise<void>;
}) {
  const { defaults, doSubmit } = props;
  const [name, setName] = useState<string>(defaults.name);
  const [description, setDescription] = useState<string>(defaults.description);
  const [servings, setServings] = useState<number>(defaults.servings);
  const [prep_time, setPrepTime] = useState<string>(defaults.prep_time);
  const [cook_time, setCookTime] = useState<string>(defaults.cook_time);
  const [lollys_pantry, setLollysPantry] = useState<boolean>(
    defaults.lollys_pantry
  );
  const [sprouty_pie, setSproutyPie] = useState<boolean>(defaults.sprouty_pie);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

    doSubmit(recipeData);
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
          defaultValue={defaults.name}
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
          defaultValue={defaults.description}
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
          defaultValue={defaults.servings}
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
          defaultValue={defaults.prep_time}
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
          defaultValue={defaults.cook_time}
          onChange={(e) => setCookTime(e.target.value)}
        />
      </Form.Group>

      <Form.Check
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("lollys_pantry", { required: false })}
        type="checkbox"
        id="lollysPantry"
        label="Official Lolly's Pantry Recipe"
        defaultValue={`${defaults.lollys_pantry}`}
        onChange={(e) => setLollysPantry(e.target.checked)}
      />

      <Form.Check
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("sprouty_pie", { required: false })}
        type="checkbox"
        id="sproutyPie"
        label="Official Sprouty Pie Recipe"
        defaultValue={`${defaults.sprouty_pie}`}
        onChange={(e) => setSproutyPie(e.target.checked)}
      />

      <br />

      <Button variant="primary" type="submit">
        Save
      </Button>
      <hr />
    </Form>
  );
}

export default RecipeForm;
