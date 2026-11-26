# Entitlementmetadatabulkupdatebyqueryrequest

# Entitlementmetadatabulkupdatebyqueryrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | `object` | The search query selecting the entitlements to update. | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the entitlement. | [default to undefined]
**values** | `Array<EntitlementmetadatabulkupdatebyidrequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

