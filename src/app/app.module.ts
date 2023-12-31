import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';
import { ProcessComponent } from './process/process.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { QmsComponent } from './qms/qms.component';
import { IndustriesusageComponent } from './industriesusage/industriesusage.component';
import { CareersComponent } from './careers/careers.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { GroupCompanyComponent } from './group-company/group-company.component';
import { BusinessInquiryComponent } from './business-inquiry/business-inquiry.component';
import { FuturePlanComponent } from './future-plan/future-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductComponent,
    ProcessComponent,
    InfrastructureComponent,
    QmsComponent,
    IndustriesusageComponent,
    CareersComponent,
    SubHeaderComponent,
    CompanyProfileComponent,
    GroupCompanyComponent,
    BusinessInquiryComponent,
    FuturePlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
