import * as React from 'react';
import { Note } from '../models/model';
import Notes from './Notes';

interface INoteListProps {
  notes: Note[]
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NoteList: React.FunctionComponent<INoteListProps> = ({notes, setNotes}) => {

  const renderNotes = (): JSX.Element[] => {
   return notes.map(note => {
     return <Notes note={note} key={note.id}/>
    })
  }

  return (
    <div>
      <h2 className="mt-3">Notes</h2>
      <div> {renderNotes()} </div>
    </div>
  );
};

export default NoteList;
