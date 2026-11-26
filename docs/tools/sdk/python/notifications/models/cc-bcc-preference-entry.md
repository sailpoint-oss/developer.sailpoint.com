# CcBccPreferenceEntry

# CcBccPreferenceEntry

One CC or BCC routing entry. Dynamic recipient types are resolved at notification send time. Field applicability depends on type: IDENTITY and GOVERNANCE_GROUP require `id`; STATIC_EMAIL requires `email`; MANAGER_OF may optionally include `id` (manager of that identity, otherwise manager of the notification recipient); ORG_ADMINS does not use `id` or `email`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **CcBccRecipientType** |  | [required]
**id** | **str** | Identity or governance group id when required by the recipient type. For MANAGER_OF, when provided this is the identity whose manager should receive the email. | [optional] 
**email** | **str** | Static email address when type is STATIC_EMAIL. | [optional] 
\}

## Example

```python
from sailpoint.notifications.models.cc_bcc_preference_entry import CcBccPreferenceEntry

cc_bcc_preference_entry = CcBccPreferenceEntry(
type='IDENTITY',
id='6b0b8e47cc1f4c3fa961a38fc718e989',
email='cc-recipient@example.com'
)

```
[[Back to top]](#) 

