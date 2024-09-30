import React from 'react';
const Card = ({img, title, description}) => {
  return (
    <div className="card">
      <img src={img} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

const App = () => {
    return (
      <div>
        <Card
          img="https://images.pexels.com/photos/1576955/pexels-photo-1576955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Coconut Tree"
          description="This is a photo of Coconut Tree On Seashore in Fort Lauderdale, FL, United State."
        />
      </div>
    );
  };
  
  export default App;