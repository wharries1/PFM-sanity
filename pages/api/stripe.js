const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const cartItems = (req.body)
    console.log(cartItems)
    try {

      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_address_collection: {allowed_countries: ['GB']},
        shipping_options:[
          {shipping_rate: 'shr_1MujadAo8puVP1Wfkvsha5kD'},
          {shipping_rate: 'shr_1MujbkAo8puVP1WfKTeMTb28'},
        ],
        line_items: cartItems.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/0fncllev/production/').replace('-jpg', '.jpg')
          console.log('IMAGE', newImage)

          return{
            price_data: {
              currency: 'gbp',
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}