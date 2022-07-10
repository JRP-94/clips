import { Injectable } from '@angular/core';

interface IModel {
  id: string;
  visible: boolean;
}

// Config for global injectability
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModel[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  unregister(id: string) {
    this.modals = this.modals.filter((element) => element.id !== id);
  }

  // Visible getter
  isModalVisible(id: string): boolean {
    return !!this.modals.find((element) => element.id === id)?.visible;
  }

  // visible mutator, state limited
  toggleModalVisibility(id: string): void {
    const modal = this.modals.find((element) => element.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
