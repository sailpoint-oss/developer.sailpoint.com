# Entitlementmetadatabulkupdatebyidrequest

# Entitlementmetadatabulkupdatebyidrequest

Request to bulk update Access Model Metadata on a list of entitlements identified by ID. The maximum entitlement count in a single request is 3000. Adding or replacing custom metadata requires a suite license.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | **[]str** | The IDs of the entitlements to update. | [required]
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | The operation to be performed | [required]
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the entitlement. | [optional] 
**values** | [**[]EntitlementmetadatabulkupdatebyidrequestValuesInner**](entitlementmetadatabulkupdatebyidrequest-values-inner) | The metadata to be updated, including attribute key and value. | [required]
\}

## Example

```python
from sailpoint.entitlements.models.entitlementmetadatabulkupdatebyidrequest import Entitlementmetadatabulkupdatebyidrequest

entitlementmetadatabulkupdatebyidrequest = Entitlementmetadatabulkupdatebyidrequest(
entitlements=["2c9180867817ac4d017817c491119a20","2c9180867817ac4d017817c491119a21"],
operation='REPLACE',
replace_scope='ATTRIBUTE',
values=[{"attribute":"iscFederalClassifications","values":["topSecret"]}]
)

```
[[Back to top]](#) 

