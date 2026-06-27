---
id: configurationdetailsresponse
title: Configurationdetailsresponse
pagination_label: Configurationdetailsresponse
sidebar_label: Configurationdetailsresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Configurationdetailsresponse', 'Configurationdetailsresponse'] 
slug: /tools/sdk/python/work-reassignment/models/configurationdetailsresponse
tags: ['SDK', 'Software Development Kit', 'Configurationdetailsresponse', 'Configurationdetailsresponse']
---

# Configurationdetailsresponse

The request body of Reassignment Configuration Details for a specific identity and config type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_type** | [**Configtypeenum**](configtypeenum) |  | [optional] 
**target_identity** | [**Identity2**](identity2) |  | [optional] 
**start_date** | **datetime** | The date from which to start reassigning work items | [optional] 
**end_date** | **datetime** | The date from which to stop reassigning work items.  If this is an empty string it indicates a permanent reassignment. | [optional] 
**audit_details** | [**Auditdetails**](auditdetails) |  | [optional] 
}

## Example

```python
from sailpoint.work_reassignment.models.configurationdetailsresponse import Configurationdetailsresponse

configurationdetailsresponse = Configurationdetailsresponse(
config_type='ACCESS_REQUESTS',
target_identity=sailpoint.work_reassignment.models.identity_2.identity-2(
                    id = '2c91808380aa05580180aaaaf1940410', 
                    name = 'William Wilson', ),
start_date='2022-07-21T11:13:12.345Z',
end_date='0001-01-01T00:00Z',
audit_details=sailpoint.work_reassignment.models.auditdetails.auditdetails(
                    created = '2022-07-21T11:13:12.345Z', 
                    created_by = sailpoint.work_reassignment.models.identity_2.identity-2(
                        id = '2c91808380aa05580180aaaaf1940410', 
                        name = 'William Wilson', ), 
                    modified = '2022-07-21T11:13:12.345Z', 
                    modified_by = sailpoint.work_reassignment.models.identity_2.identity-2(
                        id = '2c91808380aa05580180aaaaf1940410', 
                        name = 'William Wilson', ), )
)

```
[[Back to top]](#) 

