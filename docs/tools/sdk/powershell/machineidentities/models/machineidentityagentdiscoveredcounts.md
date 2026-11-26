# Machineidentityagentdiscoveredcounts

# Machineidentityagentdiscoveredcounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **Int64** | Number of machine identities created within the window. | [optional] 
**WindowDays** | **Int32** | Length of the window, in days. | [optional] 
**VarFrom** | **System.DateTime** | Start of the window, in UTC, and the exact cutoff used for `count`. Identities created at or after this time are included. | [optional] 

## Examples

- Prepare the resource
```powershell
$Machineidentityagentdiscoveredcounts = Initialize-Machineidentityagentdiscoveredcounts  -Count 8 `
 -WindowDays 30 `
 -VarFrom 2026-10-17T09:58:52.985613Z
```

- Convert the resource to JSON
```powershell
$Machineidentityagentdiscoveredcounts | ConvertTo-JSON
```


[[Back to top]](#) 

