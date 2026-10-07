# OutlierFeatureSummary

# OutlierFeatureSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContributingFeatureName** | **String** | Contributing feature name | [optional] 
**IdentityOutlierDisplayName** | **String** | Identity display name | [optional] 
**OutlierFeatureDisplayValues** | [**[]OutlierFeatureSummaryOutlierFeatureDisplayValuesInner**](outlier-feature-summary-outlier-feature-display-values-inner) |  | [optional] 
**FeatureDefinition** | **String** | Definition of the feature | [optional] 
**FeatureExplanation** | **String** | Detailed explanation of the feature | [optional] 
**PeerDisplayName** | **String** | outlier's peer identity display name | [optional] 
**PeerIdentityId** | **String** | outlier's peer identity id | [optional] 
**AccessItemReference** | **SystemCollectionsHashtable** | Access Item reference | [optional] 

## Examples

- Prepare the resource
```powershell
$OutlierFeatureSummary = Initialize-OutlierFeatureSummary  -ContributingFeatureName Rare Access `
 -IdentityOutlierDisplayName John Smith `
 -OutlierFeatureDisplayValues null `
 -FeatureDefinition Identity total number of entitlements `
 -FeatureExplanation An identity that has too much rare access has a higher change of becoming a security threat due to the unique access they possess `
 -PeerDisplayName Mary Jane `
 -PeerIdentityId 9f9d5d53ad0e48fba7352f6da9f1b8gbg `
 -AccessItemReference {"displayName":"All Rare Entitlements","searchPlaceholder":"Search by name or description"}
```

- Convert the resource to JSON
```powershell
$OutlierFeatureSummary | ConvertTo-JSON
```


[[Back to top]](#) 

