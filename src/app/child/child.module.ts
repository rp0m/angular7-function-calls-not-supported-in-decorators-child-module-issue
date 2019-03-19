import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ChildModule {
  static config: any = '';

  static forRoot(config: any): ModuleWithProviders  {
    // Should be supported.. but doesn't look like it is
    ChildModule.config = config;

    // Confirmed not supported as per: https://github.com/angular/angular/issues/14707
    // console.log(config);

    return {
      ngModule: ChildModule
    };
  }
}
