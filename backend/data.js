import bcrypt from "bcrypt";

const data = {
  users: [
    {
      name: "Mocarram",
      email: "admin@amazona.com",
      password: bcrypt.hashSync("12345", 8),
      isAdmin: true,
    },
    {
      name: "Peter",
      email: "customer@amazona.com",
      password: bcrypt.hashSync("12345", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      inStock: 10,
      description: "High quality product from Nike",
    },
    {
      name: "Nike polo Shirt",
      category: "T-Shirts",
      image: "/images/p1.jpg",
      price: 100,
      brand: "Nike",
      rating: 5,
      numReviews: 5,
      inStock: 8,
      description: "High quality product from Nike",
    },
    {
      name: "Addidas Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 160,
      brand: "Addidas",
      rating: 4.5,
      numReviews: 12,
      inStock: 0,
      description: "High quality product from Addidas",
    },
    {
      name: "Lacoste Free Pant",
      category: "Pants",
      image: "/images/p1.jpg",
      price: 120,
      brand: "Lacoste",
      rating: 4.5,
      numReviews: 10,
      inStock: 10,
      description: "High quality product from Lacoste",
    },
  ],
};

export default data;
