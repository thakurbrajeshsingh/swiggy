import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Brajesh",
    email: "brajeshsingh@capgemini.com",
  },
});

export default UserContext;
