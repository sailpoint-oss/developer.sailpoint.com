# OutlierFeatureTranslation

# OutlierFeatureTranslation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | [**TranslationMessage**](translation-message) |  | [optional] 
**description** | [**TranslationMessage**](translation-message) |  | [optional] 
\}

## Example

```python
from sailpoint.iai_outliers.models.outlier_feature_translation import OutlierFeatureTranslation

outlier_feature_translation = OutlierFeatureTranslation(
display_name=sailpoint.iai_outliers.models.translation_message.Translation Message(
                    key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH', 
                    values = ["75","department"], ),
description=sailpoint.iai_outliers.models.translation_message.Translation Message(
                    key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH', 
                    values = ["75","department"], )
)

```
[[Back to top]](#) 

