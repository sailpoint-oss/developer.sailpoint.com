# IdentitycollectordependenciesconflicterrorMessagesInner

# IdentitycollectordependenciesconflicterrorMessagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | The locale for the message text, a BCP 47 language tag. | [optional] 
**locale_origin** | **str** | An indicator of how the locale was selected. | [optional] 
**text** | **str** | Actual text of the error message in the indicated locale. | [optional] 
\}

## Example

```python
from sailpoint.data_access_security.models.identitycollectordependenciesconflicterror_messages_inner import IdentitycollectordependenciesconflicterrorMessagesInner

identitycollectordependenciesconflicterror_messages_inner = IdentitycollectordependenciesconflicterrorMessagesInner(
locale='en-US',
locale_origin='DEFAULT',
text='Identity collector is in use and cannot be deleted.'
)

```
[[Back to top]](#) 

