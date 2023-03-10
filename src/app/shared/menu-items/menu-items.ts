import {Injectable} from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  // { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  {state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5'},
  {state: 'checkbox', type: 'link', name: 'Checkboxes', icon: 'view_comfy'},
  {state: 'chips', type: 'link', name: 'Chips', icon: 'vignette'},
  {
    state: 'progress-snipper',
    type: 'link',
    name: 'Circular Progress',
    icon: 'border_horizontal'
  },
  {
    state: 'container',
    type: 'link',
    name: 'Card',
    icon: 'vertical_align_center'
  },
  {
    state: 'dropdown',
    type: 'link',
    name: 'Dropdown',
    icon: 'view_list'
  },
  {
    state: 'icon-button',
    type: 'link',
    name: 'Icon Button',
    icon: 'view_comfy'
  },
  {
    state: 'input',
    type: 'link',
    name: 'Input',
    icon: 'tab'
  },
  {
    state: 'dialog',
    type: 'link',
    name: 'Dialog',
    icon: 'assignment_turned_in'
  },
  {
    state: 'radio',
    type: 'link',
    name: 'Radio',
    icon: 'assignment_turned_in'
  },
  // { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
//  { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
  // { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
  // { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
//  { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
//   {
//     state: 'expansion',
//     type: 'link',
//     name: 'Expansion Panel',
//     icon: 'vertical_align_center'
//   },
//
//   { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
//   {
//     state: 'progress',
//     type: 'link',
//     name: 'Progress Bar',
//     icon: 'blur_circular'
//   },

//   { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
//   { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
//   { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
//   {
//     state: 'slide-toggle',
//     type: 'link',
//     name: 'Slide Toggle',
//     icon: 'all_inclusive'
//   }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
