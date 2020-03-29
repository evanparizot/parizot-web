import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
//   faBars,
//   faUserCircle,
//   faPowerOff,
  faCog, faImages, faAdjust
//   faPlayCircle,
//   faRocket,
//   faPlus,
//   faEdit,
//   faTrash,
//   faTimes,
//   faCaretUp,
//   faCaretDown,
//   faExclamationTriangle,
//   faFilter,
//   faTasks,
//   faCheck,
//   faSquare,
//   faLanguage,
//   faPaintBrush,
//   faLightbulb,
//   faWindowMaximize,
//   faStream,
//   faBook,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
  faAws
} from '@fortawesome/free-brands-svg-icons';

// icons: IconDefinition[] = {

// }
//   faBars,
//   faUserCircle,
//   faPowerOff,
//   faCog,
//   faRocket,
//   faPlayCircle,
//   faGithub,
//   faMediumM,
//   faTwitter,
//   faInstagram,
//   faYoutube,
//   faLinkedin,
//   faPlus,
//   faEdit,
//   faTrash,
//   faTimes,
//   faCaretUp,
//   faCaretDown,
//   faExclamationTriangle,
//   faFilter,
//   faTasks,
//   faCheck,
//   faSquare,
//   faLanguage,
//   faPaintBrush,
//   faLightbulb,
//   faWindowMaximize,
//   faStream,
//   faBook
// );

@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    FontAwesomeModule,
  ]
})
export class FontawesomeModule { 
  constructor(library:FaIconLibrary) {
    library.addIcons(
      faGithub,
      faLinkedin,
      faTwitter,
      faAws,
      faCog,
      faImages,
      faAdjust
    );
  }
}
