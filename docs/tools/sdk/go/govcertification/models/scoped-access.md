# ScopedAccess

# ScopedAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **ScopedAccessType** |  | [optional] 
**Id** | Pointer to **string** | Unique identifier of the access item. | [optional] 
**Name** | Pointer to **string** | Name of the access item. | [optional] 
**Description** | Pointer to **string** | Description of the access item. | [optional] 
**SourceName** | Pointer to **string** | Name of the source that provides this access. | [optional] 
**Privileged** | Pointer to **bool** | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the access item is privileged. Retained for backward compatibility. | [optional] [default to false]
**AttributeName** | Pointer to **string** | Name of the attribute that defines this access. | [optional] 
**AttributeValue** | Pointer to **string** | Value of the attribute that defines this access. | [optional] 
**HasDataAccess** | Pointer to **bool** | Indicates whether this access grants data access. | [optional] [default to false]

## Methods

### NewScopedAccess

`func NewScopedAccess() *ScopedAccess`

NewScopedAccess instantiates a new ScopedAccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScopedAccessWithDefaults

`func NewScopedAccessWithDefaults() *ScopedAccess`

NewScopedAccessWithDefaults instantiates a new ScopedAccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ScopedAccess) GetType() ScopedAccessType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ScopedAccess) GetTypeOk() (*ScopedAccessType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ScopedAccess) SetType(v ScopedAccessType)`

SetType sets Type field to given value.

### HasType

`func (o *ScopedAccess) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ScopedAccess) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ScopedAccess) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ScopedAccess) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ScopedAccess) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ScopedAccess) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ScopedAccess) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ScopedAccess) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ScopedAccess) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *ScopedAccess) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ScopedAccess) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ScopedAccess) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ScopedAccess) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSourceName

`func (o *ScopedAccess) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *ScopedAccess) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *ScopedAccess) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *ScopedAccess) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetPrivileged

`func (o *ScopedAccess) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *ScopedAccess) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *ScopedAccess) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *ScopedAccess) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetAttributeName

`func (o *ScopedAccess) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *ScopedAccess) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *ScopedAccess) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *ScopedAccess) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetAttributeValue

`func (o *ScopedAccess) GetAttributeValue() string`

GetAttributeValue returns the AttributeValue field if non-nil, zero value otherwise.

### GetAttributeValueOk

`func (o *ScopedAccess) GetAttributeValueOk() (*string, bool)`

GetAttributeValueOk returns a tuple with the AttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValue

`func (o *ScopedAccess) SetAttributeValue(v string)`

SetAttributeValue sets AttributeValue field to given value.

### HasAttributeValue

`func (o *ScopedAccess) HasAttributeValue() bool`

HasAttributeValue returns a boolean if a field has been set.

### GetHasDataAccess

`func (o *ScopedAccess) GetHasDataAccess() bool`

GetHasDataAccess returns the HasDataAccess field if non-nil, zero value otherwise.

### GetHasDataAccessOk

`func (o *ScopedAccess) GetHasDataAccessOk() (*bool, bool)`

GetHasDataAccessOk returns a tuple with the HasDataAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasDataAccess

`func (o *ScopedAccess) SetHasDataAccess(v bool)`

SetHasDataAccess sets HasDataAccess field to given value.

### HasHasDataAccess

`func (o *ScopedAccess) HasHasDataAccess() bool`

HasHasDataAccess returns a boolean if a field has been set.


