import { defineStore } from '#imports';
import { useCommentStore } from '~/store/comment';
import type { ContactData, ContactStore } from '~/types';

export const usePhoneStore = defineStore('phone', {
  state: (): ContactStore => ({
    count: 0,
    list: [],
  }),
  getters: {
    listOfContacts: (state) => state.list,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    addContact(data: ContactData) {
      const commentStore = useCommentStore();
      this.list.push(data);
      if (commentStore.isPhoneSubscribed) {
        commentStore.subscribe('phone');
      }
    }
  }
});
