import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <section className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          {people.length} birthdays today
        </h3>
        <List people={people} />
        <button
          onClick={() => setPeople([])}
          className="w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-blue-600 transition"
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
