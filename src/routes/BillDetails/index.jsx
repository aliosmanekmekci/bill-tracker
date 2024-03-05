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

  if (!billData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bill-details">
      <h1>Bill Details</h1>
      <div className="bill-info">
        <p>
          <strong>ID:</strong> {billData.id}
        </p>
        <p>
          <strong>Date:</strong> {billData.date}
        </p>
        <p>
          <strong>Description:</strong> {billData.description}
        </p>
        <p>
          <strong>Type:</strong> {billData.type}
        </p>
        <p>
          <strong>Amount:</strong> ₺{billData.dept}
        </p>
      </div>
    </div>
  );
}
