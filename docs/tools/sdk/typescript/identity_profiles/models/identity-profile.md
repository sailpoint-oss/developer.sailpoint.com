# IdentityProfile

# IdentityProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**description** | **(optional)** `string` | Identity profile\'s description. | [default to undefined]
**owner** | **(optional)** `IdentityProfileAllOfOwner` |  | [default to undefined]
**priority** | **(optional)** `number` | Identity profile\'s priority. | [default to undefined]
**authoritativeSource** | `IdentityProfileAllOfAuthoritativeSource` |  | [default to undefined]
**identityRefreshRequired** | **(optional)** `boolean` | Set this value to \'True\' if an identity refresh is necessary. You would typically want to trigger an identity refresh when a change has been made on the source. | [default to false]
**identityCount** | **(optional)** `number` | Number of identities belonging to the identity profile. | [default to undefined]
**identityAttributeConfig** | **(optional)** `IdentityAttributeConfig` |  | [default to undefined]
**identityExceptionReportReference** | **(optional)** `IdentityExceptionReportReference` |  | [default to undefined]
**hasTimeBasedAttr** | **(optional)** `boolean` | Indicates the value of `requiresPeriodicRefresh` attribute for the identity profile. | [default to false]

