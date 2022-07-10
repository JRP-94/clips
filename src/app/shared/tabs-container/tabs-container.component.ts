import {
  Component,
  ContentChildren,
  OnInit,
  AfterContentInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss'],
})
export class TabsContainerComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();
  constructor() {}

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(element => element.active)

    if(!activeTabs || activeTabs.length === 0){
      this.selectTab(this.tabs!.first);
    }

  }

  ngOnInit(): void {}

  selectTab(tab: TabComponent) : boolean{
    this.tabs?.forEach(tab => {
      tab.active = false;
    })
    tab.active = true

    return false
  }
}
