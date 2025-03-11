import { Component, ViewChild, } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonFooter, IonModal, ModalController, 
	IonDatetime, IonDatetimeButton, IonRange, IonCol, IonGrid, IonRow, IonList, IonItem, IonLabel,
	IonText,} from '@ionic/angular/standalone';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, 
	IonFooter, IonModal, IonDatetime, IonDatetimeButton, IonRange, IonGrid, 
	IonRow, IonCol, NgIf, IonText, IonList, IonItem, IonLabel, CommonModule],
})

export class HomePage {

	currentTime: string = '';
  	currentDate: string = '';
  	timeOfDay: string = '';
	public selectedWokeUpDate: Date | null = null;
	public selectedSleptAtDate: Date | null = null;
	public selectedSleepinessDate: Date | null = null;
	public rangeValue: number = 1; // 1 by default
	

	allStoredData: any[] | null = null;

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

	onSleptDateTimeChange(event: CustomEvent) {
		const isoString = event.detail.value;
		if (isoString) {
		  this.selectedSleptAtDate = new Date(isoString); // convert ISO string to Date object
		}
	}

	onWokeDateTimeChange(event: CustomEvent) {
		const isoString = event.detail.value;
		if (isoString) {
		  this.selectedWokeUpDate = new Date(isoString); // convert ISO string to Date object
		}
	}

	onRangeChange(event: CustomEvent) {
		this.rangeValue = event.detail.value;
	}

	onSleepinessTimeChange(event: CustomEvent) {
		const isoString = event.detail.value;
		if (isoString) {
		  this.selectedSleepinessDate = new Date(isoString); // convert ISO string to Date object
		}
	}

	wokeTimeBeforeOrEqualSleptTimeOrValuesNull() {
		if (this.selectedSleptAtDate && this.selectedWokeUpDate) {
			return this.selectedSleptAtDate >= this.selectedWokeUpDate
		}
		return true;
	}

	selectedSleepinessTime() {
		return this.selectedSleepinessDate != null;
	}

	logOvernightSleepData() {
		if (this.selectedSleptAtDate && this.selectedWokeUpDate) {
			const overnightSleep = new OvernightSleepData(this.selectedSleptAtDate, this.selectedWokeUpDate)
			this.sleepService.logOvernightData(overnightSleep)
			this.selectedSleptAtDate = null;
			this.selectedWokeUpDate = null;
		}
	}

	logSleepinessSleepData() {
		if (this.selectedSleepinessDate) {
			const stanfordSleepiness = new StanfordSleepinessData(this.rangeValue)
			this.sleepService.logSleepinessData(stanfordSleepiness)
			this.selectedSleepinessDate = null;
		}
	}

	async openModal() {
		this.allStoredData = [];
		const storageService = this.sleepService.getAllStorageData();
    	const allKeys = await storageService.keys();
	
		if (allKeys && allKeys.length > 0) {
		  for (const key of allKeys) {
			const data = await storageService.get(key);
			this.allStoredData.push({ key, data }); 
		  }
		}
		console.log(this.allStoredData)
	  }

	clearAllData() {
		this.sleepService.clearStorage();
	}
	  
}
