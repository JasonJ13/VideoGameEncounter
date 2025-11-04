import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconPack, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';



interface MenuItem {
  icon: string;
  label: string;
  children?: MenuItem[];
  isOpen?: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './menuBar.component.html',
  styleUrls: ['./menuBar.component.css'],
  imports: [CommonModule, FaIconComponent, FontAwesomeModule],
})
export class SidebarComponent {
  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  constructor(){
    library.add(fab as IconPack, 
                far as IconPack, 
                fas as IconPack);
  }

  menuItems: MenuItem[] = [
    {
      icon: 'fas fa-home',
      label: 'Formation',
      isOpen: false,
      children: [
        { icon: 'fas fa-chart-pie', label: 'Tutorials' },
         { icon: 'fas fa-tasks', label: 'Documentation' },
        { icon: 'fas fa-tasks', label: 'FAQs' },
      ]
    },
    {
      icon: 'fas fa-home',
      label: 'Accompagnement',
      isOpen: false,
      children: [
        { icon: 'fas fa-chart-pie', label: 'Create a project' },
         { icon: 'fas fa-tasks', label: 'My Projects' },
      ]
    },
    {
      icon: 'fas fa-home',
      label: 'Search',
      isOpen: false,
      children: [
        { icon: 'fas fa-chart-pie', label: 'Profiles' },
         { icon: 'fas fa-tasks', label: 'Projects' },
      ]
    },
    {
      icon: 'fas fa-home',
      label: 'News and events',
      isOpen: false,
      children: [
        { icon: 'fas fa-chart-pie', label: 'News' },
         { icon: 'fas fa-tasks', label: 'Events' },
      ]
    },
    {
      icon: 'fas fa-cog',
      label: 'Settings',
      isOpen: false,
      children: [
        { icon: 'fas fa-user', label: 'Profile' },
        { icon: 'fas fa-lock', label: 'Security' },
      ]
    },
  ];

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleMenuItem(item: MenuItem) {
    // Only toggle if sidebar is not collapsed and item has children
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }
}