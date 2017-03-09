import { RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import {  Main, Notes, AddTrip, Login,  Trips}   from './containers'

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: Main,
        children: [
            { path: 'notes', component: Notes},
            { path: 'addtrip', component: AddTrip },
            { path: '', component: Login },
            { path: 'trips', component: Trips }
        ]
    },
    { path : '**', redirectTo: ''}

])