import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	constructor(private storageServiceAllSleep: StorageService) {
		
	}

	public async logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllOvernightData.push(sleepData);

		this.storageServiceAllSleep.set(`Overnight Log | Date Logged: ${sleepData.dateString()}`, SleepService.AllOvernightData);
	}

	public async logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepinessData.push(sleepData);
		
		this.storageServiceAllSleep.set(`Sleepiness Log | Date Logged: ${sleepData.dateString()}`, SleepService.AllSleepinessData);
	}

	public getAllStorageData() {
		return this.storageServiceAllSleep
	}

	public async clearStorage() {
		this.storageServiceAllSleep.clear();
	}

}
