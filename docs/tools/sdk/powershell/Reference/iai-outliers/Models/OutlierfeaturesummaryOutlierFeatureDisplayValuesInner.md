---
id: outlierfeaturesummary-outlier-feature-display-values-inner
title: OutlierfeaturesummaryOutlierFeatureDisplayValuesInner
pagination_label: OutlierfeaturesummaryOutlierFeatureDisplayValuesInner
sidebar_label: OutlierfeaturesummaryOutlierFeatureDisplayValuesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OutlierfeaturesummaryOutlierFeatureDisplayValuesInner', 'OutlierfeaturesummaryOutlierFeatureDisplayValuesInner'] 
slug: /tools/sdk/powershell/iaioutliers/models/outlierfeaturesummary-outlier-feature-display-values-inner
tags: ['SDK', 'Software Development Kit', 'OutlierfeaturesummaryOutlierFeatureDisplayValuesInner', 'OutlierfeaturesummaryOutlierFeatureDisplayValuesInner']
---


# OutlierfeaturesummaryOutlierFeatureDisplayValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayName** | **String** | display name | [optional] 
**Value** | **String** | value | [optional] 
**ValueType** | [**Outliervaluetype**](outliervaluetype) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$OutlierfeaturesummaryOutlierFeatureDisplayValuesInner = Initialize-OutlierfeaturesummaryOutlierFeatureDisplayValuesInner  -DisplayName Aliza Chris `
 -Value 55 `
 -ValueType null
```

- Convert the resource to JSON
```powershell
$OutlierfeaturesummaryOutlierFeatureDisplayValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

