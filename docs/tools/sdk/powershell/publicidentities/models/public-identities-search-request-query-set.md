# PublicIdentitiesSearchRequestQuerySet

# PublicIdentitiesSearchRequestQuerySet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchAny** | **Boolean** | When true, entries are OR'd; when false, entries are AND'd. | [required]
**Entries** | [**[]PublicIdentitiesCompositeEntry**](public-identities-composite-entry) | One or more TEXT or nested COMPOSITE entries. | [required]

## Examples

- Prepare the resource
```powershell
$PublicIdentitiesSearchRequestQuerySet = Initialize-PublicIdentitiesSearchRequestQuerySet  -MatchAny false `
 -Entries [{queryType=TEXT, textQuery={fields=[attributes.identityState.exact], terms=[ACTIVE], matchAny=false, contains=false, strict=true}}]
```

- Convert the resource to JSON
```powershell
$PublicIdentitiesSearchRequestQuerySet | ConvertTo-JSON
```


[[Back to top]](#) 

