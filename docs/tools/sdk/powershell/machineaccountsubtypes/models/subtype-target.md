# SubtypeTarget

# SubtypeTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE",    "CONNECTOR" ] | Type of the target. | [optional] 
**Id** | **String** | Source ID for a `SOURCE` target, or connector type for a `CONNECTOR` target. | [optional] 
**Name** | **String** | Name of the source or connector. | [optional] 
**SupportsProvisioning** | **Boolean** | Indicates whether the target supports provisioning. Only returned when you get a single subtype by ID. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SubtypeTarget = Initialize-SubtypeTarget  -Type CONNECTOR `
 -Id active-directory `
 -Name Active Directory `
 -SupportsProvisioning true
```

- Convert the resource to JSON
```powershell
$SubtypeTarget | ConvertTo-JSON
```


[[Back to top]](#) 

