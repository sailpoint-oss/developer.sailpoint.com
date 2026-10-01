# Machineidentityv2

# Machineidentityv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | Pointer to **string** | Description of the machine identity. | [optional] 
**Attributes** | Pointer to **map[string]interface\{\}** | A map of custom machine identity attributes. | [optional] 
**ConnectorAttributes** | Pointer to **map[string]interface\{\}** | A map of attributes sourced from the connector during aggregation. | [optional] 
**ManuallyEdited** | Pointer to **bool** | Indicates if the machine identity has been manually edited. | [optional] [default to false]
**ManuallyCreated** | Pointer to **bool** | Indicates if the machine identity has been manually created. | [optional] [default to false]
**Owners** | Pointer to [**MachineIdentityOwnersV2**](machine-identity-owners-v2) |  | [optional] 
**Subtype** | Pointer to **string** | The subtype value associated to the machine identity. | [optional] 
**SourceId** | Pointer to **string** | The source id associated to the machine identity. | [optional] 
**Uuid** | Pointer to **string** | The UUID associated to the machine identity directly aggregated from a source. | [optional] 
**NativeIdentity** | Pointer to **string** | The native identity associated to the machine identity directly aggregated from a source. | [optional] 
**DatasetId** | Pointer to **string** | The dataset id associated to the source from which the identity was retrieved. | [optional] 
**Environment** | Pointer to **string** | The environment the machine identity belongs to. | [optional] 
**ExistsOnSource** | Pointer to **string** | Indicates whether the machine identity still exists on the source. | [optional] 
**Status** | Pointer to **NullableString** | Operational status read from stored attributes.status; null when absent. | [optional] 
**Resource** | Pointer to [**ResourceV2**](resource-v2) |  | [optional] 
**Source** | Pointer to [**MachineIdentityV2Source**](machine-identity-v2-source) |  | [optional] 
**UserEntitlements** | Pointer to [**[]UserEntitlementV2**](user-entitlement-v2) | The user entitlements associated to the machine identity. | [optional] 
**BusinessApplicationRefs** | Pointer to [**[]BusinessApplicationRef**](business-application-ref) | Optional Business Application references associated with this machine identity. Available when Business Applications is enabled for the tenant. On create and patch, at most one reference is allowed and is persisted as a `MANUAL` correlation. When Business Applications is not enabled, this field is null on responses and is rejected (`400`) if supplied on write. | [optional] 
**EffectiveSanctionedStatus** | Pointer to **NullableSanctionedStatus** | Derived sanctioned status from linked Business Applications; `UNKNOWN` when no refs are present. Available when Business Applications is enabled for the tenant; null when it is not enabled. Read-only on create and patch input. | [optional] [readonly] 
**Risk** | Pointer to [**MachineIdentityV2Risk**](machine-identity-v2-risk) |  | [optional] 

## Methods

### NewMachineidentityv2

`func NewMachineidentityv2(name NullableString, ) *Machineidentityv2`

NewMachineidentityv2 instantiates a new Machineidentityv2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityv2WithDefaults

`func NewMachineidentityv2WithDefaults() *Machineidentityv2`

NewMachineidentityv2WithDefaults instantiates a new Machineidentityv2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Machineidentityv2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Machineidentityv2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Machineidentityv2) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Machineidentityv2) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Machineidentityv2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Machineidentityv2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Machineidentityv2) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Machineidentityv2) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Machineidentityv2) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *Machineidentityv2) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Machineidentityv2) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Machineidentityv2) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Machineidentityv2) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Machineidentityv2) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Machineidentityv2) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Machineidentityv2) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Machineidentityv2) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *Machineidentityv2) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Machineidentityv2) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Machineidentityv2) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Machineidentityv2) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAttributes

`func (o *Machineidentityv2) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Machineidentityv2) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Machineidentityv2) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Machineidentityv2) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetConnectorAttributes

`func (o *Machineidentityv2) GetConnectorAttributes() map[string]interface{}`

GetConnectorAttributes returns the ConnectorAttributes field if non-nil, zero value otherwise.

### GetConnectorAttributesOk

`func (o *Machineidentityv2) GetConnectorAttributesOk() (*map[string]interface{}, bool)`

GetConnectorAttributesOk returns a tuple with the ConnectorAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorAttributes

`func (o *Machineidentityv2) SetConnectorAttributes(v map[string]interface{})`

SetConnectorAttributes sets ConnectorAttributes field to given value.

### HasConnectorAttributes

`func (o *Machineidentityv2) HasConnectorAttributes() bool`

HasConnectorAttributes returns a boolean if a field has been set.

### GetManuallyEdited

`func (o *Machineidentityv2) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *Machineidentityv2) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *Machineidentityv2) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.

### HasManuallyEdited

`func (o *Machineidentityv2) HasManuallyEdited() bool`

HasManuallyEdited returns a boolean if a field has been set.

### GetManuallyCreated

`func (o *Machineidentityv2) GetManuallyCreated() bool`

GetManuallyCreated returns the ManuallyCreated field if non-nil, zero value otherwise.

### GetManuallyCreatedOk

`func (o *Machineidentityv2) GetManuallyCreatedOk() (*bool, bool)`

GetManuallyCreatedOk returns a tuple with the ManuallyCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyCreated

`func (o *Machineidentityv2) SetManuallyCreated(v bool)`

SetManuallyCreated sets ManuallyCreated field to given value.

### HasManuallyCreated

`func (o *Machineidentityv2) HasManuallyCreated() bool`

HasManuallyCreated returns a boolean if a field has been set.

### GetOwners

`func (o *Machineidentityv2) GetOwners() MachineIdentityOwnersV2`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *Machineidentityv2) GetOwnersOk() (*MachineIdentityOwnersV2, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *Machineidentityv2) SetOwners(v MachineIdentityOwnersV2)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *Machineidentityv2) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetSubtype

`func (o *Machineidentityv2) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *Machineidentityv2) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *Machineidentityv2) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.

### HasSubtype

`func (o *Machineidentityv2) HasSubtype() bool`

HasSubtype returns a boolean if a field has been set.

### GetSourceId

`func (o *Machineidentityv2) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Machineidentityv2) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Machineidentityv2) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Machineidentityv2) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetUuid

`func (o *Machineidentityv2) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *Machineidentityv2) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *Machineidentityv2) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *Machineidentityv2) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *Machineidentityv2) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Machineidentityv2) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Machineidentityv2) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *Machineidentityv2) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetDatasetId

`func (o *Machineidentityv2) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *Machineidentityv2) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *Machineidentityv2) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *Machineidentityv2) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### GetEnvironment

`func (o *Machineidentityv2) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *Machineidentityv2) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *Machineidentityv2) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.

### HasEnvironment

`func (o *Machineidentityv2) HasEnvironment() bool`

HasEnvironment returns a boolean if a field has been set.

### GetExistsOnSource

`func (o *Machineidentityv2) GetExistsOnSource() string`

GetExistsOnSource returns the ExistsOnSource field if non-nil, zero value otherwise.

### GetExistsOnSourceOk

`func (o *Machineidentityv2) GetExistsOnSourceOk() (*string, bool)`

GetExistsOnSourceOk returns a tuple with the ExistsOnSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistsOnSource

`func (o *Machineidentityv2) SetExistsOnSource(v string)`

SetExistsOnSource sets ExistsOnSource field to given value.

### HasExistsOnSource

`func (o *Machineidentityv2) HasExistsOnSource() bool`

HasExistsOnSource returns a boolean if a field has been set.

### GetStatus

`func (o *Machineidentityv2) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Machineidentityv2) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Machineidentityv2) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Machineidentityv2) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### SetStatusNil

`func (o *Machineidentityv2) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *Machineidentityv2) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetResource

`func (o *Machineidentityv2) GetResource() ResourceV2`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *Machineidentityv2) GetResourceOk() (*ResourceV2, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *Machineidentityv2) SetResource(v ResourceV2)`

SetResource sets Resource field to given value.

### HasResource

`func (o *Machineidentityv2) HasResource() bool`

HasResource returns a boolean if a field has been set.

### GetSource

`func (o *Machineidentityv2) GetSource() MachineIdentityV2Source`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Machineidentityv2) GetSourceOk() (*MachineIdentityV2Source, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Machineidentityv2) SetSource(v MachineIdentityV2Source)`

SetSource sets Source field to given value.

### HasSource

`func (o *Machineidentityv2) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetUserEntitlements

`func (o *Machineidentityv2) GetUserEntitlements() []UserEntitlementV2`

GetUserEntitlements returns the UserEntitlements field if non-nil, zero value otherwise.

### GetUserEntitlementsOk

`func (o *Machineidentityv2) GetUserEntitlementsOk() (*[]UserEntitlementV2, bool)`

GetUserEntitlementsOk returns a tuple with the UserEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlements

`func (o *Machineidentityv2) SetUserEntitlements(v []UserEntitlementV2)`

SetUserEntitlements sets UserEntitlements field to given value.

### HasUserEntitlements

`func (o *Machineidentityv2) HasUserEntitlements() bool`

HasUserEntitlements returns a boolean if a field has been set.

### GetBusinessApplicationRefs

`func (o *Machineidentityv2) GetBusinessApplicationRefs() []BusinessApplicationRef`

GetBusinessApplicationRefs returns the BusinessApplicationRefs field if non-nil, zero value otherwise.

### GetBusinessApplicationRefsOk

`func (o *Machineidentityv2) GetBusinessApplicationRefsOk() (*[]BusinessApplicationRef, bool)`

GetBusinessApplicationRefsOk returns a tuple with the BusinessApplicationRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessApplicationRefs

`func (o *Machineidentityv2) SetBusinessApplicationRefs(v []BusinessApplicationRef)`

SetBusinessApplicationRefs sets BusinessApplicationRefs field to given value.

### HasBusinessApplicationRefs

`func (o *Machineidentityv2) HasBusinessApplicationRefs() bool`

HasBusinessApplicationRefs returns a boolean if a field has been set.

### SetBusinessApplicationRefsNil

`func (o *Machineidentityv2) SetBusinessApplicationRefsNil(b bool)`

 SetBusinessApplicationRefsNil sets the value for BusinessApplicationRefs to be an explicit nil

### UnsetBusinessApplicationRefs
`func (o *Machineidentityv2) UnsetBusinessApplicationRefs()`

UnsetBusinessApplicationRefs ensures that no value is present for BusinessApplicationRefs, not even an explicit nil
### GetEffectiveSanctionedStatus

`func (o *Machineidentityv2) GetEffectiveSanctionedStatus() SanctionedStatus`

GetEffectiveSanctionedStatus returns the EffectiveSanctionedStatus field if non-nil, zero value otherwise.

### GetEffectiveSanctionedStatusOk

`func (o *Machineidentityv2) GetEffectiveSanctionedStatusOk() (*SanctionedStatus, bool)`

GetEffectiveSanctionedStatusOk returns a tuple with the EffectiveSanctionedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveSanctionedStatus

`func (o *Machineidentityv2) SetEffectiveSanctionedStatus(v SanctionedStatus)`

SetEffectiveSanctionedStatus sets EffectiveSanctionedStatus field to given value.

### HasEffectiveSanctionedStatus

`func (o *Machineidentityv2) HasEffectiveSanctionedStatus() bool`

HasEffectiveSanctionedStatus returns a boolean if a field has been set.

### SetEffectiveSanctionedStatusNil

`func (o *Machineidentityv2) SetEffectiveSanctionedStatusNil(b bool)`

 SetEffectiveSanctionedStatusNil sets the value for EffectiveSanctionedStatus to be an explicit nil

### UnsetEffectiveSanctionedStatus
`func (o *Machineidentityv2) UnsetEffectiveSanctionedStatus()`

UnsetEffectiveSanctionedStatus ensures that no value is present for EffectiveSanctionedStatus, not even an explicit nil
### GetRisk

`func (o *Machineidentityv2) GetRisk() MachineIdentityV2Risk`

GetRisk returns the Risk field if non-nil, zero value otherwise.

### GetRiskOk

`func (o *Machineidentityv2) GetRiskOk() (*MachineIdentityV2Risk, bool)`

GetRiskOk returns a tuple with the Risk field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRisk

`func (o *Machineidentityv2) SetRisk(v MachineIdentityV2Risk)`

SetRisk sets Risk field to given value.

### HasRisk

`func (o *Machineidentityv2) HasRisk() bool`

HasRisk returns a boolean if a field has been set.


