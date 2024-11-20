import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { BodyComponent } from "./body/body.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-inso';
}
