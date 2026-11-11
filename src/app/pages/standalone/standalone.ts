import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-standalone',
  imports: [RouterLink],
  templateUrl: './standalone.html',
  styleUrl: './standalone.css',
})
export class Standalone {}
