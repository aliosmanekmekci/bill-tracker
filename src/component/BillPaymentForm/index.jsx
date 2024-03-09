import { Badge, Button, Card, Group, Text } from "@mantine/core";
import classes from "./FeaturesCard.module.css";

export function BillPaymentForm(props) {
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group justify="space-between" mb="md">
        <div>
          <Text fw={500}>Fatura Türü</Text>
          <Text fz="xs" c="dimmed">
            Açıklama
          </Text>
        </div>
        <Badge variant="outline">25% indirim</Badge>
      </Group>

      <Card.Section className={classes.section}>
        <Group gap={30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              ₺168.00
            </Text>
            <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
              Aylık ücret
            </Text>
          </div>

          <Button
            variant="default"
            radius="xl"
            style={{ flex: 1 }}
            onClick={() => props.onSubmit()}
          >
            Hemen Öde
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
