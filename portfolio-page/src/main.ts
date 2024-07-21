import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'; // Example provider for routing
import { routes } from './app/app.routes'; // Define your app routes

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Provide any necessary services or configurations
  ]
})
.catch((err) => console.error(err));
