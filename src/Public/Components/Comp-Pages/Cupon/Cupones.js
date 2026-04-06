export const coupons = [
  {
    code: "WELCOME10",
    type: "global",
    discountType: "percentage",
    value: 10,
    minPurchase: 0,
    expires: "2026-02-27",
    oneTime: false,
  },
  {
    name:'Nike LeBron 21',
    code: "LEBRON30",
    type: "product",
    productId: 3,
    discountType: "percentage",
    value: 30,
    minPurchase: 0,
    expires: "2026-12-31",
    oneTime:false,
  },
  {
    code: "BIGSPENDER",
    type: "global",
    discountType: "fixed",
    value: 50,
    minPurchase: 300,
    expires: "2026-06-01",
    oneTime: true,
  }
];