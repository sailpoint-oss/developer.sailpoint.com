# Compensatingcontrolresponse

# Compensatingcontrolresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The system-generated unique identifier of the compensating control. | [optional] [readonly] 
**Name** | Pointer to **string** | The display name of the compensating control. | [optional] [readonly] 
**Description** | Pointer to **string** | A human-readable description of the compensating control. | [optional] [readonly] 
**Owner** | [**Reference**](reference) |  | 
**SecondaryOwners** | Pointer to [**[]Reference**](reference) | References to additional identities or governance groups that share ownership of the compensating control. | [optional] [readonly] 
**Type** | Pointer to **string** | The type of compensating control that determines how a violation is addressed. | [optional] [readonly] 
**Action** | Pointer to **string** | The action performed when the compensating control is applied. | [optional] [readonly] 
**Expiration** | Pointer to **string** | The duration after which the applied control expires, expressed as a duration string. | [optional] [readonly] 
**JustificationRequired** | **bool** | Indicates whether a justification is required when applying this control. | [readonly] 
**WorkflowID** | Pointer to **string** | Opaque workflow definition identifier in the exact form required by the owning service.  | [optional] [readonly] 

## Methods

### NewCompensatingcontrolresponse

`func NewCompensatingcontrolresponse(owner Reference, justificationRequired bool, ) *Compensatingcontrolresponse`

NewCompensatingcontrolresponse instantiates a new Compensatingcontrolresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompensatingcontrolresponseWithDefaults

`func NewCompensatingcontrolresponseWithDefaults() *Compensatingcontrolresponse`

NewCompensatingcontrolresponseWithDefaults instantiates a new Compensatingcontrolresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Compensatingcontrolresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Compensatingcontrolresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Compensatingcontrolresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Compensatingcontrolresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Compensatingcontrolresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Compensatingcontrolresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Compensatingcontrolresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Compensatingcontrolresponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Compensatingcontrolresponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Compensatingcontrolresponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Compensatingcontrolresponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Compensatingcontrolresponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOwner

`func (o *Compensatingcontrolresponse) GetOwner() Reference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Compensatingcontrolresponse) GetOwnerOk() (*Reference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Compensatingcontrolresponse) SetOwner(v Reference)`

SetOwner sets Owner field to given value.


### GetSecondaryOwners

`func (o *Compensatingcontrolresponse) GetSecondaryOwners() []Reference`

GetSecondaryOwners returns the SecondaryOwners field if non-nil, zero value otherwise.

### GetSecondaryOwnersOk

`func (o *Compensatingcontrolresponse) GetSecondaryOwnersOk() (*[]Reference, bool)`

GetSecondaryOwnersOk returns a tuple with the SecondaryOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecondaryOwners

`func (o *Compensatingcontrolresponse) SetSecondaryOwners(v []Reference)`

SetSecondaryOwners sets SecondaryOwners field to given value.

### HasSecondaryOwners

`func (o *Compensatingcontrolresponse) HasSecondaryOwners() bool`

HasSecondaryOwners returns a boolean if a field has been set.

### GetType

`func (o *Compensatingcontrolresponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Compensatingcontrolresponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Compensatingcontrolresponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Compensatingcontrolresponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAction

`func (o *Compensatingcontrolresponse) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *Compensatingcontrolresponse) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *Compensatingcontrolresponse) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *Compensatingcontrolresponse) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetExpiration

`func (o *Compensatingcontrolresponse) GetExpiration() string`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Compensatingcontrolresponse) GetExpirationOk() (*string, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Compensatingcontrolresponse) SetExpiration(v string)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *Compensatingcontrolresponse) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetJustificationRequired

`func (o *Compensatingcontrolresponse) GetJustificationRequired() bool`

GetJustificationRequired returns the JustificationRequired field if non-nil, zero value otherwise.

### GetJustificationRequiredOk

`func (o *Compensatingcontrolresponse) GetJustificationRequiredOk() (*bool, bool)`

GetJustificationRequiredOk returns a tuple with the JustificationRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJustificationRequired

`func (o *Compensatingcontrolresponse) SetJustificationRequired(v bool)`

SetJustificationRequired sets JustificationRequired field to given value.


### GetWorkflowID

`func (o *Compensatingcontrolresponse) GetWorkflowID() string`

GetWorkflowID returns the WorkflowID field if non-nil, zero value otherwise.

### GetWorkflowIDOk

`func (o *Compensatingcontrolresponse) GetWorkflowIDOk() (*string, bool)`

GetWorkflowIDOk returns a tuple with the WorkflowID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowID

`func (o *Compensatingcontrolresponse) SetWorkflowID(v string)`

SetWorkflowID sets WorkflowID field to given value.

### HasWorkflowID

`func (o *Compensatingcontrolresponse) HasWorkflowID() bool`

HasWorkflowID returns a boolean if a field has been set.


