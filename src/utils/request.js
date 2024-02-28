const bills = [
  {
    id: 1,
    date: "01.02.2024",
    description: "2024 - Subat ayi aidati ayi",
    type: "Borç",
    dept: 15.0,
    delay: 0.0,
    willRecieve: 0.0,
    balance: 0.0,
  },
  {
    id: 2,
    date: "01.02.2024",
    description: "#9813730 borçlari için kredi karti ile",
    type: "Tahsilat",
    dept: 0.0,
    delay: 0.0,
    willRecieve: 0.0,
    balance: 0.0,
  },
  {
    id: 3,
    date: "01.02.2024",
    description: "#9813730 borçlari için kredi karti ile",
    type: "Aidat",
    dept: 0.0,
    delay: 0.0,
    willRecieve: 0.0,
    balance: 0.0,
  },
  {
    id: 4,
    date: "01.02.2024",
    description: "#9813730 borçlari için kredi karti ile",
    type: "Kira",
    dept: 24.0,
    delay: 0.0,
    willRecieve: 0.0,
    balance: 0.0,
  },
  {
    id: 5,
    date: "01.02.2024",
    description: "#9813730 borçlari için kredi karti ile",
    type: "Fatura",
    dept: 0.0,
    delay: 0.0,
    willRecieve: 0.0,
    balance: 0.0,
  },
];
export function fetchUpcomingBills() {
  return Promise.resolve(bills);
}

export function fetchBill(billId) {
  return Promise.resolve(bills[0]);
}
