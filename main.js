let app = new Vue({
  el: '#app',
  data: {
    img: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'],
    selectedImg: '1.jpg',
  },
  methods: {
    next: function(){
      let currentIndex = this.img.indexOf(this.selectedImg);
      if (currentIndex != (this.img.length - 1)) {
        currentIndex++;
        this.selectedImg = this.img[currentIndex];
      }else{
        currentIndex = 0;
        this.selectedImg = this.img[currentIndex];
      }
      console.log(currentIndex);
      const target = document.querySelectorAll('.pointer');
      target.forEach(e =>{
        e.className = 'pointer'
      });
      target[this.img.indexOf(this.selectedImg)].className += ' active';

    },
    previous: function(){
      let currentIndex = this.img.indexOf(this.selectedImg);
      if (currentIndex == 0) {
        currentIndex = (this.img.length - 1);
        this.selectedImg = this.img[currentIndex];
      }else{
        currentIndex--;
        this.selectedImg = this.img[currentIndex];
      }
      console.log(currentIndex);

      const target = document.querySelectorAll('.pointer');
      target.forEach(e =>{
        e.className = 'pointer'
      });
      target[this.img.indexOf(this.selectedImg)].className += ' active';

    },
    pointerClick: function(index){
      this.selectedImg = this.img[index];

      const target = document.querySelectorAll('.pointer');
      target.forEach(e =>{
        e.className = 'pointer'
      });
      target[index].className += ' active'
    },
  },
  created() {
      this.interval = setInterval(() => this.next(), 6000);
  },
});
