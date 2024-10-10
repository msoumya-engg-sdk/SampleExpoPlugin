const { withMainApplication} = require('@expo/config-plugins');

const withUpdateMainApplication = (config, _props) => {
  return withMainApplication(config, (newConfig) => {
      return addMoEngageInitilisation(newConfig, _props["appId"])
  });
}

/***
 * This is just a sample to add some content in application class
 * While implementation we need to handle 
 *  1. Import statement
 *  2. Configuration with app.js file (DataCenter, Icons and other configuration)
 *  3. build.gradle file update
 *  4. check if content already added
 *  5. Content based on file language i.e Kt or Java
 *  ....
 */
async function addMoEngageInitilisation(newConfig, appId) {
  let { contents } = newConfig.modResults;
  newConfig.modResults.contents = contents.replace(
    "super.onCreate()",
    `super.onCreate() \n val moEngage = MoEnggae(this, ${appId}) \n MoEngage.initialiseDefaultInstance(moEngage.build())`
  );
  return newConfig;
}
  
module.exports = withUpdateMainApplication;