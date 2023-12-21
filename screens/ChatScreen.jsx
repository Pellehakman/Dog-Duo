import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getFirestore, query, collection, getDocs } from "firebase/firestore";
import globalStyles from "../styles/globalStyles";
import database from "../business/firebase";

const ChatScreen = () => {
  const [recipeData, setRecipeData] = useState(null);



  async function getRecipes() {
    try {
      const firestore = getFirestore(database);
      const dateRef = query(collection(firestore, "mypawbuddy"));
      const snapshots = await getDocs(dateRef);
      const fetchFirebase = snapshots.docs.map((doc) => {
        const data = doc.data();
        return data;
      });

      setRecipeData(fetchFirebase);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }

  useEffect(() => {
 
    getRecipes(); // You probably want to fetch recipes here
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headingContainer}>
        <Text style={[globalStyles.H1, { color: "black" }]}>Chat</Text>
        {recipeData && <Text>{db.app.name}</Text>}
      </View>
    </View>
  );
};

export default ChatScreen;
