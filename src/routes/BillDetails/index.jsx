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

  const listItems = [
    {
      label: "ID",
      value: billData.id,
    },
    {
      label: "Date",
      value: billData.date,
    },
    {
      label: "Description",
      value: billData.description,
    },
    {
      label: "Type",
      value: billData.type,
    },
    {
      label: "Amount",
      value: billData.dept,
    },
  ];

  return (
    <div className="bill-details">
      <h1>Bill Details</h1>

      <div className="bill-info">
        {listItems.map(({ label, value }) => (
          <p key={label}>
            <strong>{label}:</strong> {value}
          </p>
        ))}
      </div>
    </div>
  );
}
