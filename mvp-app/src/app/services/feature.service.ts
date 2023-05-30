import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Feature } from '../models/feature.model';

const DEFAULT_FEATURES: Feature = {
  id: 1,
  name: 'Default Feature',
  tasks: [
    {
      id: 1,
      name: 'Default Task',
      status: 'todo',
      featureId: 1,
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private _features: BehaviorSubject<Feature[]> = new BehaviorSubject<
    Feature[]
  >([DEFAULT_FEATURES]);

  get features() {
    return this._features.asObservable();
  }

  createFeature(feature: Feature) {
    this._features.value.push(feature);
  }

  getFeatureById(id: number) {
    return this._features.value.find((feature) => feature.id === id);
  }
}
