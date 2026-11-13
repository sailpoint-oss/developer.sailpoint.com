# AccessProfileListFilterDTOAmmKeyValuesInner

# AccessProfileListFilterDTOAmmKeyValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | Pointer to **string** | The technical name of the metadata attribute. A blank or missing value is rejected with a 400 error. | [optional] 
**Values** | Pointer to **[]string** | The attribute values used to filter access profiles. If the list is empty, results are filtered by attribute key only. | [optional] 

## Methods

### NewAccessProfileListFilterDTOAmmKeyValuesInner

`func NewAccessProfileListFilterDTOAmmKeyValuesInner() *AccessProfileListFilterDTOAmmKeyValuesInner`

NewAccessProfileListFilterDTOAmmKeyValuesInner instantiates a new AccessProfileListFilterDTOAmmKeyValuesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileListFilterDTOAmmKeyValuesInnerWithDefaults

`func NewAccessProfileListFilterDTOAmmKeyValuesInnerWithDefaults() *AccessProfileListFilterDTOAmmKeyValuesInner`

NewAccessProfileListFilterDTOAmmKeyValuesInnerWithDefaults instantiates a new AccessProfileListFilterDTOAmmKeyValuesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *AccessProfileListFilterDTOAmmKeyValuesInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *AccessProfileListFilterDTOAmmKeyValuesInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *AccessProfileListFilterDTOAmmKeyValuesInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *AccessProfileListFilterDTOAmmKeyValuesInner) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValues

`func (o *AccessProfileListFilterDTOAmmKeyValuesInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *AccessProfileListFilterDTOAmmKeyValuesInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *AccessProfileListFilterDTOAmmKeyValuesInner) SetValues(v []string)`

SetValues sets Values field to given value.

### HasValues

`func (o *AccessProfileListFilterDTOAmmKeyValuesInner) HasValues() bool`

HasValues returns a boolean if a field has been set.


