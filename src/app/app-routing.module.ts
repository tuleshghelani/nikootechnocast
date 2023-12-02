import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndustriesusageComponent } from './industriesusage/industriesusage.component';
import { ProcessComponent } from './process/process.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { QmsComponent } from './qms/qms.component';
import { CareersComponent } from './careers/careers.component';
import { ProductComponent } from './product/product.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'products', component: ProductComponent },
  { path: 'industries', component: IndustriesusageComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'infrastructure', component: InfrastructureComponent },
  { path: 'qms', component: QmsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact-us', component: ContactUsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
