// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'https://dynamix-bot.glitch.me/',
  loginRedirect:
    'https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=bhwlcwuvtg51226poslegrqdcm8naz&redirect_uri=https://dynamix-bot.glitch.me/register&scope=viewing_activity_read channel:moderate channel:manage:redemptions channel:read:redemptions moderation:read user:read:email chat:edit chat:read&state=localhost',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
