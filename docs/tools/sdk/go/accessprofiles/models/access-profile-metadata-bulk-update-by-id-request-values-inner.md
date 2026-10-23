# AccessProfileMetadataBulkUpdateByIdRequestValuesInner

# AccessProfileMetadataBulkUpdateByIdRequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **string** | The technical name of the metadata attribute. | 
**Values** | **[]string** | The values of the attribute to be updated. | 
**ObjectType** | Pointer to **string** | The type of the metadata attribute. Set to `custom` for custom metadata attributes, which require a suite license. | [optional] 

## Methods

### NewAccessProfileMetadataBulkUpdateByIdRequestValuesInner

`func NewAccessProfileMetadataBulkUpdateByIdRequestValuesInner(attribute string, values []string, ) *AccessProfileMetadataBulkUpdateByIdRequestValuesInner`

NewAccessProfileMetadataBulkUpdateByIdRequestValuesInner instantiates a new AccessProfileMetadataBulkUpdateByIdRequestValuesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileMetadataBulkUpdateByIdRequestValuesInnerWithDefaults

`func NewAccessProfileMetadataBulkUpdateByIdRequestValuesInnerWithDefaults() *AccessProfileMetadataBulkUpdateByIdRequestValuesInner`

NewAccessProfileMetadataBulkUpdateByIdRequestValuesInnerWithDefaults instantiates a new AccessProfileMetadataBulkUpdateByIdRequestValuesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *AccessProfileMetadataBulkUpdateByIdRequestValuesInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *AccessProfileMetadataBulkUpdateByIdRequestValuesInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *AccessProfileMetadataBulkUpdateByIdRequestValuesInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetValues

`func (o *AccessProfileMetadataBulkUpdateByIdRequestValuesInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *AccessProfileMetadataBulkUpdateByIdRequestValuesInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *AccessProfileMetadataBulkUpdateByIdRequestValuesInner) SetValues(v []string)`

SetValues sets Values field to given value.


### SetValuesNil

`func (o *AccessProfileMetadataBulkUpdateByIdRequestValuesInner) SetValuesNil(b bool)`

 SetValuesNil sets the value for Values to be an explicit nil

### UnsetValues
`func (o *AccessProfileMetadataBulkUpdateByIdRequestValuesInner) UnsetValues()`

UnsetValues ensures that no value is present for Values, not even an explicit nil
### GetObjectType

`func (o *AccessProfileMetadataBulkUpdateByIdRequestValuesInner) GetObjectType() string`

GetObjectType returns the ObjectType field if non-nil, zero value otherwise.

### GetObjectTypeOk

`func (o *AccessProfileMetadataBulkUpdateByIdRequestValuesInner) GetObjectTypeOk() (*string, bool)`

GetObjectTypeOk returns a tuple with the ObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectType

`func (o *AccessProfileMetadataBulkUpdateByIdRequestValuesInner) SetObjectType(v string)`

SetObjectType sets ObjectType field to given value.

### HasObjectType

`func (o *AccessProfileMetadataBulkUpdateByIdRequestValuesInner) HasObjectType() bool`

HasObjectType returns a boolean if a field has been set.


