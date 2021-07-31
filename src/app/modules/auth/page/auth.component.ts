import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/data/service/auth.service';
import { User } from 'src/app/data/types/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  submit(user: User) {
    try {
      this.authService.login(user);
      this.router.navigate(['/home'], { relativeTo: this.route });
    } catch (error) {
      this.toastr.error(error.message, '😕 Oooppps...!');
    }
  }
}
