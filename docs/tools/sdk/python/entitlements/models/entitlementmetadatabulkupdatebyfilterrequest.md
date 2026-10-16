# Entitlementmetadatabulkupdatebyfilterrequest

# Entitlementmetadatabulkupdatebyfilterrequest

Request to bulk update Access Model Metadata on every entitlement matching a filter expression. Adding or replacing custom metadata requires a suite license.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **str** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* | [required]
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | The operation to be performed | [required]
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the entitlement. | [optional] 
**values** | [**[]EntitlementmetadatabulkupdatebyidrequestValuesInner**](entitlementmetadatabulkupdatebyidrequest-values-inner) | The metadata to be updated, including attribute key and value. | [required]
\}

## Example

```python
from sailpoint.entitlements.models.entitlementmetadatabulkupdatebyfilterrequest import Entitlementmetadatabulkupdatebyfilterrequest

entitlementmetadatabulkupdatebyfilterrequest = Entitlementmetadatabulkupdatebyfilterrequest(
filters='id eq 2c9180867817ac4d017817c491119a20',
operation='REPLACE',
replace_scope='ATTRIBUTE',
values=[{"attribute":"iscFederalClassifications","values":["topSecret"]}]
)

```
[[Back to top]](#) 

