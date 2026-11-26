# Scope

# Scope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scope** | **ScopeType** |  | [optional] 
**Visibility** | **ScopeVisibilityType** |  | [optional] 
**ScopeFilter** | [**VisibilityCriteria**](visibility-criteria) |  | [optional] 
**ScopeSelection** | [**[]Ref**](ref) | List of Identities that are assigned to the segment | [optional] 

## Examples

- Prepare the resource
```powershell
$Scope = Initialize-Scope  -Scope null `
 -Visibility null `
 -ScopeFilter null `
 -ScopeSelection [{"type":"IDENTITY","id":"29cb6c061da843ea8be4b3125f248f2a"},{"type":"IDENTITY","id":"f7b1b8a35fed4fd4ad2982014e137e19"}]
```

- Convert the resource to JSON
```powershell
$Scope | ConvertTo-JSON
```


[[Back to top]](#) 

