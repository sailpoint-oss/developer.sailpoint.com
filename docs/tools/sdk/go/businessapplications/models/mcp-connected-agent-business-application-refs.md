# MCPConnectedAgentBusinessApplicationRefs

# MCPConnectedAgentBusinessApplicationRefs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Reference type. | [optional] 
**Id** | Pointer to **string** | Business Application ID. | [optional] 
**Name** | Pointer to **NullableString** | Business Application name. | [optional] 
**SanctionedStatus** | Pointer to **SanctionedStatus** | Sanctioned status of the linked Business Application. | [optional] 
**CorrelationType** | Pointer to **string** | Whether the link was assigned manually or correlated automatically. | [optional] 

## Methods

### NewMCPConnectedAgentBusinessApplicationRefs

`func NewMCPConnectedAgentBusinessApplicationRefs() *MCPConnectedAgentBusinessApplicationRefs`

NewMCPConnectedAgentBusinessApplicationRefs instantiates a new MCPConnectedAgentBusinessApplicationRefs object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMCPConnectedAgentBusinessApplicationRefsWithDefaults

`func NewMCPConnectedAgentBusinessApplicationRefsWithDefaults() *MCPConnectedAgentBusinessApplicationRefs`

NewMCPConnectedAgentBusinessApplicationRefsWithDefaults instantiates a new MCPConnectedAgentBusinessApplicationRefs object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *MCPConnectedAgentBusinessApplicationRefs) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MCPConnectedAgentBusinessApplicationRefs) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MCPConnectedAgentBusinessApplicationRefs) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *MCPConnectedAgentBusinessApplicationRefs) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *MCPConnectedAgentBusinessApplicationRefs) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MCPConnectedAgentBusinessApplicationRefs) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MCPConnectedAgentBusinessApplicationRefs) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MCPConnectedAgentBusinessApplicationRefs) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *MCPConnectedAgentBusinessApplicationRefs) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MCPConnectedAgentBusinessApplicationRefs) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MCPConnectedAgentBusinessApplicationRefs) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MCPConnectedAgentBusinessApplicationRefs) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *MCPConnectedAgentBusinessApplicationRefs) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *MCPConnectedAgentBusinessApplicationRefs) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetSanctionedStatus

`func (o *MCPConnectedAgentBusinessApplicationRefs) GetSanctionedStatus() SanctionedStatus`

GetSanctionedStatus returns the SanctionedStatus field if non-nil, zero value otherwise.

### GetSanctionedStatusOk

`func (o *MCPConnectedAgentBusinessApplicationRefs) GetSanctionedStatusOk() (*SanctionedStatus, bool)`

GetSanctionedStatusOk returns a tuple with the SanctionedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSanctionedStatus

`func (o *MCPConnectedAgentBusinessApplicationRefs) SetSanctionedStatus(v SanctionedStatus)`

SetSanctionedStatus sets SanctionedStatus field to given value.

### HasSanctionedStatus

`func (o *MCPConnectedAgentBusinessApplicationRefs) HasSanctionedStatus() bool`

HasSanctionedStatus returns a boolean if a field has been set.

### GetCorrelationType

`func (o *MCPConnectedAgentBusinessApplicationRefs) GetCorrelationType() string`

GetCorrelationType returns the CorrelationType field if non-nil, zero value otherwise.

### GetCorrelationTypeOk

`func (o *MCPConnectedAgentBusinessApplicationRefs) GetCorrelationTypeOk() (*string, bool)`

GetCorrelationTypeOk returns a tuple with the CorrelationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelationType

`func (o *MCPConnectedAgentBusinessApplicationRefs) SetCorrelationType(v string)`

SetCorrelationType sets CorrelationType field to given value.

### HasCorrelationType

`func (o *MCPConnectedAgentBusinessApplicationRefs) HasCorrelationType() bool`

HasCorrelationType returns a boolean if a field has been set.


