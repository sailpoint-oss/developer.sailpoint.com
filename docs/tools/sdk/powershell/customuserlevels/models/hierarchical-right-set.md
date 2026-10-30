# HierarchicalRightSet

# HierarchicalRightSet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the RightSet. | [optional] 
**Name** | **String** | The human-readable name of the RightSet. | [optional] 
**Description** | **String** | A human-readable description of the RightSet. | [optional] 
**Category** | **String** | The category of the RightSet. | [optional] 
**NestedConfig** | [**NestedConfig**](nested-config) |  | [optional] 
**Children** | [**[]HierarchicalRightSet**](hierarchical-right-set) | List of child HierarchicalRightSets. | [optional] 

## Examples

- Prepare the resource
```powershell
$HierarchicalRightSet = Initialize-HierarchicalRightSet  -Id idn:ui-right-set-example `
 -Name Hierarchical Right Set Name `
 -Description This is a description of the HierarchicalRightSet. `
 -Category identity `
 -NestedConfig null `
 -Children {"id":"idn:ui-identity-details-example","name":"Identity Details","description":"Read only access for identity details.","category":"identity","nestedConfig":{"ancestorId":"idn:ui-identity-management-example","depth":1,"parentId":"idn:ui-identity-management-example","childrenIds":[]},"children":[]}
```

- Convert the resource to JSON
```powershell
$HierarchicalRightSet | ConvertTo-JSON
```


[[Back to top]](#) 

