const formatTime = (seconds) => (seconds / 1000).toFixed(2);

const secondsElapsed = (orderTime) => {
  return `[${formatTime(Date.now() - orderTime)}s]`;
};

const deliveryOrder = (orderDetails) => {
  const orderInfo = { ...orderDetails };

  setTimeout(() => {
    console.log(`${secondsElapsed(orderInfo.orderTime)} Delivering order...`);
  }, 5200);

  setTimeout(() => {
    orderInfo.deliveredBy = "delivered by John at 7:30 PM";

    console.log(
      `${secondsElapsed(orderInfo.orderTime)} Order delivered: {orderId: ${
        orderInfo.orderId
      },foodDetails:${orderInfo.items},packageDetails: ${
        orderInfo.packageDetails
      } deliveryDetails: ${orderInfo.deliveredBy} }`
    );
  }, 10000);
};

const packFood = (orderDetails) => {
  const orderInfo = { ...orderDetails };

  setTimeout(() => {
    console.log(`${secondsElapsed(orderInfo.orderTime)} Packing order...`);
  }, 3200);

  orderInfo.packageDetails = "Packed in eco-friendly box";

  setTimeout(() => {
    console.log(
      `${secondsElapsed(orderInfo.orderTime)} Order packed: {orderId: ${
        orderInfo.orderId
      },foodDetails:${orderInfo.items},packageDetails:${
        orderInfo.packageDetails
      } }`
    );
  }, 5000);

  return deliveryOrder(orderInfo);
};

const prepareFood = (orderDetails) => {
  setTimeout(() => {
    console.log(`${secondsElapsed(orderDetails.orderTime)} Preparing food...`);
  }, 10);

  setTimeout(() => {
    console.log(
      `${secondsElapsed(orderDetails.orderTime)} Food is ready: {orderId: ${
        orderDetails.orderId
      },foodDetails: ${orderDetails.items}}`
    );
  }, 3000);

  return packFood(orderDetails);
};

const orderFood = (item) => {
  const orderDetails = {
    orderId: Math.floor(Math.random() * 1000),
    orderTime: Date.now(),
    items: item,
  };

  console.log(
    `[${formatTime(0)}s] Order recieved : {#${orderDetails.orderId}}`
  );

  return prepareFood(orderDetails);
};

const main = () => {
  orderFood("Burger & Fries");
  // orderFood(prompt("enter food item name:"));
};

main();
