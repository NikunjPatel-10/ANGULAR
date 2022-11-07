import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent implements OnInit {
  public artistForm: FormGroup
  constructor(public formbuilder: FormBuilder) {
    this.artistForm = this.formbuilder.group({

      imagepath1: [''],
      imagepath2: [''],

    })
  }

  ngOnInit(): void {
  }

}
