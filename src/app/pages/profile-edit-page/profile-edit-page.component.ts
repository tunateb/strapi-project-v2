import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/user.type';

@Component({
  selector: 'app-profile-edit-page',
  templateUrl: './profile-edit-page.component.html',
  styleUrls: ['./profile-edit-page.component.scss'],
})
export class ProfileEditPageComponent implements OnInit {
  editForm = {
    bio: '',
    phone: '',
    location: '',
  };

  isLoading = false;
  changesSaved = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  get user() {
    return this.userService.getUser();
  }

  saveChanges() {

    this.isLoading = true;

    const updatedUser = {
      ...this.user,
      userBio: this.editForm.bio,
      userPhone: this.editForm.phone,
      userLocation: this.editForm.location,
    };

    this.userService.updateUser(updatedUser)
      .subscribe((response:User) => {
        this.userService.setUser(response);
      });
    
    this.editForm = {
      bio: '',
      phone: '',
      location:''
    }

    this.isLoading = false;

    this.changesSaved = true;
      
  }
}
