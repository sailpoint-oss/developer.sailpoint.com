---
id: v2024-outlier-feature-summary
title: OutlierFeatureSummary
pagination_label: OutlierFeatureSummary
sidebar_label: OutlierFeatureSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OutlierFeatureSummary'] 
slug: /tools/sdk/powershell/v2024/models/outlier-feature-summary
tags: ['SDK', 'Software Development Kit', 'OutlierFeatureSummary']
---


# OutlierFeatureSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContributingFeatureName** |  Pointer to **String** | Contributing feature name | [optional] 
**IdentityOutlierDisplayName** |  Pointer to **String** | Identity display name | [optional] 
**OutlierFeatureDisplayValues** |  Pointer to [**[]OutlierFeatureSummaryOutlierFeatureDisplayValuesInner**](outlier-feature-summary-outlier-feature-display-values-inner) |  | [optional] 
**FeatureDefinition** |  Pointer to **String** | Definition of the feature | [optional] 
**FeatureExplanation** |  Pointer to **String** | Detailed explanation of the feature | [optional] 
**PeerDisplayName** |  Pointer to **String** | outlier's peer identity display name | [optional] 
**PeerIdentityId** |  Pointer to **String** | outlier's peer identity id | [optional] 
**AccessItemReference** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Access Item reference | [optional] 

## Examples

- Prepare the resource
```powershell
$OutlierFeatureSummary = Initialize-PSSailpoint.V2024OutlierFeatureSummary  -ContributingFeatureName Rare Access `
 -IdentityOutlierDisplayName John Smith `
 -OutlierFeatureDisplayValues null `
 -FeatureDefinition Identity total number of entitlements `
 -FeatureExplanation An identity that has too much rare access has a higher change of becoming a security threat due to the unique access they possess `
 -PeerDisplayName Mary Jane `
 -PeerIdentityId 9f9d5d53ad0e48fba7352f6da9f1b8gbg `
 -AccessItemReference {displayName&#x3D;All Rare Entitlements, searchPlaceholder&#x3D;Search by name or description}
```

- Convert the resource to JSON
```powershell
$OutlierFeatureSummary | ConvertTo-JSON
```


[[Back to top]](#) 

