# BulkApproveEntitlementRecommendationRequest

# BulkApproveEntitlementRecommendationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]BulkApproveEntitlementRecommendationItem**](bulk-approve-entitlement-recommendation-item) | The list of recommendation items to approve. | [required]

## Examples

- Prepare the resource
```powershell
$BulkApproveEntitlementRecommendationRequest = Initialize-BulkApproveEntitlementRecommendationRequest  -Items [{"id":"79db50d4-723c-4aa0-a824-83c2205d82d1","recordType":"SED","description":"Provides access and permissions related to the Delinea Secret Server Cloud system."},{"id":"a1b2c3d4-e5f6-7890-abcd-ef1234567890","recordType":"privilege","privilegeLevel":"high"}]
```

- Convert the resource to JSON
```powershell
$BulkApproveEntitlementRecommendationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

