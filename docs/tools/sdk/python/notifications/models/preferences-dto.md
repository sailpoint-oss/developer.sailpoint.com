# PreferencesDto

# PreferencesDto

Tenant notification preferences for a notification key, including preferred mediums and optional CC/BCC email recipients.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The template notification key. | [optional] 
**mediums** | **[]Medium** | List of preferred notification mediums, i.e., the mediums (or method) for which notifications are enabled. An empty list means the notification is disabled for the tenant. More mediums may be added in the future. | [optional] 
**modified** | **datetime** | Modified date of preference. | [optional] [readonly] 
**cc_list** | [**[]CcBccPreferenceEntry**](cc-bcc-preference-entry) | Optional CC recipients for email notifications for this key. Requires EMAIL to be included in `mediums`. Maximum of five entries. The same recipient cannot appear in both `ccList` and `bccList`. | [optional] 
**bcc_list** | [**[]CcBccPreferenceEntry**](cc-bcc-preference-entry) | Optional BCC recipients for email notifications for this key. Requires EMAIL to be included in `mediums`. Maximum of five entries. The same recipient cannot appear in both `ccList` and `bccList`. | [optional] 
\}

## Example

```python
from sailpoint.notifications.models.preferences_dto import PreferencesDto

preferences_dto = PreferencesDto(
key='cloud_manual_work_item_summary',
mediums=["EMAIL"],
modified='2020-05-15T14:37:06.909Z',
cc_list=[{"type":"IDENTITY","id":"6b0b8e47cc1f4c3fa961a38fc718e989"},{"type":"STATIC_EMAIL","email":"cc-recipient@example.com"}],
bcc_list=[{"type":"MANAGER_OF"},{"type":"ORG_ADMINS"}]
)

```
[[Back to top]](#) 

