import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState('all');

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Blogger App - Conditional Rendering</h1>

      <div>
        <button onClick={() => setView('all')}>All</button>
        <button onClick={() => setView('book')}>Book</button>
        <button onClick={() => setView('blog')}>Blog</button>
        <button onClick={() => setView('course')}>Course</button>
      </div>

      {view === 'all' && (
        <>
          <BookDetails />
          <BlogDetails />
          <CourseDetails />
        </>
      )}

      {view === 'book' && <BookDetails />}
      {view === 'blog' && <BlogDetails />}
      {view === 'course' && <CourseDetails />}
    </div>
  );
}

export default App;