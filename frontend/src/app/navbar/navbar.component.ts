import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioDTO } from '../modules/usuario-dto';
import { NotificationService } from '../service/notification.service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  activedRoute: ActivatedRoute;
  isSidebarOpen = false;
  router: Router;

  constructor(
    activedRoute: ActivatedRoute,
    router: Router,
    private notificationService: NotificationService,
  ) {
    this.activedRoute = activedRoute;
    this.router = router;
  }
  @Input()
  usuario: UsuarioDTO;

  ngOnInit(): void {
    if(this.usuario){
      this.isSidebarOpen = true;
    }
  }


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
