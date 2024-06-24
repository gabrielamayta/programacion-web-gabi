import { useEffect, useState } from "react";

export default function GetPosts() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);

  return (
    <>
      {!data ? (
        <>loading... </>
      ) : (
        <>
          <h2>
            Objeto Title:
            {data.title}
            id:{data.id}
          </h2>
          <p>body:{data.body}</p>
        </>
      )}
    </>
  );
}
