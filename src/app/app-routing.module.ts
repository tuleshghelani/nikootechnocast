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
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { BusinessInquiryComponent } from './business-inquiry/business-inquiry.component';
import { FuturePlanComponent } from './future-plan/future-plan.component';
import { GroupCompanyComponent } from './group-company/group-company.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'products', component: ProductComponent },
  { path: 'industries', component: IndustriesusageComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'infrastructure', component: InfrastructureComponent },
  { path: 'qms', component: QmsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'company-profile', component: CompanyProfileComponent },
  { path: 'business-inquiry', component: BusinessInquiryComponent },
  { path: 'group-company', component: GroupCompanyComponent },
  { path: 'future-plan', component: FuturePlanComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
