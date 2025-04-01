---
id: v2025-configuration-item-response
title: ConfigurationItemResponse
pagination_label: ConfigurationItemResponse
sidebar_label: ConfigurationItemResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConfigurationItemResponse', 'V2025ConfigurationItemResponse'] 
slug: /tools/sdk/python/v2025/models/configuration-item-response
tags: ['SDK', 'Software Development Kit', 'ConfigurationItemResponse', 'V2025ConfigurationItemResponse']
---

# ConfigurationItemResponse

The response body of a Reassignment Configuration for a single identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**Identity1**](identity1) |  | [optional] 
**config_details** | [**[]ConfigurationDetailsResponse**](configuration-details-response) | Details of how work should be reassigned for an Identity | [optional] 
}

## Example

```python
from sailpoint.v2025.models.configuration_item_response import ConfigurationItemResponse

configuration_item_response = ConfigurationItemResponse(
identity=sailpoint.v2025.models.identity_1.Identity_1(
                    id = '2c91808380aa05580180aaaaf1940410', 
                    name = 'William Wilson', ),
config_details=[
                    sailpoint.v2025.models.configuration_details_response.ConfigurationDetailsResponse(
                        config_type = 'ACCESS_REQUESTS', 
                        target_identity = sailpoint.v2025.models.identity_1.Identity_1(
                            id = '2c91808380aa05580180aaaaf1940410', 
                            name = 'William Wilson', ), 
                        start_date = '2022-07-21T11:13:12.345Z', 
                        end_date = '0001-01-01T00:00Z', 
                        audit_details = sailpoint.v2025.models.audit_details.AuditDetails(
                            created = '2022-07-21T11:13:12.345Z', 
                            created_by = sailpoint.v2025.models.identity_1.Identity_1(
                                id = '2c91808380aa05580180aaaaf1940410', 
                                name = 'William Wilson', ), 
                            modified = '2022-07-21T11:13:12.345Z', 
                            modified_by = , ), )
                    ]
)

```
[[Back to top]](#) 

