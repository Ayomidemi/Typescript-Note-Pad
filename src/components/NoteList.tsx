import * as React from 'react';
import { Note } from '../models/model';
import Notes from './Notes';

interface INoteListProps {
  notes: Note[]
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NoteList: React.FunctionComponent<INoteListProps> = ({notes, setNotes}) => {

  const handleDelete = (id: string) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const renderNotes = (): JSX.Element[] => {
   return notes.map(note => {
     return <Notes note={note} key={note.id} handleDelete={handleDelete}/>
    })
  }

  return (
    <div>
      <h2 className="mt-4 mb-3">Notes</h2>
      <div> {renderNotes()} </div>
    </div>
  );
};

export default NoteList;
