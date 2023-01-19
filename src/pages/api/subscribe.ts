import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const session = await getSession({ req })

         
        const stripeCustomer = await stripe.customers.create({
            name: session?.user?.name!,
            email: session?.user?.email!,
        })

        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id,
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [
                {
                    price: 'price_1MNjs4BLj9CO0LTdGOFxJcTd',
                    quantity: 1
                }
            ],
            mode: 'subscription',
            success_url: process.env.STRIPE_SUCCESS_URL!,
            allow_promotion_codes: true,
            cancel_url: process.env.STRIPE_CANCEL_URL!
        })

        return res.status(200).json({ sessionId: stripeCheckoutSession.id })
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not Allowed')
    }
}