# IntelAccessAccountWire

# IntelAccessAccountWire


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique account identifier in Identity Security Cloud. | [required]
**name** | **str** | Account name or login value on the correlated source. | [required]
**source** | [**IntelAccessSourceWire**](intel-access-source-wire) | Source metadata for the account as returned by List Accounts wire format. | [optional] 
**disabled** | **bool** | True when the account is administratively disabled on the source. | [required]
**locked** | **bool** | True when the account is locked from interactive sign-in on the source. | [required]
**authoritative** | **bool** | True when the account is treated as authoritative for attribute synchronization. | [required]
**system_account** | **bool** | True when the account represents a non-interactive or system principal. | [required]
**is_machine** | **bool** | True when the account belongs to a machine or service identity. | [required]
**manually_correlated** | **bool** | True when an administrator manually correlated the account to an identity. | [required]
**native_identity** | **str** | Native identifier string on the source directory or application. | [optional] 
**created** | **datetime** | Timestamp when the account record was created in Identity Security Cloud. | [required]
**modified** | **datetime** | Timestamp when the account record was last modified in Identity Security Cloud. | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intel_access_account_wire import IntelAccessAccountWire

intel_access_account_wire = IntelAccessAccountWire(
id='2c91808874ff91550175097daaec161c',
name='jdoe',
source=sailpoint.intelligence.models.intel_access_source_wire.IntelAccessSourceWire(
                    id = '2c9180835d2e5168015d32f890301e89', 
                    name = 'Active Directory', ),
disabled=False,
locked=False,
authoritative=True,
system_account=False,
is_machine=False,
manually_correlated=False,
native_identity='CN=jdoe,OU=Users,DC=example,DC=com',
created='2023-11-01T10:00Z',
modified='2024-02-15T16:20Z'
)

```
[[Back to top]](#) 

