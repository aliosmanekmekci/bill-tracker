import { Accordion, Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import { fetchNews } from "../../utils/request/news";
import { NewsItemsList } from "./NewsItemsList";

export default function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await fetchNews();
        setNewsItems(response.results);
      } catch (e) {
        setError(e.message);
      }
      setIsLoading(false);
    };
    loadNews();
  }, []);

  if (isLoading) {
    return <Loader color="cyan" size="sm" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Accordion variant="contained" chevronPosition="left" defaultValue="Borç">
      <NewsItemsList items={newsItems} />
    </Accordion>
  );
}
