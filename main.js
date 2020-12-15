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
  mounted(){

    this.printActive();

  },

  methods: {
    next(){
      if (this.index == this.img.length - 1) {
        this.index = 0;
      }else {
        this.index++;
      }
      this.printActive();
    },
    previous(){
      if (this.index == 0) {
        this.index = this.img.length - 1;
      }else {
        this.index--;
      }
      this.printActive();
    },
    autoSlide(){
      this.timer = setInterval(this.next, 500);
    },
    pointerClick(indexPointer){
      this.index = indexPointer;
      this.printActive();
    },
    printActive(){
      const target = document.querySelectorAll('.pointer');
      target.forEach(e=>{
        e.className = 'pointer';
      });
      target[this.index].className += ' active';
    }

  },
  created(){
    this.timer = setInterval(this.next, 6000);
  },
});
