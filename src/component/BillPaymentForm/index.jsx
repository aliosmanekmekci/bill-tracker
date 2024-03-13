import { Badge, Button, Card, Group, Text } from "@mantine/core";
import classes from "./FeaturesCard.module.css";

export function BillPaymentForm({ bill, onSubmit }) {
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group justify="space-between" mb="md">
        <div>
          <Text fw={500}>{bill.type}</Text>
          <Text fz="xs" c="dimmed">
            {bill.description}
          </Text>
        </div>
        <Badge variant="outline">25% indirim</Badge>
      </Group>

      <Card.Section className={classes.section}>
        <Group gap={30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              ₺{bill.dept}
            </Text>
            <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
              Aylık tutar
            </Text>
          </div>

          <Button
            variant="default"
            radius="xl"
            style={{ flex: 1 }}
            onClick={() => onSubmit()}
          >
            Hemen Öde
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
