# EntitlementStateSnapshotJitDetail

# EntitlementStateSnapshotJitDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** | **String** | Application id for the entitlement attribute (same as EntitlementStateSnapshot.applicationId). | [optional] 
**AttributeName** | **String** | Account attribute name for the entitlement (EntitlementStateSnapshot.attributeName). | [optional] 
**AttributeValues** | **[]String** | Entitlement values for that attribute (EntitlementStateSnapshot.attributeValues). | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementStateSnapshotJitDetail = Initialize-EntitlementStateSnapshotJitDetail  -ApplicationId 2c9180835d2e5168015d32f890ca1581 `
 -AttributeName groups `
 -AttributeValues ["CN=Engineering,OU=Groups,DC=example,DC=com"]
```

- Convert the resource to JSON
```powershell
$EntitlementStateSnapshotJitDetail | ConvertTo-JSON
```


[[Back to top]](#) 

