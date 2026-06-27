---
id: correlatedgovernanceevent
title: Correlatedgovernanceevent
pagination_label: Correlatedgovernanceevent
sidebar_label: Correlatedgovernanceevent
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Correlatedgovernanceevent', 'Correlatedgovernanceevent'] 
slug: /tools/sdk/python/identity-history/models/correlatedgovernanceevent
tags: ['SDK', 'Software Development Kit', 'Correlatedgovernanceevent', 'Correlatedgovernanceevent']
---

# Correlatedgovernanceevent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the governance event, such as the certification name or access request ID. | [optional] 
**date_time** | **str** | The date that the certification or access request was completed. | [optional] 
**type** |  **Enum** [  'certification',    'accessRequest' ] | The type of governance event. | [optional] 
**governance_id** | **str** | The ID of the instance that caused the event - either the certification ID or access request ID. | [optional] 
**owners** | [**[]Certifierresponse**](certifierresponse) | The owners of the governance event (the certifiers or approvers) | [optional] 
**reviewers** | [**[]Certifierresponse**](certifierresponse) | The owners of the governance event (the certifiers or approvers), this field should be preferred over owners | [optional] 
**decision_maker** | [**Certifierresponse**](certifierresponse) |  | [optional] 
}

## Example

```python
from sailpoint.identity_history.models.correlatedgovernanceevent import Correlatedgovernanceevent

correlatedgovernanceevent = Correlatedgovernanceevent(
name='Manager Certification for Jon Snow',
date_time='2019-03-08T22:37:33.901Z',
type='certification',
governance_id='2c91808a77ff216301782327a50f09bf',
owners=[{"id":"8a80828f643d484f01643e14202e206f","displayName":"John Snow"}],
reviewers=[{"id":"8a80828f643d484f01643e14202e206f","displayName":"John Snow"}],
decision_maker=sailpoint.identity_history.models.certifier_response.Certifier Response(
                    id = '8a80828f643d484f01643e14202e206f', 
                    display_name = 'John Snow', )
)

```
[[Back to top]](#) 

