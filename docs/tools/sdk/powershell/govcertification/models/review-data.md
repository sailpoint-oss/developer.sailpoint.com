# ReviewData

# ReviewData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetReference** | [**TargetReference**](target-reference) |  | [optional] 
**Entitlement** | [**Entitlement**](entitlement) |  | [optional] 
**AccessProfile** | [**AccessProfile**](access-profile) |  | [optional] 
**Role** | [**Role**](role) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ReviewData = Initialize-ReviewData  -TargetReference null `
 -Entitlement null `
 -AccessProfile null `
 -Role null
```

- Convert the resource to JSON
```powershell
$ReviewData | ConvertTo-JSON
```


[[Back to top]](#) 

