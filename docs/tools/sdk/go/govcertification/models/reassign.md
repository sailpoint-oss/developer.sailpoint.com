# Reassign

# Reassign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The ID of item or subject being reassigned. | 
**Type** | **ReassignEntityType** |  | 

## Methods

### NewReassign

`func NewReassign(id string, type_ ReassignEntityType, ) *Reassign`

NewReassign instantiates a new Reassign object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReassignWithDefaults

`func NewReassignWithDefaults() *Reassign`

NewReassignWithDefaults instantiates a new Reassign object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Reassign) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Reassign) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Reassign) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *Reassign) GetType() ReassignEntityType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Reassign) GetTypeOk() (*ReassignEntityType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Reassign) SetType(v ReassignEntityType)`

SetType sets Type field to given value.



