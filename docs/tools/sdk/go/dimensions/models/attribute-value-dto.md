# AttributeValueDTO

# AttributeValueDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | Technical name of the Attribute value. This is unique and cannot be changed after creation. Allowed characters are letters, numbers, dashes (-), and underscores (_); the value cannot start or end with a dash or underscore. | [optional] 
**Name** | Pointer to **string** | The display name of the Attribute value. Allowed characters are letters, numbers, whitespace, and the following special characters: . / | , ( ) & _ - | [optional] 
**Status** | Pointer to **string** | The status of the Attribute value. | [optional] 
**Type** | Pointer to **NullableString** | Indicates how this Attribute value was created. static values are pre-defined and created directly through this API. adhoc values are created dynamically through an internal service-to-service flow when the parent Attribute has isAdhoc set to true, and cannot be created directly through the public create-value API. | [optional] 

## Methods

### NewAttributeValueDTO

`func NewAttributeValueDTO() *AttributeValueDTO`

NewAttributeValueDTO instantiates a new AttributeValueDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributeValueDTOWithDefaults

`func NewAttributeValueDTOWithDefaults() *AttributeValueDTO`

NewAttributeValueDTOWithDefaults instantiates a new AttributeValueDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *AttributeValueDTO) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *AttributeValueDTO) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *AttributeValueDTO) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *AttributeValueDTO) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetName

`func (o *AttributeValueDTO) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AttributeValueDTO) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AttributeValueDTO) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AttributeValueDTO) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatus

`func (o *AttributeValueDTO) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AttributeValueDTO) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AttributeValueDTO) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AttributeValueDTO) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *AttributeValueDTO) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttributeValueDTO) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttributeValueDTO) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AttributeValueDTO) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *AttributeValueDTO) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *AttributeValueDTO) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil

