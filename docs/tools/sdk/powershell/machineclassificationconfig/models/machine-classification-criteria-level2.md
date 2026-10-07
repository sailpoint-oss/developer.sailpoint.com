# MachineClassificationCriteriaLevel2

# MachineClassificationCriteriaLevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | **MachineClassificationCriteriaOperation** |  | [optional] 
**CaseSensitive** | **Boolean** | Indicates whether case matters when evaluating the criteria | [optional] [default to $false]
**DataType** | **String** | The data type of the attribute being evaluated | [optional] 
**Attribute** | **String** | The attribute to evaluate in the classification criteria | [optional] 
**Value** | **String** | The value to compare against the attribute in the classification criteria | [optional] 
**Children** | [**[]MachineClassificationCriteriaLevel3**](machine-classification-criteria-level3) | An array of child classification criteria objects | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineClassificationCriteriaLevel2 = Initialize-MachineClassificationCriteriaLevel2  -Operation null `
 -CaseSensitive false `
 -DataType null `
 -Attribute employeeType `
 -Value SERVICE `
 -Children null
```

- Convert the resource to JSON
```powershell
$MachineClassificationCriteriaLevel2 | ConvertTo-JSON
```


[[Back to top]](#) 

