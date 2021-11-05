export default {
  id: "/PostRequestBody",
  type: "object",
  properties: {
    xref: { type: "string" },
    total: { type: "number" },
    subtotal: { type: "number" },
  },
  required: ["xref", "total", "subtotal"],
};
