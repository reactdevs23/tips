import styles from "./App.module.css";
import { leftColud, rightCloud, rocket } from "./images";
import CommonComponent from "./components/CommonComponent/CommonComponent";

//  font-family: "Poppins", sans-serif;
//  font-family: "Inter", sans-serif;
function App() {
  const data = {
    commoneProperties: {
      fontFamily: "'Inter', sans-serif",
      background: "#596b50",
      leftBottomImg: leftColud,
      rightBottomImg: rightCloud,
      arrow: "fa-solid fa-arrow-right-long",
    },
    allTips: [
      {
        title: "<span>6 Tips</span> <br/> For Managing <br/> Finances Wisely",
        img: rocket,
        link: "reallygreatsit.com",
      },

      {
        title: "Create a <br/> <span> Budget</span> Plan",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: rocket,
        link: "reallygreatsit.com",
      },

      {
        title: " <span> Prioritize </span> <br/>  Depth",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: rocket,
        link: "reallygreatsit.com",
      },
      {
        title: " <span> Save </span> Some of <br/>  Your Income",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: rocket,
        link: "reallygreatsit.com",
      },
      {
        title: " <span> Invest </span>  <br/>  Your Money",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: rocket,
        link: "reallygreatsit.com",
      },
      {
        title: "Carry Out <br/> Regular   <span> Monitoring </span>   ",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: rocket,
        link: "reallygreatsit.com",
      },
      {
        title: "Decipline and <br/>   <span> Consistency </span>   ",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: rocket,
        link: "reallygreatsit.com",
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      {data.allTips.map((el, i) => (
        <CommonComponent
          {...el}
          {...data.commoneProperties}
          currentTips={i}
          totalTips={data.allTips.length - 1}
          key={i}
        />
      ))}
    </div>
  );
}

export default App;
