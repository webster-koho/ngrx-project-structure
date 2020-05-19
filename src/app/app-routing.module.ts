import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'savings',
        loadChildren: () =>
            import('./features/savings/savings.module').then(
                (m) => m.SavingsModule
            ),
    },
    {
        path: 'spending',
        loadChildren: () =>
            import('./features/spending/spending.module').then(
                (m) => m.SpendingModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
