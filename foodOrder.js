const formatSeconds = (seconds) => (seconds / 1000).toFixed(2);

function deliveryOrder(startTime, orderId, item) {
  setTimeout(() => {
    const timeTaken = Date.now();

    console.log(
      `[${formatSeconds(timeTaken - startTime)}s] Delivering order...`
    );
  }, 5200);

  setTimeout(() => {
    const timeTaken = Date.now();

    console.log(
      `[${formatSeconds(
        timeTaken - startTime
      )}s] Order delivered: {orderId: ${orderId},foodDetails:${item},packageDetails: 'Packed in eco-friendly box' deliveryDetails: 'delivered by John at 7:30 PM' }`
    );
  }, 10000);
}

function packFood(startTime, orderId, item) {
  setTimeout(() => {
    const timeTaken = Date.now();

    console.log(`[${formatSeconds(timeTaken - startTime)}s] Packing order...`);
  }, 3200);

  setTimeout(() => {
    const timeTaken = Date.now();

    console.log(
      `[${formatSeconds(
        timeTaken - startTime
      )}s] Order packed: {orderId: ${orderId},foodDetails:${item},packageDetails: 'Packed in eco - friendly box' }`
    );
  }, 5000);

  return deliveryOrder(startTime, orderId, item);
}

function prepareFood(startTime, orderId, item) {
  setTimeout(() => {
    const timeTaken = Date.now();
    console.log(`[${formatSeconds(timeTaken - startTime)}s] Preparing food...`);
  }, 10);

  setTimeout(() => {
    const timeTaken = Date.now();

    console.log(
      `[${formatSeconds(
        timeTaken - startTime
      )}s] Food is ready: {orderId: ${orderId},foodDetails: ${item}}`
    );
  }, 3000);

  return packFood(startTime, orderId, item);
}

const orderFood = (item) => {
  const orderId = Math.floor(Math.random() * 1000);
  const startTime = Date.now();

  console.log(`[${formatSeconds(0)}s] Order recieved : {${orderId}}`);

  return prepareFood(startTime, orderId, item);
};

orderFood("Burger & Fries");
