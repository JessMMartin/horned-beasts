import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const horned1 = "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Balrog.jpg";
  const horned2 = "https://media.sciencephoto.com/c0/33/41/98/c0334198-800px-wm.jpg";
  return (
    <div className="Beasts">
      <Header></Header>
      <Main
        title="The Balrog"
        imgUrl={horned1}
        para="In the depths of ancient lore, a creature of unfathomable power awakens. The Balrog, wreathed in flames, embodies chaos and destruction. With fiery wings and smoldering eyes, it unleashes infernal wrath, defying all who challenge its might. Legends speak of heroic battles, but the Balrog remains a haunting symbol of the eternal struggle between light and darkness.  "
      ></Main>
      <Main
        title="Pan"
        imgUrl={horned2}
        para="Within the realms of mythology, a deity of wild allure emerges. Pan, the god of untamed nature, embodies the essence of rustic enchantment and primal wilderness. With goat-like features and mischievous eyes, he roams the woodlands, captivating all with his playful melodies on the panpipes. The ancient legends speak of Pan's whimsical presence, luring wanderers deeper into the hidden realms, where earthly desires intertwine with ethereal realms. As the embodiment of nature's raw power, Pan serves as a reminder of the harmonious yet untamed forces that shape our world, forever enticing mortals to explore the boundaries of their own existence."
      ></Main>
    </div>
  );
}

export default App;
