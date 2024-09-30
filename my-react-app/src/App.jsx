<h3> Proj React Homework </h3>
const cardsData = [
    {
    img: "https://images.pexels.com/photos/149673/pexels-photo-149673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Palm Tree",
    description: "Palm Tree Beside the Sea Shore during Sunset in Punta Cana, La Altagracia, Dominican Republic.",
    date: "June 2nd, 2023",
    },
    {
    img: "https://images.pexels.com/photos/17077092/pexels-photo-17077092/free-photo-of-sunset-over-the-sea-on-a-tropical-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Tropical Beatch",
    description: "Sunset Over the Sea on a Tropical Beach in Bayahíbe, La Altagracia, Dominik Cumhuriyeti.",
    date: "August 26, 2016",
    },
];
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
        {cardsData.map((card, index) => (
            <Card
            key={index}
            img={card.img}
            title={card.title}
            description={card.description}
            date={card.date}
            />
            ))}
        </div>
        );
    };
export default App
