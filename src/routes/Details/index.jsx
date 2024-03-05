import { Accordion, Image, Loader } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Details() {
  const [newsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      " https://newsdata.io/api/1/news?country=tr&apikey=pub_39398456c4ae1777ca05a2a6dc24fd9e30280 "
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNewsItems(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader color="cyan" size="sm" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const items =
    newsItems &&
    newsItems.map((newsItem) => (
      <Accordion.Item key={newsItem.article_id} value={newsItem.title}>
        <Accordion.Control>{newsItem.title}</Accordion.Control>
        <Accordion.Panel>
          {newsItem.description}
          <Image
            m="auto"
            maw="300px"
            radius="md"
            h={200}
            w="auto"
            fit="contain"
            src={newsItem.image_url}
          />
        </Accordion.Panel>
      </Accordion.Item>
    ));

  return (
    <Accordion variant="contained" chevronPosition="left" defaultValue="Borç">
      {items}
    </Accordion>
  );
}
