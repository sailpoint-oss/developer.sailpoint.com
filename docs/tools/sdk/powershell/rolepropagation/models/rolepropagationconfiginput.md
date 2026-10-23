# Rolepropagationconfiginput

# Rolepropagationconfiginput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Indicates if the Role Change Propagation process should be enabled for the tenant | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Rolepropagationconfiginput = Initialize-Rolepropagationconfiginput  -Enabled true
```

- Convert the resource to JSON
```powershell
$Rolepropagationconfiginput | ConvertTo-JSON
```


[[Back to top]](#) 

