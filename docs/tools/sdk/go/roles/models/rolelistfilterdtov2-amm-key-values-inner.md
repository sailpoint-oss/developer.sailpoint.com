# Rolelistfilterdtov2AmmKeyValuesInner

# Rolelistfilterdtov2AmmKeyValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **string** | attribute key of a metadata. A blank value is rejected with a 400 error. | 
**Values** | Pointer to **[]string** | A list of attribute key names to filter roles. If the values is empty, will only filter by attribute key. | [optional] [default to []]

## Methods

### NewRolelistfilterdtov2AmmKeyValuesInner

`func NewRolelistfilterdtov2AmmKeyValuesInner(attribute string, ) *Rolelistfilterdtov2AmmKeyValuesInner`

NewRolelistfilterdtov2AmmKeyValuesInner instantiates a new Rolelistfilterdtov2AmmKeyValuesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolelistfilterdtov2AmmKeyValuesInnerWithDefaults

`func NewRolelistfilterdtov2AmmKeyValuesInnerWithDefaults() *Rolelistfilterdtov2AmmKeyValuesInner`

NewRolelistfilterdtov2AmmKeyValuesInnerWithDefaults instantiates a new Rolelistfilterdtov2AmmKeyValuesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *Rolelistfilterdtov2AmmKeyValuesInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Rolelistfilterdtov2AmmKeyValuesInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Rolelistfilterdtov2AmmKeyValuesInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetValues

`func (o *Rolelistfilterdtov2AmmKeyValuesInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Rolelistfilterdtov2AmmKeyValuesInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Rolelistfilterdtov2AmmKeyValuesInner) SetValues(v []string)`

SetValues sets Values field to given value.

### HasValues

`func (o *Rolelistfilterdtov2AmmKeyValuesInner) HasValues() bool`

HasValues returns a boolean if a field has been set.


