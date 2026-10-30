# Mcpconnectedagent

# Mcpconnectedagent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**NativeIdentity** | Pointer to **string** | Native identity of the AI agent, as aggregated from the source. | [optional] 
**Description** | Pointer to **NullableString** | AI agent description. | [optional] 
**Attributes** | Pointer to **map[string]interface\{\}** | Map of custom machine identity attributes. | [optional] 
**Subtype** | Pointer to **string** | Machine identity subtype. | [optional] 
**Owners** | Pointer to [**NullableMCPConnectedAgentOwners**](mcp-connected-agent-owners) |  | [optional] 
**SourceId** | Pointer to **string** | ID of the source the AI agent was aggregated from. | [optional] 
**Uuid** | Pointer to **string** | UUID of the AI agent, as aggregated from the source. | [optional] 
**DatasetId** | Pointer to **string** | Dataset ID of the source the AI agent was aggregated from. | [optional] 
**Source** | Pointer to [**MCPConnectedAgentSource**](mcp-connected-agent-source) |  | [optional] 
**ManuallyEdited** | Pointer to **bool** | Indicates whether the AI agent has been manually edited. | [optional] [default to false]
**ManuallyCreated** | Pointer to **bool** | Indicates whether the AI agent was manually created. | [optional] [default to false]
**ExistsOnSource** | Pointer to **string** | Whether the AI agent still exists on its source. | [optional] 
**UserEntitlements** | Pointer to [**[]MCPConnectedAgentUserEntitlements**](mcp-connected-agent-user-entitlements) | User entitlements associated with the AI agent. | [optional] 
**BusinessApplicationRefs** | Pointer to [**[]MCPConnectedAgentBusinessApplicationRefs**](mcp-connected-agent-business-application-refs) | Business Applications the AI agent is linked to. Omitted when Business Application context is not available for the tenant. | [optional] 
**EffectiveSanctionedStatus** | Pointer to **SanctionedStatus** | Sanctioned status the AI agent inherits from its linked Business Applications. Omitted when Business Application context is not available for the tenant. | [optional] 

## Methods

### NewMcpconnectedagent

`func NewMcpconnectedagent(name NullableString, ) *Mcpconnectedagent`

NewMcpconnectedagent instantiates a new Mcpconnectedagent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMcpconnectedagentWithDefaults

`func NewMcpconnectedagentWithDefaults() *Mcpconnectedagent`

NewMcpconnectedagentWithDefaults instantiates a new Mcpconnectedagent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Mcpconnectedagent) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Mcpconnectedagent) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Mcpconnectedagent) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Mcpconnectedagent) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Mcpconnectedagent) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Mcpconnectedagent) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Mcpconnectedagent) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Mcpconnectedagent) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Mcpconnectedagent) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *Mcpconnectedagent) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Mcpconnectedagent) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Mcpconnectedagent) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Mcpconnectedagent) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Mcpconnectedagent) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Mcpconnectedagent) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Mcpconnectedagent) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Mcpconnectedagent) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *Mcpconnectedagent) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Mcpconnectedagent) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Mcpconnectedagent) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *Mcpconnectedagent) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetDescription

`func (o *Mcpconnectedagent) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Mcpconnectedagent) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Mcpconnectedagent) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Mcpconnectedagent) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Mcpconnectedagent) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Mcpconnectedagent) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAttributes

`func (o *Mcpconnectedagent) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Mcpconnectedagent) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Mcpconnectedagent) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Mcpconnectedagent) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSubtype

`func (o *Mcpconnectedagent) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *Mcpconnectedagent) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *Mcpconnectedagent) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.

### HasSubtype

`func (o *Mcpconnectedagent) HasSubtype() bool`

HasSubtype returns a boolean if a field has been set.

### GetOwners

`func (o *Mcpconnectedagent) GetOwners() MCPConnectedAgentOwners`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *Mcpconnectedagent) GetOwnersOk() (*MCPConnectedAgentOwners, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *Mcpconnectedagent) SetOwners(v MCPConnectedAgentOwners)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *Mcpconnectedagent) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### SetOwnersNil

`func (o *Mcpconnectedagent) SetOwnersNil(b bool)`

 SetOwnersNil sets the value for Owners to be an explicit nil

### UnsetOwners
`func (o *Mcpconnectedagent) UnsetOwners()`

UnsetOwners ensures that no value is present for Owners, not even an explicit nil
### GetSourceId

`func (o *Mcpconnectedagent) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Mcpconnectedagent) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Mcpconnectedagent) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Mcpconnectedagent) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetUuid

`func (o *Mcpconnectedagent) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *Mcpconnectedagent) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *Mcpconnectedagent) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *Mcpconnectedagent) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetDatasetId

`func (o *Mcpconnectedagent) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *Mcpconnectedagent) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *Mcpconnectedagent) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *Mcpconnectedagent) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### GetSource

`func (o *Mcpconnectedagent) GetSource() MCPConnectedAgentSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Mcpconnectedagent) GetSourceOk() (*MCPConnectedAgentSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Mcpconnectedagent) SetSource(v MCPConnectedAgentSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *Mcpconnectedagent) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetManuallyEdited

`func (o *Mcpconnectedagent) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *Mcpconnectedagent) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *Mcpconnectedagent) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.

### HasManuallyEdited

`func (o *Mcpconnectedagent) HasManuallyEdited() bool`

HasManuallyEdited returns a boolean if a field has been set.

### GetManuallyCreated

`func (o *Mcpconnectedagent) GetManuallyCreated() bool`

GetManuallyCreated returns the ManuallyCreated field if non-nil, zero value otherwise.

### GetManuallyCreatedOk

`func (o *Mcpconnectedagent) GetManuallyCreatedOk() (*bool, bool)`

GetManuallyCreatedOk returns a tuple with the ManuallyCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyCreated

`func (o *Mcpconnectedagent) SetManuallyCreated(v bool)`

SetManuallyCreated sets ManuallyCreated field to given value.

### HasManuallyCreated

`func (o *Mcpconnectedagent) HasManuallyCreated() bool`

HasManuallyCreated returns a boolean if a field has been set.

### GetExistsOnSource

`func (o *Mcpconnectedagent) GetExistsOnSource() string`

GetExistsOnSource returns the ExistsOnSource field if non-nil, zero value otherwise.

### GetExistsOnSourceOk

`func (o *Mcpconnectedagent) GetExistsOnSourceOk() (*string, bool)`

GetExistsOnSourceOk returns a tuple with the ExistsOnSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistsOnSource

`func (o *Mcpconnectedagent) SetExistsOnSource(v string)`

SetExistsOnSource sets ExistsOnSource field to given value.

### HasExistsOnSource

`func (o *Mcpconnectedagent) HasExistsOnSource() bool`

HasExistsOnSource returns a boolean if a field has been set.

### GetUserEntitlements

`func (o *Mcpconnectedagent) GetUserEntitlements() []MCPConnectedAgentUserEntitlements`

GetUserEntitlements returns the UserEntitlements field if non-nil, zero value otherwise.

### GetUserEntitlementsOk

`func (o *Mcpconnectedagent) GetUserEntitlementsOk() (*[]MCPConnectedAgentUserEntitlements, bool)`

GetUserEntitlementsOk returns a tuple with the UserEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlements

`func (o *Mcpconnectedagent) SetUserEntitlements(v []MCPConnectedAgentUserEntitlements)`

SetUserEntitlements sets UserEntitlements field to given value.

### HasUserEntitlements

`func (o *Mcpconnectedagent) HasUserEntitlements() bool`

HasUserEntitlements returns a boolean if a field has been set.

### GetBusinessApplicationRefs

`func (o *Mcpconnectedagent) GetBusinessApplicationRefs() []MCPConnectedAgentBusinessApplicationRefs`

GetBusinessApplicationRefs returns the BusinessApplicationRefs field if non-nil, zero value otherwise.

### GetBusinessApplicationRefsOk

`func (o *Mcpconnectedagent) GetBusinessApplicationRefsOk() (*[]MCPConnectedAgentBusinessApplicationRefs, bool)`

GetBusinessApplicationRefsOk returns a tuple with the BusinessApplicationRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessApplicationRefs

`func (o *Mcpconnectedagent) SetBusinessApplicationRefs(v []MCPConnectedAgentBusinessApplicationRefs)`

SetBusinessApplicationRefs sets BusinessApplicationRefs field to given value.

### HasBusinessApplicationRefs

`func (o *Mcpconnectedagent) HasBusinessApplicationRefs() bool`

HasBusinessApplicationRefs returns a boolean if a field has been set.

### GetEffectiveSanctionedStatus

`func (o *Mcpconnectedagent) GetEffectiveSanctionedStatus() SanctionedStatus`

GetEffectiveSanctionedStatus returns the EffectiveSanctionedStatus field if non-nil, zero value otherwise.

### GetEffectiveSanctionedStatusOk

`func (o *Mcpconnectedagent) GetEffectiveSanctionedStatusOk() (*SanctionedStatus, bool)`

GetEffectiveSanctionedStatusOk returns a tuple with the EffectiveSanctionedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveSanctionedStatus

`func (o *Mcpconnectedagent) SetEffectiveSanctionedStatus(v SanctionedStatus)`

SetEffectiveSanctionedStatus sets EffectiveSanctionedStatus field to given value.

### HasEffectiveSanctionedStatus

`func (o *Mcpconnectedagent) HasEffectiveSanctionedStatus() bool`

HasEffectiveSanctionedStatus returns a boolean if a field has been set.


