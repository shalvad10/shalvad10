import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchOpen = document.querySelectorAll('.searchbar-open i');
  public searchCard = document.querySelectorAll('.main-searchbar');
  public searchClose = document.querySelectorAll('.searchbar-close i');

  constructor() { }


  ngOnInit() {
    document.addEventListener( 'click', (e) =>
    {
      if ( document.getElementById('account-dropdown').classList.contains('activeCard') === true && !this.hasAttributeInHierarchy(e.target, 'dontClose'))
      {
        document.getElementById('account-dropdown').classList.remove('activeCard')
      }
    });
  }

  public hasAttributeInHierarchy(el,attr)
  {
    if(el)
    {
      if(el.getAttribute(attr))
      {
        return true;
      }
      return this.hasAttributeInHierarchy(el.parentElement,attr);
    }
    return false;
  }

  userOptions() {
    document.getElementById('account-dropdown').classList.toggle('activeCard');
  }

  openSearch() {
  
    // Search Bar js
    if (this.searchOpen) {
      // this.searchOpen.forEach((el)=>{
      //     el.addEventListener('click',()=>{
      //       this.searchCard.forEach((el)=>{
      //         el.classList.add('activeSearch')
      //       })
      //     })
      // })
      // this.searchClose.forEach((el)=>{
      //     el.addEventListener('click',()=>{
      //       this.searchCard.forEach((el)=>{
      //         el.classList.remove('activeSearch')
      //       })
      //     })
      // })
      window.onclick = function(event){
          // this.searchCard.forEach((el)=>{
          //   if(event.target == el){
          //     el.classList.remove('activeSearch')
          //   }
          // })
          // if(!event.target.matches('.user-dropdown-icon i')){
          //   accountCard.forEach((element)=>{
          //     if(element.classList.contains('activeCard')){
          //       element.classList.remove('activeCard')
          //     }
          //   })
          // }
      }
    }
  }

}
