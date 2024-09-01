import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-pop-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-pop-up.component.html',
  styleUrl: './custom-pop-up.component.scss',
})
export class CustomPopUpComponent {
  @Input() isVisible = false;
  @Input() isVisibleclose = false;
  @Input() title = 'Popup Title';
  @Input() size: 'small' | 'medium' | 'large' | 'xl' = 'medium'; // Default to 'medium'
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent) {
    // Check if the click is outside the popup content
    const target = event.target as HTMLElement;
    if (target.classList.contains('popup-overlay')) {
      this.closePopup();
    }
  }
}
