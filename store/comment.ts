import { defineStore } from '#imports';
import { useEmailStore } from '~/store/email';
import { usePhoneStore } from '~/store/phone';
import { useSmsStore } from '~/store/sms';
import type { SubscriptionMethod } from '~/types';

export const useCommentStore = defineStore('comment', {
  state: () => ({
    email: {
      subscribedCount: 0,
      maxAllowed: 3,
      reachedMax: false,
      isSubscribed: false,
    },
    sms: {
      subscribedCount: 0,
      maxAllowed: 5,
      reachedMax: false,
      isSubscribed: false,
    },
    phone: {
      subscribedCount: 0,
      maxAllowed: 5,
      reachedMax: false,
      isSubscribed: false,
    },
  }),
  getters: {
    isEmailSubscribed: state => state.email.isSubscribed,
    isSmsSubscribed: state => state.sms.isSubscribed,
    isPhoneSubscribed: state => state.phone.isSubscribed,
  },
  actions: {
    subscribe(method: SubscriptionMethod) {
      const emailStore = useEmailStore();
      const smsStore = useSmsStore();
      const phoneStore = usePhoneStore();

      if (this[method].reachedMax) {
        alert('Reached max subscription');
        return;
      }

      let contacts: Array<{subscribed: boolean}> = [];

      if (method === "email") {
        contacts = emailStore.listOfContacts;
      } else if (method === "sms") {
        contacts = smsStore.listOfContacts;
      } else if (method === "phone") {
        contacts = phoneStore.listOfContacts;
      }

      if (contacts.length === 0) {
        alert(`Please add ${method} contacts`);
      } else {
        contacts.forEach((contact, index) => {
          if (contact.subscribed === false && index <= (this[method].maxAllowed - 1)) {
            contact.subscribed = true;
            this[method].subscribedCount++;
          }
        });
        this[method].isSubscribed = this[method].subscribedCount > 0 ? true : false;
        if (this[method].subscribedCount === this[method].maxAllowed) {
          this[method].reachedMax = true;
        }
      }
    },
    unsubscribe(method: SubscriptionMethod) {
      const emailStore = useEmailStore();
      const smsStore = useSmsStore();
      const phoneStore = usePhoneStore();

      let contacts: Array<{subscribed: boolean}> = [];

      if (method === "email") {
        contacts = emailStore.listOfContacts;
      } else if (method === "sms") {
        contacts = smsStore.listOfContacts;
      } else if (method === "phone") {
        contacts = phoneStore.listOfContacts;
      }

      if (contacts.length === 0) {
        alert(`No ${method} contacts to unsubscribe`);
      } else {
        contacts.forEach((contact) => {
          if (contact.subscribed === true) {
            contact.subscribed = false;
            this[method].subscribedCount--;
          }
        });

        if (this[method].subscribedCount === 0) {
          this[method].isSubscribed = false;
          this[method].reachedMax = false;
        }
      }
    },
  },
});
