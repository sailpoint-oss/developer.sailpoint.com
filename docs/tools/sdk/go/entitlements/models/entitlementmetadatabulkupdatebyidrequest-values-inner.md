# EntitlementmetadatabulkupdatebyidrequestValuesInner

# EntitlementmetadatabulkupdatebyidrequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **string** | The technical name of the metadata attribute. | 
**Values** | **[]string** | The values of the attribute to be updated. | 
**ObjectType** | Pointer to **string** | The type of the metadata attribute. Set to `custom` for custom metadata attributes, which require a suite license. | [optional] 

## Methods

### NewEntitlementmetadatabulkupdatebyidrequestValuesInner

`func NewEntitlementmetadatabulkupdatebyidrequestValuesInner(attribute string, values []string, ) *EntitlementmetadatabulkupdatebyidrequestValuesInner`

NewEntitlementmetadatabulkupdatebyidrequestValuesInner instantiates a new EntitlementmetadatabulkupdatebyidrequestValuesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementmetadatabulkupdatebyidrequestValuesInnerWithDefaults

`func NewEntitlementmetadatabulkupdatebyidrequestValuesInnerWithDefaults() *EntitlementmetadatabulkupdatebyidrequestValuesInner`

NewEntitlementmetadatabulkupdatebyidrequestValuesInnerWithDefaults instantiates a new EntitlementmetadatabulkupdatebyidrequestValuesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *EntitlementmetadatabulkupdatebyidrequestValuesInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *EntitlementmetadatabulkupdatebyidrequestValuesInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *EntitlementmetadatabulkupdatebyidrequestValuesInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetValues

`func (o *EntitlementmetadatabulkupdatebyidrequestValuesInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *EntitlementmetadatabulkupdatebyidrequestValuesInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *EntitlementmetadatabulkupdatebyidrequestValuesInner) SetValues(v []string)`

SetValues sets Values field to given value.


### SetValuesNil

`func (o *EntitlementmetadatabulkupdatebyidrequestValuesInner) SetValuesNil(b bool)`

 SetValuesNil sets the value for Values to be an explicit nil

### UnsetValues
`func (o *EntitlementmetadatabulkupdatebyidrequestValuesInner) UnsetValues()`

UnsetValues ensures that no value is present for Values, not even an explicit nil
### GetObjectType

`func (o *EntitlementmetadatabulkupdatebyidrequestValuesInner) GetObjectType() string`

GetObjectType returns the ObjectType field if non-nil, zero value otherwise.

### GetObjectTypeOk

`func (o *EntitlementmetadatabulkupdatebyidrequestValuesInner) GetObjectTypeOk() (*string, bool)`

GetObjectTypeOk returns a tuple with the ObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectType

`func (o *EntitlementmetadatabulkupdatebyidrequestValuesInner) SetObjectType(v string)`

SetObjectType sets ObjectType field to given value.

### HasObjectType

`func (o *EntitlementmetadatabulkupdatebyidrequestValuesInner) HasObjectType() bool`

HasObjectType returns a boolean if a field has been set.


