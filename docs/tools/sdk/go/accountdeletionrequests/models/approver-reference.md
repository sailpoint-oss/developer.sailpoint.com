# ApproverReference

# ApproverReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of supported DtoType like IDENTITY, MACHINE_IDENTITY etc. | [optional] 
**Type** | Pointer to **string** | Type of Dto | [optional] 
**Name** | Pointer to **string** | Display name of DtoType like IDENTITY, MACHINE_IDENTITY etc | [optional] 

## Methods

### NewApproverReference

`func NewApproverReference() *ApproverReference`

NewApproverReference instantiates a new ApproverReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApproverReferenceWithDefaults

`func NewApproverReferenceWithDefaults() *ApproverReference`

NewApproverReferenceWithDefaults instantiates a new ApproverReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ApproverReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApproverReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApproverReference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApproverReference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *ApproverReference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApproverReference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApproverReference) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApproverReference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *ApproverReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApproverReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApproverReference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApproverReference) HasName() bool`

HasName returns a boolean if a field has been set.


