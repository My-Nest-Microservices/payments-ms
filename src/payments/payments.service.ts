import { Injectable } from '@nestjs/common';
import { envs } from 'src/config';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private readonly stripe = new Stripe(envs.stripeSecretKey);

  async createPaymentSession() {
    const session = await this.stripe.checkout.sessions.create({
      payment_intent_data: {
        metadata: {},
      },
      mode: 'payment',
      success_url: 'http://localhost:3003/payments/success',
      cancel_url: 'http://localhost:3003/payments/cancel',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Product 1',
            },
            unit_amount: 2000, // 20 Dolars 2000 / 100 = 20.00
          },
          quantity: 2,
        },
      ],
    });

    return session;
  }
}
