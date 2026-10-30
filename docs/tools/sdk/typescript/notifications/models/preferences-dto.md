# PreferencesDto

# PreferencesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | The template notification key. | [default to undefined]
**mediums** | **(optional)** `Array<Medium>` | List of preferred notification mediums, i.e., the mediums (or method) for which notifications are enabled. An empty list means the notification is disabled for the tenant. More mediums may be added in the future. | [default to undefined]
**modified** | **(optional)** `string` | Modified date of preference. | [readonly] [default to undefined]
**ccList** | **(optional)** `Array<CcBccPreferenceEntry>` | Optional CC recipients for email notifications for this key. Requires EMAIL to be included in `mediums`. Maximum of five entries. The same recipient cannot appear in both `ccList` and `bccList`. | [default to undefined]
**bccList** | **(optional)** `Array<CcBccPreferenceEntry>` | Optional BCC recipients for email notifications for this key. Requires EMAIL to be included in `mediums`. Maximum of five entries. The same recipient cannot appear in both `ccList` and `bccList`. | [default to undefined]

