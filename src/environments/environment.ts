// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// bu dosya localhost ortamında çalışırken, algılanır.

export const environment = {
  production: false,
    // imgUrl:"https://yavuz45-001-site1.htempurl.com/",
    // apiUrl:"https://yavuz45-001-site1.htempurl.com/"
   imgUrl:"https://localhost:5001/",
   apiUrl:"https://localhost:5001/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
