import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/services/feature.service';

@Component({
  selector: 'app-features-list',
  providers: [FeatureService],
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.scss'],
})
export class FeaturesListComponent implements OnInit {
  features: Feature[];

  constructor(private featureService: FeatureService) {}

  ngOnInit(): void {
    this.featureService.getFeatures().subscribe((features) => {
      this.features = features;
    });
  }
}
