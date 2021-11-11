import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: [ './sign-in.component.scss' ]
})
export class SignInComponent implements OnInit, OnDestroy {
    public signInForm: FormGroup;
    public signInFailed: boolean;
    public userAuth: Subscription;
    constructor(public fb: FormBuilder, public fs: FirebaseService, public router: Router) {
        this.signInFailed = false;
        this.signInForm = this.fb.group({
            email: new FormControl('', [ Validators.required, Validators.email ]),
            password: new FormControl('', [ Validators.required, Validators.minLength(6) ])
        });
        this.userAuth = this.fs.signedIn.subscribe((user) => {
            if (user) this.router.navigate([ 'tasks' ]);
        });
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {
        if (this.userAuth) this.userAuth.unsubscribe();
    }

    async signIn(fg: FormGroup) {
        try {
            this.signInFailed = false;
            if (!fg.valid) throw new Error('Invalid sign-in credentials');
            const result = await this.fs.signIn(fg.value.email, fg.value.password);
            console.log('that tickles', result);
            if (result) this.router.navigate([ 'tasks' ]);
            else throw new Error('Sign-in failed');
        } catch (error) {
            console.log(error);
            this.signInFailed = true;
        }
    }
}