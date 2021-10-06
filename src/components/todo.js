import Component from "../core/Component.js";
import todoForm from "./todoForm.js"

export default class todo extends Component {
    $listCount = 0;

  setup () {
    this.$state = { items: [] };
  }

  template () {
    const { items } = this.$state;

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

    // let removeBtn = document.getElementsByClassName('removeButton');
    // removeBtn.addEventListener('click',function(){

    // })

    
  }

  mounted(){
    let doCheck = document.querySelectorAll('#checkImg');
    //console.log(doCheck);
    for (var i = 0; i < doCheck.length; i++) {
        let item = doCheck.item(i);
        let a = this.changeDochk;

        let todolists = this.$state;
        // item.setAttribute("class", "");
        item.addEventListener('click', function(){
            item.setAttribute("class", "");
            let getlist_ID = item.getAttribute("alt");
            a(todolists, getlist_ID, 1);
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
  changeDochk(todolists, list_ID, chk){


      for(let i=0;i<todolists.items.length;i++){
          console.log(todolists.items[i])
          if(list_ID == todolists.items[i].list_ID){
              if(chk == 1){
                todolists.items[i].doChk = true;
              }
              else{
                todolists.items[i].doChk = false;
              }
          }
      }
      console.log(this.$state)
      //this.$state = todolists;
      console.log(items)
  }
  
}