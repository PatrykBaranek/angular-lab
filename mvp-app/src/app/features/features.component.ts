import { Component } from '@angular/core';
import { FeatureService } from '../services/feature.service';

@Component({
  selector: 'app-features',
  providers: [FeatureService],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  constructor(private featureService: FeatureService) {}
}
