import { CreateTransactionsComponent } from './pages/create-transactions/create-transactions.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';


const routes: Routes = [
  {path:'',component: BlockchainViewerComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'new/transaction', component: CreateTransactionsComponent},
  {path: 'new/transactions/pending-transactions', component: PendingTransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
