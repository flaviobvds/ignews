import Stripe from 'stripe'
import { version } from '../../package.json'

export const stripe = new Stripe(
    //process.env.STRIPE_API_KEY,
    'sk_test_51MNjpCBLj9CO0LTdN8r6pkDyWqD4EYMKWK5GBmBS2rGiJF9iXp6mq4Tiw3usJjI0AzdJxi5dCD1ANl4F7YjyE0yS005n2LVMx5',
    {
        apiVersion: '2022-11-15',
        appInfo: {
            name: 'ig.news',
            version
        }
    }
)