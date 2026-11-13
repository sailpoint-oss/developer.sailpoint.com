# PublicIdentitiesNestedQuerySet

# PublicIdentitiesNestedQuerySet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchAny** | **Boolean** | When true, entries are OR'd; when false, entries are AND'd. | [required]
**Entries** | [**[]PublicIdentitiesTextEntry**](public-identities-text-entry) | One or more TEXT entries. | [required]

## Examples

- Prepare the resource
```powershell
$PublicIdentitiesNestedQuerySet = Initialize-PublicIdentitiesNestedQuerySet  -MatchAny true `
 -Entries null
```

- Convert the resource to JSON
```powershell
$PublicIdentitiesNestedQuerySet | ConvertTo-JSON
```


[[Back to top]](#) 

