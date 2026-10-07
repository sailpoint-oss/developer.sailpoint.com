# Intelmachineaccountwire

# Intelmachineaccountwire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique account identifier in Identity Security Cloud. | 
**Name** | **string** | Account name on the correlated source. | 
**NativeIdentity** | **string** | Native identifier on the source system. | 
**Source** | [**NullableIntelmachinesourcewire**](intelmachinesourcewire) | Source metadata for the machine account when present upstream. | 
**Enabled** | **bool** | True when the account is enabled for use on the source. | 
**Locked** | **bool** | True when the account is locked on the source. | 
**MachineIdentity** | [**NullableIntelmachineentityref**](intelmachineentityref) | Reference to the parent machine identity when populated upstream. | 
**OwnerIdentity** | [**NullableIntelmachineentityref**](intelmachineentityref) | Reference to the owning human identity when populated upstream. | 
**Description** | **string** | Free-text account description from the source. | 
**Subtype** | **string** | Account subtype label from upstream classification. | 
**AccessType** | **string** | Access type label for the account (for example account or entitlement). | 
**Environment** | **string** | Environment label associated with the account. | 
**ClassificationMethod** | **string** | Method used to classify the account as a machine account. | 
**ManuallyEdited** | **bool** | True when an administrator manually edited account attributes. | 
**ManuallyCorrelated** | **bool** | True when an administrator manually correlated the account. | 
**HasEntitlements** | **bool** | True when the account holds one or more entitlements. | 
**Created** | **SailPointTime** | Timestamp when the account record was created. | 
**Modified** | **SailPointTime** | Timestamp when the account record was last modified. | 
**Attributes** | **map[string]interface\{\}** | Extended account attributes from the source connector. | 
**ConnectorAttributes** | **map[string]interface\{\}** | Connector-specific attribute bag from upstream. | 

## Methods

### NewIntelmachineaccountwire

`func NewIntelmachineaccountwire(id string, name string, nativeIdentity string, source NullableIntelmachinesourcewire, enabled bool, locked bool, machineIdentity NullableIntelmachineentityref, ownerIdentity NullableIntelmachineentityref, description string, subtype string, accessType string, environment string, classificationMethod string, manuallyEdited bool, manuallyCorrelated bool, hasEntitlements bool, created SailPointTime, modified SailPointTime, attributes map[string]interface{}, connectorAttributes map[string]interface{}, ) *Intelmachineaccountwire`

NewIntelmachineaccountwire instantiates a new Intelmachineaccountwire object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelmachineaccountwireWithDefaults

`func NewIntelmachineaccountwireWithDefaults() *Intelmachineaccountwire`

NewIntelmachineaccountwireWithDefaults instantiates a new Intelmachineaccountwire object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Intelmachineaccountwire) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Intelmachineaccountwire) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Intelmachineaccountwire) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Intelmachineaccountwire) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Intelmachineaccountwire) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Intelmachineaccountwire) SetName(v string)`

SetName sets Name field to given value.


### GetNativeIdentity

`func (o *Intelmachineaccountwire) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Intelmachineaccountwire) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Intelmachineaccountwire) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.


### GetSource

`func (o *Intelmachineaccountwire) GetSource() Intelmachinesourcewire`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Intelmachineaccountwire) GetSourceOk() (*Intelmachinesourcewire, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Intelmachineaccountwire) SetSource(v Intelmachinesourcewire)`

SetSource sets Source field to given value.


### SetSourceNil

`func (o *Intelmachineaccountwire) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *Intelmachineaccountwire) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetEnabled

`func (o *Intelmachineaccountwire) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Intelmachineaccountwire) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Intelmachineaccountwire) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.


### GetLocked

`func (o *Intelmachineaccountwire) GetLocked() bool`

GetLocked returns the Locked field if non-nil, zero value otherwise.

### GetLockedOk

`func (o *Intelmachineaccountwire) GetLockedOk() (*bool, bool)`

GetLockedOk returns a tuple with the Locked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocked

`func (o *Intelmachineaccountwire) SetLocked(v bool)`

SetLocked sets Locked field to given value.


### GetMachineIdentity

`func (o *Intelmachineaccountwire) GetMachineIdentity() Intelmachineentityref`

GetMachineIdentity returns the MachineIdentity field if non-nil, zero value otherwise.

### GetMachineIdentityOk

`func (o *Intelmachineaccountwire) GetMachineIdentityOk() (*Intelmachineentityref, bool)`

GetMachineIdentityOk returns a tuple with the MachineIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentity

`func (o *Intelmachineaccountwire) SetMachineIdentity(v Intelmachineentityref)`

SetMachineIdentity sets MachineIdentity field to given value.


### SetMachineIdentityNil

`func (o *Intelmachineaccountwire) SetMachineIdentityNil(b bool)`

 SetMachineIdentityNil sets the value for MachineIdentity to be an explicit nil

### UnsetMachineIdentity
`func (o *Intelmachineaccountwire) UnsetMachineIdentity()`

UnsetMachineIdentity ensures that no value is present for MachineIdentity, not even an explicit nil
### GetOwnerIdentity

`func (o *Intelmachineaccountwire) GetOwnerIdentity() Intelmachineentityref`

GetOwnerIdentity returns the OwnerIdentity field if non-nil, zero value otherwise.

### GetOwnerIdentityOk

`func (o *Intelmachineaccountwire) GetOwnerIdentityOk() (*Intelmachineentityref, bool)`

GetOwnerIdentityOk returns a tuple with the OwnerIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerIdentity

`func (o *Intelmachineaccountwire) SetOwnerIdentity(v Intelmachineentityref)`

SetOwnerIdentity sets OwnerIdentity field to given value.


### SetOwnerIdentityNil

`func (o *Intelmachineaccountwire) SetOwnerIdentityNil(b bool)`

 SetOwnerIdentityNil sets the value for OwnerIdentity to be an explicit nil

### UnsetOwnerIdentity
`func (o *Intelmachineaccountwire) UnsetOwnerIdentity()`

UnsetOwnerIdentity ensures that no value is present for OwnerIdentity, not even an explicit nil
### GetDescription

`func (o *Intelmachineaccountwire) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Intelmachineaccountwire) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Intelmachineaccountwire) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetSubtype

`func (o *Intelmachineaccountwire) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *Intelmachineaccountwire) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *Intelmachineaccountwire) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.


### GetAccessType

`func (o *Intelmachineaccountwire) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *Intelmachineaccountwire) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *Intelmachineaccountwire) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.


### GetEnvironment

`func (o *Intelmachineaccountwire) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *Intelmachineaccountwire) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *Intelmachineaccountwire) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.


### GetClassificationMethod

`func (o *Intelmachineaccountwire) GetClassificationMethod() string`

GetClassificationMethod returns the ClassificationMethod field if non-nil, zero value otherwise.

### GetClassificationMethodOk

`func (o *Intelmachineaccountwire) GetClassificationMethodOk() (*string, bool)`

GetClassificationMethodOk returns a tuple with the ClassificationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassificationMethod

`func (o *Intelmachineaccountwire) SetClassificationMethod(v string)`

SetClassificationMethod sets ClassificationMethod field to given value.


### GetManuallyEdited

`func (o *Intelmachineaccountwire) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *Intelmachineaccountwire) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *Intelmachineaccountwire) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.


### GetManuallyCorrelated

`func (o *Intelmachineaccountwire) GetManuallyCorrelated() bool`

GetManuallyCorrelated returns the ManuallyCorrelated field if non-nil, zero value otherwise.

### GetManuallyCorrelatedOk

`func (o *Intelmachineaccountwire) GetManuallyCorrelatedOk() (*bool, bool)`

GetManuallyCorrelatedOk returns a tuple with the ManuallyCorrelated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyCorrelated

`func (o *Intelmachineaccountwire) SetManuallyCorrelated(v bool)`

SetManuallyCorrelated sets ManuallyCorrelated field to given value.


### GetHasEntitlements

`func (o *Intelmachineaccountwire) GetHasEntitlements() bool`

GetHasEntitlements returns the HasEntitlements field if non-nil, zero value otherwise.

### GetHasEntitlementsOk

`func (o *Intelmachineaccountwire) GetHasEntitlementsOk() (*bool, bool)`

GetHasEntitlementsOk returns a tuple with the HasEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasEntitlements

`func (o *Intelmachineaccountwire) SetHasEntitlements(v bool)`

SetHasEntitlements sets HasEntitlements field to given value.


### GetCreated

`func (o *Intelmachineaccountwire) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Intelmachineaccountwire) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Intelmachineaccountwire) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *Intelmachineaccountwire) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Intelmachineaccountwire) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Intelmachineaccountwire) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetAttributes

`func (o *Intelmachineaccountwire) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Intelmachineaccountwire) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Intelmachineaccountwire) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### GetConnectorAttributes

`func (o *Intelmachineaccountwire) GetConnectorAttributes() map[string]interface{}`

GetConnectorAttributes returns the ConnectorAttributes field if non-nil, zero value otherwise.

### GetConnectorAttributesOk

`func (o *Intelmachineaccountwire) GetConnectorAttributesOk() (*map[string]interface{}, bool)`

GetConnectorAttributesOk returns a tuple with the ConnectorAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorAttributes

`func (o *Intelmachineaccountwire) SetConnectorAttributes(v map[string]interface{})`

SetConnectorAttributes sets ConnectorAttributes field to given value.



