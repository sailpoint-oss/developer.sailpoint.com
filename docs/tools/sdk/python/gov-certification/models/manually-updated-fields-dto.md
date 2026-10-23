# ManuallyUpdatedFieldsDTO

# ManuallyUpdatedFieldsDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **bool** | True if the entitlements name was updated manually via entitlement import csv or patch endpoint. False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `name` property. | [optional] [default to False]
**description** | **bool** | True if the entitlement description was updated manually via entitlement import csv or patch endpoint. False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `description` property. | [optional] [default to False]
\}

## Example

```python
from sailpoint.gov_certification.models.manually_updated_fields_dto import ManuallyUpdatedFieldsDTO

manually_updated_fields_dto = ManuallyUpdatedFieldsDTO(
display_name=True,
description=True
)

```
[[Back to top]](#) 

