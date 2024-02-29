import { Accordion } from "@mantine/core";
import { useEffect, useState } from "react";
import { fetchUpcomingBills } from "../../utils/request";

export default function Details() {
  const [bills, setBills] = useState([]);
  useEffect(() => {
    fetchUpcomingBills().then((data) => setBills(data));
  }, []);
  // See details data above
  const items = bills.map((bill) => (
    <Accordion.Item key={bill.id} value={bill.type}>
      <Accordion.Control>{bill.type}</Accordion.Control>
      <Accordion.Panel>₺{bill.dept}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion variant="contained" chevronPosition="left" defaultValue="Borç">
      {items}
    </Accordion>
  );
}
