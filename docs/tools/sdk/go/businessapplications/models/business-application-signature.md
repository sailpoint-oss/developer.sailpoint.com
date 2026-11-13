# BusinessApplicationSignature

# BusinessApplicationSignature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Signature type, matched against the machine identity's subtype. Kept consistent with the machine identity subtype values. | 
**Name** | **string** | Connector signature value to match against the machine identity's `spBusinessApplication` connector attribute. | 

## Methods

### NewBusinessApplicationSignature

`func NewBusinessApplicationSignature(type_ string, name string, ) *BusinessApplicationSignature`

NewBusinessApplicationSignature instantiates a new BusinessApplicationSignature object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBusinessApplicationSignatureWithDefaults

`func NewBusinessApplicationSignatureWithDefaults() *BusinessApplicationSignature`

NewBusinessApplicationSignatureWithDefaults instantiates a new BusinessApplicationSignature object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *BusinessApplicationSignature) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BusinessApplicationSignature) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BusinessApplicationSignature) SetType(v string)`

SetType sets Type field to given value.


### GetName

`func (o *BusinessApplicationSignature) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BusinessApplicationSignature) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BusinessApplicationSignature) SetName(v string)`

SetName sets Name field to given value.



