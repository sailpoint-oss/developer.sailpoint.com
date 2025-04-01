---
id: v2025-outlier-feature-summary-outlier-feature-display-values-inner
title: OutlierFeatureSummaryOutlierFeatureDisplayValuesInner
pagination_label: OutlierFeatureSummaryOutlierFeatureDisplayValuesInner
sidebar_label: OutlierFeatureSummaryOutlierFeatureDisplayValuesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OutlierFeatureSummaryOutlierFeatureDisplayValuesInner', 'V2025OutlierFeatureSummaryOutlierFeatureDisplayValuesInner'] 
slug: /tools/sdk/python/v2025/models/outlier-feature-summary-outlier-feature-display-values-inner
tags: ['SDK', 'Software Development Kit', 'OutlierFeatureSummaryOutlierFeatureDisplayValuesInner', 'V2025OutlierFeatureSummaryOutlierFeatureDisplayValuesInner']
---

# OutlierFeatureSummaryOutlierFeatureDisplayValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | display name | [optional] 
**value** | **str** | value | [optional] 
**value_type** | [**OutlierValueType**](outlier-value-type) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.outlier_feature_summary_outlier_feature_display_values_inner import OutlierFeatureSummaryOutlierFeatureDisplayValuesInner

outlier_feature_summary_outlier_feature_display_values_inner = OutlierFeatureSummaryOutlierFeatureDisplayValuesInner(
display_name='Aliza Chris',
value='55',
value_type=sailpoint.v2025.models.outlier_value_type.OutlierValueType(
                    name = 'INTEGER', 
                    ordinal = 0, )
)

```
[[Back to top]](#) 

