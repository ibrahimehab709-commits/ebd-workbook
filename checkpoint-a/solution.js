// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// TODO: export the five functions spec.md asks for:
//   loadOrders()        async
//   myOrders(orders)
//   summarize(orders)
//   describeOrder(id)   async, and must never throw
//   toJsonLines(orders)
//
// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.


// 1.
export async function loadOrders() {
  return await findAllOrders();
}

// 2.
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Giza" && order.status === "pending"
  );
}

// 3.
export function summarize(orders) {
  if (orders.length === 0) {
    return 0;
  }

  return orders.reduce(
    (highest, order) => Math.max(highest, order.price),
    0
  );
}

// 4.
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch {
    return `Missing order: ${id}`;
  }
}

// 5.
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({
      student: order.student,
      item: order.item,
    }))
  );
}