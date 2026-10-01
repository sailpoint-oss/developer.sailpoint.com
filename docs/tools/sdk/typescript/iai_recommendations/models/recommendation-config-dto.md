# RecommendationConfigDto

# RecommendationConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommenderFeatures** | **(optional)** `Array<string>` | List of identity attributes to use for calculating certification recommendations | [default to undefined]
**peerGroupPercentageThreshold** | **(optional)** `number` | The percent value that the recommendation calculation must surpass to produce a YES recommendation | [default to undefined]
**runAutoSelectOnce** | **(optional)** `boolean` | If true, rulesRecommenderConfig will be refreshed with new programatically selected attribute and threshold values on the next pipeline run | [default to false]
**onlyTuneThreshold** | **(optional)** `boolean` | If true, rulesRecommenderConfig will be refreshed with new programatically selected threshold values on the next pipeline run | [default to false]

