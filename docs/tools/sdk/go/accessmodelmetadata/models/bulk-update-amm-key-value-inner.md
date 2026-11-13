# BulkUpdateAMMKeyValueInner

# BulkUpdateAMMKeyValueInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **string** | the key of metadata attribute | 
**Values** | **[]string** | the values of attribute to be updated | 

## Methods

### NewBulkUpdateAMMKeyValueInner

`func NewBulkUpdateAMMKeyValueInner(attribute string, values []string, ) *BulkUpdateAMMKeyValueInner`

NewBulkUpdateAMMKeyValueInner instantiates a new BulkUpdateAMMKeyValueInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkUpdateAMMKeyValueInnerWithDefaults

`func NewBulkUpdateAMMKeyValueInnerWithDefaults() *BulkUpdateAMMKeyValueInner`

NewBulkUpdateAMMKeyValueInnerWithDefaults instantiates a new BulkUpdateAMMKeyValueInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *BulkUpdateAMMKeyValueInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *BulkUpdateAMMKeyValueInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *BulkUpdateAMMKeyValueInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetValues

`func (o *BulkUpdateAMMKeyValueInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *BulkUpdateAMMKeyValueInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *BulkUpdateAMMKeyValueInner) SetValues(v []string)`

SetValues sets Values field to given value.


### SetValuesNil

`func (o *BulkUpdateAMMKeyValueInner) SetValuesNil(b bool)`

 SetValuesNil sets the value for Values to be an explicit nil

### UnsetValues
`func (o *BulkUpdateAMMKeyValueInner) UnsetValues()`

UnsetValues ensures that no value is present for Values, not even an explicit nil

