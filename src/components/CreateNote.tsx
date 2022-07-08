import * as React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Note } from "../models/model";

interface ICreateNoteProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNote: React.FunctionComponent<ICreateNoteProps> = ({
  notes,
  setNotes,
}) => {

  const [error, setError] = React.useState<string>('')

  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("Please fill all inputs");
  }

  setError("");
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()
        }]);
        
        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";
  }

  return (
    <>
      <h2 className="mt-3">Create Notes</h2>
      {error && <Alert variant='danger'>{error}</Alert>}

      <Form className="mb-3 mt-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title e.g Meetings"
            ref={titleRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            placeholder="Note descrption"
            as="textarea"
            ref={textRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label htmlFor="colorInput">Add a color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Choose your color"
            ref={colorRef}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNote;
