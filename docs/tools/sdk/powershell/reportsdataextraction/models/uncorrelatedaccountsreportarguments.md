# Uncorrelatedaccountsreportarguments

# Uncorrelatedaccountsreportarguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SelectedFormats** | **[]String** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 

## Examples

- Prepare the resource
```powershell
$Uncorrelatedaccountsreportarguments = Initialize-Uncorrelatedaccountsreportarguments  -SelectedFormats ["CSV"]
```

- Convert the resource to JSON
```powershell
$Uncorrelatedaccountsreportarguments | ConvertTo-JSON
```


[[Back to top]](#) 

