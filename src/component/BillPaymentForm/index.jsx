import { Button } from "@mantine/core";
export function BillPaymentForm(props) {
  return (
    <div>
      <Button
        onClick={(e) => props.onSubmit()}
        variant="default"
        color="red"
        size="xs"
      >
        Öde
      </Button>
    </div>
  );
}
