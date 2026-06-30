---
id: outlierfeaturesummary
title: Outlierfeaturesummary
pagination_label: Outlierfeaturesummary
sidebar_label: Outlierfeaturesummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Outlierfeaturesummary', 'Outlierfeaturesummary'] 
slug: /tools/sdk/python/iai-outliers/models/outlierfeaturesummary
tags: ['SDK', 'Software Development Kit', 'Outlierfeaturesummary', 'Outlierfeaturesummary']
---

# Outlierfeaturesummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contributing_feature_name** | **str** | Contributing feature name | [optional] 
**identity_outlier_display_name** | **str** | Identity display name | [optional] 
**outlier_feature_display_values** | [**[]OutlierfeaturesummaryOutlierFeatureDisplayValuesInner**](outlierfeaturesummary-outlier-feature-display-values-inner) |  | [optional] 
**feature_definition** | **str** | Definition of the feature | [optional] 
**feature_explanation** | **str** | Detailed explanation of the feature | [optional] 
**peer_display_name** | **str** | outlier's peer identity display name | [optional] 
**peer_identity_id** | **str** | outlier's peer identity id | [optional] 
**access_item_reference** | **object** | Access Item reference | [optional] 
}

## Example

```python
from sailpoint.iai_outliers.models.outlierfeaturesummary import Outlierfeaturesummary

outlierfeaturesummary = Outlierfeaturesummary(
contributing_feature_name='Rare Access',
identity_outlier_display_name='John Smith',
outlier_feature_display_values=[
                    sailpoint.iai_outliers.models.outlierfeaturesummary_outlier_feature_display_values_inner.outlierfeaturesummary_outlierFeatureDisplayValues_inner(
                        display_name = 'Aliza Chris', 
                        value = '55', 
                        value_type = sailpoint.iai_outliers.models.outliervaluetype.outliervaluetype(
                            name = 'INTEGER', 
                            ordinal = 0, ), )
                    ],
feature_definition='Identity total number of entitlements',
feature_explanation='An identity that has too much rare access has a higher change of becoming a security threat due to the unique access they possess',
peer_display_name='Mary Jane',
peer_identity_id='9f9d5d53ad0e48fba7352f6da9f1b8gbg',
access_item_reference={"displayName":"All Rare Entitlements","searchPlaceholder":"Search by name or description"}
)

```
[[Back to top]](#) 

