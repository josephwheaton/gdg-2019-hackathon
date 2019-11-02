import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-info-form',
  templateUrl: './app-info-form.component.html',
  styleUrls: ['./app-info-form.component.scss']
})
export class AppInfoFormComponent implements OnInit {
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() description: string;

  markerForm: FormGroup;

  submitting = false;

  constructor(private locationsService: LocationsService) {}

  ngOnInit() {
    this.markerForm = new FormGroup({
      description: new FormControl('', Validators.required)
    });
    this.markerForm.get('description').patchValue(this.description);
  }

  onUpload() {
    this.locationsService
      .createLocation(this.latitude, this.longitude, this.description)
      .pipe(
        tap(v => {
          console.log(`createLocation result: %o`, v);
        })
      )
      .subscribe();
  }

  // get description() {
  //   return this.markerForm.get('description');
  // }
}
