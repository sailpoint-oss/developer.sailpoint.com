---
id: v2024-outlier-feature-summary
title: OutlierFeatureSummary
pagination_label: OutlierFeatureSummary
sidebar_label: OutlierFeatureSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OutlierFeatureSummary', 'V2024OutlierFeatureSummary'] 
slug: /tools/sdk/python/v2024/models/outlier-feature-summary
tags: ['SDK', 'Software Development Kit', 'OutlierFeatureSummary', 'V2024OutlierFeatureSummary']
---

# OutlierFeatureSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contributing_feature_name** | **str** | Contributing feature name | [optional] 
**identity_outlier_display_name** | **str** | Identity display name | [optional] 
**outlier_feature_display_values** | [**[]OutlierFeatureSummaryOutlierFeatureDisplayValuesInner**](outlier-feature-summary-outlier-feature-display-values-inner) |  | [optional] 
**feature_definition** | **str** | Definition of the feature | [optional] 
**feature_explanation** | **str** | Detailed explanation of the feature | [optional] 
**peer_display_name** | **str** | outlier's peer identity display name | [optional] 
**peer_identity_id** | **str** | outlier's peer identity id | [optional] 
**access_item_reference** | **object** | Access Item reference | [optional] 
}

## Example

```python
from sailpoint.v2024.models.outlier_feature_summary import OutlierFeatureSummary

outlier_feature_summary = OutlierFeatureSummary(
contributing_feature_name='Rare Access',
identity_outlier_display_name='John Smith',
outlier_feature_display_values=[
                    sailpoint.v2024.models.outlier_feature_summary_outlier_feature_display_values_inner.OutlierFeatureSummary_outlierFeatureDisplayValues_inner(
                        display_name = 'Aliza Chris', 
                        value = '55', 
                        value_type = 'INTEGER', )
                    ],
feature_definition='Identity total number of entitlements',
feature_explanation='An identity that has too much rare access has a higher change of becoming a security threat due to the unique access they possess',
peer_display_name='Mary Jane',
peer_identity_id='9f9d5d53ad0e48fba7352f6da9f1b8gbg',
access_item_reference={displayName=All Rare Entitlements, searchPlaceholder=Search by name or description}
)

```
[[Back to top]](#) 

