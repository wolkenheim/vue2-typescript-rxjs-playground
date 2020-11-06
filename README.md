# Vue 2, Typescript and RxJS

Dealing again with Angular lately I´ve been wondering why rxjs(https://rxjs.dev/) is not so popular in the Vue community. Probably as there is Vue.Observable() and the own implementation of it. Also Vuex is a low hanging fruit compared to Redux and NgRx. So you get global, reactive state quite easily. RxJs feels over the top for most of my use cases. However, it can be useful if you want to implement your own store. Most tutorials out there try to sell this idea as something important. No, it is not. In Vue 2 there is no need for it - Vuex does that already. You should do that if you

a) want to explore RxJS
b) want to know how to build your own reative store from scratch
c) want to communicate with components outside your vue app in a way Vuex cannot handle


```
npm install
```

You need to run the mock db in a seperate terminal or install concurrently package
```
npm run db 
npm run serve
```
