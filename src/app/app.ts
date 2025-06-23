import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './ui/navbar/navbar';
import { Footer } from './ui/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer,Navbar ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'nest';
}
