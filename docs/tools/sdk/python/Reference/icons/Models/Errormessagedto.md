---
id: errormessagedto
title: Errormessagedto
pagination_label: Errormessagedto
sidebar_label: Errormessagedto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Errormessagedto', 'Errormessagedto'] 
slug: /tools/sdk/python/icons/models/errormessagedto
tags: ['SDK', 'Software Development Kit', 'Errormessagedto', 'Errormessagedto']
---

# Errormessagedto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | The locale for the message text, a BCP 47 language tag. | [optional] 
**locale_origin** | [**Localeorigin**](localeorigin) |  | [optional] 
**text** | **str** | Actual text of the error message in the indicated locale. | [optional] 
}

## Example

```python
from sailpoint.icons.models.errormessagedto import Errormessagedto

errormessagedto = Errormessagedto(
locale='en-US',
locale_origin='DEFAULT',
text='The request was syntactically correct but its content is semantically invalid.'
)

```
[[Back to top]](#) 

