let app = new Vue({
  el: '#app',
  data: {
    img: [
      'img/1.jpg',
      'img/2.jpg',
      'img/3.jpg',
      'img/4.jpg',
      'img/5.jpg'
    ],
    index: 0,
  },
  methods: {
    next: function(){
      if (this.index == this.img.length - 1) {
        this.index = 0;
      }else {
        this.index++;
      }
    },
    previous: function(){
      if (this.index == 0) {
        this.index = this.img.length - 1;
      }else {
        this.index--;
      }
    }

  }
});
