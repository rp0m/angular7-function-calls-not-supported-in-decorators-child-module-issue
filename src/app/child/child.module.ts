import { NgModule, ModuleWithProviders, APP_INITIALIZER, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

export const OPTIONS = new InjectionToken<string>('OPTIONS');

export interface MyModuleOptions {
  config: {
    greetingGetter: () => string | Promise<string>,
    isProductionGetter: () => boolean | Promise<boolean>;
  }
}

export function initialize(options: any) {
  console.log('greeting: ', options.config.greetingGetter());
  console.log('is prod: ', options.config.isProductionGetter());
  return function () {};
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ChildModule {
  static forRoot(options: any): ModuleWithProviders  {
    // Should be supported.. but doesn't look like it is
    // ChildModule.config = config;

    // Confirmed not supported as per: https://github.com/angular/angular/issues/14707
    // console.log(config);

    // Resolved thanks to: https://stackoverflow.com/questions/48225993/angular-call-function-inside-forroot-method
    // Using InjectionTokens together as well as passing parameters as functions

    return {
      ngModule: ChildModule,
      providers: [
        {provide: OPTIONS, useValue: options},
        {
          provide: APP_INITIALIZER,
          useFactory: initialize,
          deps: [OPTIONS],
          multi: true
        }
      ]
    };
  }
}
