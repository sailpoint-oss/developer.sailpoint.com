# Referenceresponse

# Referenceresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique identifier of the referenced object. | 
**Name** | Pointer to **string** | Optional display name when metadata resolves. Omitted when unknown or not resolvable. | [optional] [readonly] 
**Type** | **string** | The type of the referenced object. | 

## Methods

### NewReferenceresponse

`func NewReferenceresponse(id string, type_ string, ) *Referenceresponse`

NewReferenceresponse instantiates a new Referenceresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReferenceresponseWithDefaults

`func NewReferenceresponseWithDefaults() *Referenceresponse`

NewReferenceresponseWithDefaults instantiates a new Referenceresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Referenceresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Referenceresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Referenceresponse) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Referenceresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Referenceresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Referenceresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Referenceresponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *Referenceresponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Referenceresponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Referenceresponse) SetType(v string)`

SetType sets Type field to given value.



