
Vue.createApp({
    data() {
      return {
        height: '',
        width: '',
        imgURL:'',
        test: '',
      }
    },
    methods: {
        selectedFile() {
           
            // let file = this.$refs.myFile.files[0];
            // if(!file || file.type.indexOf('image/') !== 0) return;
            // this.imgURL =  URL.createObjectURL(file);
                let file = this.$refs.myFile.files[0];
                if(!file || file.type.indexOf('image/') !== 0) return; 
                this.imgURL =  URL.createObjectURL(file);    
                let reader = new FileReader();                
                reader.readAsDataURL(file);
                reader.onload = evt => {
                  let img = new Image();
                  img.onload = () => {
                    
                    this.width = img.width;
                    this.height = img.height;
                    
                    // this.$refs.can.querySelector('#')
                    let canvas = this.$refs.can;
                    canvas.width = img.width;
                    canvas.height = img.height;
                    canvas.getContext("2d").drawImage(img, 0 ,0, img.width, img.height);
                  }
                  img.src = evt.target.result;
                }
                reader.onerror = evt => {
                  console.error(evt);
                }
          },
      onInputHeight(e) {
        this.height = e.target.value;
        let canvas = this.$refs.can;
        canvas.getContext("2d").drawImage(img, 0 ,0, this.width, this.height);
      },
      onInputWidth(e) {
        this.width = e.targetvalue
      }
    }
  }).mount('#app')