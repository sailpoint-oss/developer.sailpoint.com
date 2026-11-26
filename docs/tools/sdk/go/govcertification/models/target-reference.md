# TargetReference

# TargetReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **CertificationItemType** |  | [optional] 
**Id** | Pointer to **string** | Identifier of the target item. | [optional] 
**Name** | Pointer to **string** | Human-readable display name of identity. This is read-only | [optional] 

## Methods

### NewTargetReference

`func NewTargetReference() *TargetReference`

NewTargetReference instantiates a new TargetReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTargetReferenceWithDefaults

`func NewTargetReferenceWithDefaults() *TargetReference`

NewTargetReferenceWithDefaults instantiates a new TargetReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TargetReference) GetType() CertificationItemType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TargetReference) GetTypeOk() (*CertificationItemType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TargetReference) SetType(v CertificationItemType)`

SetType sets Type field to given value.

### HasType

`func (o *TargetReference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *TargetReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TargetReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TargetReference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TargetReference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *TargetReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TargetReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TargetReference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TargetReference) HasName() bool`

HasName returns a boolean if a field has been set.


