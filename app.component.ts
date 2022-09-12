import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm
  defaultQuestion: string = 'pet'
  answer!: string
  genders: string[] = ['male', 'female']

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    questionAnswer: '',
    gender: ''
  }
  submitted: boolean = false

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: this.genders[1]
    // })
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(form: NgForm) {
  //   // console.log('submitted')
  //   // console.log(form) // form type can be htmlinputelement and NgForm
  // }

  onSubmit() {
    this.submitted = true
    this.user.username = this.signupForm.value.userData.username
    this.user.email = this.signupForm.value.userData.email
    this.user.questionAnswer = this.signupForm.value.questionAnswer
    this.user.gender = this.signupForm.value.gender
    this.user.secretQuestion = this.signupForm.value.secret

    this.signupForm.reset()
  }
}
