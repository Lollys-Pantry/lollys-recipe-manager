/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
import { useFieldArray, useForm } from "react-hook-form";
import { Button, Form, Col, Row } from "react-bootstrap";
import { RecipeItem } from "../types/data";
import "./recipeform.css";

function RecipeForm(props: {
  defaults: RecipeItem;
  doSubmit: (recipe: RecipeItem) => Promise<void>;
}) {
  const { defaults, doSubmit } = props;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaults as any,
  });

  const {
    fields: ingredients,
    append: ingredientsAppend,
    remove: ingredientsRemove,
  } = useFieldArray({ control, name: "ingredients" });
  const { fields: nutritionalLabels, append: nutritionalLabelsAppend } =
    useFieldArray({ control, name: "nutritional_labels" });

  const onSubmit = async (formData: unknown) => {
    const recipeData = formData as RecipeItem;
    // eslint-disable-next-line no-debugger
    recipeData.ingredients_attributes = recipeData.ingredients;
    delete recipeData.ingredients;
    recipeData.nutritional_labels_attributes = recipeData.nutritional_labels;
    delete recipeData.nutritional_labels;
    doSubmit(recipeData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control {...register("name", { required: true })} type="text" />
        {errors?.title?.type === "required" && <p>This field is required</p>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          {...register("description", { required: false })}
          type="text"
          name="description"
        />
      </Form.Group>
      <div className="ingredient-fields">
        {ingredients.map((ingredient, index) => {
          const idPrefix = `ingredients.${index}.`;
          return (
            <fieldset key={ingredient.id}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Quantity
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    {...register(`${idPrefix}quantity`)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Measurement
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    {...register(`${idPrefix}measurement`)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" {...register(`${idPrefix}name`)} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Preparation
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    {...register(`${idPrefix}preparation`)}
                  />
                </Col>
              </Form.Group>
              <button type="button" onClick={() => ingredientsRemove(index)}>
                Delete ingredient
              </button>
            </fieldset>
          );
        })}
        <Button
          variant="outline-info"
          size="sm"
          className="ingredient-button"
          onClick={() =>
            ingredientsAppend({
              quantity: 0,
              measurement: "",
              name: "",
              preparation: "",
            })
          }
        >
          Add ingredient
        </Button>
      </div>

      <div className="nutritional-labels-fields">
        {nutritionalLabels.map((nutritionalLabel, index) => {
          const idPrefix = `nutritional_labels.${index}.`;
          return (
            <fieldset key={nutritionalLabel.id}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Serving Size
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    {...register(`${idPrefix}serving_size`)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Calories
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    {...register(`${idPrefix}calories`)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Total Fat
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    {...register(`${idPrefix}total_fat`)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Saturated Fat
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    {...register(`${idPrefix}saturated_fat`)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Sodium
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    {...register(`${idPrefix}sodium`)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Carbohydrates
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    {...register(`${idPrefix}carbohydrates`)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Fiber
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" {...register(`${idPrefix}fiber`)} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Sugar
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" {...register(`${idPrefix}sugar`)} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Protein
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    {...register(`${idPrefix}protein`)}
                  />
                </Col>
              </Form.Group>
            </fieldset>
          );
        })}
        {Object.keys(nutritionalLabels).length === 0 && (
          <Button
            variant="outline-info"
            size="sm"
            className="nutrition-button"
            onClick={() =>
              nutritionalLabelsAppend({
                serving_size: "",
                calories: "",
                total_fat: "",
                saturated_fat: "",
                sodium: "",
                carbohydrates: "",
                fiber: "",
                sugar: "",
                protein: "",
              })
            }
          >
            Add nutritional information
          </Button>
        )}
      </div>

      <Form.Group>
        <Form.Label>Servings</Form.Label>
        <Form.Control
          {...register("servings", { required: false })}
          type="text"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Preparation Time</Form.Label>
        <Form.Control
          {...register("prep_time", { required: false })}
          type="text"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Cooking Time</Form.Label>
        <Form.Control
          {...register("cook_time", { required: false })}
          type="text"
        />
      </Form.Group>

      <Form.Check
        {...register("lollys_pantry", { required: false })}
        type="checkbox"
        label="Official Lolly's Pantry Recipe"
      />

      <Form.Check
        {...register("sprouty_pie", { required: false })}
        type="checkbox"
        label="Official Sprouty Pie Recipe"
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
