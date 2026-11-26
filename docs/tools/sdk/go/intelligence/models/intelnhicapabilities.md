# Intelnhicapabilities

# Intelnhicapabilities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Mcp** | Pointer to [**Intelnhicapabilitybucket**](intelnhicapabilitybucket) | Linked MCP servers for this identity. | [optional] 
**Tool** | Pointer to [**Intelnhicapabilitybucket**](intelnhicapabilitybucket) | Linked tools for this identity. | [optional] 
**Skill** | Pointer to [**Intelnhicapabilitybucket**](intelnhicapabilitybucket) | Linked skills for this identity. | [optional] 
**Message** | Pointer to **string** | Set when linked capabilities could not be loaded. The `mcp`, `tool`, and `skill` properties are omitted; only `message` and `reason` are present. | [optional] 
**Reason** | Pointer to **Intelenrichmentfailurereason** |  | [optional] 

## Methods

### NewIntelnhicapabilities

`func NewIntelnhicapabilities() *Intelnhicapabilities`

NewIntelnhicapabilities instantiates a new Intelnhicapabilities object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelnhicapabilitiesWithDefaults

`func NewIntelnhicapabilitiesWithDefaults() *Intelnhicapabilities`

NewIntelnhicapabilitiesWithDefaults instantiates a new Intelnhicapabilities object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMcp

`func (o *Intelnhicapabilities) GetMcp() Intelnhicapabilitybucket`

GetMcp returns the Mcp field if non-nil, zero value otherwise.

### GetMcpOk

`func (o *Intelnhicapabilities) GetMcpOk() (*Intelnhicapabilitybucket, bool)`

GetMcpOk returns a tuple with the Mcp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMcp

`func (o *Intelnhicapabilities) SetMcp(v Intelnhicapabilitybucket)`

SetMcp sets Mcp field to given value.

### HasMcp

`func (o *Intelnhicapabilities) HasMcp() bool`

HasMcp returns a boolean if a field has been set.

### GetTool

`func (o *Intelnhicapabilities) GetTool() Intelnhicapabilitybucket`

GetTool returns the Tool field if non-nil, zero value otherwise.

### GetToolOk

`func (o *Intelnhicapabilities) GetToolOk() (*Intelnhicapabilitybucket, bool)`

GetToolOk returns a tuple with the Tool field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTool

`func (o *Intelnhicapabilities) SetTool(v Intelnhicapabilitybucket)`

SetTool sets Tool field to given value.

### HasTool

`func (o *Intelnhicapabilities) HasTool() bool`

HasTool returns a boolean if a field has been set.

### GetSkill

`func (o *Intelnhicapabilities) GetSkill() Intelnhicapabilitybucket`

GetSkill returns the Skill field if non-nil, zero value otherwise.

### GetSkillOk

`func (o *Intelnhicapabilities) GetSkillOk() (*Intelnhicapabilitybucket, bool)`

GetSkillOk returns a tuple with the Skill field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkill

`func (o *Intelnhicapabilities) SetSkill(v Intelnhicapabilitybucket)`

SetSkill sets Skill field to given value.

### HasSkill

`func (o *Intelnhicapabilities) HasSkill() bool`

HasSkill returns a boolean if a field has been set.

### GetMessage

`func (o *Intelnhicapabilities) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *Intelnhicapabilities) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *Intelnhicapabilities) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *Intelnhicapabilities) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetReason

`func (o *Intelnhicapabilities) GetReason() Intelenrichmentfailurereason`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *Intelnhicapabilities) GetReasonOk() (*Intelenrichmentfailurereason, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *Intelnhicapabilities) SetReason(v Intelenrichmentfailurereason)`

SetReason sets Reason field to given value.

### HasReason

`func (o *Intelnhicapabilities) HasReason() bool`

HasReason returns a boolean if a field has been set.


