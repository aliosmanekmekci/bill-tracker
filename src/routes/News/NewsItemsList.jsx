import { Accordion, Image } from "@mantine/core";

export function NewsItemsList(props) {
  const newsItems = props.items;

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

  return items;
}
