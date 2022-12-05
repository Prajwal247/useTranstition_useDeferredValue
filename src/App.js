import React, { useDeferredValue, useState, useTransition } from "react";

function App() {
  const [isPending, startTransition] = useTransition();
  const [images, setImages] = useState(null);

  const loadData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div style={{ "text-align": "center", "margin":"50px 50px", "padding":"10px 20px" }}>
        <button
          onClick={() => {
            startTransition(() => {
              loadData();
            });
          }}
        >
          Display Color's box
        </button>
      </div>
      <div
        style={{
          opacity: isPending ? 0.5 : 1,
        }}
      >
        <DisplayImages imgs={images} />
      </div>
    </>
  );
}

const DisplayImages = ({ imgs }) => {
  // for the implementation of useDeferredValue

  // const deferredImages = useDeferredValue(imgs);
  for (var a = [], i = 0; i < 10000; ++i) a[i] = i;
  const getIndex = (index) => {
    return index < 4999 ? index : index - 5000;
  };

  // for the implementation of useDeferredValue

  // return (
  //   <>
  //     {deferredImages &&
  //       a.map((item, index) => (
  //         <img
  //           src={deferredImages[getIndex(index)]?.url}
  //           alt="LOGO"
  //           style={{ height: 50, width: 50 }}
  //           key={index}
  //         />
  //       ))}
  //   </>
  // );
  return (
    <>
      {imgs &&
        a.map((item, index) => (
          <img
            src={imgs[getIndex(index)]?.url}
            alt="colors"
            style={{ height: 20, width: 20 }}
            key={index}
          />
        ))}
    </>
  );
};

export default App;
