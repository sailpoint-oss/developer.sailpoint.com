---
id: outlierfeaturesummary-outlier-feature-display-values-inner
title: OutlierfeaturesummaryOutlierFeatureDisplayValuesInner
pagination_label: OutlierfeaturesummaryOutlierFeatureDisplayValuesInner
sidebar_label: OutlierfeaturesummaryOutlierFeatureDisplayValuesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OutlierfeaturesummaryOutlierFeatureDisplayValuesInner', 'OutlierfeaturesummaryOutlierFeatureDisplayValuesInner'] 
slug: /tools/sdk/python/iai-outliers/models/outlierfeaturesummary-outlier-feature-display-values-inner
tags: ['SDK', 'Software Development Kit', 'OutlierfeaturesummaryOutlierFeatureDisplayValuesInner', 'OutlierfeaturesummaryOutlierFeatureDisplayValuesInner']
---

# OutlierfeaturesummaryOutlierFeatureDisplayValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | display name | [optional] 
**value** | **str** | value | [optional] 
**value_type** | [**Outliervaluetype**](outliervaluetype) |  | [optional] 
}

## Example

```python
from sailpoint.iai_outliers.models.outlierfeaturesummary_outlier_feature_display_values_inner import OutlierfeaturesummaryOutlierFeatureDisplayValuesInner

outlierfeaturesummary_outlier_feature_display_values_inner = OutlierfeaturesummaryOutlierFeatureDisplayValuesInner(
display_name='Aliza Chris',
value='55',
value_type=sailpoint.iai_outliers.models.outliervaluetype.outliervaluetype(
                    name = 'INTEGER', 
                    ordinal = 0, )
)

```
[[Back to top]](#) 

