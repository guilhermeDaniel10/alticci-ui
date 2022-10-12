import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/config/constants';
import { Alticci } from 'src/app/model/alticci.model';
import { AlticciService } from 'src/app/service/alticci.service';

@Component({
  selector: 'app-alticci-card',
  templateUrl: './alticci-card.component.html',
  styleUrls: ['./alticci-card.component.css'],
})
export class AlticciCardComponent implements OnInit {
  sequenceValueInIndex: string = '';
  fullSequenceString = Constants.FULL_SEQUENCE_IN_INDEX;
  fullSequenceInIndex: Alticci[] = [];
  formSingle: FormGroup = new FormGroup({});
  formFull: FormGroup = new FormGroup({});

  constructor(private alticciService: AlticciService, private fb: FormBuilder) {
    this.formSingle = fb.group({
      number: ['', { validators: [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(0), Validators.max(157)], updateOn: "change" }]
    })

    this.formFull = fb.group({
      number: ['', { validators: [Validators.required, Validators.pattern("^[0-9]*$"), , Validators.min(0), Validators.max(157)], updateOn: "change" }]
    })
  }

  ngOnInit(): void {
  }

  submitSingle() {
    if (this.formSingle.valid) {
      this.getSingleAlticciValue(this.formSingle.value.number);
    }
  }

  submitFull() {
    if (this.formFull.valid) {
      this.getFullAlticciSequence(this.formFull.value.number);
    }
  }

  get singleAltici() {
    return this.formSingle.controls;
  }

  get fullAlticci() {
    return this.formFull.controls;
  }

  getSingleAlticciValue(index: number) {
    this.alticciService.getIndexAlticciValue(index).subscribe(
      (data: Alticci) => {
        this.sequenceValueInIndex = Constants.SEQUENCE_VALUE_IN_INDEX + data.index + ': ' + data.value;
      },
      (err: Error) => {
        this.sequenceValueInIndex = Constants.ERROR;
      }
    )
  }

  getFullAlticciSequence(index: number) {
    this.alticciService.getFullSequenceIndexAlticci(index).subscribe(
      (data: Alticci[]) => {
        this.fullSequenceInIndex = data;
      },
      (err: Error) => {
      }
    )
  }

}
