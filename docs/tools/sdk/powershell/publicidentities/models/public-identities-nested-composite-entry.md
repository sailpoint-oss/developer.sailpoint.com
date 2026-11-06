# PublicIdentitiesNestedCompositeEntry

# PublicIdentitiesNestedCompositeEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QueryType** |  **Enum** [  "COMPOSITE" ] | Entry type discriminator. Must be COMPOSITE for nested query sets. | [required]
**QuerySet** | [**PublicIdentitiesNestedQuerySet**](public-identities-nested-query-set) | Nested query set for this COMPOSITE entry. | [required]

## Examples

- Prepare the resource
```powershell
$PublicIdentitiesNestedCompositeEntry = Initialize-PublicIdentitiesNestedCompositeEntry  -QueryType COMPOSITE `
 -QuerySet null
```

- Convert the resource to JSON
```powershell
$PublicIdentitiesNestedCompositeEntry | ConvertTo-JSON
```


[[Back to top]](#) 

