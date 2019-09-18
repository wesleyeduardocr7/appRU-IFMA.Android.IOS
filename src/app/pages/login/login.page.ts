import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController, NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private firebase: AngularFireAuth, private alertCtrl: AlertController,
    public navCtrl: NavController, private loadingController: LoadingController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Atenção!',
      message: 'Senha ou usuário incorretos!',
      buttons: ['OK'],
      cssClass: 'alertCustomCss'
    });

    await alert.present();
  }

  async presentLoading() {
    const loadingElement = await this.loadingController.create({
      message: 'Aguarde...',
      spinner: 'crescent',
      duration: 2000
    });
    return await loadingElement.present();
  }


  signInUser() {
    this.firebase.auth.signInWithEmailAndPassword(this.user.value + '@gmail.com', this.password.value)
      .then(async data => {
        this.presentLoading();
        console.log('login');
        
        this.navCtrl.navigateForward('/administrador');
      })

      .catch(error => {
        this.presentAlert();  
      })
  }
}
