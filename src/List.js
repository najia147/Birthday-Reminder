import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article
            key={id}
            className="flex items-center space-x-4 p-3 mb-3 bg-gray-50 rounded-lg shadow-md"
          >
            <img
              src={image}
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
            />
            <div>
              <h4 className="text-lg font-medium">{name}</h4>
              <p className="text-gray-500">{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
