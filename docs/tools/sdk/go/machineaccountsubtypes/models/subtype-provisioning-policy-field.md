# SubtypeProvisioningPolicyField

# SubtypeProvisioningPolicyField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the attribute. | 
**Transform** | Pointer to **map[string]interface\{\}** | Transform to apply to the field. | [optional] 
**Attributes** | Pointer to **map[string]interface\{\}** | Attributes required for the transform. | [optional] 
**IsRequired** | Pointer to **bool** | Indicates whether the attribute is required. | [optional] [default to false]
**Type** | Pointer to **NullableString** | Type of the attribute. | [optional] 
**IsMultiValued** | Pointer to **bool** | Indicates whether the attribute is multi-valued. | [optional] [default to false]

## Methods

### NewSubtypeProvisioningPolicyField

`func NewSubtypeProvisioningPolicyField(name string, ) *SubtypeProvisioningPolicyField`

NewSubtypeProvisioningPolicyField instantiates a new SubtypeProvisioningPolicyField object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubtypeProvisioningPolicyFieldWithDefaults

`func NewSubtypeProvisioningPolicyFieldWithDefaults() *SubtypeProvisioningPolicyField`

NewSubtypeProvisioningPolicyFieldWithDefaults instantiates a new SubtypeProvisioningPolicyField object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SubtypeProvisioningPolicyField) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SubtypeProvisioningPolicyField) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SubtypeProvisioningPolicyField) SetName(v string)`

SetName sets Name field to given value.


### GetTransform

`func (o *SubtypeProvisioningPolicyField) GetTransform() map[string]interface{}`

GetTransform returns the Transform field if non-nil, zero value otherwise.

### GetTransformOk

`func (o *SubtypeProvisioningPolicyField) GetTransformOk() (*map[string]interface{}, bool)`

GetTransformOk returns a tuple with the Transform field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransform

`func (o *SubtypeProvisioningPolicyField) SetTransform(v map[string]interface{})`

SetTransform sets Transform field to given value.

### HasTransform

`func (o *SubtypeProvisioningPolicyField) HasTransform() bool`

HasTransform returns a boolean if a field has been set.

### SetTransformNil

`func (o *SubtypeProvisioningPolicyField) SetTransformNil(b bool)`

 SetTransformNil sets the value for Transform to be an explicit nil

### UnsetTransform
`func (o *SubtypeProvisioningPolicyField) UnsetTransform()`

UnsetTransform ensures that no value is present for Transform, not even an explicit nil
### GetAttributes

`func (o *SubtypeProvisioningPolicyField) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *SubtypeProvisioningPolicyField) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *SubtypeProvisioningPolicyField) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *SubtypeProvisioningPolicyField) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *SubtypeProvisioningPolicyField) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *SubtypeProvisioningPolicyField) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil
### GetIsRequired

`func (o *SubtypeProvisioningPolicyField) GetIsRequired() bool`

GetIsRequired returns the IsRequired field if non-nil, zero value otherwise.

### GetIsRequiredOk

`func (o *SubtypeProvisioningPolicyField) GetIsRequiredOk() (*bool, bool)`

GetIsRequiredOk returns a tuple with the IsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsRequired

`func (o *SubtypeProvisioningPolicyField) SetIsRequired(v bool)`

SetIsRequired sets IsRequired field to given value.

### HasIsRequired

`func (o *SubtypeProvisioningPolicyField) HasIsRequired() bool`

HasIsRequired returns a boolean if a field has been set.

### GetType

`func (o *SubtypeProvisioningPolicyField) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubtypeProvisioningPolicyField) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubtypeProvisioningPolicyField) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SubtypeProvisioningPolicyField) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *SubtypeProvisioningPolicyField) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *SubtypeProvisioningPolicyField) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetIsMultiValued

`func (o *SubtypeProvisioningPolicyField) GetIsMultiValued() bool`

GetIsMultiValued returns the IsMultiValued field if non-nil, zero value otherwise.

### GetIsMultiValuedOk

`func (o *SubtypeProvisioningPolicyField) GetIsMultiValuedOk() (*bool, bool)`

GetIsMultiValuedOk returns a tuple with the IsMultiValued field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMultiValued

`func (o *SubtypeProvisioningPolicyField) SetIsMultiValued(v bool)`

SetIsMultiValued sets IsMultiValued field to given value.

### HasIsMultiValued

`func (o *SubtypeProvisioningPolicyField) HasIsMultiValued() bool`

HasIsMultiValued returns a boolean if a field has been set.


