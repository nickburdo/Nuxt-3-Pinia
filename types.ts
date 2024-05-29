export type SubscriptionMethod = 'email' | 'sms' | 'phone';

export interface ContactData {
  name: string;
  subscribed: boolean;
}

export interface ContactStore {
  count: number;
  list: ContactData[];
}
