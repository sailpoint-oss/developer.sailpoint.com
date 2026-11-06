# Accountsexportreportarguments

# Accountsexportreportarguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** | **String** | Source ID. | [required]
**SourceName** | **String** | Source name. | [required]

## Examples

- Prepare the resource
```powershell
$Accountsexportreportarguments = Initialize-Accountsexportreportarguments  -Application 2c9180897eSourceIde781782f705b9 `
 -SourceName Active Directory
```

- Convert the resource to JSON
```powershell
$Accountsexportreportarguments | ConvertTo-JSON
```


[[Back to top]](#) 

