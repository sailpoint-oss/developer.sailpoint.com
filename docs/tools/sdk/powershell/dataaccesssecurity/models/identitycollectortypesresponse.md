# Identitycollectortypesresponse

# Identitycollectortypesresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Types** | [**[]Identitycollectortype**](identitycollectortype) | Enabled public identity collector types. Flagged types (Snowflake, Databricks, Atlassian Suite) are omitted when their feature flags are disabled. | [required]

## Examples

- Prepare the resource
```powershell
$Identitycollectortypesresponse = Initialize-Identitycollectortypesresponse  -Types null
```

- Convert the resource to JSON
```powershell
$Identitycollectortypesresponse | ConvertTo-JSON
```


[[Back to top]](#) 

