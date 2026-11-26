# Compensatingcontrolupdate

# Compensatingcontrolupdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The display name of the compensating control. | [optional] 
**Description** | Pointer to **string** | A human-readable description of the compensating control. | [optional] 
**Owner** | Pointer to [**Referenceinput**](referenceinput) |  | [optional] 
**SecondaryOwners** | Pointer to [**[]Referenceinput**](referenceinput) | References to additional identities or governance groups that share ownership of the compensating control (maximum 10). | [optional] 
**Type** | Pointer to **string** | The type of compensating control that determines how a violation is addressed. | [optional] 
**Action** | Pointer to **string** | The action performed when the compensating control is applied. | [optional] 
**Expiration** | Pointer to **string** | The duration after which the applied control expires, expressed as a duration string. | [optional] 
**JustificationRequired** | Pointer to **bool** | Indicates whether a justification is required when applying this control. | [optional] [default to false]
**WorkflowID** | Pointer to **string** | Workflow definition ID used when the control action is a workflow. | [optional] 

## Methods

### NewCompensatingcontrolupdate

`func NewCompensatingcontrolupdate() *Compensatingcontrolupdate`

NewCompensatingcontrolupdate instantiates a new Compensatingcontrolupdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompensatingcontrolupdateWithDefaults

`func NewCompensatingcontrolupdateWithDefaults() *Compensatingcontrolupdate`

NewCompensatingcontrolupdateWithDefaults instantiates a new Compensatingcontrolupdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Compensatingcontrolupdate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Compensatingcontrolupdate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Compensatingcontrolupdate) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Compensatingcontrolupdate) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Compensatingcontrolupdate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Compensatingcontrolupdate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Compensatingcontrolupdate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Compensatingcontrolupdate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOwner

`func (o *Compensatingcontrolupdate) GetOwner() Referenceinput`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Compensatingcontrolupdate) GetOwnerOk() (*Referenceinput, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Compensatingcontrolupdate) SetOwner(v Referenceinput)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Compensatingcontrolupdate) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetSecondaryOwners

`func (o *Compensatingcontrolupdate) GetSecondaryOwners() []Referenceinput`

GetSecondaryOwners returns the SecondaryOwners field if non-nil, zero value otherwise.

### GetSecondaryOwnersOk

`func (o *Compensatingcontrolupdate) GetSecondaryOwnersOk() (*[]Referenceinput, bool)`

GetSecondaryOwnersOk returns a tuple with the SecondaryOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecondaryOwners

`func (o *Compensatingcontrolupdate) SetSecondaryOwners(v []Referenceinput)`

SetSecondaryOwners sets SecondaryOwners field to given value.

### HasSecondaryOwners

`func (o *Compensatingcontrolupdate) HasSecondaryOwners() bool`

HasSecondaryOwners returns a boolean if a field has been set.

### GetType

`func (o *Compensatingcontrolupdate) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Compensatingcontrolupdate) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Compensatingcontrolupdate) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Compensatingcontrolupdate) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAction

`func (o *Compensatingcontrolupdate) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *Compensatingcontrolupdate) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *Compensatingcontrolupdate) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *Compensatingcontrolupdate) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetExpiration

`func (o *Compensatingcontrolupdate) GetExpiration() string`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Compensatingcontrolupdate) GetExpirationOk() (*string, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Compensatingcontrolupdate) SetExpiration(v string)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *Compensatingcontrolupdate) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetJustificationRequired

`func (o *Compensatingcontrolupdate) GetJustificationRequired() bool`

GetJustificationRequired returns the JustificationRequired field if non-nil, zero value otherwise.

### GetJustificationRequiredOk

`func (o *Compensatingcontrolupdate) GetJustificationRequiredOk() (*bool, bool)`

GetJustificationRequiredOk returns a tuple with the JustificationRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJustificationRequired

`func (o *Compensatingcontrolupdate) SetJustificationRequired(v bool)`

SetJustificationRequired sets JustificationRequired field to given value.

### HasJustificationRequired

`func (o *Compensatingcontrolupdate) HasJustificationRequired() bool`

HasJustificationRequired returns a boolean if a field has been set.

### GetWorkflowID

`func (o *Compensatingcontrolupdate) GetWorkflowID() string`

GetWorkflowID returns the WorkflowID field if non-nil, zero value otherwise.

### GetWorkflowIDOk

`func (o *Compensatingcontrolupdate) GetWorkflowIDOk() (*string, bool)`

GetWorkflowIDOk returns a tuple with the WorkflowID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowID

`func (o *Compensatingcontrolupdate) SetWorkflowID(v string)`

SetWorkflowID sets WorkflowID field to given value.

### HasWorkflowID

`func (o *Compensatingcontrolupdate) HasWorkflowID() bool`

HasWorkflowID returns a boolean if a field has been set.


