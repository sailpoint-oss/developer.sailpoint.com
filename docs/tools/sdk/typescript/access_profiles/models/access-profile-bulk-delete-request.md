# AccessProfileBulkDeleteRequest

# AccessProfileBulkDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessProfileIds** | **(optional)** `Array<string>` | List of IDs of Access Profiles to be deleted. | [default to undefined]
**bestEffortOnly** | **(optional)** `boolean` | If **true**, silently skip over any of the specified Access Profiles if they cannot be deleted because they are in use. If **false**, no deletions will be attempted if any of the Access Profiles are in use. | [default to undefined]

