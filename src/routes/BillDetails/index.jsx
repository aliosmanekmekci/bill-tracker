import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { fetchBill } from "../../utils/request";

export function BillDetails() {
  const { billId } = useParams();
  const [billData, setBillData] = useState(null);

  useEffect(() => {
    fetchBill(billId).then((response) => {
      setBillData(response);
    });
  }, [billId]);

  return <div>BillDetails {JSON.stringify(billData)}</div>;
}
