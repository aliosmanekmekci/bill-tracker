/* eslint-disable react/prop-types */
import { Button } from "@mantine/core";

export function BillPaymentForm(props) {
  return (
    <div>
      <Button
        onClick={() => props.onSubmit()}
        variant="default"
        color="red"
        size="xs"
      >
        Öde
      </Button>
    </div>
  );
}
