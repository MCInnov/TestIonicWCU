import { Component, OnInit } from '@angular/core';
import { Sim } from '@ionic-native/sim/ngx';


@Component({
  selector: 'app-sim',
  templateUrl: './sim.page.html',
  styleUrls: ['./sim.page.scss'],
})
export class SimPage implements OnInit {

  dataSim:any

  constructor(private sim: Sim) { }

  ngOnInit() {
  }

  getDataSim(){
    this.sim.getSimInfo().then(
      (info) => {
        console.log('Sim info: ', info)
        this.dataSim = info
      },
      (err) => console.log('Unable to get sim info: ', err)
    );

    this.sim.hasReadPermission().then(
      (info) => console.log('Has permission: ', info)
    );

    this.sim.requestReadPermission().then(
      () => console.log('Permission granted'),
      () => console.log('Permission denied')
    );
  }

  

}
