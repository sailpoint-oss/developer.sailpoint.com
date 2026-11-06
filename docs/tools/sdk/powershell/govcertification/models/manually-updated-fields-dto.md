# ManuallyUpdatedFieldsDTO

# ManuallyUpdatedFieldsDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayName** | **Boolean** | True if the entitlements name was updated manually via entitlement import csv or patch endpoint. False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/docs/api/get-entitlement-v-1) > `name` property. | [optional] [default to $false]
**Description** | **Boolean** | True if the entitlement description was updated manually via entitlement import csv or patch endpoint. False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/docs/api/get-entitlement-v-1) > `description` property. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ManuallyUpdatedFieldsDTO = Initialize-ManuallyUpdatedFieldsDTO  -DisplayName true `
 -Description true
```

- Convert the resource to JSON
```powershell
$ManuallyUpdatedFieldsDTO | ConvertTo-JSON
```


[[Back to top]](#) 

