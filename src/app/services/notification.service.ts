import { Injectable } from '@angular/core';
import Toastify from 'toastify-js';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
  showSuccess(message: string) {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "#4caf50",
      style: {
        zIndex: '10000',
        fontSize: "16px",
        padding: "15px 20px"
      }
    }).showToast();
  }

  showError(message: string) {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "#f44336",
      style: {
        zIndex: '10000',
        fontSize: "16px",
        padding: "15px 20px"
      }
    }).showToast();
  }
}
