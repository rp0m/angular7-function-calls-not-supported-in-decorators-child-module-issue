# TestApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

# Issue Description
Application builds fine using `ng build` and runs fine using `ng serve -o`. When building the app in production, using `ng build --prod`,
the build fails with the following error: 

```
ERROR in Error during template compile of 'AppModule'
  Function calls are not supported in decorators but 'ChildModule' was called.
: Unexpected value 'undefined' imported by the module 'AppModule in C:/dev/test-app/src/app/app.module.ts'
Error during template compile of 'AppModule'
  Function calls are not supported in decorators but 'ChildModule' was called.
```

The issue can be resolved by commenting out the static variable initialization and console.log() call in child.module.ts:
```
  static forRoot(config: any): ModuleWithProviders  {
    // Commented out to allow `build --prod` to succeed
    // ChildModule.config = config;
    // console.log(config);

    return {
      ngModule: ChildModule
    };
  }
```

Having either static variable initialization or a method call in the forRoot() function triggers the abovementioned error. Commenting both out
resolves the error.