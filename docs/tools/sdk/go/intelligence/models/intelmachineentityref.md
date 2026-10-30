# Intelmachineentityref

# Intelmachineentityref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY). | 
**Id** | **string** | Referenced object identifier. | 
**Name** | **string** | Display name for the referenced identity or entity. | 
**Email** | Pointer to **string** | Email for authorized human holders when available upstream. | [optional] 

## Methods

### NewIntelmachineentityref

`func NewIntelmachineentityref(type_ string, id string, name string, ) *Intelmachineentityref`

NewIntelmachineentityref instantiates a new Intelmachineentityref object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelmachineentityrefWithDefaults

`func NewIntelmachineentityrefWithDefaults() *Intelmachineentityref`

NewIntelmachineentityrefWithDefaults instantiates a new Intelmachineentityref object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Intelmachineentityref) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Intelmachineentityref) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Intelmachineentityref) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *Intelmachineentityref) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Intelmachineentityref) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Intelmachineentityref) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Intelmachineentityref) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Intelmachineentityref) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Intelmachineentityref) SetName(v string)`

SetName sets Name field to given value.


### GetEmail

`func (o *Intelmachineentityref) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Intelmachineentityref) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Intelmachineentityref) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Intelmachineentityref) HasEmail() bool`

HasEmail returns a boolean if a field has been set.


