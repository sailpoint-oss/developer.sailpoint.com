---
id: errorresponsedto
title: Errorresponsedto
pagination_label: Errorresponsedto
sidebar_label: Errorresponsedto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Errorresponsedto', 'Errorresponsedto'] 
slug: /tools/sdk/python/entitlements/models/errorresponsedto
tags: ['SDK', 'Software Development Kit', 'Errorresponsedto', 'Errorresponsedto']
---

# Errorresponsedto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_code** | **str** | Fine-grained error code providing more detail of the error. | [optional] 
**tracking_id** | **str** | Unique tracking id for the error. | [optional] 
**messages** | [**[]Errormessagedto**](errormessagedto) | Generic localized reason for error | [optional] 
**causes** | [**[]Errormessagedto**](errormessagedto) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 
}

## Example

```python
from sailpoint.entitlements.models.errorresponsedto import Errorresponsedto

errorresponsedto = Errorresponsedto(
detail_code='400.1 Bad Request Content',
tracking_id='e7eab60924f64aa284175b9fa3309599',
messages=[
                    sailpoint.entitlements.models.error_message_dto.Error Message Dto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ],
causes=[
                    sailpoint.entitlements.models.error_message_dto.Error Message Dto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ]
)

```
[[Back to top]](#) 

