---
id: configurationitemresponse
title: Configurationitemresponse
pagination_label: Configurationitemresponse
sidebar_label: Configurationitemresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Configurationitemresponse', 'Configurationitemresponse'] 
slug: /tools/sdk/python/work-reassignment/models/configurationitemresponse
tags: ['SDK', 'Software Development Kit', 'Configurationitemresponse', 'Configurationitemresponse']
---

# Configurationitemresponse

The response body of a Reassignment Configuration for a single identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**Identity2**](identity2) |  | [optional] 
**config_details** | [**[]Configurationdetailsresponse**](configurationdetailsresponse) | Details of how work should be reassigned for an Identity | [optional] 
}

## Example

```python
from sailpoint.work_reassignment.models.configurationitemresponse import Configurationitemresponse

configurationitemresponse = Configurationitemresponse(
identity=sailpoint.work_reassignment.models.identity_2.identity-2(
                    id = '2c91808380aa05580180aaaaf1940410', 
                    name = 'William Wilson', ),
config_details=[
                    sailpoint.work_reassignment.models.configurationdetailsresponse.configurationdetailsresponse(
                        config_type = 'ACCESS_REQUESTS', 
                        target_identity = sailpoint.work_reassignment.models.identity_2.identity-2(
                            id = '2c91808380aa05580180aaaaf1940410', 
                            name = 'William Wilson', ), 
                        start_date = '2022-07-21T11:13:12.345Z', 
                        end_date = '0001-01-01T00:00Z', 
                        audit_details = sailpoint.work_reassignment.models.auditdetails.auditdetails(
                            created = '2022-07-21T11:13:12.345Z', 
                            created_by = sailpoint.work_reassignment.models.identity_2.identity-2(
                                id = '2c91808380aa05580180aaaaf1940410', 
                                name = 'William Wilson', ), 
                            modified = '2022-07-21T11:13:12.345Z', 
                            modified_by = , ), )
                    ]
)

```
[[Back to top]](#) 

