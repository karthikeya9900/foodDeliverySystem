const timeElapsed = (startTime) =>
  `[${((Date.now() - startTime) / 1000).toFixed(2)}s]`;

const receiveOrder = () => {
  return new Promise((resolve) => {
    const startTime = Date.now();
    const order = { orderId: 123, startTime, item: "burger" };
    console.log(`[0.00s] Order received:`, order);
    resolve(order);
  });
};

const prepareFood = (order) => {
  console.log(`${timeElapsed(order.startTime)} Preparing food...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${timeElapsed(order.startTime)} Food is ready:`, order);
      resolve(order);
    }, 3000);
  });
};

const packOrder = (order) => {
  console.log(`${timeElapsed(order.startTime)} Packing order...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      order.packageDetails = "Packed in eco-friendly box";
      console.log(`${timeElapsed(order.startTime)} Order packed:`, order);
      resolve(order);
    }, 2000);
  });
};

const deliverOrder = (order) => {
  console.log(`${timeElapsed(order.startTime)} Delivering order...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      order.deliveryDetails = "Delivered by John at 7:30 PM";

      console.log(`${timeElapsed(order.startTime)} Order delivered:`, order);
      resolve(order);
    }, 5000);
  });
};

const main = () => {
  receiveOrder()
    .then(prepareFood)
    .then(packOrder)
    .then(deliverOrder)
    .catch((error) => console.error("Error:", error));
};

main();
