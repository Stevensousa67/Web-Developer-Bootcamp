import PropertyList from "./PropertyList";
import "./App.css";

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 823423, name: "Ocean View", rating: 4.5, price: 200 },
  { id: 239123, name: "Mountain Cabin", rating: 4.8, price: 175 },
  { id: 932423, name: "Urban Apartment", rating: 4.7, price: 100 },
  { id: 239123, name: "Lake House", rating: 4.6, price: 225 },
  { id: 932423, name: "Suburban Home", rating: 4.7, price: 100 },
  { id: 239123, name: "Beach Bungalow", rating: 4.6, price: 225 },
  { id: 932423, name: "City Condo", rating: 4.7, price: 100 },
  { id: 239123, name: "Cabin", rating: 4.6, price: 225 },
  { id: 932423, name: "Apartment", rating: 4.7, price: 100 },
  { id: 239123, name: "House", rating: 4.6, price: 225 },
  { id: 932423, name: "Condo", rating: 4.7, price: 100 },
  { id: 239123, name: "Bungalow", rating: 4.6, price: 225 },
  { id: 932423, name: "Yurt", rating: 4.7, price: 100 },
  { id: 239123, name: "Cottage", rating: 4.6, price: 225 },
  { id: 932423, name: "Mansion", rating: 4.7, price: 100 },
  { id: 239123, name: "Villa", rating: 4.6, price: 225 },
  { id: 932423, name: "Castle", rating: 4.7, price: 100 },
  { id: 239123, name: "Palace", rating: 4.6, price: 225 },
  { id: 932423, name: "Estate", rating: 4.7, price: 100 },
  { id: 239123, name: "Farmhouse", rating: 4.6, price: 225 },
  { id: 932423, name: "Ranch", rating: 4.7, price: 100 },
  { id: 239123, name: "Cabin", rating: 4.6, price: 225 },
];

export default function App() {
  return (
    <div>
      <PropertyList properties={properties} />
    </div>
  );
}