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
    ChildModule.config = config;
    console.log(config);

    return {
      ngModule: ChildModule
    };
  }
}
