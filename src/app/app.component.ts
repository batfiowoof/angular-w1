import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-world-2201681038';

  clickHandler(event: MouseEvent) {
    const sectionTitle = event.currentTarget as HTMLElement;
    const sectionContent = sectionTitle.nextElementSibling as HTMLElement;
    if (sectionContent) {
      const allSections = document.querySelectorAll('.section-content');
      for (let i = 0; i < allSections.length; i++) {
        const section = allSections[i] as HTMLElement;
        const correspondingTitle =
          section.previousElementSibling as HTMLElement;
        if (section !== sectionContent && section.classList.contains('show')) {
          section.classList.remove('show');
        }
      }
      sectionContent.classList.toggle('show');
      if (sectionContent.classList.contains('show')) {
        sectionContent.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
