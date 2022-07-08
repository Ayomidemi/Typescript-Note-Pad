import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import CreateNote from './components/CreateNote';
import Header from './components/Header';
import NoteList from './components/NoteList';
import { Note } from './models/model';

function App() {

  const [notes, setNotes] = useState<Note[]> ([{
    id: (new Date()).toString(),
    title: "Title e.g Meetings",
    text: "Text e.g Schedule meeting with the manager",
    color: "#dfdfdf",
    date: (new Date()).toString()
  }])

  return (
    <div className="App">
      <Header />
       <Container className='mt-5'>

        <Row>
          <Col>
          <NoteList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>

        <Row>
          <Col>
            <CreateNote notes={notes} setNotes={ setNotes}/>
          </Col>
        </Row>

       </Container>
    </div>
  );
}

export default App;
