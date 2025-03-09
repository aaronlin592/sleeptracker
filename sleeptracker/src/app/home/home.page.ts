import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonFooter, IonIcon, IonModal, ModalController} from '@ionic/angular/standalone';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonFooter, IonIcon, IonModal,],
})
export class HomePage {

	currentTime: string = '';
  	currentDate: string = '';
  	timeOfDay: string = '';

  	constructor(public sleepService:SleepService, private modalController: ModalController) {

	}

	ngOnInit() {
		this.updateDateTime();
		setInterval(() => {
		  this.updateDateTime();
		}, 1000);
	  }
	
	updateDateTime() {
		const now = new Date();
		this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
		this.currentDate = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
		this.timeOfDay = this.getTimeOfDay(now.getHours());
	}
	
	getTimeOfDay(hour: number): string {
		if (hour >= 5 && hour < 12) return 'morning';
		if (hour >= 12 && hour < 18) return 'afternoon';
		if (hour >= 18 && hour < 22) return 'evening';
		return 'night';
	}

	async dismissModal() {
		await this.modalController.dismiss();
	}
}
