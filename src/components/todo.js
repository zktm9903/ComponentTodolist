import Component from "../core/Component.js";
import todoForm from "./todoForm.js"

export default class todo extends Component {
    $listCount = 1;

  setup () {
    this.$state = { items: [] };
  }

  template () {
    const { items } = this.$state;

    console.log(items);

    return `
        ${items.map(item => `
        <div class="ListInfoBox">
            <div class="ListInfoImgBox">
                <img src="./src/img/check-mark.png" id="checkImg" class="checkImgOpacity" alt="${item.list_ID}">
            </div>
            <div id="ListInfoTxtBox">
                <p id="ListInfoTxt">${item.content}</p>
            </div>
        </div>
        `).join('')}
    `;
  }

  setEvent () {

    let txt= document.getElementById('toDotext');
    //console.log(txt);
    txt.addEventListener('keydown', (e)=>{
        const keyCode = e.keyCode;

        if(keyCode == 13){ 
            if(!txt.value){
                console.log('input text is null');
            }
            else{
                const { items } = this.$state;
                this.setState({ items: [ ...items, new todoForm(this.$listCount++, txt.value) ] })

                txt.value = "";
                //console.log(this.$state);
            }
            
        }
      })

    let isthis = this;

    let removeBtn = document.getElementById('removeButton');

    removeBtn.addEventListener('click',function(){
        isthis.removeList();
    })

    
  }

  mounted(){
    let doCheck = document.querySelectorAll('#checkImg');
    //console.log(doCheck);
    for (var i = 0; i < doCheck.length; i++) {
        let item = doCheck.item(i);
        let isthis = this;
        //let todolists = this.$state;
        // item.setAttribute("class", "");
        item.addEventListener('click', function(){
            
            let getlist_ID = item.getAttribute("alt");
            isthis.changeDochk(getlist_ID, item);
            // console.log(todolists)
            // for(var i=0;i<todolists.length;i++){
            //     console.log('1');
            //     if(todolists[i].list_ID == getlist_ID){
                    
            //         this.changeDochk(i, 1);
            //         break;
            //     }
            // }

        })
      }
      
  }
  changeDochk(list_ID, item){

      for(let i=0;i<this.$state.items.length;i++){

          if(list_ID == this.$state.items[i].list_ID){
              if(this.$state.items[i].doChk == false){
                this.$state.items[i].doChk = true;
                item.setAttribute("class", "");
              }
              else{
                this.$state.items[i].doChk = false;
                item.setAttribute("class", "checkImgOpacity");
              }
              console.log(this.$state)
          }
      }

  }
  
  removeList(){
    const nowState = this.$state;
    for(let i=0;i<nowState.items.length;i++){

        if(nowState.items[i].doChk == true){
            nowState.items.splice(i--,1);
        }
    }
    this.setState(nowState);
  }
}