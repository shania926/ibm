import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Services } from './page/services/services';
import { Contact } from './page/contact/contact';


import { Cyber } from './service/cyber/cyber';
import { Ai } from './service/ai/ai';
import { It } from './service/it/it';
import { Cloud } from './service/cloud/cloud';
 

export const routes: Routes = [{path: '',component:Home},{path: 'home',component:Home},{path: 'about',component:About },{path:'services',component:Services},{path:'contact',component:Contact},{path:'cloud',component:Cloud} ,{path:'cyber',component:Cyber},
 {path:'it',component:It},{path:'ai',component:Ai}   ]        

 
 