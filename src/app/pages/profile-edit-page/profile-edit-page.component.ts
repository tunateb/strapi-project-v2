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
    profileName: '',
    bio: '',
    phone: '',
    location: '',
  };

  isLoading = false;
  changesSaved = false;
  isImgLoading = false;
  imgChangesSaved = false;

  fileURL: string | ArrayBuffer;

  selectedFile: File;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  get user() {
    return this.userService.getUser();
  }

  saveChanges() {
    this.isLoading = true;

    const updatedUser = {
      ...this.user,
      profileName: this.editForm.profileName,
      userBio: this.editForm.bio,
      userPhone: this.editForm.phone,
      userLocation: this.editForm.location,
    };

    this.userService.updateUser(updatedUser).subscribe((response: User) => {
      this.userService.setUser(response);
    });

    this.editForm = {
      profileName: '',
      bio: '',
      phone: '',
      location: '',
    };

    this.isLoading = false;

    this.changesSaved = true;
  }

  selectFile(event) {
    if (event.target.files[0]) {
      this.selectedFile = event.target.files[0];

      const reader = new FileReader();

      reader.onload = (event) => {
        this.fileURL = event.target.result;
      };

      reader.readAsDataURL(this.selectedFile);
    }
  }

  saveImg() {
    this.isImgLoading = true;

    this.userService.saveImg(this.selectedFile).subscribe((response) => {
      this.userService
        .updateUser({ ...this.user, avatar: response[0].id })
        .subscribe((response) => {
          this.userService.getUserDetails();
        });
    });

    this.isImgLoading = false;
    this.imgChangesSaved = true;
  }
}
