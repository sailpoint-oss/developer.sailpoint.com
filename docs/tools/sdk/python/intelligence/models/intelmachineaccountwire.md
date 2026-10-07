# Intelmachineaccountwire

# Intelmachineaccountwire

Machine account row on the non-human identity aggregate accounts.items list. Every property in required is always present on the wire. Nullable object refs (source, machineIdentity, ownerIdentity) may be null. String fields may be empty when upstream has no value; booleans, timestamps, attributes, and connectorAttributes are always emitted (empty object when absent).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique account identifier in Identity Security Cloud. | [required]
**name** | **str** | Account name on the correlated source. | [required]
**native_identity** | **str** | Native identifier on the source system. | [required]
**source** | [**Intelmachinesourcewire**](intelmachinesourcewire) | Source metadata for the machine account when present upstream. | [required]
**enabled** | **bool** | True when the account is enabled for use on the source. | [required]
**locked** | **bool** | True when the account is locked on the source. | [required]
**machine_identity** | [**Intelmachineentityref**](intelmachineentityref) | Reference to the parent machine identity when populated upstream. | [required]
**owner_identity** | [**Intelmachineentityref**](intelmachineentityref) | Reference to the owning human identity when populated upstream. | [required]
**description** | **str** | Free-text account description from the source. | [required]
**subtype** | **str** | Account subtype label from upstream classification. | [required]
**access_type** | **str** | Access type label for the account (for example account or entitlement). | [required]
**environment** | **str** | Environment label associated with the account. | [required]
**classification_method** | **str** | Method used to classify the account as a machine account. | [required]
**manually_edited** | **bool** | True when an administrator manually edited account attributes. | [required]
**manually_correlated** | **bool** | True when an administrator manually correlated the account. | [required]
**has_entitlements** | **bool** | True when the account holds one or more entitlements. | [required]
**created** | **datetime** | Timestamp when the account record was created. | [required]
**modified** | **datetime** | Timestamp when the account record was last modified. | [required]
**attributes** | **map[string]object** | Extended account attributes from the source connector. | [required]
**connector_attributes** | **map[string]object** | Connector-specific attribute bag from upstream. | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intelmachineaccountwire import Intelmachineaccountwire

intelmachineaccountwire = Intelmachineaccountwire(
id='2c91808874ff91550175097daaec161c',
name='account-name',
native_identity='arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI',
source=sailpoint.intelligence.models.intelmachinesourcewire.Intelmachinesourcewire(
                    id = '60de165099e649cb828553a5e8510fc4', 
                    name = 'Example Directory', 
                    type = 'DelimitedFile', ),
enabled=True,
locked=False,
machine_identity=sailpoint.intelligence.models.intelmachineentityref.Intelmachineentityref(
                    type = 'IDENTITY', 
                    id = 'ef38f94347e94562b5bb8424a56397d8', 
                    name = 'Example User', 
                    email = 'user@example.com', ),
owner_identity=sailpoint.intelligence.models.intelmachineentityref.Intelmachineentityref(
                    type = 'IDENTITY', 
                    id = 'ef38f94347e94562b5bb8424a56397d8', 
                    name = 'Example User', 
                    email = 'user@example.com', ),
description='Service account for automation',
subtype='Service Account',
access_type='account',
environment='production',
classification_method='DISCOVERED',
manually_edited=False,
manually_correlated=False,
has_entitlements=True,
created='2026-01-01T00:00Z',
modified='2026-05-01T00:00Z',
attributes={},
connector_attributes={}
)

```
[[Back to top]](#) 

